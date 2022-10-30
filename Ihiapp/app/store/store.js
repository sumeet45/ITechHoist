import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './../reducers/counterSlice';
import accountReducer from "./../reducers/accountSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        account: accountReducer
    }
});