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

**Non-Goals:**

- Changing Sanity datasets, production documents, or editorial content.
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

## Risks / Trade-offs

- **The production host may currently accept only static files** → the new deployment must run Node 22.12+ with `npm run build` and `npm run start`; document this as a release prerequisite. No hosting provider configuration exists in the repository.
- **Next, React, Sanity, and Tailwind all cross major versions** → apply official migration steps in small edits, preserve package lock determinism, and use production builds plus browser checks to catch integration issues.
- **React 19 Strict Mode may expose effect cleanup problems** → fix effects in the affected interaction components and validate them in development.
- **The Sanity Live stream requires an allowed origin** → document the CORS setting; if the stream is unavailable, the 900-second ISR fallback still refreshes the site on subsequent requests.
- **Using Next image optimization adds server work** → cap image widths and quality, provide responsive `sizes`, and verify generated URLs and response sizes in the browser.

## Migration Plan

1. Upgrade and validate the dependency set locally before changing production hosting.
2. Move the app to the Node runtime, keep `/studio`, and verify `npm run build` plus `npm run start` for `/`, `/studio`, and Sanity-backed sections.
3. Deploy to a Node-capable environment with Node 22.12 or newer and the existing Sanity project/dataset environment values. Keep the current release available until the public route and Studio pass a production smoke check.
4. Roll back by redeploying the previous application release if the new Node runtime or Studio route fails; do not publish the new static `out/` as the production site.
