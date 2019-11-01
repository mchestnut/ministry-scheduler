import React from 'react'

const UserTableRow = ({ details, onChange }) => {

  const updateField = ( updatedField ) => {
    const updatedDetails = Object.assign(
      details,
      updatedField
    )

    onChange(updatedDetails)
  }

  return (
    <tr>
      <td>
        <input
          onChange={ ({ currentTarget }) => updateField({ first_name: currentTarget.value }) }
          value={ details.first_name }
          type="text"
        />
      </td>
      <td>
        <input
          onChange={ ({ currentTarget }) => updateField({ last_name: currentTarget.value }) }
          value={ details.last_name }
          type="text"
        />
      </td>
      <td>
        <select
          onChange={ ({ currentTarget }) => updateField({ role: currentTarget.value })}
          value={ details.role }
        >
          <option value="admin">Admin</option>
          <option value="member">Member</option>
          <option value="inactive">Inactive</option>
        </select>
      </td>
      <td>
        <select
          onChange={ ({ currentTarget }) => updateField({ color: currentTarget.value })}
          value={ details.color }
        >
          <option value="8c8989">Gray</option>
          <option value="e1a448">Orange</option>
          <option value="89d177">Green</option>
        </select>
      </td>
    </tr>
  )
}

export default UserTableRow