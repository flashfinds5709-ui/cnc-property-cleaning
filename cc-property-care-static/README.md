# C&C Property Care Static Website

This folder is a simple, GitHub Pages-ready static website. It does not require React, Node, a backend, MongoDB, Emergent, or any build step.

## File Structure

All core website files are in the repository root so GitHub Pages can understand and publish it easily.

```text
cc-property-care-static/
├── index.html              # Main homepage GitHub Pages loads first
├── styles.css              # All website styling in the root folder
├── main.js                 # Small optional JavaScript file in the root folder
├── README.md               # Publishing instructions
└── assets/
    ├── logo.png
    ├── hero-pressure-washing.jpg
    ├── service-garbage-cans.jpg
    ├── service-fences.jpg
    ├── service-driveways.jpg
    ├── service-wooden-decks.jpg
    ├── service-custom.jpg
    ├── proof-walkway-before.jpg
    ├── proof-house-after.jpg
    ├── proof-patio-after.jpg
    └── about-house.jpg
```

## How to Publish on GitHub Pages

1. Create a GitHub repository.
2. Copy the contents of this folder into the root of the repository.
3. Confirm these files are at the top level of the repo:
   - `index.html`
   - `styles.css`
   - `main.js`
   - `assets/`
4. Commit and push.
5. In GitHub: Settings → Pages.
6. Source: Deploy from branch.
7. Branch: `main`, folder: `/root`.
8. Save.

GitHub Pages will automatically load `index.html`.

## External Integrations Used

Allowed/simple external integrations only:
- Google Fonts for typography
- Google Form booking link: https://forms.gle/11TXTAgdrrRsnP749

No Emergent badge, PostHog, backend API, React build, or image CDN dependency is required.
