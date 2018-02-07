var TicketCrypt = artifacts.require("./TicketCrypt.sol");

module.exports = function(deployer) {
  deployer.deploy(TicketCrypt);
};
