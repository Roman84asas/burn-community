import { combineReducers } from 'redux';

import home from './home';
import user from "./user";
import reg from "./reg";

const rootReducer = combineReducers({
    home,
    user,
    reg
})

export default rootReducer;
