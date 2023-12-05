import { createSlice } from "@reduxjs/toolkit";

let filterSlice = createSlice({
    name : "filter",
    initialState : "", 
    reducers : {
        updateFilter(state,action){
            state = action.payload;
            return state;
        }
    }
})

export const {updateFilter} = filterSlice.actions
let filterReducer = filterSlice.reducer
export default filterReducer



