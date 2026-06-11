'use client';
import { useState, useRef, useEffect } from 'react';
import { Msg, initialMsgs, initialQuicks, flow } from '@/data/chatbot-flow';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(initialMsgs);
  const [quicks, setQuicks] = useState(initialQuicks);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing, open]);

  const reply = (text: string, key?: string) => {
    setMsgs((m) => [...m, { from: 'user', text }]);
    setQuicks([]);
    setTyping(true);
    setTimeout(() => {
      const node = key ? flow[key] : undefined;
      const out = node
        ? node.reply
        : 'Thanks for reaching out. One of our team will get back to you shortly — or you can call us directly on 0800 123 4567 to speak with an engineer right now.';
      setMsgs((m) => [...m, { from: 'bot', text: out }]);
      if (node?.next?.length) setQuicks(node.next);
      else if (!node) setQuicks([
        { label: '📋 Book a survey', key: 'survey' },
        { label: '💷 Get a quote', key: 'get_quote' },
        { label: '🏠 Residential', key: 'residential' },
        { label: '🏢 Commercial', key: 'office' },
      ]);
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
        className="chat-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        type="button"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      <div className={`chat-bubble ${open ? 'open' : ''}`}>
        <div className="chat-head">
          <div className="chat-avatar">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <div className="chat-head-name">EntryPoint Support</div>
            <div className="chat-head-status">
              <span className="chat-status-dot" />
              Online — replies instantly
            </div>
          </div>
        </div>

        <div className="chat-msgs" ref={scrollRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              <div className="chat-bubble-msg">{m.text}</div>
            </div>
          ))}
          {typing && (
            <div className="chat-msg bot">
              <div className="typing-indicator">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        {quicks.length > 0 && (
          <div className="chat-quick-replies">
            {quicks.map((q) => (
              <button
                key={q.key}
                type="button"
                className="chat-quick"
                onClick={() => reply(q.label, q.key)}
              >
                {q.label}
              </button>
            ))}
          </div>
        )}

        <div className="chat-input-row">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your question…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
          <button className="chat-send" onClick={send} aria-label="Send" type="button">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22,2 15,22 11,13 2,9" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
