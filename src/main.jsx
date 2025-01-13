import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Asegúrate de que el archivo index.css esté en la carpeta src
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
