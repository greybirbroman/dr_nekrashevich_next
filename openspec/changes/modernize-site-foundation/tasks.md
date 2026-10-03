# Tasks

## 1. Runtime and framework foundation

- [x] 1.1 Upgrade Next.js, React, Sanity, `next-sanity`, Tailwind, Swiper, and their PostCSS/ESLint integrations to the compatible supported versions in `design.md`; verify installation and peer dependencies with `npm ls`.
- [x] 1.2 Move production output to the Node.js runtime, configure optimized Sanity images, replace the removed `next lint` workflow with ESLint CLI, document Node 22.12+ deployment and commands in `README.md`, and verify `npm run lint`, `npm run typecheck`, and `npm run build`.

## 2. Sanity content and route architecture

- [x] 2.1 Split the root document layout from the public `(site)` layout while preserving `/` and `/studio`; verify the build contains both routes and Studio no longer renders inside public Header/Footer chrome.
- [ ] 2.2 Configure published-only Sanity Live with `sanityFetch`/`SanityLive`, retain 900-second ISR fallback, distinguish empty results from fetch errors, document required Sanity CORS origins, and verify the Live connection plus refreshed server content without a new build. Local Live verification remains pending until Sanity allows `http://127.0.0.1:3002` in its CORS list.
- [x] 2.3 Use the Sanity image helper to generate width-aware CDN URLs and render testimonial content according to its plain-text schema; verify optimized image responses and confirm no user-authored value is inserted as raw HTML.

## 3. Responsive visual system

- [x] 3.1 Migrate Tailwind customization to CSS-first semantic theme tokens and mobile-first breakpoints; verify every project-specific utility is generated and obsolete/undefined classes are removed.
- [x] 3.2 Refine public sections and shared controls with the preferred blue/cyan palette, type scale, spacing, and focus styles; document the design tokens and verify contrast and layouts at 320, 390, 768, 1280, and 1440 CSS pixels.
- [x] 3.3 Restore the mobile hero composition, inset the header, remove the hero contact CTA, stabilize testimonial card height and clipping, and enlarge modal images; preserve all other existing copy and verify the affected responsive states.
- [x] 3.4 Open the contact map from its icon in an accessible viewport-filling modal, remove the Yandex Maps control from testimonial cards, constrain public content to 1280px, request full-resolution gallery sources at Sanity quality 100, and show a mobile slide peek beyond the section gutter without page overflow; verify at mobile and desktop breakpoints.

## 4. Server/client boundaries and interaction accessibility

- [x] 4.1 Keep page content and static footer data server-rendered, isolate only navigation/map/carousel state, and replace router-driven anchor scrolling with native links; verify the homepage retains its content and only interactive islands hydrate.
- [x] 4.2 Implement a named native navigation button with `aria-expanded`, `aria-controls`, Escape handling, and focus restoration; verify opening, closing, outside click, and keyboard behavior in the browser.
- [x] 4.3 Make gallery images keyboard-operable and the viewer a labelled modal dialog with focus containment, Escape close, named controls, and focus restoration; verify the complete open/next/previous/close flow by keyboard.
- [x] 4.4 Give icon-only links and buttons accessible names, remove duplicate accessible text, and fix React key and image-dimension warnings; verify the accessibility tree and browser console on `/` and `/studio`.
- [x] 4.5 Restore restrained GSAP entrance effects in a minimal client boundary; verify effect cleanup and that reduced-motion preference disables animation.

## 5. Metadata and integration review

- [x] 5.1 Use Next.js Metadata API fields for Open Graph, Twitter, theme color, and canonical site URLs, and make sitemap timestamps stable; verify generated document metadata in the browser.
- [ ] 5.2 Run the production server and verify Sanity content freshness, `/studio`, keyboard navigation, gallery interaction, responsive layouts, image delivery, and hydration with Playwright; local Sanity Live remains blocked until the port 3002 origin is added in Sanity CORS.
- [x] 5.3 Verify the revised hero, header, testimonials, image modal, contact map dialog, and animation behavior in the browser at mobile and desktop sizes; record the Sanity CORS-dependent live refresh separately.
