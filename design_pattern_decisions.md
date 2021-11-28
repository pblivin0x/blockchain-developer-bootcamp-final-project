# Design Pattern Decisions

## Inheritance and Interfaces

The `SocialTradingManager` contract inherits from the `MutualUpgrade` contract, which allows the `updateManager`, `updateFeeRecipient`, and `updateFeeSplit` functions to require calls from both the `operator` and `methodologist`. 

The `SocialTradingManager` contract also uses interfaces `ISetToken`, `IStreamingFeeModule`, and `ITradeModule` to interact with deployed Set Protocol contracts. 

## Access Control Design Patterns

The `onlyOperator` and `onlyMethodologist` function modifiers allow the `operator` to control Set Protocol contract interactions and the `methodologist` to control streaming fee module interactions. 