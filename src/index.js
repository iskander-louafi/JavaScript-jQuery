/**
 * Assignment 2
 * Authors: Pamela Carson & Iskander Louafi
 * Date: 2020-07-12
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'bootstrap/dist/css/bootstrap.css';

import OrderForm from './Components/orderform';

ReactDOM.render(
  <React.StrictMode>
    <OrderForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
