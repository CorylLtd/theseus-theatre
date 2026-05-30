import { forwardRef } from 'react'

const linkBase =
  "font-mono text-xs tracking-[0.2em] uppercase text-bone-dim relative py-1 transition-colors duration-300 hover:text-bone " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-[400ms] after:ease-curtain hover:after:w-full"

const Nav = forwardRef<HTMLElement>(function Nav(_props, ref) {
  return (
    <nav
      id="nav"
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-5.5 border-b border-transparent transition-[background,padding,border-color] duration-500 ease-curtain"
    >
      <a
        className="flex items-center gap-3 font-display font-bold text-[17px] tracking-[0.18em] text-bone"
        href="#top"
      >
        <span className="w-6.5 h-6.5 flex-none grid place-items-center border border-gold text-gold text-[14px] rotate-45">
          <span className="-rotate-45">☩</span>
        </span>{' '}
        THESEUS&nbsp;THEATRE
      </a>
      <div className="flex gap-9 items-center max-[760px]:hidden">
        <a href="#society" className={linkBase}>The Society</a>
        <a href="#production" className={linkBase}>Next Production</a>
        <a href="#season" className={linkBase}>The Season</a>
        <a
          href="#join"
          className="font-mono text-xs tracking-[0.2em] uppercase relative transition-colors duration-300 border border-gold text-gold px-4.5 py-2.25 hover:bg-gold hover:text-bg"
        >
          Join
        </a>
      </div>
      <div className="hidden max-[760px]:block font-mono text-xs tracking-[0.32em] uppercase text-gold">
        Menu
      </div>
    </nav>
  )
})

export default Nav
