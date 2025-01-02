import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Utilise un ID unique pour éviter les conflits avec le site principal
ReactDOM.createRoot(document.getElementById('config-root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)