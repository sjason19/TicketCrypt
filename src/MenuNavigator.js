const React = require('react')
const ReactDOM = require('react-dom')

const {
  HashRouter: Router,
  Route,
  Link
} = require('react-router-dom')

const EventCreator = require('./EventCreator.js')
const MenuNavigator = require('./MenuNavigator.js')

class App extends React.Component {
  render() {
    return (
      <div className="ui grid stackable row TopMenu">
        <div className="column sixteen wide">
          <div className="top ui menu TopMenuFirst">
            <Link to="/" className="item logo">
              ticket<strong>.Crypt</strong>
            </Link>
            <Link to="/event/new" className="item">
              <i className="icon plus circle"></i> New Event
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = App;
