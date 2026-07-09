export function Flashcard({ card, deckName, showAnswer }) {
  return (
    <article className="flashcard">
      <div className="card-meta">
        <span>{deckName}</span>
        <span>{card.category}</span>
        <span>{card.difficulty}</span>
      </div>
      <h2>{showAnswer ? 'Answer' : 'Question'}</h2>
      <p>{showAnswer ? card.answer : card.question}</p>
    </article>
  );
}
