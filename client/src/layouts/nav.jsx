import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as ListIcon } from '../assets/icons/list.svg'
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg'

const Nav = () => {
  return (
    <nav className='flex justify-between bg-gray-700 items-center px-5 rounded-md text-gray-300 mb-8 shadow sticky top-4'>
      <div>
        <h1 className='tracking-widest font-bold uppercase'>Todo App</h1>
      </div>
      <div>
        <ul className='flex'>
          <li className='p-3 tracking-widest'>
            <NavLink
              exact
              activeClassName='text-gray-100 line-through'
              className='flex items-center hover:text-gray-100 z-50'
              to={'/'}
            >
              <ListIcon />
              <span className='ml-2'>Todos</span>
            </NavLink>
          </li>
          <li className='p-3 tracking-widest'>
            <NavLink
              exact
              activeClassName='text-gray-100 line-through'
              className='flex items-center hover:text-gray-100'
              to={'/about'}
            >
              <InfoIcon /> <span className='ml-2'>About</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
