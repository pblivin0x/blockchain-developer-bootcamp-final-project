pragma solidity 0.6.10;

import { Address } from "@openzeppelin/contracts/utils/Address.sol";
import { ISetToken } from "../interfaces/ISetToken.sol";
import { IStreamingFeeModule } from "../interfaces/IStreamingFeeModule.sol";
import { ITradeModule } from "../interfaces/ITradeModule.sol";
import { PreciseUnitMath } from "../lib/PreciseUnitMath.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract Manager {
    using Address for address;
    using SafeMath for uint256;
    using PreciseUnitMath for uint256;

    /* ============ Events ============ */

    /* ============ Modifiers ============ */

    /* ============ State Variables ============ */

    /* ============ Constructor ============ */

    /* ============ External Functions ============ */
}