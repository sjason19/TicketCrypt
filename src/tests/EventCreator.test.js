import React from 'react'
import ReactDOM from 'react-dom'
import App from '../EventCreator'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EventCreator />, div)
})
