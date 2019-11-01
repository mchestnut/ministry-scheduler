import { applyMiddleware, compose, createStore } from 'redux'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore  } from 'redux-firestore'
import thunk from 'redux-thunk'

import firebase from '../firebase'
import rootReducer from '../reducers'

const defaultState = {
  auth: { response: null },
  users: {
    response: {
      error: null,
      message: null
    },
    result: null
  }
}

const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: 'users'
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware( thunk.withExtraArgument({ getFirebase, getFirestore }) )
  )
)

export default store
