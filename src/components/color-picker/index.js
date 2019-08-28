import React, { Component } from 'react';
import styles from './color-picker.module.css';

import ColorSwatch from '../color-swatch'

const colors = [
  'E1A448',
  'E37BB9'
]

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      displayContainer: false
    }
  }

  closeContainer = () => {
    this.setState({ 'displayContainer': false })
  }

  getContainerClasses = () => {
    let classes = styles.container

    if (this.state.displayContainer) {
      classes += ' ' + styles.displayContainer
    }

    return classes
  }

  getSelectorClasses = () => {
    let classes = styles.selector

    if (this.state.displayContainer) {
      classes += ' ' + styles.active
    }

    return classes
  }

  openContainer = () => {
    this.setState({ 'displayContainer': true })
  }

  renderAll = () => {
    return colors.map(color => {
      return (
        <ColorSwatch
          onClick={ (color) => this.saveChanges(color) }
          value={ color }
          active={ this.props.value === color }
          key={ color }
        />
      )
    })
  }

  saveChanges = ( color ) => {
    this.closeContainer()
    this.props.onChange( color )
  }

  render() {
    return (
      <div className={ this.getSelectorClasses() } >
        <ColorSwatch
          onClick={ this.openContainer }
          value={ this.props.value }
        />
        <div className={ this.getContainerClasses() } >
          { this.renderAll() }
        </div>
      </div>
    )
  }
}

export default ColorPicker;