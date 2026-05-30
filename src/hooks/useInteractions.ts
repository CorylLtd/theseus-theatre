import { useEffect, type RefObject } from 'react'

/**
 * Reveals every [data-reveal] element once it scrolls into view, mirroring the
 * original IntersectionObserver behaviour from the prototype.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/**
 * Docks the nav after the hero, drives the vertical hero parallax on scroll,
 * and the subtle mouse parallax on the hero figure — exactly as the prototype.
 */
export function useHeroMotion(
  navRef: RefObject<HTMLElement>,
  figRef: RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    const nav = navRef.current
    const fig = figRef.current

    const onScroll = () => {
      if (nav) {
        nav.classList.toggle('docked', window.scrollY > window.innerHeight * 0.7)
      }
      if (fig && window.scrollY < window.innerHeight) {
        const img = fig.querySelector('img')
        if (img) img.style.transform = `translateY(${window.scrollY * 0.12}px) scale(1.02)`
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!fig || window.scrollY > window.innerHeight) return
      const dx = e.clientX / window.innerWidth - 0.5
      const dy = e.clientY / window.innerHeight - 0.5
      fig.style.transform = `translate(${dx * -16}px, ${dy * -10}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [navRef, figRef])
}
