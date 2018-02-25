import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import EventCreator from './EventCreator'
import MenuNavigator from './MenuNavigator'

const App = () => (
  <Router>
    <div>
      <MenuNavigator />
      <div className='ui grid stackable padded MainContentContainer'>
        <Route exact path="/" component={Home} />
        <Route exact path='/event/new' component={EventCreator} />
      </div>
    </div>
  </Router>
)

export default App
