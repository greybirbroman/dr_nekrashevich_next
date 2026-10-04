# Spec Delta

## Purpose

Provides a coherent visual foundation for the public site so typography, spacing, color, and responsive layouts remain consistent as its sections are refined.

## ADDED Requirements

### Requirement: Public sections use a shared responsive visual system
The public site MUST use shared semantic tokens for typography, spacing, surfaces, and color, with mobile-first layouts that remain readable at narrow and wide viewport sizes.

#### Scenario: Visitor views the site on a narrow viewport
- **WHEN** the public page is rendered at a viewport width of 320 CSS pixels or wider
- **THEN** content remains readable and operable without page-level horizontal scrolling or clipped primary actions

### Requirement: Text and interactive states meet contrast requirements
Text MUST meet a contrast ratio of at least 4.5:1 for normal-sized text and 3:1 for large text, and interactive controls MUST provide a visible focus indicator.

#### Scenario: Visitor reads text on branded surfaces
- **WHEN** normal or large text is displayed on a public site surface
- **THEN** its foreground and background meet the corresponding minimum contrast ratio

#### Scenario: Keyboard user focuses an interactive control
- **WHEN** a keyboard user tabs to a link or button
- **THEN** the focused control has a visible focus indicator

### Requirement: Existing editorial copy is preserved during visual refactoring
Visual and layout changes MUST preserve current visible copy and Sanity-authored values verbatim, except for content the owner explicitly asks to remove.

#### Scenario: A component is restyled
- **WHEN** visual styles or layout are changed
- **THEN** its existing text and content order remain unchanged unless a specific removal is requested

### Requirement: Hero and header remain composed at mobile sizes
The mobile hero MUST preserve its established full-bleed visual composition, and the header MUST have visible top inset space without obscuring the page anchor.

#### Scenario: Visitor opens the home page on a phone
- **WHEN** the public page is rendered at a narrow viewport
- **THEN** the hero image and current introduction read as one intentional first screen, social links remain available, and the explicitly removed contact CTA is absent

### Requirement: Testimonial slides remain stable while changing slides
Testimonial cards MUST share a stable track height at the active viewport and MUST NOT have card surfaces or shadows clipped at the Swiper viewport.

#### Scenario: Visitor swipes testimonials on mobile
- **WHEN** the active testimonial changes
- **THEN** the carousel's card area does not jump to each card's individual height

### Requirement: Gallery images use the available dialog space
The image viewer MUST render the original Sanity asset at quality 100, preserving its source dimensions and aspect ratio on large screens while scaling down to fit smaller viewports. Dialog controls MUST remain usable.

#### Scenario: Visitor opens a gallery image
- **WHEN** an image is opened in the modal
- **THEN** the uncropped image uses its full source dimensions when they fit and scales down only as needed to fit the viewport

### Requirement: Contact map opens in a modal dialog
The contact map MUST open in an accessible viewport-filling dialog from the map control beside the contact links, use a useful neighborhood-level initial zoom, and MUST NOT render inline below the contact section.

#### Scenario: Visitor opens the map from the contact section
- **WHEN** the visitor activates the map control
- **THEN** a labelled dialog displays the map across the viewport, and Escape or the close control returns focus to the map control

### Requirement: Public content width and mobile slide overflow are constrained
The public content area MUST NOT exceed 1280 CSS pixels. On narrow viewports, carousels MUST show part of the next slide beyond the section gutter while the page remains free of horizontal scrolling.

#### Scenario: Visitor views a carousel on mobile
- **WHEN** the viewport is narrower than 768 CSS pixels
- **THEN** part of the next slide is visible through the right viewport edge and the document has no horizontal scrollbar

### Requirement: Testimonial cards omit the map control
Testimonial cards MUST NOT display a Yandex Maps control, while preserving review text and other authored values.

#### Scenario: Visitor views a testimonial
- **WHEN** a review card is rendered
- **THEN** its review content remains intact and it has no Yandex Maps link or button

### Requirement: Entrance motion respects user motion preferences
Decorative entrance animations MUST be restrained, preserve server-rendered content, and honor `prefers-reduced-motion`.

#### Scenario: Visitor requests reduced motion
- **WHEN** the operating system requests reduced motion
- **THEN** the public page content appears without entrance animation
