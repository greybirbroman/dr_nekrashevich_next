# Design

## Context

The root layout currently sets `history.scrollRestoration` to `manual` through a Next.js `beforeInteractive` inline script. Native section links use URL fragments. See `proposal.md` for the observed reload behavior.

## Goals / Non-Goals

**Goals:**
- Let the browser manage history scroll positions.
- Remove a stale fragment only for reload navigations, before the browser acts on it.
- Keep regular anchor and direct section navigation native.

**Non-Goals:**
- Replacing anchor links with custom scrolling.
- Changing section IDs, routes, or scroll animations.

## Decisions

- Keep an inline `next/script` in the root layout with `beforeInteractive`, because reload classification and fragment cleanup must run before hydration and before fragment positioning.
- Use the Navigation Timing entry's `type === 'reload'` to distinguish reloads from new and history navigations. When a reloaded URL has a fragment, use `history.replaceState` with the existing state and the current path plus query string to remove only the fragment.
- Set `history.scrollRestoration` to `auto`; this preserves the browser's normal back/forward restoration.
- Do not clear fragments for `navigate` or `back_forward`, preserving direct links and anchor navigation.

## Risks / Trade-offs

- **A visitor reloads while scrolled down** → automatic restoration may preserve that scroll position; this is native browser behavior and avoids overriding the user's current position. The cleanup only prevents a stale fragment from redirecting the reload.
- **The inline script runs after fragment positioning** → keep it in the root layout with `beforeInteractive` and verify the actual reload sequence in Chrome DevTools.
