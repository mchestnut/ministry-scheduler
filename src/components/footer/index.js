import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
  render() {
    const today = new Date()

    return (
      <footer className={ styles.footer }>
        &copy; Copyright {today.getFullYear()} <a href="https://www.tricityministries.org" className={ styles.footer__link }>Tri-City Baptist Church Ministries</a>
      </footer>
    )
  }
}

export default Footer;