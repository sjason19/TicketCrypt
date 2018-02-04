pragma solidity ^0.4.18;

import "./ownable.sol";

contract TicketCrypt is Ownable {

  event PurchaseTicket(uint _id, address _from, uint amount);

  string name;
  address public eventHost;
  Ticket[] public tickets;
  TicketSales[] public sales;

  struct Ticket {
    string name;
    uint16 price;
    uint32 available;
    uint32 sold;

    mapping (address => uint) ticketToOwner;
  }

  struct TicketSales {
    address owner;
    bool saleType;
    uint16 price;
    uint ticketID;
  }

  function _createEvent(string _name, uint16 _price, uint32 available) internal {
    eventHost = msg.sender;
    name = _name;
    Ticket tic = ticket[tickets.length];
    tic.price = _price;
    tic.available = _available;
    t.sales = 0;
  }


}
