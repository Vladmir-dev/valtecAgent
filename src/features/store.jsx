import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/combineReducers";
import rootReducer from "./combReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistedStore = persistStore(store);

export default store;
