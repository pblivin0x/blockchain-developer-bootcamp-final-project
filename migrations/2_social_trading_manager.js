const SocialTradingManager = artifacts.require("SocialTradingManager");

module.exports = function (deployer) {

  // Kovan network addresses
  const setTokenAddress = '0xAa22BCa283b9Fd4bDd2c693a7930b45C00096d63';
  const tradeModuleAddress = '0xC93c8CDE0eDf4963ea1eea156099B285A945210a';
  const streamingFeeModuleAddress = '0xE038E59DEEC8657d105B6a3Fb5040b3a6189Dd51';
  const operator = '0xD20673d9c07BaA5400B9DF075C3077DfE75A1a1F';
  const methodologist = '0xD20673d9c07BaA5400B9DF075C3077DfE75A1a1F';
  const operatorFeeSplit = "100000000000000000";
  
  deployer.deploy(SocialTradingManager, 
                  setTokenAddress, 
                  tradeModuleAddress, 
                  streamingFeeModuleAddress,
                  operator,
                  methodologist,
                  operatorFeeSplit);
};