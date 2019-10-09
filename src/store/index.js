import { compose, createStore } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

import firebase from '../firebase'
import rootReducer from '../reducers'

const defaultState = {
  user: {
    auth: false
  }
}

const rrfConfig = {
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  userProfile: 'users'
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const store = createStoreWithFirebase(rootReducer, defaultState)

export default store
