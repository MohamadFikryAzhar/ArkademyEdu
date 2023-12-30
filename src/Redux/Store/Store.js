// Redux/Store.js
'use clent'
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
import rootReducer from "../Reducers";

const logger = createLogger();
const enhancers = applyMiddleware(logger, rpm);
const store = createStore(rootReducer, enhancers);

export default store;
