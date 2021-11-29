var SocialTradingManager = artifacts.require("SocialTradingManager");

const getErrorObj = (obj = {}) => {
  const txHash = Object.keys(obj)[0];
  return obj[txHash];
};

contract("SocialTradingManager", function(accounts) {

  // Deploy instance of SocialTradingManager where accounts[0] is operator and accounts[1] is methodologist
  beforeEach(async () => {
    instance = await SocialTradingManager.new('0xAa22BCa283b9Fd4bDd2c693a7930b45C00096d63',
                                              '0xC93c8CDE0eDf4963ea1eea156099B285A945210a',
                                              '0xE038E59DEEC8657d105B6a3Fb5040b3a6189Dd51',
                                               accounts[0],
                                               accounts[1],
                                               "100000000000000000");
  });

  // Verify that the Methodologist can set a new methodologist address
  it("Methodologist should be able to change methodologist", async () => {
    await instance.updateMethodologist(accounts[2], {from: accounts[1]});
    const newMethodologist = await instance.methodologist();
    assert.strictEqual(newMethodologist, accounts[2]);
  });

  // Verify that the Operator is unable to set a new methodologist address
  it("Operator should not be able to change methodologist", async () => {
    try {
      await instance.updateMethodologist(accounts[2], {from: accounts[0]});
    } catch (e) {
      const { error, reason } = getErrorObj(e.data);
      assert.equal(error, "revert");
      assert.equal(reason, "Must be methodologist");
    }
  });

  // Verify that the Operator can set a new operator address
  it("Operator should be able to change operator", async () => {
    await instance.updateOperator(accounts[2], {from: accounts[0]});
    const newOperator = await instance.operator();
    assert.strictEqual(newOperator, accounts[2]);
  });

  // Verify that the Methodologist is unable to set a new operator address
  it("Methodologist should not be able to change operator", async () => {
    try {
      await instance.updateOperator(accounts[2], {from: accounts[1]});
    } catch (e) {
      const { error, reason } = getErrorObj(e.data);
      assert.equal(error, "revert");
      assert.equal(reason, "Must be operator");
    }
  });

  // Verify that the Operator can update the trade module address
  it("Operator should be able to update trade module", async () => {
    await instance.updateTradeModule(accounts[2], {from: accounts[0]});
    const newTradeModule = await instance.tradeModule();
    assert.strictEqual(newTradeModule, accounts[2]);
  });

});