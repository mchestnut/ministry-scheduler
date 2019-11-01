const users = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_RESPONSE':
      return {
        ...state,
        response: {
          error: null,
          message: null
        }
      }
    
    case 'CLEAR_RESULT':
      return {
        ...state,
        result: null
      }

    case 'UPDATE_RESPONSE':
      return {
        ...state,
        response: action.response
      }

    case 'UPDATE_USER_CREATED':
      return {
        ...state,
        response: action.response,
        result: action.result
      }

    default:
      return state
  }
}

export default users