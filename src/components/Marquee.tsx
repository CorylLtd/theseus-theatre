import { Fragment } from 'react'

const ITEMS = [
  'Now Casting', 'Oedipus Rex — Summer 2026', 'Open-Air at UEA', 'Auditions Open',
]

function MarqueeRun() {
  // Two copies of the phrase set so the -50% slide loops seamlessly.
  return (
    <span className="flex items-center gap-12 font-display font-semibold text-[17px] tracking-[0.24em] uppercase text-bone-dim">
      {Array.from({ length: 2 }).flatMap((_, run) =>
        ITEMS.map((item, i) => (
          <Fragment key={`${run}-${i}`}>
            <span>{item}</span>
            <i className="text-blood-bright">✶</i>
          </Fragment>
        ))
      )}
    </span>
  )
}

export default function Marquee() {
  return (
    <div
      className="border-y border-line bg-bg2 overflow-hidden py-4.5 relative z-4"
      aria-hidden="true"
    >
      <div className="flex gap-12 whitespace-nowrap w-max animate-marquee">
        <MarqueeRun />
        <MarqueeRun />
      </div>
    </div>
  )
}
