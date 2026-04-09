# TypeScript Migration Phase 2 Design

## Goal

Extend the incremental TypeScript migration from the Sanity data layer into the first React rendering boundary, while keeping the migration low-risk and explicitly avoiding the current client-side interactive components.

## Scope

Phase 2 includes:

- migrating `app/page.jsx` to `app/page.tsx`
- migrating the component barrel from `components/index.js` to `components/index.ts`
- migrating simple presentational React components that do not depend on `use client`
- introducing local prop types for the migrated presentational components
- reusing the Sanity data contracts already defined in `types/sanity.ts`

Phase 2 excludes:

- migrating `use client` components
- migrating React hooks and browser-only utilities
- migrating modal, slider, map, animation, and navigation interaction layers
- broad refactoring of component structure unrelated to TypeScript
- migrating every file under `components/` in one pass

## Current Context

Phase 1 already introduced `tsconfig.json`, typed Sanity client helpers, typed Sanity actions, and shared content types. The main server page in `app/page.jsx` already receives typed arrays from `getResourses()` and `getTestimonials()`, but that type information currently stops at the JavaScript boundary.

This makes the server page and simple presentational components the best next step. They can consume typed data and typed props without forcing immediate migration of the existing client-side interaction chain.

## Approach Options

### Option 1: Server-first and presentational-only migration

Convert the app entry page, the component barrel, and only simple stateless or server-safe presentational components.

Pros:

- preserves the low-risk shape of the migration
- moves type information into React props immediately
- avoids client-component typing friction
- keeps review size manageable

Cons:

- mixed TSX and JSX component tree remains for longer
- interactive UI still needs a later dedicated phase

Recommendation: choose this option.

### Option 2: Add a small batch of client components in the same phase

Convert the server page plus a few client components with relatively small prop surfaces.

Pros:

- larger migration step
- fewer mixed import boundaries sooner

Cons:

- higher risk of cascading type work in hooks and DOM/event handling
- harder to keep the phase narrowly scoped

### Option 3: Only migrate `app/page` and the component barrel

Keep most components in JSX and only move the entry point.

Pros:

- smallest possible diff
- almost no component-level migration risk

Cons:

- limited type propagation into the UI tree
- low value compared with the effort of opening a new migration phase

## Approved Design

### Architecture

Phase 2 will push the typed boundary one layer upward: from Sanity data access into the first React render boundary. The page component will become TypeScript, and its child props will become explicitly typed where the components themselves are migrated.

The migration remains hybrid by design. TypeScript files may continue importing JSX components that are not yet migrated. This is acceptable as long as the typed side owns the data contracts and prop interfaces at the boundaries it converts.

### File Strategy

Files expected to migrate in this phase:

- `app/page.jsx` → `app/page.tsx`
- `components/index.js` → `components/index.ts`
- selected presentational components without `use client`

Initial migration candidates:

- `components/AboutCard/AboutCard.jsx`
- `components/CardTitle/CardTitle.jsx`
- `components/SectionTitle/SectionTitle.jsx`
- `components/PrimaryButton/PrimaryButton.jsx`
- `components/Logo/Logo.jsx`
- `components/Footer/Footer.jsx`
- `components/HeroSection/HeroSection.jsx`

The exact set may shrink if a candidate unexpectedly depends on browser-only behavior or on a deep chain of unmigrated component contracts that would widen scope too much.

Files intentionally deferred:

- `components/Galery/Galery.jsx`
- `components/Testimonials/Testimonials.jsx`
- `components/Navigation/Navigation.jsx`
- `components/ModalWindow/*`
- `components/YandexMap/YandexMap.jsx`
- `components/Motion*`
- hooks, browser integrations, and other `use client` code

### Typing Strategy

Type the migrated components with narrow, local prop interfaces.

- Prefer explicit prop interfaces close to each component instead of one large global UI type file.
- Reuse `GalleryPoster` and `Testimonial` from `types/sanity.ts` where page-level data crosses into migrated components.
- For list-like card content, define small unions or interfaces that match actual JSON/content usage, not hypothetical future structures.
- Avoid `React.FC` unless an existing file already uses that pattern.
- Keep nullability honest at component boundaries; do not promise stricter props than current data actually guarantees.

### Boundary Rules

This phase should preserve existing runtime behavior.

- Do not redesign component APIs unless TypeScript requires a small normalization.
- Do not rename public exports unless a file rename requires import updates.
- Do not mix migration with visual changes or Tailwind cleanup.
- If a component pulls in too many additional dependencies, stop at the nearest safe boundary and leave it for a later phase.

### Validation

Phase 2 is complete when:

- the chosen server and presentational files are migrated to `.ts` or `.tsx`
- `app/page.tsx` compiles and consumes typed data from the Sanity layer
- the component barrel remains compatible with existing imports
- `npm run typecheck` passes
- `npm run build` passes in a normal local environment

## Risks And Mitigations

### Risk: seemingly simple presentational components hide client-only dependencies

Mitigation: treat the candidate list as tentative, and drop any component from this phase if it expands scope into hooks, DOM APIs, or client-only chains.

### Risk: prop types become stricter than current data or JSON usage

Mitigation: derive prop types from actual call sites and current content shapes, and verify against current imports rather than idealized component contracts.

### Risk: barrel migration breaks existing import ergonomics

Mitigation: keep export names unchanged and only update file extensions or import targets where TypeScript requires it.

## Success Criteria

After this phase, the project should have a typed page entry point and a first batch of typed presentational components, creating a stable bridge between the typed Sanity layer and the still-mixed UI layer. A later phase can then focus specifically on `use client` components, hooks, and event-driven UI logic.
