import React, { Component } from 'react';
import styles from './color-swatch.module.css';

class ColorSwatch extends Component {
  getClasses = () => {
    let classes = styles.swatch
      
    if ( this.props.active ) {
      classes += ' ' + styles.active
    }

    return classes
  }

  render() {

    return (
      <div
        onClick={ () => this.props.onClick(this.props.value) }
        className={ this.getClasses() }
        style={{ backgroundColor: '#' + this.props.value }} 
      />
    )
  }
}

export default ColorSwatch;