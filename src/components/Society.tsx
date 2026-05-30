const STATS = [
  { n: 'All', t: 'Experience Levels Welcome' },
  { n: 'Open', t: 'Air · Outdoor Staging' },
  { n: 'Raw', t: 'Emotion, Stripped Back' },
  { n: 'Join In', t: 'Watch · Drink · Sing Along' },
]

export default function Society() {
  return (
    <section className="relative py-[clamp(90px,13vh,160px)] z-4" id="society">
      <span
        className="absolute right-[4vw] top-[-2vh] z-0 font-display font-black text-[clamp(180px,34vw,460px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(194,160,98,0.07)] pointer-events-none select-none"
        aria-hidden="true"
      >
        I
      </span>
      <div className="w-full max-w-7xl mx-auto px-[6vw]">
        <div className="flex items-baseline gap-5.5 mb-14" data-reveal>
          <span className="font-display font-bold text-[14px] tracking-[0.3em] text-gold">Act I</span>
          <h2 className="font-display font-bold text-[clamp(36px,5.4vw,78px)] leading-[1.04] tracking-[0.01em]">
            The <span className="text-bone-dim font-normal">Society</span>
          </h2>
        </div>
        <div className="grid grid-cols-[1.15fr_1fr] gap-17.5 items-start max-[1000px]:grid-cols-1 max-[1000px]:gap-11">
          <div data-reveal>
            <p className="text-[clamp(22px,2.6vw,32px)] leading-[1.45] text-bone">
              Theseus Theatre brings together theatre lovers of{' '}
              <strong className="text-gold-bright font-semibold">every experience level</strong> at
              the University of East Anglia — to perform and enjoy drama in the open air.
            </p>
            <p className="text-bone-dim mt-6.5 max-w-[52ch]">
              We strip scenes back to their raw emotion: short, charged pieces staged in outdoor spaces,
              with the craft of acting at the heart of it all. No sets to hide behind, no fourth wall to
              keep you out — just actors, an audience, and the charged air between them.
            </p>
            <div className="grid grid-cols-2 gap-px mt-12 bg-line border border-line max-[760px]:grid-cols-1">
              {STATS.map((s) => (
                <div className="bg-bg px-6.5 py-7" key={s.t}>
                  <div className="font-display font-bold text-[46px] text-gold-bright leading-none">{s.n}</div>
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted mt-3">{s.t}</div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal data-delay="1">
            <blockquote className="border-l-2 border-blood pl-7 py-[6px] font-display text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.3] text-bone">
              “Don't sit quietly in the dark. Watch, drink, eat and sing along — this is theatre you join.”
              <cite className="block mt-4 font-mono text-xs tracking-[0.2em] text-muted not-italic">— The Company</cite>
            </blockquote>
            <p className="text-bone-dim mt-[26px] max-w-[52ch]">
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
