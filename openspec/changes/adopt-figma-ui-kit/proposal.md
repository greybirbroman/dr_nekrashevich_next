# Proposal

## Why

The public site already uses a centralized Tailwind 4 theme, but its slate-blue palette, Nunito body font, and generic serif headings differ from the approved Figma Make UI-kit for this clinic. The site should use the same visual tokens so current and future sections stay consistent with the design.

## What Changes

- Map the site's semantic color tokens to the Figma palette: petrol `#174C55`, ice `#EEF6F7`, aquamarine `#C9E4E4`, white `#FFFFFF`, and slate `#52686D`.
- Load Prata for display headings and Manrope for interface and body text.
- Add the UI-kit spacing, radius, shadow, and 1240px content-width tokens.
- Apply the tokens to existing public components and states while preserving content and interactions.

## Out of Scope

- Rebuilding the page structure, changing editorial copy or Sanity content, or altering routes and interactions.
