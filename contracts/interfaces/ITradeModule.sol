pragma solidity ^0.6.10;
pragma experimental "ABIEncoderV2";

import { ISetToken } from "./ISetToken.sol";
import { IExchangeAdapter } from "./IExchangeAdapter.sol";

interface ITradeModule {
    struct TradeInfo {
        ISetToken setToken;                             // Instance of SetToken
        IExchangeAdapter exchangeAdapter;               // Instance of exchange adapter contract
        address sendToken;                              // Address of token being sold
        address receiveToken;                           // Address of token being bought
        uint256 setTotalSupply;                         // Total supply of SetToken in Precise Units (10^18)
        uint256 totalSendQuantity;                      // Total quantity of sold token (position unit x total supply)
        uint256 totalMinReceiveQuantity;                // Total minimum quantity of token to receive back
        uint256 preTradeSendTokenBalance;               // Total initial balance of token being sold
        uint256 preTradeReceiveTokenBalance;            // Total initial balance of token being bought
    }

    function initialize(ISetToken _setToken) external;
    function trade(ISetToken _setToken, 
                   string memory _exchangeName, 
                   address _sendToken, 
                   uint256 _sendQuantity,
                   address _receiveToken,
                   uint256 _minReceiveQuantity,
                   bytes memory _data
    ) external;
}