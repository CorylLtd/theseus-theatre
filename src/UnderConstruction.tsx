// Temporary holding page shown while the site is under construction.
// Toggle it in src/main.tsx via UNDER_CONSTRUCTION.

import { useEffect, useState, type CSSProperties } from 'react'

type Meteor = { id: number; top: number; left: number; angle: number; length: number; duration: number }

// The occasional shooting star: spawned at random intervals, positions and angles,
// and removed once it has burnt out. Skipped entirely under reduced-motion.
function useShootingStars(): Meteor[] {
  const [meteors, setMeteors] = useState<Meteor[]>([])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let nextId = 0
    let timer = 0
    const cleanups: number[] = []
    const schedule = () => {
      timer = window.setTimeout(() => {
        const m: Meteor = {
          id: nextId++,
          top: 4 + Math.random() * 38,
          left: 5 + Math.random() * 70,
          angle: 18 + Math.random() * 28,
          length: 110 + Math.random() * 150,
          duration: 0.7 + Math.random() * 0.7,
        }
        setMeteors((ms) => [...ms, m])
        cleanups.push(
          window.setTimeout(() => setMeteors((ms) => ms.filter((x) => x.id !== m.id)), m.duration * 1000 + 150),
        )
        schedule()
      }, 2500 + Math.random() * 7000)
    }
    schedule()
    return () => {
      clearTimeout(timer)
      cleanups.forEach(clearTimeout)
    }
  }, [])
  return meteors
}

// Festoon bulbs hang along a sagging wire: sample points on a quadratic curve.
const WIRE = { x0: 0, y0: 18, cx: 720, cy: 118, x1: 1440, y1: 18 }
const BULBS = Array.from({ length: 19 }, (_, i) => {
  const t = (i + 0.5) / 19
  const x = (1 - t) ** 2 * WIRE.x0 + 2 * (1 - t) * t * WIRE.cx + t ** 2 * WIRE.x1
  const y = (1 - t) ** 2 * WIRE.y0 + 2 * (1 - t) * t * WIRE.cy + t ** 2 * WIRE.y1
  // switch on left-to-right, then flicker gently out of phase with each other
  return { x, y, onDelay: 0.5 + i * 0.09, flickerDelay: ((i * 7) % 19) * 0.35 }
})

export default function UnderConstruction() {
  const meteors = useShootingStars()
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg flex items-center justify-center">
      {/* night sky */}
      <div className="sky absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div className="night absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div className="stars stars-a absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div className="stars stars-b absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div className="stars stars-c absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor"
          aria-hidden="true"
          style={
            {
              top: `${m.top}%`,
              left: `${m.left}%`,
              '--angle': `${m.angle}deg`,
              '--len': `${m.length}px`,
              animationDuration: `${m.duration}s`,
            } as CSSProperties
          }
        ></span>
      ))}
      <div className="moon absolute pointer-events-none" aria-hidden="true"></div>

      {/* treeline and meadow along the bottom */}
      <svg
        className="treeline absolute inset-x-0 bottom-0 w-full h-[26vh] min-h-[160px] pointer-events-none"
        viewBox="0 0 1440 220"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <path
          className="trees-far"
          d="M0 150 L40 128 L70 140 L95 100 L120 138 L160 118 L190 132 L225 92 L250 128 L290 110 L330 136 L360 102 L392 132 L430 118 L470 140 L505 96 L535 130 L580 112 L620 138 L655 104 L690 128 L730 116 L770 138 L805 90 L835 126 L880 110 L920 136 L955 100 L985 130 L1030 116 L1070 140 L1105 98 L1135 128 L1180 112 L1220 136 L1255 104 L1290 130 L1330 118 L1370 138 L1405 106 L1440 132 L1440 220 L0 220 Z"
        />
        <path
          className="trees-near"
          d="M0 190 L30 176 L55 184 L80 150 L100 172 L130 162 L150 180 L175 140 L200 170 L235 158 L265 182 L290 146 L315 176 L350 166 L380 184 L410 150 L440 174 L475 160 L505 182 L535 144 L560 172 L600 162 L630 184 L660 152 L690 176 L725 164 L755 184 L785 146 L810 172 L850 160 L880 182 L910 150 L935 174 L970 162 L1000 184 L1030 148 L1060 172 L1095 160 L1125 184 L1155 152 L1185 176 L1220 164 L1250 184 L1280 148 L1305 172 L1345 160 L1375 182 L1405 154 L1440 176 L1440 220 L0 220 Z"
        />
        <rect className="meadow" x="0" y="196" width="1440" height="24" />
      </svg>

      {/* festoon lights strung across the top */}
      <svg
        className="festoon absolute inset-x-0 top-0 w-full pointer-events-none"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={`M${WIRE.x0} ${WIRE.y0} Q${WIRE.cx} ${WIRE.cy} ${WIRE.x1} ${WIRE.y1}`}
          className="wire"
        />
        {BULBS.map((b, i) => (
          <g key={i} className="bulb" style={{ animationDelay: `${b.onDelay}s, ${b.onDelay + 0.4 + b.flickerDelay}s` }}>
            <line x1={b.x} y1={b.y} x2={b.x} y2={b.y + 10} className="bulb-cord" />
            <circle cx={b.x} cy={b.y + 18} r="14" className="bulb-glow" />
            <circle cx={b.x} cy={b.y + 18} r="6" className="bulb-glass" />
          </g>
        ))}
      </svg>

      {/* a follow-spot swings in from above and settles on the notice */}
      <div className="followspot absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      {/* the notice */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-[6vw] py-24 text-center notice">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-10 bg-gold opacity-70 max-[760px]:hidden"></span>
          <span className="font-mono text-[11px] tracking-[0.32em] max-[760px]:tracking-[0.2em] uppercase text-gold">
            University of East Anglia · Student Theatre
          </span>
          <span className="h-px w-10 bg-gold opacity-70 max-[760px]:hidden"></span>
        </div>

        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted mb-5">
          Under open skies
        </p>

        <h1 className="font-display font-extrabold leading-[1.04] tracking-[0.02em] [text-shadow:0_8px_60px_rgba(0,0,0,0.85)]">
          <span className="block text-bone text-[clamp(38px,7vw,104px)] whitespace-nowrap">Intermission</span>
        </h1>

        <p className="mt-7 font-display text-[clamp(16px,2vw,22px)] tracking-[0.12em] uppercase text-gold-bright">
          Our website is under construction
        </p>

        <p className="max-w-[38ch] mx-auto mt-6 text-[clamp(18px,2vw,23px)] leading-[1.45] text-bone-dim italic">
          The stage is being rebuilt beneath the stars. Normal service will resume soon.
        </p>

        <div className="flex items-center justify-center gap-3.5 mt-10 font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
          <span className="w-px h-9 bg-linear-to-b from-gold to-transparent animate-drip"></span>
          Bring a blanket
        </div>

        <p className="mt-12 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
          Enquiries ·{' '}
          <a
            href="mailto:contactus@theseustheatre.com"
            className="text-bone-dim transition-colors duration-300 hover:text-gold-bright"
          >
            contactus@theseustheatre.com
          </a>
        </p>
      </section>

      <footer className="absolute bottom-6 inset-x-0 z-10 text-center font-mono text-[11px] tracking-[0.14em] uppercase text-muted px-4">
        © 2026 Theseus Theatre — UEA
      </footer>
    </main>
  )
}
