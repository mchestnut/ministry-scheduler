import React, { Component } from 'react';
import styles from './header.module.css';
import { Link, Location } from '@reach/router';

import logo from '../../logo-tbc.png';

class Header extends Component {
  render() {

    return (
      <Location>
        { ({ location }) => (
          <header className={ styles.header }>
            <Link to="/">
              <img src={logo} className={ styles.logo } alt="" />
            </Link>
            <div>
              <Link to="login" state={{ from: location.pathname}} className="button">Login</Link>
            </div>
          </header>
        )}
      </Location>
    )
  }
}

export default Header;