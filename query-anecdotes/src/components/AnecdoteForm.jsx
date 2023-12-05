import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addAnecdote } from "../requestFunctions"
const AnecdoteForm = () => {
  let client = useQueryClient();
  let noteCreation = useMutation({
    mutationFn : addAnecdote,
    onSuccess : client.invalidateQueries({queryKey : ['anecdotes']})
  })
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    let newAnecdote = {
      votes : 0,
      content
    }
    noteCreation.mutate(newAnecdote)
    event.target.anecdote.value = ''
    console.log('new anecdote', content);
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
