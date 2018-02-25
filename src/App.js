import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import EventCreator from './components/EventCreator'
import MenuNavigator from './components/MenuNavigator'

const App = () => (
  <Router>
    <div>
      <MenuNavigator />
      <div className='ui grid stackable padded MainContentContainer'>
        <Route exact path='/' component={Home} />
        <Route exact path='/event/new' component={EventCreator} />
      </div>
    </div>
  </Router>
)

export default App
