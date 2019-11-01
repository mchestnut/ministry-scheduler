export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase.auth()
      .signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      .then( () => {
        dispatch({
          type: 'LOGIN_SUCCESS'
        })
      } )
      .catch( (error) => {
        dispatch({
          type: 'LOGIN_ERROR',
          response: error
        })
      } )
  }
}

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase.auth()
      .signOut()
      .then( () => {
        dispatch({
          type: 'LOGOUT_SUCCESS'
        })
      } )
    
    firebase.logout()
  }
}