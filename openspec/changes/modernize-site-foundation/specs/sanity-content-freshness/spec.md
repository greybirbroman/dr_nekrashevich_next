# Spec Delta

## Purpose

Keeps published Sanity content available on the public site without requiring editors to request a static-site build, while retaining the existing embedded authoring route.

## ADDED Requirements

### Requirement: Published content updates in open sessions without a site rebuild
The public site MUST use Sanity Live to invalidate matching published-content cache entries and refresh open sessions automatically; 900-second server revalidation MUST remain as a fallback.

#### Scenario: Published content changes while a visitor is on the site
- **WHEN** a published Sanity document matches content queried by the open public page
- **THEN** the connected page refreshes the affected content without a full document reload or new deployment

#### Scenario: Visitor is not connected to Sanity Live
- **WHEN** the Live stream is disconnected and the page's 900-second cache interval expires
- **THEN** the next request refreshes the page from Sanity without requiring a new deployment

### Requirement: Content fetch failures do not replace valid content with empty sections
The system MUST distinguish a successful empty Sanity result from a failed content request and MUST retain the last successfully rendered page when background revalidation fails.

#### Scenario: Sanity is unavailable during background revalidation
- **WHEN** a content refresh fails after a page has been rendered successfully
- **THEN** the previously rendered page remains available and the failed refresh is observable in server logs

### Requirement: Sanity Studio remains available to editors
The production Node.js application MUST serve the Sanity Studio at `/studio` without including Studio code in the public page bundle.

#### Scenario: Editor opens the Studio route
- **WHEN** an editor navigates to `/studio`
- **THEN** the application loads the Sanity Studio route
