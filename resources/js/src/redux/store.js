import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import rootReducer from "./reducers";

const composeEnchencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchencers(applyMiddleware(thunk)));

export default store;
