const users = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        error: null
      }

    case 'UPDATE_ERROR':
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

export default users