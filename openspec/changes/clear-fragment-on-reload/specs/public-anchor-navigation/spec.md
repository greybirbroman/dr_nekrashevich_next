# Spec Delta

## Purpose

Defines how native anchor links and browser history behave on the public site, including how stale fragments are handled when a visitor reloads the page.

## ADDED Requirements

### Requirement: Reload does not navigate to a stale fragment
The public site SHALL remove a URL fragment during a page reload before the browser applies it as an anchor destination, while preserving the path and query string.

#### Scenario: Reload a page with a fragment
- **WHEN** a visitor reloads the public page while its URL contains a fragment
- **THEN** the fragment is removed and the browser keeps its normal scroll-restoration behavior

#### Scenario: Open a section link without reloading
- **WHEN** a visitor follows a native anchor link or opens a URL with a fragment as a new navigation
- **THEN** the fragment remains and the browser navigates to the matching section

### Requirement: Browser handles history scroll restoration
The public site SHALL use the browser's automatic scroll restoration for history entries.

#### Scenario: Navigate backward or forward
- **WHEN** a visitor moves between page history entries
- **THEN** the browser restores the scroll position associated with the destination entry
