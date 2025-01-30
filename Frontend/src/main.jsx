import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BelowHero from './BelowHero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BelowHero />
  </StrictMode>,
)
