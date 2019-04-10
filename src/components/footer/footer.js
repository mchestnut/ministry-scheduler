import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
  render() {
    const today = new Date()

    return (
      <footer className={ styles.footer }>
        &copy; Copyright {today.getFullYear()} Tri-City Baptist Church Ministries
      </footer>
    )
  }
}

export default Footer;