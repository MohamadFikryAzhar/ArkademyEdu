// Redux/Store.js

import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";

import rootReducer from '../Reducers/index'; 

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const store = createStore(rootReducer, enhancers);

export default store;
