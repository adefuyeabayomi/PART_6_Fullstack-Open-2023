import {configureStore} from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteSlice";
import filterReducer from "./reducers/filterSlice";
import notificationReducer from "./reducers/notificationSlice"

let store = configureStore({
    reducer : {
        anecdotes : anecdoteReducer,
        filter : filterReducer,
        notification : notificationReducer
    }
})
console.log(store.getState())
export default store;