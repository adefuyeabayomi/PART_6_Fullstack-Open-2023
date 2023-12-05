import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useQuery , useMutation , useQueryClient} from '@tanstack/react-query'
import { getAnecdotes , updateAnecdote } from './requestFunctions'

const App = () => {
let anecdotes = useQuery({
  queryKey : ['anecdotes'],
  queryFn : getAnecdotes,
  retry : false,
  refetchOnWindowFocus : false,
})
let client = useQueryClient()
let voteMutation = useMutation({
  mutationFn : updateAnecdote,
  onSuccess : ()=> {
    client.invalidateQueries({queryKey : ['anecdotes']})
  }
})

if(anecdotes.isLoading){
  return (
    <div>loading data... Please wait</div>
  )
}
if(anecdotes.isError){
  return (
    <div>Unable to retrieve the data from the server</div>
  )
}
anecdotes = anecdotes.data

  const handleVote = (anecdote) => {
    anecdote.votes = anecdote.votes + 1;
    voteMutation.mutate(anecdote)
  }


  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
