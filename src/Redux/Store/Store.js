// Redux/Store.js

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
import { combineReducers } from 'redux';
import { loginReducer } from "../Reducers/Reducers";
import { registerReducer } from "../Reducers/Reducers";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

const logger = createLogger();
const enhancers = applyMiddleware(logger, rpm);
const store = createStore(rootReducer, enhancers);

export default store;