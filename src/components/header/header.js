import React, { Component } from 'react';
import styles from './header.module.css';

import Button from '../button/button';
import logo from '../../logo-tbc.png';

class Header extends Component {
  render() {

    return (
      <header className={ styles.header }>
        <img src={logo} className={ styles.logo } alt="" />
        <div>
          <Button
            onClick={(e) => null}
            tag="button"
            label="Login"
          />
        </div>
      </header>
    )
  }
}

export default Header;