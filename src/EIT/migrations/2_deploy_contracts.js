const EIT = artifacts.require("EthernaInvestorToken");

module.exports = function(deployer) {
  deployer.deploy(EIT);
};
