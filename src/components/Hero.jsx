import { forwardRef } from 'react'
import heroImg from '../assets/theseus-hero.png'

const Hero = forwardRef(function Hero(_props, figRef) {
  return (
    <header className="hero" id="top">
      <div className="hero-figure" ref={figRef}>
        <img src={heroImg} alt="Theseus, sword drawn, emerging from the dark" />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-eyebrow" data-reveal>
          <span className="rule"></span>
          <span className="label">University of East Anglia · Student Theatre</span>
        </div>
        <h1 data-reveal data-delay="1">
          <span className="blood">Theseus</span>
          <em>Theatre</em>
        </h1>
        <p className="hero-tag" data-reveal data-delay="2">
          Raw drama under open skies — come watch, drink, eat and sing along.
        </p>
        <div className="hero-actions" data-reveal data-delay="3">
          <a href="#production" className="btn">See the Production</a>
          <a href="#join" className="btn ghost">Join the Company</a>
        </div>
      </div>
      <div className="scroll-cue"><span className="bar"></span> Enter the labyrinth</div>
    </header>
  )
})

export default Hero
