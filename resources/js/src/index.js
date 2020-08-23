import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from "./redux/store";

import App from "./App";


import * as serviceWorker from './serviceWorker';
import {authTokenUpdate} from "./redux/actions/user";



const token = localStorage.getItem('token');
if (token) {
    store.dispatch(authTokenUpdate(token));
}

store.subscribe(() => {
    const { token } = store.getState().user;
    const oldToken = localStorage.getItem('token');

    if (!token || oldToken === token) {
        return;
    }

    axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;

    localStorage.setItem('token', token);
});

axios.interceptors.request.use((config) => {
    const { token } = store.getState().user;

    if (token !== null)  {
        config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
});

axios.interceptors.response.use((response) => { //Autorefresh
    const token = response.headers['authorization'] ? response.headers['authorization'].substr(7) : null;

    if (token) {
        store.dispatch(authTokenUpdate(token));
    }

    return response;
});




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
