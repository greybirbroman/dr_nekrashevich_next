# Design

## Context

The public site is a Next.js App Router application using Tailwind CSS 4 CSS-first theme tokens in `styles/globals.css`. Existing components already reference semantic utilities such as `text-primary`, `bg-brand-50`, `font-display`, and `shadow-soft`, so the theme can be migrated centrally without duplicating components.

## Decisions

1. Keep Tailwind's CSS-first theme and preserve existing semantic utility names.
2. Set primary/brand text and filled controls to petrol `#174C55`; use ice `#EEF6F7` for page surfaces, aquamarine `#C9E4E4` for accent surfaces, white for cards, and slate `#52686D` for secondary text. Use a darker petrol mix only for the existing filled-button hover state.
3. Load Manrope with Cyrillic coverage for site/body text and Prata for display headings through `next/font/google`. Keep the UI-kit's 16px / 1.7 body rhythm and 11px caption size.
4. Expose spacing steps 4, 8, 12, 16, 24, 32, 48, 64, and 96px; map site gutters to those steps. Use 8, 16, and 24px corner tokens and the provided soft shadow `0 12px 36px rgba(23, 76, 85, .06)`.
5. Cap public content at 1240px with the existing responsive grid behavior. Keep the current page content, CMS data, and interaction flows unchanged.
6. Align the primary button's hover, focus, and disabled states to the UI-kit and keep native button semantics.

## Risks

- A font fetch can affect a production build; the existing app already loads a Google font through `next/font`, and the production build will verify both requested fonts.
- Replacing global token values changes the full public site's appearance; check the page at mobile and desktop widths and verify contrast against the specified palette.
