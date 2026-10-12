# ERA Residence — homepage

A recreation of the [ERA Residence](https://www.era-residence.com/) homepage, built with React, TypeScript and Vite.
It includes the preloader, the day/night hero, sliders, tabs, the location and architecture scroll sequences,
the mobile menu, the booking popup and the cookie notice, with responsive layouts for desktop, tablet and mobile.

## Stack

- React 19, TypeScript, Vite
- GSAP (ScrollTrigger, SplitText, CustomEase) for animation
- Lenis for smooth scrolling
- lottie-web for the animated footer logo
- oxlint and Prettier

## Requirements

- Node.js 20 or newer
- An [Adobe Fonts](https://fonts.adobe.com/) web project containing **Ambroise François Std** (Regular) and
  **Sloop Script Three** (Regular), used for the display and script type
- An internet connection when viewing the page (the two display fonts are served by Adobe Fonts)

## Setup

```bash
npm install
cp .env.example .env
```

In `.env`, set `VITE_ADOBE_FONTS_PROJECT` to your Adobe Fonts web project ID. This is the 7-character code in the
embed URL `https://use.typekit.net/<id>.css`.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Development server at http://localhost:5173/ |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Serve the production build at http://localhost:4173/ |
| `npm run typecheck` | Run the TypeScript compiler |
| `npm run lint` | Run oxlint |

## Local preview

```bash
npm run build
npm run preview
```

Then open http://localhost:4173/. The full intro animation plays on the first visit in a browser tab. Reloading in
the same tab plays the short version. Clear the `cookies` entry in local storage to show the cookie notice again.

## Project structure

```
index.html            page shell, metadata, font links
src/
  App.tsx             page composition
  sections/           homepage sections
  overlays/           preloader, cookie notice, menu, booking popup, floating tips
  components/         shared building blocks
  data/               content and responsive image sources
  motion/             animation and interaction logic
  styles/             stylesheets by area
public/assets/        images, videos, SVGs, Lottie file, body font, favicons
```

## Notes

- The booking form validates input but does not send data. Submissions show a local confirmation state.
- Links to pages other than the homepage point to the live ERA Residence site.

## Assets and fonts

The ERA Residence name, logo, photography, video, copy and design belong to ERA Residence and its designers. They are
included only to reproduce the homepage and are not licensed for reuse.
*Maison Neue Extended* (Milieu Grotesque) is a commercial typeface and requires its own web licence for any deployment.
*Ambroise François Std* and *Sloop Script Three* are served through Adobe Fonts under the project owner's subscription.
