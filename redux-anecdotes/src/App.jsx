import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteSlice'


const App = () => {
  let dispatch = useDispatch();
  dispatch(initializeAnecdotes())
  return (
    <div>
      <h2>Filter</h2>
      <AnecdoteFilter />
      <h2>Notification</h2>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App