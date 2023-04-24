import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { QueryClient, QueryClientProvider } from "react-query"

const queryClientProvider = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClientProvider}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
