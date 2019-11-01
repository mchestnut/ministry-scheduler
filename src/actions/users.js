let userTO = null

export const clearResponse = () => {
  return {
    type: 'CLEAR_RESPONSE',
    response: null
  }
}

export const clearResult = () => {
  return {
    type: 'CLEAR_RESULT',
    result: null
  }
}

export const createUser = (details) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const creatorApp = firebase.apps[1]
    const firestore = getFirestore()

    creatorApp.auth()
      .createUserWithEmailAndPassword( details.email, details.password )

      .then( ({ user }) => {        
        firestore.collection('users').doc(user.uid)
          .set({
            first_name: details.first_name,
            last_name: details.last_name,
            role: details.role,
            color: details.color
          })
          
          .then( () => {
            creatorApp.auth().signOut()

            dispatch({
              type: 'UPDATE_USER_CREATED',
              response: {
                error: null,
                message: 'New user created'
              },
              result: 'userCreated'
            })

            clearTimeout(userTO)
            userTO = setTimeout( () => {
              dispatch({
                type: 'CLEAR_RESPONSE'
              })
            }, 5000)
          } )

          .catch( (error) => {
            dispatch({
              type: 'UPDATE_RESPONSE',
              response: {
                error,
                message: error.message
              }
            })
          } )
      } )

      .catch( (error) => {
        dispatch({
          type: 'UPDATE_RESPONSE',
          response: {
            error,
            message: error.message
          }
        })
      })
  }
}

export const updateUsers = (updatedUsers) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const batch = firestore.batch()

    Object.keys(updatedUsers).forEach( uid => {
      batch.update(
        firestore.collection('users').doc(uid),
        updatedUsers[uid]
      )
    } )
        
    batch.commit()
      .then( () => {
        dispatch({
          type: 'UPDATE_RESPONSE',
          response: {
            error: null,
            message: 'Users updated'
          }
        })

        clearTimeout(userTO)
        userTO = setTimeout( () => {
          dispatch({
            type: 'CLEAR_RESPONSE'
          })
        }, 5000)
      } )

      .catch( (error) => {
        dispatch({
          type: 'UPDATE_RESPONSE',
          response: {
            error,
            message: error.message
          }
        })
      } )
  }
}