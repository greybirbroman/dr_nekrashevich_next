# Design

## Context

See `proposal.md` and the three capability specs. The current home page is already a Server Component and reads Sanity data through a server client, but `output: 'export'` prevents the configured `revalidate = 900` behavior and omits the embedded Studio from `out/`. The app currently runs on Node 22.14.0. There is no checked-in deployment or CI configuration, so the runtime requirement must be documented for the hosting environment.

## Goals / Non-Goals

**Goals:**

- Use a supported Next.js server runtime that can serve both the public site and `/studio`.
- Reflect published Sanity changes in open sessions without a new site build, with 900-second ISR as a fallback.
- Move the public UI toward server rendering, with client code only for stateful interactions.
- Replace scattered Tailwind values with contrast-checked semantic tokens and consistent responsive rules.
- Keep public routes, Russian copy, Sanity document shapes, and the current clinic identity recognizable.
- Restore the previously preferred blue/cyan visual direction, improve the mobile hero composition, and give the header visible space above it.
- Prevent testimonial clipping and mobile height jumps, give gallery images the largest practical modal presentation, and open the map in a full-screen contact dialog.
- Cap public content at 1280px, remove the Yandex Maps control from testimonial cards, preserve original gallery source resolution with the highest configured Next image quality, and let mobile slider slides peek to the screen edge.
- Bring back restrained page entrance animations with GSAP, while honoring reduced-motion preferences.
- Treat existing copy and Sanity-authored text as owner-controlled; preserve it verbatim except for removing the hero contact CTA explicitly requested here.

**Non-Goals:**

- Changing Sanity datasets, production documents, or editorial content.
- Rewriting, proofreading, or otherwise changing visible copy or Sanity-authored values.
- Adding preview/draft mode, a booking backend, or new public routes.
- Changing hosting providers or deploying the site from this repository.
- Draft-mode preview and Visual Editing; live updates cover published content only.

## Decisions

1. **Use Node output, Sanity Live, and App Router ISR fallback.** Remove `output: 'export'`; keep `revalidate = 900` on the public page and use `next start` for production. This supports the embedded Studio and cache invalidation. Static export was considered, but it cannot provide ISR and does not include the Studio route.

2. **Upgrade the coupled framework stack together.** Target Next.js 16.3.8, React/React DOM 19.3.0, Sanity Studio 6.17, `next-sanity` 13, Tailwind CSS 4.3.3, and ESLint 10.11 with the official Next plugin and TypeScript ESLint config. Use Swiper 14.3.0 because the existing 11.x line is affected by a critical advisory. Keep every direct peer dependency compatible during installation. Next 16 and Sanity Studio 6 require Node 22.12 or newer. Follow the official major-version migration guidance and keep the current App Router APIs explicit rather than enabling Cache Components as an unrelated migration.

3. **Subscribe only to published Sanity changes.** Use `defineLive` from `next-sanity/live`, replace direct published-content fetches with `sanityFetch`, and mount `<SanityLive />` in the public site layout, not the Studio. Do not configure draft tokens or Visual Editing. Keep route-level 900-second ISR so visitors still receive updated content if the Live stream is unavailable. Document that production and local origins must be allowed in Sanity CORS settings.

4. **Separate the site shell from the Studio route without changing URLs.** Keep a minimal root layout for document language and global styles, move public Header/main/Footer composition into an `(site)` route-group layout, and keep `/studio` under the root layout. Route groups preserve `/` while preventing public chrome from wrapping the editor.

5. **Use Tailwind 4 CSS-first tokens.** Define semantic color, font, spacing, radius, and breakpoint tokens in the global stylesheet with `@theme`; use mobile-first minimum-width breakpoints. Retain CSS Modules for component-specific rules and avoid maintaining a parallel legacy Tailwind config once all custom values have migrated.

6. **Keep content on the server and isolate interaction.** Fetch and shape Sanity data in Server Components. Keep navigation state, gallery modal controls, carousel behavior, and map visibility in small Client Components. Replace router-based anchor handling with native links and CSS scroll behavior where possible.

7. **Use the framework image optimizer with Sanity transformations.** Restrict remote optimization to `cdn.sanity.io`; build width-aware image URLs with the existing Sanity image helper. This avoids sending the original asset for every viewport and preserves support for a Node runtime.

8. **Treat CMS fields according to their schema.** Testimonials are plain text in Sanity, so render them as text with preserved line breaks instead of injecting HTML. Let data-fetch errors reach Next's revalidation boundary, logging the failure while keeping the last successful ISR response available; reserve empty states for successful empty results.

9. **Use native controls and explicit focus management.** Implement the menu trigger and modal close/step controls as buttons with names and state. The modal receives dialog semantics, Escape handling, focus containment, and focus restoration. Reuse shared focus styles and verify color contrast against WCAG text thresholds.

10. **Restore the blue/cyan design direction with the existing semantic token system.** Use the prior slate-blue primary colors and a restrained cyan/blue accent scale. Keep tokens centralized in `styles/globals.css`; update component classes only where existing semantic tokens are insufficient. Do not edit section copy or CMS fields.

11. **Compose the mobile hero as a full-bleed image with readable overlaid content.** Preserve the current hero copy, remove the requested contact CTA, and keep the social links available. At larger widths, retain a balanced image-and-copy composition. Give the header a clear inset from the viewport top without obscuring its anchor target.

12. **Keep testimonial slides equal-height and visually unclipped.** Disable Swiper auto-height, stretch slides to the tallest card in the set, remove the card shadow that is cut off by the slider viewport, and show a partial next slide on mobile.

13. **Let the gallery dialog use nearly the full viewport while preserving each image's aspect ratio.** Keep the controls and caption usable on narrow screens; request the original Sanity asset at quality 100 rather than a derivative. Display it at its source dimensions on large screens and scale it down only when the viewport is smaller. Keep carousel thumbnails on Next's responsive optimizer.

14. **Open the contact map in a full-screen modal dialog.** Keep the map icon beside the contact links, use the shared native dialog with Escape and focus restoration, and size the embedded map to the dialog viewport with a neighborhood-level initial zoom. Do not render a second inline map below the contact details.

15. **Use GSAP for a small set of entrance effects in one client boundary.** Animate existing hero and section elements without changing text or order, clean up timelines on unmount, and skip animation when `prefers-reduced-motion: reduce` is active. Use the latest compatible 3.x package line; there is no GSAP 8 release.

16. **Constrain content and let mobile carousels bleed to the viewport edge.** Keep the public content grid at or below 1280px. On narrow viewports, show a visible portion of the next slide beyond the section gutter while clipping overflow at the viewport so the page itself does not gain horizontal scrolling.

17. **Keep review cards focused on review content.** Remove the Yandex Maps link from each testimonial card while preserving all review text and other Sanity values.

## Risks / Trade-offs

- **The production host may currently accept only static files** → the new deployment must run Node 22.12+ with `npm run build` and `npm run start`; document this as a release prerequisite. No hosting provider configuration exists in the repository.
- **Next, React, Sanity, and Tailwind all cross major versions** → apply official migration steps in small edits, preserve package lock determinism, and use production builds plus browser checks to catch integration issues.
- **React 19 Strict Mode may expose effect cleanup problems** → fix effects in the affected interaction components and validate them in development.
- **The Sanity Live stream requires an allowed origin** → document the CORS setting; if the stream is unavailable, the 900-second ISR fallback still refreshes the site on subsequent requests.
- **Using Next image optimization adds server work** → preserve responsive `sizes` and allowed quality values for thumbnails; serve the opened gallery source directly from Sanity at quality 100 and verify both source dimensions and delivery in the browser.
- **Entrance effects can delay content or cause a flash when JavaScript is unavailable** → keep content in server-rendered markup, use short opacity/transform effects only, clean up on unmount, and honor reduced motion.
- **Different testimonial content lengths can still make the entire carousel as tall as its longest slide** → size from the tallest card at the active breakpoint and keep all cards stretched to that shared track height.

## Migration Plan

1. Upgrade and validate the dependency set locally before changing production hosting.
2. Move the app to the Node runtime, keep `/studio`, and verify `npm run build` plus `npm run start` for `/`, `/studio`, and Sanity-backed sections.
3. Deploy to a Node-capable environment with Node 22.12 or newer and the existing Sanity project/dataset environment values. Keep the current release available until the public route and Studio pass a production smoke check.
4. Roll back by redeploying the previous application release if the new Node runtime or Studio route fails; do not publish the new static `out/` as the production site.
