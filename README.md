# Interview Command Center

A consolidated React interview-preparation app combining the former Flashcard App and Chat Client ideas into one browser product.

## Features

- Smart interview flashcards for cybersecurity project management
- DoD 8140 / legacy 8570-oriented credential mapper flashcards
- Webcam preview for interview rehearsal
- Conference-room style chat simulations
- Interview coach chat with secure backend endpoint support
- Logic games for risk triage and dependency thinking
- Company mission, vision, values, seeded job description, and interview packet summary
- Legacy Java Swing/socket sources retained under `legacy/java/`

## Quick Start

```powershell
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## OpenAI Coach Integration

The browser does not store API keys. To connect a real OpenAI chat agent, expose a backend endpoint and set:

```powershell
$env:VITE_INTERVIEW_COACH_ENDPOINT='https://your-domain.example/api/interview-coach'
```

The endpoint should accept:

```json
{ "message": "string", "context": { "role": "string", "deck": "string" } }
```

And return:

```json
{ "reply": "string" }
```

Without that endpoint, the app uses a local safe fallback coach.

## Documentation

- [Architecture](docs/architecture.md)
- [Deployment Guide](docs/deployment-guide.md)
- [User Guide](docs/user-guide.md)
