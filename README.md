# Chrome Extensions Hub

A static Next.js site for managing Doh Kim's Chrome extension project pages and privacy policies in one place.

Extension metadata is maintained in [`data/extensions.json`](./data/extensions.json). The home page cards, extension detail pages, and privacy policy pages are generated from that JSON data.

## Project Overview

- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment format: Static Export
- Content management: Single JSON file
- Theme: Light/dark mode with the user's choice saved in `localStorage`
- Analytics: Vercel Analytics

## Main Pages

- `/`: Extension Gallery with cards for registered projects
- `/extensions/[slug]/`: Extension detail page
- `/extensions/[slug]/privacy/`: Privacy policy page for each extension

The project uses `output: "export"` and `trailingSlash: true` in `next.config.ts`, so it builds as a static site.

## Registered Projects

### Custom Cursor Extension

- Status: Published
- Platform: Chrome Extension
- Version: 1.0.0
- Category: Customization Tool
- Language: English
- Description: A simple demo extension that lets users change their cursor to an image or emoji.
- Detail page: `/extensions/custom-cursor-extension/`
- Privacy policy: `/extensions/custom-cursor-extension/privacy/`
- GitHub: <https://github.com/jmeno1011/custom-cursor-extension>
- Chrome Web Store: <https://chromewebstore.google.com/detail/custom-cursor-extension/klcadbnhcdfoodniepjbbndfoinpoemn>
- Privacy summary: The extension does not collect, store, transmit, or share personal data, usage analytics, or technical information. All functionality runs locally in the browser.

### YouTube ArrowDown Blocker

- Status: Published
- Platform: Chrome Extension
- Version: 1.0.0
- Category: YouTube Tool
- Language: English
- Description: Prevents accidental timeline rewinds on YouTube when the ArrowDown key is pressed.
- Detail page: `/extensions/youtube-arrowdown-blocker/`
- Privacy policy: `/extensions/youtube-arrowdown-blocker/privacy/`
- GitHub: <https://github.com/jmeno1011/YAB-extensions>
- Chrome Web Store: <https://chromewebstore.google.com/detail/youtube-arrowdown-blocker/mjnkchfgapbgnfjmanmlglffaedcepof>
- Privacy summary: The extension does not collect or share personal information, browsing history, technical identifiers, or usage analytics. It runs as a local content script that blocks the Arrow Down key event on YouTube watch pages.

### KeyVid

- Status: Published
- Platform: Chrome Extension
- Version: 1.0.0
- Category: Accessibility
- Language: English
- Description: Lets users control HTML5 video playback with keyboard shortcuts on websites they register.
- Detail page: `/extensions/keyvid/`
- Privacy policy: `/extensions/keyvid/privacy/`
- GitHub: <https://github.com/jmeno1011/Keyvid>
- Chrome Web Store: <https://chromewebstore.google.com/detail/keyvid/gmlicfoafekibamhnmdkcpcbicopjagf>
- Privacy summary: KeyVid does not collect personal or technical data. It stores only the user's registered website list in browser local storage and does not transmit it to external servers.

## Project Structure

```text
app/
  page.tsx                         # Home page
  layout.tsx                       # Shared layout, theme initialization, Analytics
  extensions/[slug]/page.tsx       # Extension detail page
  extensions/[slug]/privacy/page.tsx
components/
  ExtensionCard.tsx                # Project card on the home page
  hero-component.tsx               # Hero section
  layout-header.tsx                # Header and navigation
  layout-footer.tsx                # Footer and contact links
  privacy-policy.tsx               # Privacy policy renderer
  ThemeToggle.tsx                  # Light/dark mode toggle
data/
  extensions.json                  # Source data for extension entries
lib/
  extensions.ts                    # JSON lookup utilities
```

## Updating Content

To add a new extension or update an existing one, edit the array in [`data/extensions.json`](./data/extensions.json).

Each entry drives the following site content:

- Home page project card
- Extension detail page
- Chrome Web Store / GitHub / privacy policy links
- Privacy policy content and data practice summary table

Required fields:

- `id`, `name`, `slug`
- `category`, `status`, `platform`, `version`, `language`
- `description`, `longDescription`
- `github`, `chromeStore`, `privacyPath`
- `privacyPolicy`

## Development

```bash
npm install
npm run dev
```

After the development server starts, open the local URL printed in the terminal.

## Type Check

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

The static build output is generated in the `out/` directory.
