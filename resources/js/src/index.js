import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from "./redux/store";

import App from "./App";


import * as serviceWorker from './serviceWorker';


if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>,
        document.getElementById('app')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
