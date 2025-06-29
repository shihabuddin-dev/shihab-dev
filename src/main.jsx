import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/routes.jsx'

// word pronunce 
// import pronounceWord from './utils/PronounceWord.js'
// pronounceWord('Welcome to Shihab Uddin Website')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
