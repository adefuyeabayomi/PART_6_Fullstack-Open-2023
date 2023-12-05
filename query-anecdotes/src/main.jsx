import ReactDOM from 'react-dom/client'
import App from './App'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"

let client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
)