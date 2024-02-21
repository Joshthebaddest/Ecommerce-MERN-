import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authProvider.jsx'
import { ContextProvider } from './context/useStateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
