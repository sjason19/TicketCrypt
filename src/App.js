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
      <Router>
        <div>
        <MenuNavigator />
        <div className="ui grid stackable padded MainContentContainer">
          <Route exact path="/event/new" component={EventCreator}/>
        </div>
        </div>
      </Router>
    )
  }
}

module.exports = App;
