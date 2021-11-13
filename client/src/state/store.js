import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk, createLogger()));
// const store = createStore(reducers, applyMiddleware(thunk));

export default store;
