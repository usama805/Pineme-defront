import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import App from './App.jsx'


const qc = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<QueryClientProvider client={qc}>
<HashRouter>
<App />
</HashRouter>
</QueryClientProvider>
</React.StrictMode>
)