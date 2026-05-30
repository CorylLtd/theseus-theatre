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
    <section className="act" id="season">
      <span className="ghost-num" aria-hidden="true">III</span>
      <div className="wrap">
        <div className="act-head" data-reveal>
          <span className="act-num">Act III</span>
          <h2 className="act-title">The <span className="thin">Season</span> Past</h2>
        </div>
        <div className="season-list" data-reveal>
          {SHOWS.map((s) => (
            <div className="show-row" key={s.name}>
              <div className="show-thumb">
                <img src={s.poster} alt={`${s.name} poster`} loading="lazy" />
              </div>
              <div className="yr">{s.year}</div>
              <div className="nm">{s.name}</div>
              <div className="by">{s.by}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
