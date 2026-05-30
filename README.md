# Theseus Theatre — React

A React (Vite) implementation of the **Theseus Theatre** site — a dark, theatrical
single-page site for the UEA student theatre society. Faithfully recreated from the
HTML/CSS/JS prototype exported from Claude Design.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production build into dist/
npm run preview  # preview the build
```

## Structure

```
src/
  App.jsx                  # composes the page + wires interactions
  index.css                # all design tokens + styles (ported 1:1)
  assets/                  # theseus-hero.png, oedipus-rex.png
  hooks/useInteractions.js # scroll-reveals, nav docking, hero parallax
  components/
    Nav.jsx  Hero.jsx  Marquee.jsx
    Society.jsx (Act I)  Production.jsx (Act II)
    Season.jsx (Act III) Join.jsx (Act IV)  Footer.jsx
```

## Notes on the port

- **Design tokens, fonts, layout, and animations are ported verbatim** from the
  prototype: Cinzel display / EB Garamond body / Space Mono labels, the
  gold + blood palette on near-black, the film-grain + vignette overlays, the
  sliding marquee, scroll-reveal stagger, nav docking, and the hero scroll/mouse
  parallax.
- **The "Tweaks" panel was not carried over.** It was a Claude Design authoring
  affordance (live theme controls), not part of the website. The settings the
  design landed on are baked in as the defaults: gold accent, Cinzel headline,
  film grain on, footer line "Made for the light".
- **The `<image-slot>` drop-targets became plain `<img>` tags.** The hero and the
  Oedipus Rex poster are bundled local assets; the two Season thumbnails (The
  Bacchae / Antigone) load the same public-domain Wikimedia Commons paintings the
  prototype used. Swap them for your own posters in `src/components/Season.jsx`.
- Fonts load from Google Fonts via `index.html`; the two Season thumbnails load
  from Wikimedia Commons, so those need a network connection to appear.
