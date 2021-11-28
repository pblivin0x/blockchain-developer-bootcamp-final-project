# Avoiding Common Attacks

## SWC-103 Floating Pragma

The compiler pragma `0.6.10` is used in the `SocialTradingManager` contract. This is to be consistent with deployed Set Protocol contracts and avoid potential danger from newer compiler versions.  

## SWC-123 Requirement Violation

Function modifiers `onlyOperator` and `onlyMethodologist` use `require` statements to validate external caller permissions before interaction with Set Protocol modules. 