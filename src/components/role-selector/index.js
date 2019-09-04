import React, { Component } from 'react';
import styles from './role-selector.module.css';

import Select from '../select'

const roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'member', label: 'Member' },
  { value: 'inactive', label: 'Inactive' }
]

class RoleSelector extends Component {

  render() {
    return (
      <Select
        onChange={ this.props.onChange }
        value={ this.props.value }
        options={ roles }
      />
    )
  }
}

export default RoleSelector;