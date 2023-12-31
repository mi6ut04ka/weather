import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.sass';
import App from './Components/app/App';
import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
    <App />
  </Provider>
);

