import { useSelector, useDispatch } from "react-redux";
import { sortAnecdote } from "../utils";
import { updateVotes } from "../reducers/anecdoteSlice";

function AnecdoteList (){

    let {anecdotes,filter} = useSelector((state)=> state);
    anecdotes = sortAnecdote(anecdotes);
    const dispatch = useDispatch()
    const voteHandler = (anecdote) => {
      dispatch(updateVotes(anecdote))
    }
    return (
        <div className="anecdoteListContainer">
            {anecdotes.filter(x=>{
                let boo = x.content.indexOf(filter) !== -1;
                return boo;
            }).map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => voteHandler(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList