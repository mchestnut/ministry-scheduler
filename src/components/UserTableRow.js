import React from 'react'

import ColorSelector from './ColorSelector'
import RoleSelector from './RoleSelector'

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
        <RoleSelector
          onChange={ ({ currentTarget }) => updateField({ role: currentTarget.value })}
          value={ details.role }
        />
      </td>
      <td>
        <ColorSelector
          onChange={ ({ currentTarget }) => updateField({ color: currentTarget.value })}
          value={ details.color }
        />
      </td>
    </tr>
  )
}

export default UserTableRow