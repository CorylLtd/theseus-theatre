import { btn } from '../ui'

const ROLES = [
  { i: '01', n: 'Act', d: 'Audition for our termly shows — leads to chorus, all welcome.' },
  { i: '02', n: 'Direct', d: 'Pitch a show. We back student directors with budget and a stage.' },
  { i: '03', n: 'Design', d: 'Set, costume, lighting, sound — make the world the play lives in.' },
  { i: '04', n: 'Backstage', d: 'Stage management, crew, props, front of house. The real magic.' },
]

export default function Join() {
  return (
    <section className="relative py-[clamp(90px,13vh,160px)] z-4 bg-bg2 border-t border-line" id="join">
      <span
        className="absolute right-[4vw] top-[-2vh] z-0 font-display font-black text-[clamp(180px,34vw,460px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(194,160,98,0.07)] pointer-events-none select-none"
        aria-hidden="true"
      >
        IV
      </span>
      <div className="w-full max-w-7xl mx-auto px-[6vw]">
        <div className="flex items-baseline gap-5.5 mb-14" data-reveal>
          <span className="font-display font-bold text-[14px] tracking-[0.3em] text-gold">Act IV</span>
          <h2 className="font-display font-bold text-[clamp(36px,5.4vw,78px)] leading-[1.04] tracking-[0.01em]">
            Join the <span className="text-bone-dim font-normal">Company</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-17.5 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-11">
          <div data-reveal>
            <div className="text-[clamp(24px,3vw,36px)] font-display font-semibold leading-[1.2]">
              There's a role for you — onstage or off of it.
            </div>
            <p className="text-bone-dim mt-6 mb-8 max-w-[46ch]">
              Whether you want to act, direct, build, light, or simply pull a pint at the bar on opening
              night, Theseus Theatre runs on people who turn up. Membership is open to every UEA student.
              No audition to join — just come and find us.
            </p>
            <a href="#" className={btn}>Become a Member</a>
            <div className="font-mono text-[13px] text-bone-dim border-t border-line mt-[30px] pt-5">
              Weekly socials · <b className="text-gold">Thursdays 7pm</b> · The Blue Bar, UEA SU<br />
              Find us at the Societies Fair every September.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-line border border-line max-[760px]:grid-cols-1" data-reveal data-delay="1">
            {ROLES.map((r) => (
              <div className="bg-bg px-6.5 py-7.5 transition-colors duration-400 hover:bg-surface" key={r.i}>
                <div className="text-gold font-mono text-[13px] mb-3.5">{r.i}</div>
                <div className="font-display font-bold text-[21px] text-bone">{r.n}</div>
                <div className="text-muted text-base mt-2">{r.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
