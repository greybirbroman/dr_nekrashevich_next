## ADDED Requirements

### Requirement: Public UI follows the approved Figma Make UI-kit

The public site MUST expose and use centralized semantic tokens matching the approved clinic UI-kit: petrol `#174C55`, ice `#EEF6F7`, aquamarine `#C9E4E4`, white `#FFFFFF`, and slate `#52686D`; Prata display text; Manrope interface/body text; spacing steps of 4, 8, 12, 16, 24, 32, 48, 64, and 96px; radii of 8, 16, and 24px plus pill; the supplied soft shadow; and a maximum content width of 1240px.

#### Scenario: Visitor views the public page

- **WHEN** the public page is rendered at mobile or desktop width
- **THEN** the page uses the shared Figma palette and typography, remains readable and operable, and retains its existing content and interactions.

#### Scenario: Visitor interacts with a primary button

- **WHEN** a pointer hovers, a keyboard user focuses, or a button is disabled
- **THEN** the button shows the corresponding hover, focus, or muted disabled state from the UI-kit.
