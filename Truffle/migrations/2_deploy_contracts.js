const Marketplace = artifacts.require("marketPlaceBoilerPlate");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
};
