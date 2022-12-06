import { combineReducers, applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import userReducer from "./reducers";


const rootReducer = combineReducers({userReducer});

export const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
});