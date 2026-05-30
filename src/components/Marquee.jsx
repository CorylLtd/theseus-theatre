const ITEMS = [
  'Now Casting', 'Oedipus Rex — Summer 2026', 'Open-Air at UEA', 'Auditions Open',
]

function MarqueeRun() {
  // Two copies of the phrase set so the -50% slide loops seamlessly.
  return (
    <span>
      {Array.from({ length: 2 }).flatMap((_, run) =>
        ITEMS.map((item, i) => (
          <span key={`${run}-${i}`} style={{ display: 'contents' }}>
            {item} <i className="dot">✶</i>{' '}
          </span>
        ))
      )}
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeRun />
        <MarqueeRun />
      </div>
    </div>
  )
}
