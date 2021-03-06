pragma solidity ^0.4.18;

import "./ownable.sol";

contract TicketCrypt is Ownable {

  string eventName;
  address public eventHost;

  // using this variable for testing
  uint ticketData;

  struct Ticket {
    string name;                                    // Ticket tier/description (Tier 1, Tier 2 etc..)
    uint price;                                     // Ticket price
    uint32 available;                               // Available tickets
    uint32 sold;                                    // Tickets sold
    mapping (address => uint) ticketToOwner;        // Maps the tickets to the contract owner
  }

  Ticket[] public tickets;

  function _createEvent(string _name, uint _price, uint32 _available) internal {
    eventName = _name;
    Ticket storage t = tickets[tickets.length];
    t.name = _name;
    t.price = _price;
    t.available = _available;
    t.sold = 0;
  }

  function getEvent() public view returns (string) {
    return eventName;
  }

  // using these functions for testing
  function set(uint x) public {
    ticketData = x;
  }

  function get() public view returns (uint) {
    return ticketData;
  }
}
