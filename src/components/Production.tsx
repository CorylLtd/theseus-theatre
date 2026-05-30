import oedipusImg from '../assets/oedipus-rex.webp'
import { btn, btnGhost } from '../ui'

export default function Production() {
  return (
    <section className="relative py-[clamp(90px,13vh,160px)] z-[4] bg-bg2 border-y border-line" id="production">
      <span
        className="absolute right-[4vw] top-[-2vh] z-0 font-display font-black text-[clamp(180px,34vw,460px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(194,160,98,0.07)] pointer-events-none select-none"
        aria-hidden="true"
      >
        II
      </span>
      <div className="w-full max-w-7xl mx-auto px-[6vw]">
        <div className="flex items-baseline gap-5.5 mb-14" data-reveal>
          <span className="font-display font-bold text-[14px] tracking-[0.3em] text-gold">Act II</span>
          <h2 className="font-display font-bold text-[clamp(36px,5.4vw,78px)] leading-[1.04] tracking-[0.01em]">
            Next <span className="text-bone-dim font-normal">Production</span>
          </h2>
        </div>
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-16 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-11">
          <div
            className="group relative aspect-2/3 border border-line overflow-hidden bg-black max-[1000px]:max-w-105"
            data-reveal
          >
            <img
              src={oedipusImg}
              alt="Sophocles' Oedipus Rex — A New Production"
              className="w-full h-full object-cover object-center filter-[contrast(1.05)_saturate(0.95)] transition-transform duration-1200 ease-curtain group-hover:scale-[1.04]"
            />
          </div>
          <div data-reveal data-delay="1">
            <span className="font-mono text-xs tracking-[0.32em] uppercase text-gold">Next Production</span>
            <h3 className="font-display font-extrabold text-[clamp(46px,7vw,96px)] leading-[1.04] tracking-[0.01em] mt-[10px] mb-[4px]">
              Sophocles Season
            </h3>
            <p className="italic text-bone-dim text-[22px] mb-7.5">
              Opening the season — Sophocles' <em>Oedipus Rex</em>. You can't escape destiny; you can only face it.
            </p>
            <div className="grid grid-cols-[repeat(3,auto)] gap-9.5 mb-7.5 py-5.5 border-y border-line max-[760px]:grid-cols-2 max-[760px]:gap-[22px]">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1.5">Dates</div>
                <div className="font-display font-semibold text-[17px]">18–21 June</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1.5">Venue</div>
                <div className="font-display font-semibold text-[17px]">Open-Air · The Broad, UEA</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1.5">Director</div>
                <div className="font-display font-semibold text-[17px]">TBC</div>
              </div>
            </div>
            <p className="text-bone-dim max-w-[54ch] mb-8">
              A plague is strangling Thebes, and King Oedipus vows to hunt down the killer whose crime has
              poisoned the city. But every step toward the truth leads back to himself. Sophocles' towering
              tragedy of fate, pride and self-knowledge — stripped to its raw emotion and staged in the open
              air, with nowhere left to hide.
            </p>
            <div className="flex gap-4.5 flex-wrap items-center">
              <a href="#" className={btn}>Book Tickets</a>
              <a href="#join" className={btnGhost}>Audition</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
