import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./styles/notfound.css";
import "./styles/main.css";
import App from './App.jsx'
import Navigasi from './utils/router/Navigasi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigasi/>
  </StrictMode>,
)
