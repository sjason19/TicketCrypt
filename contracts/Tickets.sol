pragma solidity ^0.4.11;

contract TicketFactory {

  event NewTicket(uint ticketId, string event, uint ticketHash);

  uint ticketEvent;
  uint numberOfTickets;
  uint maxAmountOfGaTickets = 100;
  uint maxAmountOfVIPTickets = 100;
  uint totalTicketsPurchase;
  uint expiryDate;

   address owner;
   function Tickets(){
      owner = msg.sender;
   }
   function kill(){
      if(msg.sender == owner)
         selfdestruct(owner);
   }
}


struct Player {
   uint amountBet;
   uint numberSelected;
}

mapping(address => Player) playerInfo;
