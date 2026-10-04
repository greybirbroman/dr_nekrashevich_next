# Proposal

## Why

Native same-page links keep their fragment in the URL. On a reload, the browser may treat that fragment as the requested destination and move the page to that section, which matches the reported jump to the footer. The global manual scroll policy was aimed at the symptom and can interfere with normal browser history behavior.

## What Changes

- Return scroll restoration to the browser's `auto` behavior.
- On a reload only, remove a stale URL fragment before the browser applies it as a destination.
- Preserve fragments during ordinary navigation so anchor links and direct links to sections keep working.

## Capabilities

### New Capabilities
- `public-anchor-navigation`: Native anchor navigation remains available, while stale fragments do not redirect a page during reload.

### Modified Capabilities

## Impact

- `app/layout.jsx`: early reload detection, fragment removal, and restoration policy.
- Browser behavior for same-page fragments during reload and browser history traversal.
