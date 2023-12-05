import axios from "axios"
let baseUrl = "http://localhost:3001/anecdotes"

export function getAnecdotes(){
    return axios.get(baseUrl).then(res => res.data)
}
export function addAnecdote(anecdote){
    return axios.post(baseUrl,anecdote).then(res => res.data)
}
export function updateAnecdote(anecdote){
    let updateUrl = `${baseUrl}/${anecdote.id}`;
    console.log("update url", updateUrl)
    return axios.put(updateUrl,anecdote).then(res=> res.data)
}




