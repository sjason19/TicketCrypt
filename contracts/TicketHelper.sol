pragma solidity ^0.4.18;

import "./TicketTransactions.sol";

contract TicketHelper is TicketTransactions {

  modifier ownerOf() {
  require(msg.sender == eventHost);
  _;
}

  function

}
