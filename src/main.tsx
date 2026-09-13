import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UnderConstruction from './UnderConstruction'
import './index.css'

// Temporary: show the "Intermission" holding page instead of the site.
// Set to false to restore normal service.
const UNDER_CONSTRUCTION = true

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {UNDER_CONSTRUCTION ? <UnderConstruction /> : <App />}
  </React.StrictMode>,
)
