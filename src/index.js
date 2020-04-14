import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Provider } from 'react-redux';
import { createStore } from 'redux';
import {tableReducer} from './reducers/tableReducer';
import { combineReducers } from 'redux';

const rootReducer =  combineReducers({ tableReducer: tableReducer});
const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App appTitle="Person Manager"/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
