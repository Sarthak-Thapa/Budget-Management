import React from 'react'

//rrd import
import { NavLink } from 'react-router-dom'

import logomark from '../assets/logomark.svg'

const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink to={'/'} aria-label='Go to Home'>
            <img src={logomark} alt="" />
            <span>Home Budget</span>
        </NavLink>
    </nav>
  )
}

export default Nav