const colHeading = 'font-mono text-[11px] tracking-[0.24em] uppercase text-muted mb-4'
const colText = 'block text-bone-dim text-[17px] mb-2'
const colLink = 'block text-bone-dim text-[17px] mb-2 transition-colors duration-300 hover:text-gold-bright'

export default function Footer() {
  return (
    <footer className="relative z-4 border-t border-line bg-bg2 pt-22.5 pb-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-[6vw]">
        <div
          className="font-display font-black text-[clamp(54px,16vw,240px)] leading-[0.9] tracking-[0.01em] text-transparent [-webkit-text-stroke:1px_rgba(194,160,98,0.32)] text-center mb-[70px]"
          data-reveal
        >
          THESEUS
        </div>
        <div className="flex justify-between flex-wrap gap-10">
          <div>
            <h4 className={colHeading}>The Company</h4>
            <p className={colText}>Theseus Theatre</p>
            <p className={colText}>University of East Anglia</p>
            <p className={colText}>Norwich · NR4 7TJ</p>
          </div>
          <div>
            <h4 className={colHeading}>Get in Touch</h4>
            <a href="mailto:contactus@theseustheatre.com" className={colLink}>contactus@theseustheatre.com</a>
            <a href="#" className={colLink}>Box Office</a>
            <a href="#" className={colLink}>Press &amp; Hire</a>
          </div>
          <div>
            <h4 className={colHeading}>Follow</h4>
            <a href="#" className={colLink}>Instagram</a>
            <a href="#" className={colLink}>UEA SU Page</a>
            <a href="#" className={colLink}>Newsletter</a>
          </div>
          <div>
            <h4 className={colHeading}>Quick Links</h4>
            <a href="#society" className={colLink}>The Society</a>
            <a href="#production" className={colLink}>The Production</a>
            <a href="#join" className={colLink}>Join Us</a>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-3.5 mt-17.5 pt-6.5 border-t border-line font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
          <span>© 2026 Theseus Theatre — UEA</span>
          <span>Made for the light · Norwich</span>
        </div>
      </div>
    </footer>
  )
}
