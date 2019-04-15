import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './firebase/';
import * as serviceWorker from './serviceWorker';

const firebase = new Firebase();

window.addEventListener('popstate', (e) => {
  renderApp(window.location.pathname);
});

function renderApp(path) {
  ReactDOM.render(
    <FirebaseContext.Provider value={firebase}>
      <App path={path} />
    </FirebaseContext.Provider>,
    document.getElementById('root')
  );
}

serviceWorker.register();
renderApp(window.location.pathname);
