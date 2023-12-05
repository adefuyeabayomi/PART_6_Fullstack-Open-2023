export function updateFilter(filter){
    return {
        type : "UPDATE",
        payload : filter
    }
}
let initialFilter = ""
function filterReducer(state = initialFilter, action){
    switch (action.type){
        case "UPDATE" : {
            state = action.payload
            break;
        }
        default : return state;
    }
    return state;
}
export default filterReducer