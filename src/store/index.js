import { createStore } from 'redux'
import rootReducer from '../reducers'

const defaultState = {
  user: {
    auth: false
  }
}

const store = createStore(rootReducer, defaultState)

export default store
