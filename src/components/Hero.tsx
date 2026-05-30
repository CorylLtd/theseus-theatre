import { forwardRef } from 'react'
import heroImg from '../assets/theseus-hero.png'
import { btn, btnGhost } from '../ui'

const Hero = forwardRef<HTMLDivElement>(function Hero(_props, figRef) {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden" id="top">
      <div
        className="hero-fade absolute top-0 right-[-4%] bottom-0 w-[62%] z-1 flex items-end justify-center max-[760px]:w-[118%] max-[760px]:right-[-30%] max-[760px]:opacity-50"
        ref={figRef}
      >
        <img
          src={heroImg}
          alt="Theseus, sword drawn, emerging from the dark"
          className="hero-mask h-full w-full object-cover object-top will-change-transform"
        />
      </div>
      <div className="w-full max-w-7xl mx-auto px-[6vw] relative z-2">
        <div className="flex items-center gap-4 mb-7.5" data-reveal>
          <span className="h-px w-13.5 bg-gold opacity-70"></span>
          <span className="font-mono text-xs tracking-[0.32em] uppercase text-gold">
            University of East Anglia · Student Theatre
          </span>
        </div>
        <h1
          className="font-display font-extrabold text-[clamp(58px,11vw,168px)] leading-[1.04] tracking-[0.02em] [text-shadow:0_8px_60px_rgba(0,0,0,0.8)]"
          data-reveal
          data-delay="1"
        >
          <span className="text-bone block">Theseus</span>
          <em className="not-italic block text-transparent [-webkit-text-stroke:1.4px_var(--color-gold-bright)]">
            Theatre
          </em>
        </h1>
        <p
          className="max-w-[30ch] mt-8.5 mb-10 text-[clamp(20px,2.2vw,27px)] leading-[1.4] text-bone-dim italic max-[760px]:bg-bg"
          data-reveal
          data-delay="2"
        >
          Raw drama under open skies — come watch, drink, eat and sing along.
        </p>
        <div className="flex gap-4.5 flex-wrap items-center" data-reveal data-delay="3">
          <a href="#production" className={btn}>See the Production</a>
          <a href="#join" className={btnGhost}>Join the Company</a>
        </div>
      </div>
      <div className="absolute bottom-7.5 left-[6vw] z-3 flex items-center gap-3.5 font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
        <span className="w-px h-11.5 bg-linear-to-b from-gold to-transparent animate-drip"></span> Enter the labyrinth
      </div>
    </header>
  )
})

export default Hero
