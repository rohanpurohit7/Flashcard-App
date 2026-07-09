# Architecture

## Runtime Structure

```mermaid
flowchart TD
    Browser[Browser] --> React[React App]
    React --> API[flashcardApi]
    API --> Seed[Seed Deck Data]
    React --> DeckSelector[Deck Selector]
    React --> Flashcard[Flashcard Component]
    React --> Progress[Progress Panel]
```

## Module Responsibilities

| Path | Responsibility |
| --- | --- |
| `src/main.jsx` | Application state, deck selection, review workflow, scoring |
| `src/api/flashcardApi.js` | API boundary for seed data now and backend integration later |
| `src/data/seedDecks.js` | Computer science and project management interview questions |
| `src/components/DeckSelector.jsx` | Deck and difficulty controls |
| `src/components/Flashcard.jsx` | Question/answer card rendering |
| `src/components/ProgressPanel.jsx` | Session progress and scoring display |
| `legacy/java` | Original Java Swing implementation retained for reference only |

## Review Workflow

```mermaid
flowchart LR
    Select[Select Deck] --> Filter[Choose Difficulty]
    Filter --> Question[Read Question]
    Question --> Answer[Show Answer]
    Answer --> Known[Mark Known]
    Answer --> Review[Review Later]
    Known --> Next[Next Card]
    Review --> Next
    Next --> Complete{Cards Left?}
    Complete -->|Yes| Question
    Complete -->|No| Summary[Session Summary]
```
