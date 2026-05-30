import { useRef } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Society from './components/Society.jsx'
import Production from './components/Production.jsx'
import Season from './components/Season.jsx'
import Join from './components/Join.jsx'
import Footer from './components/Footer.jsx'
import { useScrollReveal, useHeroMotion } from './hooks/useInteractions.js'

export default function App() {
  const navRef = useRef(null)
  const figRef = useRef(null)

  useScrollReveal()
  useHeroMotion(navRef, figRef)

  return (
    <>
      <div className="vignette"></div>
      <div className="grain"></div>

      <Nav ref={navRef} />
      <Hero ref={figRef} />
      <Marquee />
      <Society />
      <Production />
      <Season />
      <Join />
      <Footer />
    </>
  )
}
