/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './utils/i18n';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import store from './state/store';
import { registerServiceWorker } from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorkerRegistration.register();
reportWebVitals();
registerServiceWorker();
