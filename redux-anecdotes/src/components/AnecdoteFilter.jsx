import { useDispatch } from "react-redux"
import { updateFilter } from "../reducers/filterSlice";

export default function AnecdoteFilter (){
    let dispatch = useDispatch();
    let style = {
        marginBottom : 10
    }
    function handleChange(e){
        let value = e.target.value;
        dispatch(updateFilter(value))
        
    }
    return (
        <div className="anecdote-filter-container">
            <div style={style}>
                filter <input onChange={handleChange}/>
            </div>
        </div>
    )
}


