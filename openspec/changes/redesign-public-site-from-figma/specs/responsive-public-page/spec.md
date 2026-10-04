# Responsive public page

## ADDED Requirements

### Requirement: The public page follows the updated clinic design

The public home page MUST follow the Figma Make section composition and existing clinic UI-kit while preserving the Next.js data sources and established interactions.

#### Scenario: Visitor views the page at desktop width

- **WHEN** the viewport is wider than 1050px
- **THEN** header and section content share a centered container capped at 1240px with 48px minimum side gutters
- **AND** hero, services, reviews, works, and contact use the updated layout and full-width section surfaces

#### Scenario: Visitor views the page at tablet width

- **WHEN** viewport width is between 701px and 1050px inclusive
- **THEN** content uses 28px side gutters and adapts without a fixed-width overflow

#### Scenario: Visitor views the page at phone width

- **WHEN** viewport width is 700px or less
- **THEN** content uses 20px side gutters, text remains readable, and full-width backgrounds reach the viewport edges

#### Scenario: Visitor uses the public page

- **WHEN** the visitor opens the navigation, scrolls review/work content, opens the work gallery, or follows a contact link
- **THEN** existing keyboard, touch, focus, and anchor behavior remains available while the updated visual design is applied

#### Scenario: Visitor views CMS-backed sections

- **WHEN** reviews or work resources are returned by Sanity
- **THEN** the existing fetched content is rendered in the new card layouts; a successful empty response keeps the current empty state
