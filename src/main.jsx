import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StoriesApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoriesApp />
  </StrictMode>,
)
