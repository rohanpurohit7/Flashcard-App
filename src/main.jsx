import React, { useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Brain, Camera, CheckCircle2, MessageSquare, RotateCcw, Send, ShieldCheck, Users } from 'lucide-react';
import { askInterviewCoach } from './services/coachService.js';
import { companyPacket, interviewDecks, logicGames, rooms } from './data/interviewContent.js';
import './styles/app.css';

function App() {
  const [deckId, setDeckId] = useState(interviewDecks[0].id);
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
  const [roomMessages, setRoomMessages] = useState([
    { id: 'r1', room: 'screening', author: 'panel', body: 'Welcome. Start with your cyber PM elevator pitch.' }
  ]);
  const [roomDraft, setRoomDraft] = useState('');
  const [coachMessages, setCoachMessages] = useState([
    { id: 'c1', author: 'coach', body: 'Ask for help framing interview answers, project examples, or certification stories.' }
  ]);
  const [coachDraft, setCoachDraft] = useState('');
  const [gameIndex, setGameIndex] = useState(0);
  const [gameAnswerVisible, setGameAnswerVisible] = useState(false);
  const [cameraState, setCameraState] = useState('off');
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const activeDeck = interviewDecks.find((deck) => deck.id === deckId);
  const activeCard = activeDeck.cards[cardIndex % activeDeck.cards.length];
  const activeRoom = rooms.find((room) => room.id === selectedRoom);
  const activeRoomMessages = roomMessages.filter((message) => message.room === selectedRoom);
  const activeGame = logicGames[gameIndex % logicGames.length];

  async function toggleCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setCameraState('off');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraState('on');
    } catch {
      setCameraState('blocked');
    }
  }

  function nextCard() {
    setShowAnswer(false);
    setCardIndex((value) => value + 1);
  }

  function sendRoomMessage() {
    const body = roomDraft.trim();
    if (!body) return;
    setRoomMessages((messages) => [
      ...messages,
      { id: `room-${Date.now()}`, room: selectedRoom, author: 'you', body },
      { id: `panel-${Date.now()}`, room: selectedRoom, author: 'panel', body: `Follow-up: connect "${body}" to measurable delivery impact.` }
    ]);
    setRoomDraft('');
  }

  async function sendCoachMessage() {
    const body = coachDraft.trim();
    if (!body) return;
    const userMessage = { id: `coach-user-${Date.now()}`, author: 'you', body };
    setCoachMessages((messages) => [...messages, userMessage]);
    setCoachDraft('');
    const reply = await askInterviewCoach(body, { role: companyPacket.role, deck: activeDeck.name });
    setCoachMessages((messages) => [...messages, { id: `coach-${Date.now()}`, author: 'coach', body: reply }]);
  }

  const packetSummary = useMemo(() => [...companyPacket.jobSummary, ...companyPacket.interviewFocus], []);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Consolidated Interview App</p>
          <h1>Interview Command Center</h1>
        </div>
        <div className="status-pill"><ShieldCheck size={18} /> Secure client boundary</div>
      </header>

      <section className="dashboard">
        <section className="panel packet-panel">
          <div className="section-title">
            <Brain size={20} />
            <h2>{companyPacket.company}</h2>
          </div>
          <p className="role">{companyPacket.role}</p>
          <div className="split">
            <div>
              <h3>Mission</h3>
              <p>{companyPacket.mission}</p>
            </div>
            <div>
              <h3>Vision</h3>
              <p>{companyPacket.vision}</p>
            </div>
          </div>
          <div className="values">
            {companyPacket.values.map((value) => <span key={value}>{value}</span>)}
          </div>
          <ul className="summary-list">
            {packetSummary.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </section>

        <section className="panel camera-panel">
          <div className="section-title">
            <Camera size={20} />
            <h2>Interview Camera</h2>
          </div>
          <video ref={videoRef} autoPlay muted playsInline />
          <button className="primary" onClick={toggleCamera}>{cameraState === 'on' ? 'Stop camera' : 'Start camera'}</button>
          <p className="hint">{cameraState === 'blocked' ? 'Camera permission was blocked by the browser.' : 'Video stays local in the browser.'}</p>
        </section>

        <section className="panel flashcard-panel">
          <div className="section-title">
            <CheckCircle2 size={20} />
            <h2>Smart Flashcards</h2>
          </div>
          <label>
            Deck
            <select value={deckId} onChange={(event) => { setDeckId(event.target.value); setCardIndex(0); setShowAnswer(false); }}>
              {interviewDecks.map((deck) => <option key={deck.id} value={deck.id}>{deck.name}</option>)}
            </select>
          </label>
          <article className="smart-card">
            <div className="card-meta">
              <span>{activeCard.category}</span>
              <span>{activeCard.difficulty}</span>
            </div>
            <h3>{showAnswer ? 'Answer' : 'Prompt'}</h3>
            <p>{showAnswer ? activeCard.answer : activeCard.prompt}</p>
            {showAnswer && <p className="learning">Key learning: {activeCard.learning}</p>}
          </article>
          <div className="actions">
            <button className="secondary" onClick={() => setShowAnswer((value) => !value)}>{showAnswer ? 'Hide answer' : 'Show answer'}</button>
            <button className="primary" onClick={nextCard}>Next card</button>
          </div>
        </section>

        <section className="panel room-panel">
          <div className="section-title">
            <Users size={20} />
            <h2>Conference Rooms</h2>
          </div>
          <select value={selectedRoom} onChange={(event) => setSelectedRoom(event.target.value)}>
            {rooms.map((room) => <option key={room.id} value={room.id}>{room.name}</option>)}
          </select>
          <p className="hint">{activeRoom.topic}</p>
          <div className="chat-window">
            {activeRoomMessages.map((message) => (
              <div className={`bubble ${message.author === 'you' ? 'local' : 'remote'}`} key={message.id}>
                <strong>{message.author}</strong>
                <p>{message.body}</p>
              </div>
            ))}
          </div>
          <div className="input-row">
            <input value={roomDraft} onChange={(event) => setRoomDraft(event.target.value)} placeholder="Answer the panel..." />
            <button className="icon-action" onClick={sendRoomMessage} title="Send room message"><Send size={18} /></button>
          </div>
        </section>

        <section className="panel coach-panel">
          <div className="section-title">
            <MessageSquare size={20} />
            <h2>Interview Coach</h2>
          </div>
          <div className="chat-window">
            {coachMessages.map((message) => (
              <div className={`bubble ${message.author === 'you' ? 'local' : 'remote'}`} key={message.id}>
                <strong>{message.author}</strong>
                <p>{message.body}</p>
              </div>
            ))}
          </div>
          <div className="input-row">
            <input value={coachDraft} onChange={(event) => setCoachDraft(event.target.value)} placeholder="Ask the OpenAI interview coach..." />
            <button className="icon-action" onClick={sendCoachMessage} title="Send coach message"><Send size={18} /></button>
          </div>
          <p className="hint">Configure `VITE_INTERVIEW_COACH_ENDPOINT` to connect a backend OpenAI agent securely.</p>
        </section>

        <section className="panel logic-panel">
          <div className="section-title">
            <RotateCcw size={20} />
            <h2>Logic Game</h2>
          </div>
          <h3>{activeGame.title}</h3>
          <p>{activeGame.prompt}</p>
          {gameAnswerVisible && <p className="learning">{activeGame.answer}</p>}
          <div className="actions">
            <button className="secondary" onClick={() => setGameAnswerVisible((value) => !value)}>{gameAnswerVisible ? 'Hide approach' : 'Show approach'}</button>
            <button className="primary" onClick={() => { setGameIndex((value) => value + 1); setGameAnswerVisible(false); }}>Next game</button>
          </div>
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
