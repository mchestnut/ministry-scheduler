import { applyMiddleware, compose, createStore } from 'redux'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'

import firebase from '../firebase'
import rootReducer from '../reducers'

const defaultState = {
  auth: {
    error: null
  }
}

const rrfConfig = {
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  userProfile: 'users'
}

const createStoreWithFirebase = compose(
  applyMiddleware( thunk.withExtraArgument({ getFirebase, getFirestore }) ),
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const store = createStoreWithFirebase(rootReducer, defaultState)

export default store
