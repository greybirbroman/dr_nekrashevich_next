## 1. Shared responsive grid

- [x] 1.1 Add the shared 1240px `.site-container` with 48/28/20px gutters at the 1050px and 700px breakpoints.
- [x] 1.2 Replace nested per-section gutters with the shared container.
- [x] 1.3 Add regression coverage for the compiled gutter tokens and container rules.

## 2. Match the supplied Figma screens

- [x] 2.1 Rebuild the header and hero, including the three-line headline, portrait treatment, social links, and exact trust-strip labels.
- [x] 2.2 Recompose the about section and education timeline; implement the four service cards and three-column equipment row.
- [x] 2.3 Match the review and work headings, supporting text, cards, photo captions, and desktop/mobile layouts while preserving Sanity data and dialogs.
- [x] 2.4 Recompose the dark contact area into the headline/CTA and three reference columns; keep existing map, phone, email, social, schedule, footer, and anchor behavior.

## 3. Verify the result

- [x] 3.1 Add and run a regression check for required reference headings and content blocks; confirm it fails before implementation.
- [x] 3.2 Run the existing UI-kit test, lint, typecheck, and production build.
- [x] 3.3 Inspect full-page desktop and phone renders at 1440px and 390px; check 390, 700, 701, 1050, 1051, 1280, and 1440px for gutters, clipping, and horizontal overflow.
- [x] 3.4 Verify mobile navigation, review/work slider access, gallery dialog/focus return, map dialog, and contact links.

## 4. Mobile carousel and header corrections

- [x] 4.1 Keep the booking action before the menu button on phones while preserving the desktop header order.
- [x] 4.2 Extend gallery and review sliders to the right viewport edge, clip their left edge at the shared gutter, and preserve an end gutter after the final slide.
- [x] 4.3 Double both pagination bars while keeping their visible spacing.
- [x] 4.4 Verify the updated behavior in Chrome DevTools at phone and tablet widths.
