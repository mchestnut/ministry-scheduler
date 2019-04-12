import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.addEventListener('popstate', (e) => {
  renderApp(window.location.pathname);
});

function renderApp(path: string) {
  ReactDOM.render(
    <App path={path} />,
    document.getElementById('root')
  );
}

serviceWorker.register();
renderApp(window.location.pathname);
