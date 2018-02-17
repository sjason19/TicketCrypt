const tc = require('truffle-contract')
const detectNetwork = require('web3-detect-network')

const TicketCrypt = require('../build/contracts/TicketCrypt.json')

let contract = null;

class Contract {
  constructor() {
    this.instance = null
    this.account = null
  }
}
