# Deployment Guide

## Local Development

```powershell
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Production Build

```powershell
npm run build
npm run preview
```

The deployable static artifact is `dist/`.

## Static Hosting Targets

Use any static hosting platform:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Azure Static Web Apps

## GitHub Pages Example

```powershell
npm run build
```

Publish the `dist/` directory through your preferred GitHub Pages workflow.

## Backend API Upgrade Path

`src/api/flashcardApi.js` is the only data access boundary. To move seed data to a real API, replace `getDecks()` with a fetch call and keep the React components unchanged.
