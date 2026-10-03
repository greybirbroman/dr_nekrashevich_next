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
