pragma solidity ^0.4.18;

import "./TicketCrypt.sol";

contract TicketTransactions is TicketCrypt {

    // Log ticket sale event
    event PurchaseTicket(uint _id, address _from, uint _price);

    struct TicketSales {
      address owner;                          // Owner of the sale
      bool saleType;                          // Buy or Sell Ticket (Buy => true, Sell => false)
      uint16 price;                           // Price the ticket is listed for
      uint ticketID;                          // Type of ticket being sold
    }

    TicketSales[] public sales;

    modifier checkAvailability(uint _ticketId) {
      Ticket storage t = tickets[_ticketId];
      require(t.sold >= t.available || t.price > msg.value);
      _;
    }

    function purchaseTicket(uint _ticketId) external payable checkAvailability(_ticketId) {
      Ticket storage t = tickets[_ticketId];
      t.ticketToOwner[msg.sender] = msg.value;
      t.sold++;
      PurchaseTicket(_ticketId, msg.sender, msg.value);
    }


}
