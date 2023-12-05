export function sortAnecdote(init,sorted = []){
    if(init.length == 0){
      return sorted
    }
    else {
      let max = {votes : -Infinity};
      for(let each of init){
        if(each.votes >max.votes ){
          max = each;
        }
      } 
      sorted.push(max);
      init = init.filter(x=>{
        let boo = x.content !== max.content;
        return boo;
      }) 
      return sortAnecdote(init,sorted)
    }
  }