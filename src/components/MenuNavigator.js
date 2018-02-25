import React from 'react'
import { Link } from 'react-router-dom'

const MenuNavigator = () => (
  <div className='ui grid stackable row TopMenu'>
    <div className='column sixteen wide'>
      <div className='top ui menu TopMenuFirst'>
        <Link to='/' className='item logo'>
              ticket<strong>.Crypt</strong>
        </Link>
        <Link to='/event/new' className='item'>
          <i className='icon plus circle' /> New Event
            </Link>
      </div>
    </div>
  </div>
)

export default MenuNavigator
