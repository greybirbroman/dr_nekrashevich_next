# Proposal

## Why

The app is pinned to an unsupported Next.js release, and static export conflicts with the existing 15-minute revalidation setting and the embedded Sanity Studio. This prevents the app from reliably delivering the automatic Sanity updates the editor depends on. The UI also lacks a consistent, contrast-safe design system and keyboard support for its menu and image viewer.

## What Changes

- Upgrade the Next.js, React, Sanity, and Tailwind toolchain to supported compatible releases and restore a working lint command.
- **BREAKING** Replace static export with a Node.js production runtime so Sanity content can revalidate automatically and `/studio` remains available.
- Add Sanity Live so published changes flow into an open site automatically, keep 900-second ISR as a fallback, make Sanity query failures preserve stale content instead of caching empty sections, and use optimized image delivery.
- Establish responsive semantic design tokens for color, type, spacing, and breakpoints; restore the preferred blue/cyan palette and correct low-contrast and undefined utility classes.
- Refine the mobile hero, inset the header, stabilize testimonial carousel cards, enlarge gallery viewing, and open the contact map in a full-screen dialog.
- Remove the Yandex Maps link from testimonial cards, cap the public content width at 1280px, serve gallery images at the highest practical quality, and let mobile carousel slides peek to the viewport edge.
- Restore restrained GSAP entrance motion with reduced-motion support while keeping all existing editorial copy and Sanity content unchanged; remove the hero contact CTA requested by the owner.
- Make the navigation and gallery viewer keyboard-operable and expose their state and controls to assistive technology.
- Reduce client-side rendering to components that need interaction, correct metadata, and render Sanity text safely.

## Capabilities

### New Capabilities

- `sanity-content-freshness`: Published Sanity changes flow into the production site through server-side revalidation without a static-site rebuild; the embedded Studio remains available at `/studio`.
- `accessible-site-interactions`: The responsive navigation and gallery viewer have semantic controls, keyboard operation, clear accessible names, and predictable focus behavior.
- `responsive-site-system`: Public sections share responsive design tokens and maintain readable contrast and layout across supported viewport sizes.

### Modified Capabilities

None. The repository has no existing capability specs.

## Impact

Affected areas include `package.json` and lockfile, Next and Tailwind configuration, App Router pages/layout/metadata, Sanity client and Studio setup, image handling, shared UI components, global styles, and project documentation. Production hosting must run the Node.js server; the current local runtime is Node 22.14.0. No deployment configuration is present in the repository.
