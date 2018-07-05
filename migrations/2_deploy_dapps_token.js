var OreOreCoin = artifacts.require("./OreOreCoin.sol");

module.exports = function(deployer) {
    var _name = "OreOreCoin";
    var _symbol = "oc";
    var _decimals = 0;
    var _supply = 10000;
    deployer.deploy(OreOreCoin, _supply, _name, _symbol, _decimals);
}