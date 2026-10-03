# Design: Figma Make one-page clinic site

## Source and goal

Reference: [Figma Make redesign](https://www.figma.com/make/Pumc8eV4u8wA7vQYd4RNZM/Redesign-one-page-website?t=Nw0jTzleMUEHyCOY-0), with the six desktop screenshots supplied in the task. Reproduce their section order, typography, alignment, and card treatments in the existing Next.js page. Preserve the site's real clinic details, Sanity content, metadata, and working interactions.

## Shared layout and visual system

- Use the existing Manrope/Prata typography, petrol and ice palette, and the shared `.site-container` capped at 1240px.
- Keep 48px side gutters above 1050px, 28px from 701px to 1050px, and 20px at 700px and below. Section surfaces remain full bleed.
- Switch the desktop composition on at 1051px so the 1050px tablet layout remains fluid inside its 28px gutters.
- Avoid fixed widths and forced line breaks that can overflow. At tablet and phone sizes, let headings, text, cards, and contact columns reflow.
- Use the pale ice page surface, a slightly darker mint service surface, white cards, fine mint dividers, and the dark petrol contact/footer surface.

## Reference composition

1. **Header and hero:** Logo on the left, four text links in the navigation, and a distinct underlined booking action on the right. The hero has the three-line headline “Бережно к зубам. / Внимательно / к вам.”, clinician name and introduction on the left, circular social links and the “Практикую с 2013 года” note below. On the right, show the grayscale portrait with the large upper-left corner, small appointment tag, and mint caption band. The navigation visible inside the reference screenshot is part of that image mockup and must not be recreated over the actual portrait. On phone widths, place the booking action before the menu button, keep the opened menu inside the shared container, and preserve the desktop order. Follow the hero with the three commitments “Понятный план лечения”, “Внимание к каждому пациенту”, and “Современные технологии” in one three-column row with star separators, matching the supplied phone screenshot.
2. **About and education:** Kicker “01 / ЗНАКОМСТВО”, title “Доверие начинается со знакомства.”, short first-person introduction and underlined action on the left. On the right show the two existing education records as year badges separated by thin horizontal rules; do not wrap them in a large card, and do not draw a divider below the last record.
3. **Services and equipment:** Kicker “02 / ЛЕЧЕНИЕ”, title “Забота в каждой детали.”, supporting copy at the right, four numbered treatment cards, and a separate three-column equipment row after a divider. Service cards share a white default surface and a pointer cursor across the whole card; on hover or keyboard focus each card smoothly lifts 12px and changes to the pale section-card color. Preserve all current specialization and equipment facts.
4. **Reviews:** Kicker “03 / ОТЗЫВЫ”, title “Когда становится спокойно.”, supporting copy at the right, then Sanity-backed white cards with five stars, “Яндекс Карты”, the review, divider, author/date, avatar initial, and a pale quote mark. Keep each card's author/date footer anchored to its bottom despite different review lengths, and leave bottom padding after the quote before the divider. Keep the current empty state and make all Sanity items reachable. On phones, use the shared one-sided right-bleed pattern and preserve the gutter after the final review card.
5. **Work gallery:** Kicker “04 / ПРАКТИКА”, title “Результат моей работы.”, supporting copy at the right, and three 4:3 photos per desktop view. Show the treatment label below each photo with a diagonal arrow; don't duplicate it over the image. Keep all Sanity items, the responsive slider, and the accessible image dialog. On phone widths, extend the gallery through the right page gutter to the viewport edge without horizontal page overflow, keep its clipped left edge at the shared content gutter during swipes, and retain the matching right gutter after the last slide. Both sliders use active and inactive pagination bars sized 24px and 12px, with the current visible gap.
6. **Contact and footer:** Full-width dark petrol background. Show “05 / ЗАПИСЬ НА ПРИЁМ”, the two-tone headline “Первый шаг к здоровой улыбке — просто написать.”, supporting copy, and a clinic call action. Below a divider use three unboxed columns: address/map/clinic hours, phone/email/direct contacts, and the clinician's weekday schedule. Fit the clinic call action to its content on phones. Finish with copyright, back-to-top, and the existing author/icon attribution. Social icon buttons stay in place on hover and change color with a transition.

## Implementation boundaries

- Keep the App Router and server-rendered Sanity fetches. Services and static presentation can remain server components; retain client boundaries only for existing menus, sliders, map, and gallery dialog.
- Keep existing route and anchor compatibility (`about`, `services`, `testimonials`, `galery`, `work`, `contact`, and `home`).
- Do not replace real contact/education/equipment content or Sanity reviews/gallery records with preview examples.

## Verification

- Check that the six section headings and reference blocks exist in the rendered page.
- Run the project checks and production build.
- In a real browser, inspect 1440px and 390px screenshots, then check container gutters and horizontal overflow at 390, 700, 701, 1050, 1051, 1280, and 1440px.
- Exercise the mobile navigation, review/work sliders, gallery dialog and focus return, map dialog, and contact links.
