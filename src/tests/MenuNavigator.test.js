import React from 'react'
import ReactDOM from 'react-dom'
import MenuNavigator from '../components/MenuNavigator'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MenuNavigator />, div)
})
