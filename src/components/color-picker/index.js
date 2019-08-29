import React, { Component } from 'react';
import styles from './color-picker.module.css';

import ColorSwatch from '../color-swatch'

const colors = [
  'D94545', // red
  'E1A448', // orange
  '8D8C73', // beige
  '89D177', // clover
  '277441', // green
  '38B3B3', // teal
  '3C7AD6', // blue
  '937DEA', // violet
  'BC51D7', // fuschia
  'E37BB9'  // pink
]

class ColorPicker extends Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()
    
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

  handleClickOutside = (e) => {
    if ( ! this.ref.contains(e.target) ) {
      this.closeContainer()
    }
  }

  openContainer = () => {
    document.addEventListener( 'click', this.handleClickOutside)

    this.setState({ 'displayContainer': true })
  }

  toggleContainer = () => {
    this.state.displayContainer ? this.closeContainer() : this.openContainer()
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
      <div ref={ node => this.ref = node } className={ this.getSelectorClasses() } >
        <ColorSwatch
          onClick={ this.toggleContainer }
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