// SPDX-License-Identifier: Apache License, Version 2.0
// Code from Set Protocol https://github.com/SetProtocol/set-protocol-v2/blob/master/contracts/interfaces/IExchangeAdapter.sol
// No changes
pragma solidity 0.6.10;

interface IExchangeAdapter {
    function getSpender() external view returns(address);
    function getTradeCalldata(
        address _fromToken,
        address _toToken,
        address _toAddress,
        uint256 _fromQuantity,
        uint256 _minToQuantity,
        bytes memory _data
    )
        external
        view
        returns (address, uint256, bytes memory);
}