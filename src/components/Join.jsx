const ROLES = [
  { i: '01', n: 'Act', d: 'Audition for our termly shows — leads to chorus, all welcome.' },
  { i: '02', n: 'Direct', d: 'Pitch a show. We back student directors with budget and a stage.' },
  { i: '03', n: 'Design', d: 'Set, costume, lighting, sound — make the world the play lives in.' },
  { i: '04', n: 'Backstage', d: 'Stage management, crew, props, front of house. The real magic.' },
]

export default function Join() {
  return (
    <section className="act" id="join" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
      <span className="ghost-num" aria-hidden="true">IV</span>
      <div className="wrap">
        <div className="act-head" data-reveal>
          <span className="act-num">Act IV</span>
          <h2 className="act-title">Join the <span className="thin">Company</span></h2>
        </div>
        <div className="join">
          <div className="join-copy" data-reveal>
            <div className="lead">There's a role for you — onstage or off of it.</div>
            <p>
              Whether you want to act, direct, build, light, or simply pull a pint at the bar on opening
              night, Theseus Theatre runs on people who turn up. Membership is open to every UEA student.
              No audition to join — just come and find us.
            </p>
            <a href="#" className="btn">Become a Member</a>
            <div className="meet">
              Weekly socials · <b>Thursdays 7pm</b> · The Blue Bar, UEA SU<br />
              Find us at the Societies Fair every September.
            </div>
          </div>
          <div className="roles" data-reveal data-delay="1">
            {ROLES.map((r) => (
              <div className="role" key={r.i}>
                <div className="ri">{r.i}</div>
                <div className="rn">{r.n}</div>
                <div className="rd">{r.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
