import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { appReducer } from './reducers/appReducer';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(appReducer);

console.log("index store", store);
console.log("index getState", store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
