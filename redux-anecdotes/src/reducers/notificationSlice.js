import { createSlice } from "@reduxjs/toolkit";

let notificationSlice = createSlice({
    name : "notification",
    initialState : {message : "Save Inspiring, funny and philosophical anecdotes here", show : true},
    reducers : {
        setNotification : function (state, action){
            state.message = action.payload
        },
        updateShowNotification : function (state,action){
            state.show = action.payload
        }
    }
})

export const {setNotification,updateShowNotification} = notificationSlice.actions
export default notificationSlice.reducer

export function setNewNotification(message,timeInSeconds){
    return async (dispatch) => { 
        dispatch(setNotification(message))
        dispatch(updateShowNotification(true))
        setTimeout(()=>{
            dispatch(updateShowNotification(false))
            dispatch(setNotification(""))
        },timeInSeconds * 1000)
    }
}

