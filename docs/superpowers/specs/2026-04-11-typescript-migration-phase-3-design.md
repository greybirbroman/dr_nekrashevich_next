# TypeScript Migration Phase 3 Design

## Goal

Migrate the first client-facing UI chain to TypeScript by converting the hero/social/motion boundary while keeping slider, modal, map, and state-heavy content sections out of scope.

## Scope

Phase 3 includes:

- migrating `components/HeroSection/HeroSection.jsx` to `components/HeroSection/HeroSection.tsx`
- migrating `components/SocialLinksBar/SocialLinksBar.jsx` to `components/SocialLinksBar/SocialLinksBar.tsx`
- migrating the small motion wrapper components used by this chain:
  - `components/MotionList/MotionList.jsx`
  - `components/MotionListItem/MotionListItem.jsx`
- migrating supporting constants and motion variants when needed:
  - `utils/constants.js`
  - `utils/motion.js`
- adding narrow local or shared types for social links and motion wrapper props

Phase 3 excludes:

- migrating `components/About/About.jsx`
- migrating `components/Testimonials/Testimonials.jsx`
- migrating `components/Galery/Galery.jsx`
- migrating `components/common/SimpleSlider/SimpleSlider.jsx`
- migrating modal, map, navigation, and contact-detail client flows
- migrating hooks under `utils/hooks/`
- redesigning animation behavior or Tailwind classes

## Current Context

Phase 1 established TypeScript infrastructure and typed the Sanity data layer. Phase 2 moved TypeScript into the server page, the component barrel, and selected presentational components. `HeroSection` was intentionally deferred because it imports `SocialLinksBar`, which imports `MotionList`, which is a `use client` component using `framer-motion`.

That deferred chain is now the right next target. It is client-facing, but still small enough to type without pulling in Swiper, modal state, or map/browser integration code.

## Approach Options

### Option 1: Hero, social links, and motion wrappers only

Convert `HeroSection`, `SocialLinksBar`, `MotionList`, `MotionListItem`, and their small utility dependencies.

Pros:

- resolves the deferred Phase 2 boundary
- keeps the scope small and reviewable
- introduces typed `framer-motion` wrapper props without touching all animations at once
- avoids Swiper, modal, and complex state handling

Cons:

- `About` still remains JSX even though it also uses `MotionListItem`
- more client components remain for later phases

Recommendation: choose this option.

### Option 2: Option 1 plus `About`

Convert the hero/social/motion chain and also migrate `About`, which already depends on `AboutCard` and `MotionListItem`.

Pros:

- improves coverage of an existing motion wrapper consumer
- moves one more main content section into TypeScript

Cons:

- requires typing `about-section.json` and list unions in a client component
- risks mixing motion wrapper migration with content-section data typing

### Option 3: Broad client migration

Convert `HeroSection`, `About`, `Testimonials`, `Galery`, sliders, modals, and hooks in the same phase.

Pros:

- large visible migration step

Cons:

- too much risk in one pass
- combines Swiper, modal state, image selection, hooks, motion variants, and JSON contracts
- harder to review and debug if behavior changes

## Approved Design

### Architecture

Phase 3 will migrate one coherent client-facing chain: hero content, social link rendering, and the small motion wrapper components required by that chain. This creates a typed path from the already-migrated `app/page.tsx` through `HeroSection` into animated social links.

The motion wrappers will stay intentionally small. They should type only the props currently used by the application: `children`, `variants`, `custom`, `className`, and `id` where applicable. They should not attempt to model the full `framer-motion` API or become general animation abstractions.

### File Strategy

Files expected to migrate:

- `components/HeroSection/HeroSection.jsx` → `components/HeroSection/HeroSection.tsx`
- `components/SocialLinksBar/SocialLinksBar.jsx` → `components/SocialLinksBar/SocialLinksBar.tsx`
- `components/MotionList/MotionList.jsx` → `components/MotionList/MotionList.tsx`
- `components/MotionListItem/MotionListItem.jsx` → `components/MotionListItem/MotionListItem.tsx`
- `utils/constants.js` → `utils/constants.ts`
- `utils/motion.js` → `utils/motion.ts`

Files intentionally deferred:

- `components/About/About.jsx`
- `components/Testimonials/Testimonials.jsx`
- `components/Galery/Galery.jsx`
- `components/common/SimpleSlider/SimpleSlider.jsx`
- `components/ModalWindow/*`
- `components/ContactDetails/ContactDetails.jsx`
- `components/Navigation/Navigation.jsx`
- `components/YandexMap/YandexMap.jsx`
- `utils/hooks/*`

### Typing Strategy

Use narrow types close to the migrated boundary.

- Define a `SocialLink` type in `utils/constants.ts` if it helps make `socialLinksList` explicit.
- Type SVG imports through the existing Next/SVGR setup without changing the asset pipeline.
- Type motion variants in `utils/motion.ts` using `Variants` from `framer-motion` where it matches the current objects.
- For dynamic variant functions such as `sectionListVariants.visible`, preserve the current `custom`-driven behavior and do not overgeneralize it.
- Type wrapper `children` as `ReactNode`.
- Type `className` as optional `string`.
- Type `custom` as `number | string | undefined` unless current usage requires a wider shape.

### Boundary Rules

This phase should preserve current behavior.

- Do not change animation variant values.
- Do not change social link URLs, labels, SVG assets, or Tailwind classes.
- Do not add or remove `use client` directives unless the migrated file already required the same client behavior.
- Do not pull `About`, `Testimonials`, or `Galery` into this phase just because they import a migrated dependency.
- If a utility migration causes unexpected type pressure in deferred components, prefer a narrow compatibility type rather than widening the phase.

### Validation

Phase 3 is complete when:

- the selected hero/social/motion files are migrated to `.ts` or `.tsx`
- the component barrel continues to resolve the migrated modules
- `app/page.tsx` still builds through the typed `HeroSection`
- `npm run typecheck` passes
- `npm run build` passes in a normal local environment

## Risks And Mitigations

### Risk: `framer-motion` typing becomes too broad or too strict

Mitigation: type only the wrapper props used by this codebase and use `Variants` for the current variant objects where compatible.

### Risk: migrating `utils/motion` affects deferred JSX components

Mitigation: keep exported names unchanged and preserve current variant object shapes so JSX consumers can continue importing them without type-driven refactors.

### Risk: social SVG imports need a different source type than expected

Mitigation: inspect the existing import behavior and type `icon` according to the value actually passed into the custom image wrapper.

### Risk: `HeroSection` migration drags in broader client code

Mitigation: keep `HeroSection` focused on its existing dependency chain and defer any unrelated client component typing to the next phase.

## Success Criteria

After this phase, the project should have a typed hero/social/motion client-facing slice. The next phase can then target content-heavy client sections such as `About`, followed by `Testimonials` and `Galery` with their slider, modal, and hook dependencies.
