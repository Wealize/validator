const ChecksumStorage = artifacts.require("ChecksumStorage");

module.exports = function(deployer) {
  deployer.deploy(ChecksumStorage);
};
