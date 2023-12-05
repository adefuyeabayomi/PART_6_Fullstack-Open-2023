const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD': {
      let {good,ok,bad} = state;
      return {good : good + 1, ok,bad} }
    case 'OK': {
      let {good,ok,bad} = state;
      return {good, ok : ok+1,bad} }
    case 'BAD': {
      let {good,ok,bad} = state;
      return {good, ok,bad : bad + 1}}
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer
