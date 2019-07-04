import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { categoryResults } from './reducers'
import thunk from 'redux-thunk'

const store = createStore(combineReducers({categoryResults}), applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);
