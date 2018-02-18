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

  createEvent(name, price, available) {
  if (!this.instance) {
    return Promise.reject()
  }

  return this.instance._createEvent(name, price, available {from: this.account})
}

async function init() {
  contract = new Contract()

  let instance = tc(EventCreator)

  instance.setProvider(this.state.web3.currentProvider)
  instance = await instance.deployed()

  contract.setContractInstance(instance)

  if (window.web3) {
    contract.setAccount(web3.eth.defaultAccount || web3.eth.accounts[0])
  }
}


}
