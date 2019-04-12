import React, { Component } from 'react';
import styles from './header.module.css';

import Link from '../link/link';
import logo from '../../logo-tbc.png';

class Header extends Component {
  render() {

    return (
      <header className={ styles.header }>
        <Link to="/">
          <img src={logo} className={ styles.logo } alt="" />
        </Link>
        <div>
          <Link to="/login" className="button">Login</Link>
        </div>
      </header>
    )
  }
}

export default Header;