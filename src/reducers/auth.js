const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        error: null
      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

export default auth