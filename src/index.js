import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// import { registerServiceWorker } from './serviceWorker'
import store from './store'

import './scss/styles.scss'

import App from './components/App'

render (
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()