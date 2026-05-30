import { forwardRef } from 'react'

const Nav = forwardRef(function Nav(_props, ref) {
  return (
    <nav id="nav" ref={ref}>
      <a className="brand" href="#top">
        <span className="glyph"><span>☩</span></span> THESEUS&nbsp;THEATRE
      </a>
      <div className="nav-links">
        <a href="#society">The Society</a>
        <a href="#production">Next Production</a>
        <a href="#season">The Season</a>
        <a href="#join" className="nav-cta">Join</a>
      </div>
      <div className="nav-burger label" style={{ color: 'var(--gold)' }}>Menu</div>
    </nav>
  )
})

export default Nav
