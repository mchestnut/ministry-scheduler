const user = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_AUTH':
      const newState = Object.assign( {}, state, {
        auth: action.value
      } )
      return newState
    default:
      return state
  }
}

export default user