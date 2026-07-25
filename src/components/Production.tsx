import archibaldImg from '../assets/archie.png'
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
          {/* Poster key art: Archibald Ingram, half man / half machine — the very
              thing the world mistakes for slop. Title anchored bottom over a scrim;
              the corner "A.I." monogram is the one wink. */}
          <div
            className="group relative aspect-2/3 border border-line overflow-hidden bg-black max-[1000px]:max-w-105"
            data-reveal
          >
            <img
              src={archibaldImg}
              alt="Archibald Ingram — half human, half machine"
              className="absolute inset-0 w-full h-full object-cover object-top filter-[contrast(1.05)_saturate(0.9)] transition-transform duration-1200 ease-curtain group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/15"
            ></div>
            <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-line/60"></span>
            <div className="relative h-full flex flex-col justify-between p-[clamp(22px,2.6vw,36px)]">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bone-dim [text-shadow:0_2px_18px_rgba(0,0,0,0.9)]">
                Theseus Theatre presents
              </span>
              <div>
                <div className="font-display font-black text-[clamp(34px,4.4vw,56px)] leading-[0.9] tracking-[0.01em] text-bone [text-shadow:0_4px_30px_rgba(0,0,0,0.92)]">
                  We&rsquo;re<br />Not<br />Sloppy<span className="text-gold-bright">!</span>
                </div>
                <div className="flex items-end justify-between gap-4 mt-5">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">September 2026</p>
                    <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-bone-dim mt-1.5">Open-Air · UEA</p>
                  </div>
                  <span
                    className="ai-monogram font-display font-bold text-[clamp(20px,2.4vw,30px)] leading-none tracking-[0.06em] text-gold-bright"
                    title="Archibald Ingram"
                  >
                    A.I.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div data-reveal data-delay="1">
            <span className="font-mono text-xs tracking-[0.32em] uppercase text-gold">Next Production</span>
            <h3 className="font-display font-extrabold text-[clamp(46px,7vw,96px)] leading-[1.04] tracking-[0.01em] mt-[10px] mb-[4px]">
              We&rsquo;re Not Sloppy!
            </h3>
            <p className="italic text-bone-dim text-[22px] mb-7.5">
              A modern tragedy of mistaken identity - a young designer, undone by two letters of his own name.
            </p>
            <div className="grid grid-cols-[repeat(3,auto)] gap-9.5 mb-7.5 py-5.5 border-y border-line max-[760px]:grid-cols-2 max-[760px]:gap-[22px]">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1.5">Dates</div>
                <div className="font-display font-semibold text-[17px]">September 2026</div>
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
              Archibald Ingram makes beautiful things. But he signs them the only way he knows how -
              with his initials, A.I. - and the world, too quick to judge, calls his life&rsquo;s work
              slop. One man, two letters, and a reputation dying by association. A comedy staged with the
              gravity of tragedy, about craft, name, and the machine we&rsquo;re all mistaken for.
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
