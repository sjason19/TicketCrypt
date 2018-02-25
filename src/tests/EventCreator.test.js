import React from 'react'
import ReactDOM from 'react-dom'
import EventCreator from '../components/EventCreator'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EventCreator />, div)
})
