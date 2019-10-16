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
          type: 'UPDATE_SUCCESS'
        })
      } )
      .catch( (error) => {
        dispatch({
          type: 'UPDATE_ERROR',
          error
        })
      } )
  }
}