// Reducers/index.js

import { combineReducers } from 'redux';
import { loginReducer } from './Reducers';
import { registerReducer } from './Reducers';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

export default rootReducer;
