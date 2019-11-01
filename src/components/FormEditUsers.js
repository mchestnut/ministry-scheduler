import React from 'react'

import UserTableRow from './UserTableRow'

const FormEditUsers = ({ response, toggleForm, updatedUsers, updateSingleUser, updateUsers, users }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUsers( updatedUsers )
  }

  return (        
    <form onSubmit={ handleSubmit }>
      <table>
        <tbody>
          { users && Object.keys(users).map( uid => (
            <UserTableRow
              details={ users[uid] }
              key={ uid }
              onChange={ (details) => { updateSingleUser(uid, details) } }
            />
          ) ) }
        </tbody>
      </table>
      <button
        type="button"
        onClick={ () => { toggleForm( 'createUser' ) } }
        className="c-button c-button--minimal"
        style={{ display: 'block', marginBottom: '1rem' }}
      >
        Create new user
      </button>
      <button className="c-button">
        Save changes
      </button>
      <p>{ response ? response.message : '' }</p>
    </form>
  )
}

export default FormEditUsers