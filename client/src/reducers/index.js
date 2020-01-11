import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import alert from "./alert";
import auth from "./auth";
import cart from "./cart";
import directoryReducer from "./directory";
import search from "./search";

import userReducer from "./user";
import sectionReducer from "./section";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  alert,
  auth,
  cart,
  directory: directoryReducer,
  user: userReducer,
  section: sectionReducer,
  search: search
});

export default persistReducer(persistConfig, rootReducer);
