import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CheckCircle2, RotateCcw, SkipForward, Target } from 'lucide-react';
import { getDecks } from './api/flashcardApi.js';
import { DeckSelector } from './components/DeckSelector.jsx';
import { Flashcard } from './components/Flashcard.jsx';
import { ProgressPanel } from './components/ProgressPanel.jsx';
import './styles/app.css';

function App() {
  const decks = useMemo(() => getDecks(), []);
  const [deckId, setDeckId] = useState(decks[0].id);
  const [difficulty, setDifficulty] = useState('all');
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [stats, setStats] = useState({ known: 0, review: 0 });

  const activeDeck = decks.find((deck) => deck.id === deckId);
  const cards = activeDeck.cards.filter((card) => difficulty === 'all' || card.difficulty === difficulty);
  const activeCard = cards[index] ?? null;

  function resetSession(nextDeckId = deckId, nextDifficulty = difficulty) {
    setDeckId(nextDeckId);
    setDifficulty(nextDifficulty);
    setIndex(0);
    setShowAnswer(false);
    setStats({ known: 0, review: 0 });
  }

  function advance(result) {
    setStats((current) => ({ ...current, [result]: current[result] + 1 }));
    setShowAnswer(false);
    setIndex((current) => Math.min(current + 1, cards.length));
  }

  return (
    <main className="app-shell">
      <section className="topbar">
        <div>
          <p className="eyebrow">Interview Practice</p>
          <h1>Flashcard Prep</h1>
        </div>
        <button className="icon-button" onClick={() => resetSession()} title="Reset session">
          <RotateCcw size={20} />
        </button>
      </section>

      <section className="workspace">
        <aside className="sidebar">
          <DeckSelector
            decks={decks}
            selectedDeckId={deckId}
            difficulty={difficulty}
            onDeckChange={(nextDeckId) => resetSession(nextDeckId, difficulty)}
            onDifficultyChange={(nextDifficulty) => resetSession(deckId, nextDifficulty)}
          />
          <ProgressPanel stats={stats} current={Math.min(index + 1, cards.length)} total={cards.length} />
        </aside>

        <section className="study-panel">
          {activeCard ? (
            <>
              <Flashcard card={activeCard} deckName={activeDeck.name} showAnswer={showAnswer} />
              <div className="actions">
                <button className="secondary" onClick={() => setShowAnswer((value) => !value)}>
                  <Target size={18} />
                  {showAnswer ? 'Show question' : 'Show answer'}
                </button>
                <button className="secondary" onClick={() => advance('review')}>
                  <SkipForward size={18} />
                  Review later
                </button>
                <button className="primary" onClick={() => advance('known')}>
                  <CheckCircle2 size={18} />
                  I know this
                </button>
              </div>
            </>
          ) : (
            <div className="complete-state">
              <h2>Session complete</h2>
              <p>Reset the deck or choose another category to keep practicing.</p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
