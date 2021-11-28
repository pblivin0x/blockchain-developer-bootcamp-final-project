// SPDX-License-Identifier: Apache License, Version 2.0
// Inspired by ICManager contracts in https://github.com/SetProtocol/index-coop-smart-contracts/blob/master/contracts/manager/ICManager.sol
// Major changes 
// Include custom ITradeModule and trade functionality
// Exclude IIndexModule and rebalancing functionality 
// NatSpec format documentation
pragma solidity 0.6.10;

import { Address } from "@openzeppelin/contracts/utils/Address.sol";
import { ISetToken } from "../interfaces/ISetToken.sol";
import { IStreamingFeeModule } from "../interfaces/IStreamingFeeModule.sol";
import { ITradeModule } from "../interfaces/ITradeModule.sol";
import { MutualUpgrade } from "../lib/MutualUpgrade.sol";
import { PreciseUnitMath } from "../lib/PreciseUnitMath.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

/// @title Social trading smart contract manager for SetToken
/// @author pblivin0x
/// @notice Manage a SetToken and allow a Social Trader to trade for investors
contract SocialTradingManager is MutualUpgrade {
    using Address for address;
    using SafeMath for uint256;
    using PreciseUnitMath for uint256;

    /* ============ Events ============ */

    /// @notice Event when fees are accrued 
    /// @notice Specifies total fees, and operator/methodologist split 
    event FeesAccrued(
        uint256 _totalFees,
        uint256 _operatorTake,
        uint256 _methodologistTake
    );

    /// @notice Event when methodologist is changed
    /// @notice Specifies the old methodologist and the new methodologist
    event MethodologistChanged(
        address _oldMethodologist,
        address _newMethodologist
    );

    /// @notice Event when operator is changed
    /// @notice Specifies the old operator and the new operator
    event OperatorChanged(
        address _oldOperator,
        address _newOperator
    );

    /* ============ Modifiers ============ */

    /**
     * Throws if the sender is not the SetToken operator
     */
    modifier onlyOperator() {
        require(msg.sender == operator, "Must be operator");
        _;
    }

    /**
     * Throws if the sender is not the SetToken methodologist
     */
    modifier onlyMethodologist() {
        require(msg.sender == methodologist, "Must be methodologist");
        _;
    }

    /* ============ State Variables ============ */

    /// @notice Instance of SetToken
    ISetToken public setToken;

    /// @notice Address of TradeModule for executing DEX trades
    ITradeModule public tradeModule;

    /// @notice Address of StreamingFeeModule
    IStreamingFeeModule public feeModule;

    /// @notice Address of operator 
    /// @notice operator typically executes manager only functions on Set Protocol modules
    address public operator;

    /// @notice Address of methodologist
    /// @notice methodologist handles streaming fee 
    address public methodologist;

    /// @notice Operator and Methodologist streaming fee split
    /// @notice Percent in 1e18 of streamingFees sent to operator
    uint256 public operatorFeeSplit;

    /* ============ Constructor ============ */

    constructor(
        ISetToken _setToken,
        ITradeModule _tradeModule,
        IStreamingFeeModule _feeModule,
        address _operator,
        address _methodologist,
        uint256 _operatorFeeSplit
    )
        public
    {
        require(
            _operatorFeeSplit <= PreciseUnitMath.preciseUnit(),
            "Operator Fee Split must be less than 1e18"
        );

        setToken = _setToken;
        tradeModule = _tradeModule;
        feeModule = _feeModule;
        operator = _operator;
        methodologist = _methodologist;
        operatorFeeSplit = _operatorFeeSplit;
    }

    /* ============ External Functions ============ */

    /**
     * @notice Trade underlying collateral
     * @notice Executes a trade on a supported DEX. Only callable by the operator. 
     * @dev Although the SetToken units are passed in for the send and receive quantities, the total quantity
     * sent and received is the quantity of SetToken units multiplied by the SetToken totalSupply.
     *
     * @param _setToken             Instance of the SetToken to trade
     * @param _exchangeName         Human readable name of the exchange in the integrations registry
     * @param _sendToken            Address of the token to be sent to the exchange
     * @param _sendQuantity         Units of token in SetToken sent to the exchange
     * @param _receiveToken         Address of the token that will be received from the exchange
     * @param _minReceiveQuantity   Min units of token in SetToken to be received from the exchange
     * @param _data                 Arbitrary bytes to be used to construct trade call data
     */
    function trade(
        ISetToken _setToken,
        string memory _exchangeName,
        address _sendToken,
        uint256 _sendQuantity,
        address _receiveToken,
        uint256 _minReceiveQuantity,
        bytes memory _data
    ) external onlyOperator {
        tradeModule.trade(_setToken, _exchangeName, _sendToken, _sendQuantity, _receiveToken, _minReceiveQuantity, _data);
    }

    /// @notice Accrue fee and distribute
    /// @notice Transfers tokens to operator and methodologist based on streaming fee split
    function accrueFeeAndDistribute() public {
        feeModule.accrueFee(setToken);

        uint256 setTokenBalance = setToken.balanceOf(address(this));

        uint256 operatorTake = setTokenBalance.preciseMul(operatorFeeSplit);
        uint256 methodologistTake = setTokenBalance.sub(operatorTake);

        setToken.transfer(operator, operatorTake);

        setToken.transfer(methodologist, methodologistTake);

        emit FeesAccrued(setTokenBalance, operatorTake, methodologistTake);
    }

    /**
     * @notice Update the SetToken manager address. 
     * @notice Operator and Methodologist must each call this function to execute the update. 
     * @param _newManager           New manager address
     */
    function updateManager(address _newManager) external mutualUpgrade(operator, methodologist) {
        require(_newManager != address(0), "Zero address not valid");
        setToken.setManager(_newManager);
    }

    /**
     * @notice Add a new module to the SetToken.
     * @notice Operator only
     * @param _module           New module to add
     */
    function addModule(address _module) external onlyOperator {
        setToken.addModule(_module);
    }

    /**
     * @notice Interact with a module registered on the SetToken 
     * @notice Operator only. Cannot be used to call functions in the
     * fee module, due to ability to bypass methodologist permissions to update streaming fee.
     * @param _module           Module to interact with
     * @param _data             Byte data of function to call in module
     */
    function interactModule(address _module, bytes calldata _data) external onlyOperator {
        require(_module != address(feeModule), "Must not be fee module");

        // Invoke call to module, assume value will always be 0
        _module.functionCallWithValue(_data, 0);
    }

    /**
     * @notice Remove a new module from the SetToken.
     * @notice Operator only
     * @param _module           Module to remove
     */
    function removeModule(address _module) external onlyOperator {
        setToken.removeModule(_module);
    }

    /**
     * @notice Update the streaming fee for the SetToken.
     * @notice Methodologist only
     * @param _newFee           New streaming fee percentage
     */
    function updateStreamingFee(uint256 _newFee) external onlyMethodologist {
        feeModule.updateStreamingFee(setToken, _newFee);
    }

    /**
     * @notice Update the fee recipient address. 
     * @notice Operator and Methodologist must each call this function to execute the update.
     * @param _newFeeRecipient           New fee recipient address
     */
    function updateFeeRecipient(address _newFeeRecipient) external mutualUpgrade(operator, methodologist) {
        feeModule.updateFeeRecipient(setToken, _newFeeRecipient);
    }

    /**
     * @notice Update fee split between operator and methodologist
     * @notice Operator and Methodologist must each call this function to execute the update.
     * @param _newFeeSplit           New fee split percentage
     */
    function updateFeeSplit(uint256 _newFeeSplit) external mutualUpgrade(operator, methodologist) {
        require(
            _newFeeSplit <= PreciseUnitMath.preciseUnit(),
            "Operator Fee Split must be less than 1e18"
        );

        // Accrue fee to operator and methodologist prior to new fee split
        accrueFeeAndDistribute();
        operatorFeeSplit = _newFeeSplit;
    }

    /**
     * @notice Update the trade module
     * @notice Operator only
     * @param _newTradeModule           New trade module
     */
    function updateTradeModule(ITradeModule _newTradeModule) external onlyOperator {
        tradeModule = _newTradeModule;
    }

    /**
     * @notice Update the methodologist address
     * @notice Methodologist only
     * @param _newMethodologist           New methodologist address
     */
    function updateMethodologist(address _newMethodologist) external onlyMethodologist {
        emit MethodologistChanged(methodologist, _newMethodologist);

        methodologist = _newMethodologist;
    }

    /**
     * @notice Update the operator address
     * @notice Operator only
     * @param _newOperator           New operator address
     */
    function updateOperator(address _newOperator) external onlyOperator {
        emit OperatorChanged(operator, _newOperator);

        operator = _newOperator;
    }
}