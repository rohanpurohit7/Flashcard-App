# Deployment Guide

## Local Development

```powershell
npm install
npm run dev
```

## Production Build

```powershell
npm run build
npm run preview
```

The deployable artifact is `dist/`.

## Static Web Deployment

Deploy `dist/` to:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Azure Static Web Apps

## OpenAI Backend Deployment

For the coach chat, deploy a small backend endpoint:

```text
POST /api/interview-coach
```

Responsibilities:

- Store `OPENAI_API_KEY` only server-side.
- Validate request body.
- Rate-limit requests.
- Call the OpenAI Responses or Chat Completions API.
- Return `{ "reply": "..." }`.

Then configure the frontend:

```powershell
$env:VITE_INTERVIEW_COACH_ENDPOINT='https://your-domain.example/api/interview-coach'
npm run build
```

## Camera Requirements

Browser camera access requires HTTPS in production, except for localhost development.
