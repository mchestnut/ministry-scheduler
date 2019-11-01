const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        response: null
      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        response: action.response
      }

    default:
      return state
  }
}

export default auth