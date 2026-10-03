# Spec Delta

## Purpose

Ensures that the site's compact navigation and gallery image viewer can be operated with a keyboard and understood through assistive technology.

## ADDED Requirements

### Requirement: Responsive navigation exposes its state and supports keyboard operation
The navigation toggle MUST be a named native button that exposes whether its menu is expanded and can be operated with standard keyboard input.

#### Scenario: Keyboard opens and closes the menu
- **WHEN** a keyboard user focuses the menu button and presses Enter or Space
- **THEN** the menu toggles and the button's expanded state matches the menu visibility

#### Scenario: Escape closes the open menu
- **WHEN** the navigation menu is open and the user presses Escape
- **THEN** the menu closes and focus returns to the menu button

### Requirement: Gallery viewer behaves as a modal dialog
The gallery viewer MUST expose dialog semantics, keep keyboard focus within the open dialog, and provide a named close control.

#### Scenario: Keyboard opens and closes an image
- **WHEN** a user opens a gallery image and presses Escape
- **THEN** the dialog closes and focus returns to the image control that opened it

#### Scenario: Dialog controls are named
- **WHEN** assistive technology inspects the open viewer
- **THEN** it announces a modal dialog and exposes named close and previous/next controls
