'use client';
import { useState, useRef, useEffect } from 'react';

type Msg = { from: 'bot' | 'user'; text: string };

const initialMsgs: Msg[] = [
  { from: 'bot', text: "Hi 👋 I'm here to help. What can I tell you about?" },
];

const initialQuicks = [
  { emoji: '🏠', label: 'Residential building', key: 'residential' },
  { emoji: '🏢', label: 'Office building', key: 'office' },
  { emoji: '💷', label: 'Pricing & quotes', key: 'pricing' },
  { emoji: '📋', label: 'Book a site survey', key: 'survey' },
];

const replies: Record<string, string> = {
  residential:
    "Great — for residential apartment blocks we usually recommend ButterflyMX. It includes mobile app entry for every resident, package delivery management, and a cloud dashboard for the manager. Would you like a quote?",
  office:
    "For commercial offices, Akuvox is typically the best fit — AI face recognition, SIP integration with your phone system, and multi-tenant support. Want me to arrange a survey?",
  pricing:
    "Pricing depends on the building size and the system you choose. The fastest way is a 30-second recommendation via our finder above, or use the quote form for a tailored price within 1 business day.",
  survey:
    "We can have an engineer visit your building — usually within a week. Please use the quote form below with your address and best time to visit.",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(initialMsgs);
  const [quicks, setQuicks] = useState(initialQuicks);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing]);

  const reply = (text: string, key?: string) => {
    setMsgs((m) => [...m, { from: 'user', text }]);
    setQuicks([]);
    setTyping(true);
    setTimeout(() => {
      const out = key && replies[key] ? replies[key] : "Thanks — one of our team will get back to you. For an instant answer, try the quote form below.";
      setMsgs((m) => [...m, { from: 'bot', text: out }]);
      setTyping(false);
    }, 700);
  };

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setInput('');
    reply(t);
  };

  return (
    <>
      <button
        className={`chat-fab ${open ? 'open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
      {open && (
        <div className="chat-panel">
          <div className="chat-head">
            <div className="chat-head-dot" />
            <div>
              <div className="chat-head-title">Lowell Edwards</div>
              <div className="chat-head-sub">Typically replies within minutes</div>
            </div>
          </div>
          <div className="chat-body" ref={scrollRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot chat-typing">
                <span /><span /><span />
              </div>
            )}
            {quicks.length > 0 && (
              <div className="chat-quicks">
                {quicks.map((q) => (
                  <button key={q.key} className="chat-quick" onClick={() => reply(q.label, q.key)}>
                    <span>{q.emoji}</span> {q.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="chat-foot">
            <input
              className="chat-input"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
            />
            <button className="chat-send" onClick={send} aria-label="Send">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
