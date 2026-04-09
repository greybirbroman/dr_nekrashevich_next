# TypeScript Migration Phase 1 Design

## Goal

Introduce TypeScript into the project with a low-risk incremental setup, keeping the existing JavaScript application working while adding type safety to the Sanity data layer and project configuration.

## Scope

Phase 1 includes:

- adding TypeScript project infrastructure for Next.js
- moving path alias configuration from `jsconfig.json` to `tsconfig.json`
- keeping incremental compatibility through `allowJs`
- migrating the Sanity support layer from JavaScript to TypeScript:
  - `sanity/lib/client.js`
  - `sanity/lib/image.js`
  - `sanity/actions.js`
- defining minimal shared types needed for Sanity query results and JSON-backed content

Phase 1 excludes:

- migrating React UI components in `components/`
- migrating route files in `app/` from `.jsx` to `.tsx`
- typing every Sanity schema file
- introducing strict-mode cleanup across the whole repository

## Current Context

The project uses Next.js 13 with the App Router, JavaScript source files, and a small Sanity integration layer. Path aliases are currently configured in `jsconfig.json`. Data appears to flow from `sanity/actions.js` into `app/page.jsx`, while presentational React components consume the resulting objects.

This makes the Sanity layer the best first target for migration because it is relatively isolated, has clear boundaries, and provides immediate value through typed fetch results without forcing a broad React props migration.

## Approach Options

### Option 1: Incremental migration with `allowJs` and Sanity-first typing

Add TypeScript support while preserving `.js` and `.jsx` files, then convert the small data-access layer first.

Pros:

- lowest risk to the running app
- keeps migration scope narrow and reviewable
- gives immediate type coverage around external data
- works naturally with Next.js incremental TypeScript adoption

Cons:

- mixed JS and TS codebase for a while
- full type coverage is deferred to later phases

Recommendation: choose this option.

### Option 2: Broad migration of infrastructure plus all app entry files

Add TypeScript and also convert `app/*.jsx` and a first batch of shared components in the same pass.

Pros:

- larger visible migration step
- more type information available earlier in React boundaries

Cons:

- more chances of blocking on React props and client component typing
- harder to isolate failures
- larger review and rollback surface

### Option 3: Configuration-only rollout

Add TypeScript config and keep source files unchanged until a later pass.

Pros:

- nearly zero implementation risk
- fast setup

Cons:

- little practical benefit
- delays learning where real typing friction lives

## Approved Design

### Architecture

The repository will move to a hybrid JavaScript and TypeScript setup. TypeScript will be configured as the project-level type checker, but JavaScript files will continue to compile during the transition. This preserves delivery safety while allowing targeted file-by-file migration.

The first typed boundary will be the Sanity integration layer. That layer already centralizes external data access, which makes it a strong seam for introducing typed clients, image URL helpers, and typed query return values. React components can continue consuming the same runtime shapes until later phases convert them to typed props.

### File Strategy

Files to create:

- `tsconfig.json`
- `next-env.d.ts`
- `types/` file only if shared Sanity result types would otherwise be duplicated

Files to modify or replace:

- replace `jsconfig.json` with `tsconfig.json`
- rename `sanity/lib/client.js` to `sanity/lib/client.ts`
- rename `sanity/lib/image.js` to `sanity/lib/image.ts`
- rename `sanity/actions.js` to `sanity/actions.ts`

Files intentionally deferred:

- `app/layout.jsx`
- `app/page.jsx`
- client components under `components/`
- hooks and utility modules not needed for the Sanity layer

### Typing Strategy

Type coverage in this phase should be explicit but pragmatic.

- Prefer precise object types for fetched resources and testimonials when the query shape is known.
- Use narrow shared interfaces or type aliases instead of broad global model hierarchies.
- Prefer `unknown` plus local narrowing over leaking `any`.
- Accept temporary type assertions when required by third-party Sanity helpers, but keep them local to the integration layer.
- Keep TypeScript compiler settings permissive enough for incremental migration, not strict enough to force repository-wide cleanup in phase 1.

### Compiler Configuration

`tsconfig.json` should preserve the existing alias behavior and support Next.js defaults. It should include:

- path alias for `@/*`
- `allowJs: true`
- `checkJs: false`
- `noEmit: true`
- modern module resolution compatible with Next.js
- inclusion of `next-env.d.ts`, TypeScript files, and remaining JavaScript files that must stay part of the build

Strictness should be chosen to support useful checking inside new TypeScript files without breaking untouched JavaScript code.

### Data Contracts

The migration should codify the runtime shapes returned from Sanity for:

- resources
- testimonials
- image-like fields used by the image builder helper

If the JSON files in `data/` are directly imported by migrated TypeScript files, the migration may add small local interfaces for those payloads. If they are not part of the typed boundary in phase 1, they should remain unchanged.

### Error Handling

The phase should preserve current runtime behavior. No new user-facing loading or error states are required. If typing reveals ambiguous nullability from Sanity data, the code should reflect that explicitly in return types and preserve existing runtime assumptions unless a clear bug is discovered.

### Validation

Phase 1 is complete when:

- the project has a working `tsconfig.json`
- TypeScript recognizes migrated Sanity files
- existing JavaScript and JSX files continue to work through incremental compatibility
- the chosen verification commands pass:
  - `npx tsc --noEmit`
  - `npm run build` if the environment already supports a clean local build

## Risks And Mitigations

### Risk: Sanity helper typings are looser than the actual query result

Mitigation: define local result types around `fetch` calls and keep any unavoidable assertions isolated to helper files.

### Risk: Mixed JS/TS imports create friction during the transition

Mitigation: preserve existing import paths and let Next.js resolve renamed modules without changing consumers beyond what is required.

### Risk: Scope creep into React props and UI typing

Mitigation: explicitly defer component migration to phase 2 and keep this phase limited to infrastructure plus data access.

## Success Criteria

After this phase, the repository should have a stable TypeScript foundation and a typed Sanity data layer, with no requirement to finish the rest of the migration immediately. The next phase can then focus on `app/` routes and React component props from a stronger, typed data boundary.
