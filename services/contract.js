const tc = require('truffle-contract')
const detectNetwork = require('web3-detect-network')

const TicketCrypt = require('../build/contracts/TicketCrypt.json')

let contract = null;

class Contract {
  constructor() {
    this.instance = null
    this.account = null
  }

  setContractInstance(instance) {
    this.instance = instance

    this.instance.allEvents()
    .watch((error, log) => {
      if (error) {
        console.error(error)
        return false
      }

      console.log('Event', log)
    })
  }

  setAccount (account) {
    this.account = account
  }

  
}
