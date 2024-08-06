import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import LoginReducer from "./LoginSlice";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  Login: LoginReducer,
});

export default persistReducer(persistConfig, rootReducer);
