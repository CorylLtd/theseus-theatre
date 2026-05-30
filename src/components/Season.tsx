// Public-domain paintings used as poster thumbnails in the prototype, served
// from their stable Wikimedia Commons file paths (same sources as the design).
const SHOWS = [
  {
    year: '2025',
    name: 'The Bacchae',
    by: 'After Euripides',
    poster: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bacchus_by_Caravaggio_1.jpg',
  },
  {
    year: '2024',
    name: 'Antigone',
    by: 'After Sophocles',
    poster: 'https://commons.wikimedia.org/wiki/Special:FilePath/Antigoneleigh.jpg',
  },
]

export default function Season() {
  return (
    <section className="relative py-[clamp(90px,13vh,160px)] z-[4]" id="season">
      <span
        className="absolute right-[4vw] top-[-2vh] z-0 font-display font-black text-[clamp(180px,34vw,460px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(194,160,98,0.07)] pointer-events-none select-none"
        aria-hidden="true"
      >
        III
      </span>
      <div className="w-full max-w-7xl mx-auto px-[6vw]">
        <div className="flex items-baseline gap-5.5 mb-14" data-reveal>
          <span className="font-display font-bold text-[14px] tracking-[0.3em] text-gold">Act III</span>
          <h2 className="font-display font-bold text-[clamp(36px,5.4vw,78px)] leading-[1.04] tracking-[0.01em]">
            The <span className="text-bone-dim font-normal">Season</span> Past
          </h2>
        </div>
        <div className="border-t border-line" data-reveal>
          {SHOWS.map((s) => (
            <div
              className="group relative grid grid-cols-[60px_78px_1fr_auto] gap-6.5 items-center py-5 px-2 border-b border-line cursor-pointer transition-[background,padding] duration-400 ease-curtain hover:pl-6.5 max-[760px]:grid-cols-[50px_1fr] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0 before:bg-linear-to-r before:from-blood/16 before:to-transparent before:transition-[width] before:duration-500 before:ease-curtain group-hover:before:w-full"
              key={s.name}
            >
              <div className="relative w-15 h-21 bg-black overflow-hidden border border-line transition-[border-color] duration-400 ease-curtain shadow-[0_6px_18px_rgba(0,0,0,0.5)] group-hover:border-gold">
                <img src={s.poster} alt={`${s.name} poster`} loading="lazy" className="w-full h-full block object-cover" />
              </div>
              <div className="relative font-mono text-[13px] text-gold max-[760px]:hidden">{s.year}</div>
              <div className="relative font-display font-semibold text-[clamp(22px,3vw,34px)] transition-colors duration-300 group-hover:text-gold-bright">
                {s.name}
              </div>
              <div className="relative font-mono text-[11px] tracking-[0.14em] uppercase text-muted text-right max-[760px]:hidden">
                {s.by}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
