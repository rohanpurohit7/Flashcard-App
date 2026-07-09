export function DeckSelector({ decks, selectedDeckId, difficulty, onDeckChange, onDifficultyChange }) {
  return (
    <div className="panel">
      <h2>Deck</h2>
      <label>
        Topic
        <select value={selectedDeckId} onChange={(event) => onDeckChange(event.target.value)}>
          {decks.map((deck) => (
            <option key={deck.id} value={deck.id}>
              {deck.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Difficulty
        <select value={difficulty} onChange={(event) => onDifficultyChange(event.target.value)}>
          <option value="all">All levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    </div>
  );
}
