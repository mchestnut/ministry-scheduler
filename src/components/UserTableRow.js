import React from 'react'

const UserTableRow = (props) => {

  const updateField = ( updatedField ) => {
    const updatedDetails = Object.assign(
      props.details,
      updatedField
    )

    props.updateUser(updatedDetails)
  }

  return (
    <tr>
      <td>
        <input
          onChange={ ({ currentTarget }) => updateField({ first_name: currentTarget.value }) }
          value={ props.details.first_name }
          type="text"
        />
      </td>
      <td>
        <input
          onChange={ ({ currentTarget }) => { console.log('save ' + currentTarget + ' to state') } }
          value={ props.details.last_name }
          type="text"
        />
      </td>
      <td>
        <select
          onChange={ ({ currentTarget }) => { console.log('save ' + currentTarget + ' to state') }}
          value={ props.details.role }
        >
          <option value="admin">Admin</option>
          <option value="member">Member</option>
          <option value="inactive">Inactive</option>
        </select>
      </td>
      <td>
        <select
          onChange={ ({ currentTarget }) => { console.log('save ' + currentTarget + ' to state') }}
          value={ props.details.color }
        >
          <option value="e1a448">Orange</option>
          <option value="89d177">Green</option>
        </select>
      </td>
    </tr>
  )
}

export default UserTableRow