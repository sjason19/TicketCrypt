pragma solidity ^0.4.11;

uint ticketEvent;
uint numberOfTickets;
uint maxAmountOfGaTickets = 100;
uint maxAmountOfVIPTickets = 100;
uint totalTicketsPurchase;
uint expiryDate;


contract Tickets {
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
