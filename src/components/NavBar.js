import React from 'react'
import { Link } from '@reach/router'

import logo from '../img/logo-tbc.png'

import Menu from './Menu'

const NavBar = (props) => {
  return (
    <header className="c-nav-bar">
      <div>
        <Link to="/">
          <img src={ logo } alt="" className="c-nav-bar__logo" />
        </Link>
      </div>

      <Menu />
    </header>
  )
}

export default NavBar