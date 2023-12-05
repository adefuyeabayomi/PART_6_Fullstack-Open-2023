import { useDispatch } from "react-redux"
import { createNewAnecdotes } from "../reducers/anecdoteSlice";

function AnecdoteForm (){

    let dispatch = useDispatch();
    function addAnecdoteHandler(e){
        e.preventDefault();
        let content = e.target.anecdote.value;
        e.target.anecdote.value = "";
        dispatch(createNewAnecdotes({content,votes : 0}))
      }
    return (
        <div className="anecdote-form-container">
            <h2>create new</h2>
            <form onSubmit={addAnecdoteHandler}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm