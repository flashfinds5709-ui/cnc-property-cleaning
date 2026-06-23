# C&C Property Care Implementation Plan

## Problem Statement
Build a one-page landing page for C&C Property Care, a Long Island New York power washing company. The page should be simple and not bulky, using green, blue, and white. It should include top tabs for Services and About Me, strong instant CTAs, many high-quality stock power-washing photos including before/after style pictures, call button for 631-401-7026, real Google Form consultation button, and real Gmail compose email button.

## Required Content
- Company name: C&C Property Care
- Services: Garbage cans, fences, driveways, wooden decks, custom inquiries
- Garbage cans text: first time customers get $10 per garbage can, after its $15 per garbage can
- About text: Carlo and Collin, cousins from Holtsville, wanting to make your property as clean as theirs.
- Why choose us dropdown text: young and ready to earn your business however necessary. we've helped maintain our parents property since we were young, and are ready to put the same effort into your property as if it were our own
- Service area: only Long Island, New York
- Notice: **Customer must provide access to water supply if required
- Uploaded C&C Property Care logo should be used wherever the brand mark appears.

## User Choices / Clarifications
- Google Form: use real Google Form link for now
- Email: use provided email propertycare.cnc@gmail.com
- Photos: use high-quality stock power-washing photos
- Tone: simple and not too bulky
- Logo: use uploaded logo wherever the current brand mark appears

## Phase 1: Core POC
Skipped. This is a static one-page marketing site with placeholder outbound links and no external API integration requiring isolated validation.

## Phase 2: Main Landing Page Development
User stories:
1. As a visitor, I can immediately understand C&C Property Care offers power washing on Long Island.
2. As a visitor, I can call 631-401-7026 from a prominent CTA.
3. As a visitor, I can click Book a Consultation and be routed to the provided Google Form link.
4. As a visitor, I can click Email and open Gmail compose with propertycare.cnc@gmail.com prefilled.
5. As a visitor, I can navigate using Services and About Me tabs.
6. As a visitor, I can expand dropdowns for garbage cans, fences, driveways, wooden decks, and custom inquiries, each with relevant imagery.
7. As a visitor, I can see before/after style images and a clean simple layout.
8. As a visitor, I can read the About Me section and always-visible Why choose us content.
9. As a visitor, I can see the Long Island only operating area and bold asterisk water supply notice.
10. As a visitor, all dropdowns are closed until I click on them.
11. As a visitor, Call, Book, and Email CTA buttons appear next to each other on desktop and mobile.
12. As a visitor, I can see the uploaded C&C Property Care logo in the brand mark location.

## Testing Plan
- Lint/build frontend.
- Testing Agent should verify nav tabs, CTAs, dropdowns, required text, images, responsive visible layout, logo display, and no console/runtime errors.

## Current Status
- Phase 1: Skipped intentionally; no complex core integration.
- Phase 2: Completed.
- Frontend lint passed.
- Frontend production build passed.
- Preview 502 was fixed by patching craco.config.js dev server deprecated option compatibility.
- Testing Agent completed end-to-end validation with 100% frontend success and no open issues.
- Update complete: all service dropdowns and Why choose us dropdown are now closed by default; Testing Agent confirmed 100% success.
- Update complete: Call, Book, and Email buttons now display side-by-side in hero, final CTA, and mobile quick CTA bar; Testing Agent confirmed 100% success.
- Update complete: uploaded C&C Property Care logo integrated in the brand mark location; Testing Agent confirmed 100% success.
- Update complete: consultation buttons now use the provided Google Form URL https://forms.gle/11TXTAgdrrRsnP749; Testing Agent confirmed 100% success.
- Update complete: green checkmark bullet rows/text removed from all service dropdowns; Testing Agent confirmed 100% success and unused bullet data/styles were cleaned up.
- Update complete: Why choose us is now static always-visible content instead of a dropdown; Testing Agent confirmed 100% success.

- Update complete: email CTAs now use propertycare.cnc@gmail.com; Testing Agent confirmed 100% success.

- Update complete: added richer blue/green color accents across the site while keeping the layout simple; Testing Agent confirmed 100% success.
- Update complete: added requested pressure/power washing keywords to visible page content and SEO metadata; Testing Agent confirmed 100% success.
- Update complete: converted frontend to fully static GitHub Pages-ready build with relative asset paths, local images/logo, no backend/API dependency, no Emergent badge/scripts/PostHog, and STATIC_HOSTING.md instructions; Testing Agent confirmed 100% success.
- Update complete: removed all call/email buttons and tel/mailto/Gmail links, kept Book buttons linked to https://forms.gle/11TXTAgdrrRsnP749, and added phone/email as static text in hero and footer; Testing Agent confirmed 100% success.
- Update complete: footer contact now shows propertycare.cnc@gmail.com first with (631) 401-7026 directly underneath; Testing Agent confirmed 100% success.







