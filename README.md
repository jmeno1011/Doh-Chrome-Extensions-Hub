# Chrome Extensions Hub

A static Next.js project for hosting Chrome extension pages, project links, and privacy policies from a single JSON file.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output is generated in `out/`.

## Content

Update [`data/extensions.json`](./data/extensions.json) to add or edit extension entries. Each object drives:

- the home page card
- the extension detail page
- the privacy policy page
