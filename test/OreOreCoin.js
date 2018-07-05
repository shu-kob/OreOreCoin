var OreOreCoin = artifacts.require("./OreOreCoin.sol");
contract('OreOreCoin', function(accounts) {
    it ("should put 10000 OreOreCoin in the first account", function() {
        return OreOreCoin.deployed().then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
        });
    });
});