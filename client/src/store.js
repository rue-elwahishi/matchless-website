import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore } from "redux-persist";

import thunk from "redux-thunk";
import logger from 'redux-logger';

import rootReducer from './reducers'

const initialState = {};

const middlewares = [thunk, logger];

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default { store, persistor };
