import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Society from './components/Society'
import Production from './components/Production'
import Season from './components/Season'
import Join from './components/Join'
import Footer from './components/Footer'
import { useScrollReveal, useHeroMotion } from './hooks/useInteractions'

export default function App() {
  const navRef = useRef<HTMLElement>(null)
  const figRef = useRef<HTMLDivElement>(null)

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
