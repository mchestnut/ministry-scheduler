import React, { Component } from 'react';

class Select extends Component {
  renderOptions() {
    return this.props.options.map(option => {
      return (
        <option value={ option.value } key={ option.value }>{ option.label }</option>
      )
    })
  }

  render() {

    return (
      <select
        onChange={ this.props.onChange }
        value={ this.props.value }
        className="select">
          { this.renderOptions() }
      </select>
    )
  }
}

export default Select;