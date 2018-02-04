pragma solidity ^0.4.18;

import "./TicketTransactions.sol";

contract TicketHelper is TicketTransactions {

  modifier onlyOwner() {
  require(msg.sender == eventHost);
  _;
  }

  function changeTicketDetails(uint _ticketId, string _name, uint32 _amount) external onlyOwner() {
    Ticket storage t = tickets[_ticketId];
    if (t.sold > _amount) {
      return;
    }
    t.name = _name;
    t.available = _amount;
  }

    function transferTicket(uint _ticketId, address newAddress) public {
      Ticket storage t = tickets[_ticketId];
      if(t.ticketToOwner[msg.sender] > 0) {
        uint cost = t.ticketToOwner[msg.sender];
        t.ticketToOwner[msg.sender] = 0;
        t.ticketToOwner[newAddress] = cost;
      }
    }
}
