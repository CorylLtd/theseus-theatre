const STATS = [
  { n: 'All', t: 'Experience Levels Welcome' },
  { n: 'Open', t: 'Air · Outdoor Staging' },
  { n: 'Raw', t: 'Emotion, Stripped Back' },
  { n: 'Join In', t: 'Watch · Drink · Sing Along' },
]

export default function Society() {
  return (
    <section className="act" id="society">
      <span className="ghost-num" aria-hidden="true">I</span>
      <div className="wrap">
        <div className="act-head" data-reveal>
          <span className="act-num">Act I</span>
          <h2 className="act-title">The <span className="thin">Society</span></h2>
        </div>
        <div className="society">
          <div data-reveal>
            <p className="lead">
              Theseus Theatre brings together theatre lovers of <strong>every experience level</strong> at
              the University of East Anglia — to perform and enjoy drama in the open air.
            </p>
            <p className="body">
              We strip scenes back to their raw emotion: short, charged pieces staged in outdoor spaces,
              with the craft of acting at the heart of it all. No sets to hide behind, no fourth wall to
              keep you out — just actors, an audience, and the charged air between them.
            </p>
            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.t}>
                  <div className="n">{s.n}</div>
                  <div className="t">{s.t}</div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal data-delay="1">
            <blockquote className="quote">
              “Don't sit quietly in the dark. Watch, drink, eat and sing along — this is theatre you join.”
              <cite>— The Company</cite>
            </blockquote>
            <p className="body">
              We're here for community as much as for craft — a society open to anyone who loves the arts,
              whatever their experience. Bring a drink, find a patch of grass, and become part of the scene.
              A true interactive experience under open skies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
