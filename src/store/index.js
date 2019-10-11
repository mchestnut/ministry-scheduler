import { applyMiddleware, createStore } from 'redux'
import { getFirebase } from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const defaultState = {
  auth: {
    error: null
  }
}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware( thunk.withExtraArgument({ getFirebase, getFirestore }) )
)

export default store
