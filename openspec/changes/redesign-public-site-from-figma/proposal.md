# Change: implement the supplied Figma Make redesign

## Why

The current implementation does not reproduce the user's supplied Figma screens: headings and copy differ, important blocks are missing, cards and columns are arranged differently, and some layouts clip content. The user also identified excessive mobile side spacing in the earlier implementation.

## What changes

- Match the attached page composition across hero, trust strip, about/education, treatment/equipment, reviews, work gallery, and contact/footer.
- Retain the shared 1240px content cap and 48/28/20px desktop/tablet/phone gutters.
- Preserve existing clinic facts, Sanity-backed content, anchors, navigation, sliders, dialogs, and accessible behavior.
- Verify the rendered page at desktop and phone widths, including text and document overflow.

## Out of scope

- Sanity schemas, datasets, or editorial records.
- Booking backends, new routes, or deployment configuration.
- Legal, SEO, or hosting changes.
