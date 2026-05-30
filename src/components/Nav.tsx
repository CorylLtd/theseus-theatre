import { forwardRef, useState } from 'react'

const linkBase =
  "font-mono text-xs tracking-[0.2em] uppercase text-bone-dim relative py-1 transition-colors duration-300 hover:text-bone " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-[400ms] after:ease-curtain hover:after:w-full"

const links = [
  { href: '#society', label: 'The Society' },
  { href: '#production', label: 'Next Production' },
  { href: '#season', label: 'The Season' },
]

const Nav = forwardRef<HTMLElement>(function Nav(_props, ref) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
    <nav
      id="nav"
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-5.5 border-b border-transparent transition-[background,padding,border-color] duration-500 ease-curtain"
    >
      <a
        className="flex items-center gap-3 font-display font-bold text-[17px] tracking-[0.18em] text-bone relative z-10"
        href="#top"
        onClick={close}
      >
        <span className="w-6.5 h-6.5 flex-none grid place-items-center border border-gold text-gold text-[14px] rotate-45">
          <span className="-rotate-45">☩</span>
        </span>{' '}
        THESEUS&nbsp;THEATRE
      </a>
      <div className="flex gap-9 items-center max-[760px]:hidden">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={linkBase}>
            {l.label}
          </a>
        ))}
        <a
          href="#join"
          className="font-mono text-xs tracking-[0.2em] uppercase relative transition-colors duration-300 border border-gold text-gold px-4.5 py-2.25 hover:bg-gold hover:text-bg"
        >
          Join
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="hidden max-[760px]:block relative z-10 font-mono text-xs tracking-[0.32em] uppercase text-gold cursor-pointer"
      >
        {open ? 'Close' : 'Menu'}
      </button>
    </nav>

      {/* Mobile menu overlay — sibling of <nav> so its `fixed` positioning is
          relative to the viewport, not trapped by the docked nav's backdrop-filter */}
      <div
        id="mobile-menu"
        className={
          'hidden max-[760px]:flex fixed inset-0 z-40 flex-col items-center justify-center gap-9 bg-bg/98 transition-[opacity,visibility] duration-500 ease-curtain ' +
          (open ? 'opacity-100 visible' : 'opacity-0 invisible')
        }
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="font-display text-2xl tracking-[0.12em] text-bone-dim hover:text-bone transition-colors duration-300"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#join"
          onClick={close}
          className="mt-2 font-mono text-xs tracking-[0.2em] uppercase border border-gold text-gold px-7 py-3.5 hover:bg-gold hover:text-bg transition-colors duration-300"
        >
          Join
        </a>
      </div>
    </>
  )
})

export default Nav
