const React = require('react')
const ReactDOM = require('react-dom')
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

const {
  HashRouter: Router,
  Route,
  Link
} = require('react-router-dom')
const navbar = {backgroundColor: '#F16E10'};

const EventCreator = require('./EventCreator.js')
const MenuNavigator = require('./MenuNavigator.js')

class App extends React.Component {
  render() {
    return (
      <Navbar style={navbar}>
          <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" className="item logo">
                  TicketCrypt
                </Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <Link to="/event/new" className="item">
              <i className="icon plus circle"></i> New Event
            </Link>
            </Nav>
      </Navbar>
    )
  }
}

module.exports = App;
