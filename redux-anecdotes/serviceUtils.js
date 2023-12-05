import axios from "axios"

let baseUrl = "http://localhost:3001/anecdotes"
function getAll(){
    return axios.get(baseUrl)
}
function saveAnecdote(data){
    return axios.post(baseUrl,data)
}
function updateAnecdote(data){
    return axios.put(baseUrl+"/"+data.id,data)
}
export {getAll,saveAnecdote,updateAnecdote}

