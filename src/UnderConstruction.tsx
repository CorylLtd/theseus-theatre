// Temporary holding page shown while the site is under construction.
// Toggle it in src/main.tsx via UNDER_CONSTRUCTION.

export default function UnderConstruction() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg flex items-center justify-center">
      <div className="vignette"></div>
      <div className="grain"></div>

      {/* stage: spotlight pool and boards */}
      <div className="spotlight absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div className="stage-floor absolute inset-x-0 bottom-0 h-[18vh] pointer-events-none" aria-hidden="true"></div>

      {/* curtains */}
      <div className="curtain curtain-left" aria-hidden="true"></div>
      <div className="curtain curtain-right" aria-hidden="true"></div>
      <div className="pelmet" aria-hidden="true"></div>

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
          The house lights are down
        </p>

        <h1 className="font-display font-extrabold leading-[1.04] tracking-[0.02em] [text-shadow:0_8px_60px_rgba(0,0,0,0.85)]">
          <span className="block text-bone text-[clamp(38px,7vw,104px)] whitespace-nowrap">Intermission</span>
        </h1>

        <p className="mt-7 font-display text-[clamp(16px,2vw,22px)] tracking-[0.12em] uppercase text-gold-bright">
          Our website is under construction
        </p>

        <p className="max-w-[38ch] mx-auto mt-6 text-[clamp(18px,2vw,23px)] leading-[1.45] text-bone-dim italic">
          The set is being rebuilt behind the curtain. Normal service will resume soon.
        </p>

        <div className="flex items-center justify-center gap-3.5 mt-10 font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
          <span className="w-px h-9 bg-linear-to-b from-gold to-transparent animate-drip"></span>
          Please retain your ticket
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
