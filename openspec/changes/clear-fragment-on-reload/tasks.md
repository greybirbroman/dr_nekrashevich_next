# Tasks

## 1. Reload and anchor behavior

- [x] 1.1 Update the root-layout bootstrap to clear fragments only on reload and restore `history.scrollRestoration` to `auto`; verify via production build.
- [x] 1.2 Verify with Chrome DevTools that reloading a page with a stale fragment does not jump to its target, a fresh `/#contact` navigation and in-page anchors still reach the section, and browser history uses `auto` restoration.
