import React, { Component } from 'react'
import TicketCryptContract from '../build/contracts/TicketCrypt.json'
import getWeb3 from './utils/getWeb3'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';
const Datetime = require('react-datetime')
const moment = require('moment')


import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/EventCreator.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 10,
  },
  containerBottom: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 8,
    marginLeft: theme.spacing.unit * 10,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '2px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '600px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldInputSmall: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '2px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '200px',
    marginRight: '15px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 20,
    marginBottom: theme.spacing.unit,
  },
  dateField: {
    marginRight: theme.spacing.unit,
  },
  timeField: {
    marginRight: theme.spacing.unit * 4,
  },
  buttonStyle: {
    marginLeft: theme.spacing.unit * 10,
  }
});

const defaultEvent = {
  name: 'Enter Title',
  location: 'Enter Location',
  start: "2018-02-02", // moment("2017-12-25", "YYYY-MM-DD"),
  end: "2018-03-03", // moment().add(1, 'day').add(4, 'hour').startOf('hour').unix()
  created: moment().unix(),
  price: '',
  organizer: ''
}


class EventCreator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null,
      event: defaultEvent
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const ticketCrypt = contract(TicketCryptContract)
    ticketCrypt.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on TicketCrypt.
    var ticketCryptInstance;

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      ticketCrypt.deployed().then((instance) => {
        ticketCryptInstance = instance

        // Stores a given value, 5 by default.
        return ticketCryptInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return ticketCryptInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  render() {
     const { classes } = this.props;
     const { event } = this.state;

    return (
      <div className="EventCreator">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Ticket Crypt</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <p>To verify the contract is connecting with your webservice verify that you see a value of 5 below</p>
              <p>The stored value is: {this.state.storageValue}</p>
            </div>
          </div>
        </main>

        <div className="event-header">
          <h1>Event Details</h1>
        </div>

        <div className={classes.container}>
             <TextField
               defaultValue={event.name}
               label="Event Title"
               InputProps={{
                 disableUnderline: true,
                 classes: {
                   root: classes.textFieldRoot,
                   input: classes.textFieldInput,
                 },
               }}
               InputLabelProps={{
                 shrink: true,
                 className: classes.textFieldFormLabel,
               }}
             />
           </div>
           <div className={classes.container}>
                <TextField
                  defaultValue={event.location}
                  label="Event Location"
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.textFieldRoot,
                      input: classes.textFieldInput,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.textFieldFormLabel,
                  }}
                />
              </div>

              <div className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="STARTS"
                  type="date"
                  defaultValue={event.start}
                  InputProps={{
                    classes: {
                      root: classes.dateField,
                      input: classes.textfield,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="time"
                  label=" "
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputProps={{
                    classes: {
                      root: classes.timeField,
                      input: classes.textfield,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date"
                  label="ENDS"
                  type="date"
                  defaultValue="2017-05-24"
                  InputProps={{
                    classes: {
                      root: classes.dateField,
                      input: classes.textfield,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="time"
                  label=" "
                  type="time"
                  defaultValue="07:30"
                  InputProps={{
                    classes: {
                      root: classes.timeField,
                      input: classes.textfield,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className={classes.container}>
                   <TextField
                     defaultValue="Enter Description..."
                     label="Event Description"
                     InputProps={{
                       disableUnderline: true,
                       classes: {
                         root: classes.textFieldRoot,
                         input: classes.textFieldInput,
                       },
                     }}
                     InputLabelProps={{
                       shrink: true,
                       className: classes.textFieldFormLabel,
                     }}
                   />
              </div>
              <div className={classes.containerBottom}>
                   <TextField
                     defaultValue="Who's organizing the event?"
                     label="Organizer Name"
                     InputProps={{
                       disableUnderline: true,
                       classes: {
                         root: classes.textFieldRoot,
                         input: classes.textFieldInput,
                       },
                     }}
                     InputLabelProps={{
                       shrink: true,
                       className: classes.textFieldFormLabel,
                     }}
                   />
             </div>

             <div className="event-header">
               <h1>Create Tickets</h1>
             </div>

             <div className={classes.containerBottom}>
                  <TextField
                    defaultValue="GA, Early Bird..."
                    label="Ticket Name"
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        root: classes.textFieldRoot,
                        input: classes.textFieldInputSmall,
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.textFieldFormLabel,
                    }}
                  />
                  <TextField
                    defaultValue="100"
                    label="Quantity Available"
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        root: classes.textFieldRoot,
                        input: classes.textFieldInputSmall,
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.textFieldFormLabel,
                    }}
                  />
                  <TextField
                    defaultValue="$"
                    label="Price"
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        root: classes.textFieldRoot,
                        input: classes.textFieldInputSmall,
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.textFieldFormLabel,
                    }}
                  />
            </div>
            <Button
             variant="raised"
             color="primary"
             className={classes.buttonStyle}
             >
              Create Event
            </Button>
      </div>
    );
  }
}

EventCreator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCreator);
