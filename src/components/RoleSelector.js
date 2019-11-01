import React from 'react'

const RoleSelector = ({ onChange, value }) => {

  return (
    <select
      onChange={ onChange }
      value={ value }
    >
      <option value="admin">Admin</option>
      <option value="member">Member</option>
      <option value="inactive">Inactive</option>
    </select>
  )
}

export default RoleSelector