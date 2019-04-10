import React, { Component } from 'react';
import styles from './button.module.css';

class Button extends Component {
  render() {

    return (
      <button onClick={ this.props.onClick } className={ styles.button }>{ this.props.label }</button>
    )
  }
}

export default Button;