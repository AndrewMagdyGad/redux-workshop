import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./Slices/postSlice";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// Logger Middleware
const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("dispatching ", action);
            console.log("previous state: ", store.getState());
            next(action);
            console.log("state: ", store.getState());
        };
    };
};

const rootReducer = combineReducers({ posts: postSlice });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
