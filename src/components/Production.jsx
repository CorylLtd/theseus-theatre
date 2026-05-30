import oedipusImg from '../assets/oedipus-rex.png'

export default function Production() {
  return (
    <section
      className="act"
      id="production"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
    >
      <span className="ghost-num" aria-hidden="true">II</span>
      <div className="wrap">
        <div className="act-head" data-reveal>
          <span className="act-num">Act II</span>
          <h2 className="act-title">Next <span className="thin">Production</span></h2>
        </div>
        <div className="production">
          <div className="poster" data-reveal style={{ aspectRatio: '2 / 3' }}>
            <img
              src={oedipusImg}
              alt="Sophocles' Oedipus Rex — A New Production"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div data-reveal data-delay="1">
            <span className="label">Next Production</span>
            <h3 className="prod-title">Sophocles Season</h3>
            <p className="prod-sub">
              Opening the season — Sophocles' <em>Oedipus Rex</em>. You can't escape destiny; you can only face it.
            </p>
            <div className="prod-meta">
              <div><div className="k">Dates</div><div className="v">18–21 June</div></div>
              <div><div className="k">Venue</div><div className="v">Open-Air · The Broad, UEA</div></div>
              <div><div className="k">Director</div><div className="v">TBC</div></div>
            </div>
            <p className="syn">
              A plague is strangling Thebes, and King Oedipus vows to hunt down the killer whose crime has
              poisoned the city. But every step toward the truth leads back to himself. Sophocles' towering
              tragedy of fate, pride and self-knowledge — stripped to its raw emotion and staged in the open
              air, with nowhere left to hide.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn">Book Tickets</a>
              <a href="#join" className="btn ghost">Audition</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
