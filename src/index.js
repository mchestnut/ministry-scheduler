import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

// import { registerServiceWorker } from './serviceWorker'
import firebase from './firebase'
import store from './store'

import './scss/styles.scss'

import App from './components/App'

const rrfProps = {
  firebase,
  config: {
    useFirestoreForProfile: true,
    userProfile: 'users'
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

render (
  <Provider store={ store }>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()