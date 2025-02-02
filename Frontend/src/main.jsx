import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BelowHero from './BelowHero.jsx'
import Hero from './Hero.jsx'
 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
    <BelowHero />
  </StrictMode>
);

