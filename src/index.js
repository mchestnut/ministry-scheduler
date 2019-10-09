import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import './scss/styles.scss'

import App from './components/App'

render (
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)



// import Firebase, { FirebaseContext } from './firebase/'
// import * as serviceWorker from './serviceWorker'

// const firebase = new Firebase()

// window.addEventListener('popstate', (e) => {
//   renderApp(window.location.pathname)
// })

// function renderApp(path) {
//   render(
//     <FirebaseContext.Provider value={firebase}>
//       <App path={path} />
//     </FirebaseContext.Provider>,
//     document.getElementById('root')
//   )
// }

// serviceWorker.register()
// renderApp(window.location.pathname)