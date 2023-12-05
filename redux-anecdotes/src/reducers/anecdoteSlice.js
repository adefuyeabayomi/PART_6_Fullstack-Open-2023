import { createSlice } from "@reduxjs/toolkit";
import { getAll, saveAnecdote, updateAnecdote } from "../../serviceUtils";
import { setNewNotification } from "../reducers/notificationSlice";
let anecdoteSlice = createSlice({
    name : "anecdote",
    initialState : [],
    reducers : {
        vote(state, action){
            state.map(x=>{
                x.id == action.payload ? x.votes++ : false;
                return x;
            })
        },
        add(state,action){
            state.push(action.payload)
        },
        setAnecdotes(state,action){
            console.log("anecdotes", action.payload);
            return action.payload
        }
    }
})

export const {vote, add, setAnecdotes} = anecdoteSlice.actions
const anecdoteReducer =  anecdoteSlice.reducer
export default anecdoteReducer
export function initializeAnecdotes(){
    return async (dispatch) => {
        let response = await getAll()
        dispatch(setAnecdotes(response.data))
    }
}
export function createNewAnecdotes(anecdote){
    return async (dispatch) => {
        let saved = await saveAnecdote(anecdote).then(res=>{
            let {data} = res;
            dispatch(add(data));
            dispatch(add(res.data))
            dispatch(setNewNotification("New Anecdoted Added : " + res.data.content,3.5))
        })
    }
}

export function updateVotes(anecdote){
    return async (dispatch)=> {
        let {content, votes,id} = anecdote;
        votes += 1;
        let updated = await updateAnecdote({content,votes,id});
        let {data} = updated;
        dispatch(vote(data.id))
        dispatch(setNewNotification("You Voted for anecdote id : " + id,3.5))
    }
}

