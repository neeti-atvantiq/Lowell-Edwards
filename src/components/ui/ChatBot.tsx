'use client';
import { useState, useRef, useEffect } from 'react';

type Msg = { from: 'bot' | 'user'; text: string };
type Quick = { label: string; key: string };
type FlowNode = { reply: string; next?: Quick[] };

const initialMsgs: Msg[] = [
  {
    from: 'bot',
    text: "Hello 👋 I'm here to help you find the right intercom system for your building. What type of property are you looking to secure?",
  },
];

const initialQuicks: Quick[] = [
  { label: '🏠 Residential', key: 'residential' },
  { label: '🏢 Commercial', key: 'office' },
  { label: '💷 Pricing', key: 'pricing' },
  { label: '📋 Book a Survey', key: 'survey' },
];

const flow: Record<string, FlowNode> = {
  residential:
    {
      reply:
        'Great — for residential apartment blocks, the ButterflyMX video intercom is our most popular recommendation. It includes mobile app entry, HD video calling, and a dedicated package delivery system so couriers can access a secure lobby. How many units does your building have?',
      next: [
        { label: '1–10 units', key: 'units_1_10' },
        { label: '11–50 units', key: 'units_11_50' },
        { label: '50+ units', key: 'units_50_plus' },
        { label: '💷 Get a quote', key: 'get_quote' },
      ],
    },
  office:
    {
      reply:
        'For commercial offices, we typically recommend the Akuvox face recognition system — touchless entry for staff, SIP/PBX integration, and full audit logs for compliance. Would you like to know more, or go straight to a quote?',
      next: [
        { label: 'Tell me more', key: 'office_more' },
        { label: '💷 Get a quote', key: 'get_quote' },
        { label: '📋 Book a survey', key: 'survey' },
      ],
    },
  pricing:
    {
      reply:
        "Pricing depends on your building size and requirements. A single-entry video intercom system starts from approximately £800 installed, including hardware and labour. We'll give you an exact quote — free and with zero obligation.",
      next: [
        { label: '💷 Request a quote', key: 'get_quote' },
        { label: '📋 Book a site survey', key: 'survey' },
        { label: "What's included?", key: 'residential' },
      ],
    },
  survey:
    {
      reply:
        'We offer free site surveys for all projects. One of our UK engineers will visit your building, assess your entry points, and produce a fully costed specification. Would you like to arrange one?',
      next: [
        { label: 'Yes — book a survey', key: 'get_quote' },
        { label: '💷 Quote first please', key: 'get_quote' },
        { label: '📞 Call me instead', key: 'get_quote' },
      ],
    },
  units_1_10: {
    reply:
      'Perfect. For 1–10 units, a single-entry ButterflyMX setup is usually the best fit. We can provide an exact fixed quote based on your doorway and wiring layout.',
    next: [{ label: '💷 Get a quote', key: 'get_quote' }],
  },
  units_11_50: {
    reply:
      'Great. For 11–50 units, we typically recommend a multi-tenant ButterflyMX configuration with portfolio-level remote management and delivery access controls.',
    next: [{ label: '💷 Get a quote', key: 'get_quote' }],
  },
  units_50_plus: {
    reply:
      'Excellent. For 50+ units, we design a staged rollout with multi-entrance control, resident app onboarding, and centralised management for your full site.',
    next: [{ label: '💷 Get a quote', key: 'get_quote' }],
  },
  office_more: {
    reply:
      'Akuvox can combine face recognition, RFID, PIN, and mobile access in one system, with full audit logs and integration into your existing SIP/PBX environment.',
    next: [{ label: '💷 Get a quote', key: 'get_quote' }],
  },
  get_quote: {
    reply:
      'Great choice. Please tap Request a Quote in the page quote section and share your building details. Our team will return a tailored quote within 1 business day.',
    next: [{ label: 'Start again', key: 'restart' }],
  },
  restart: {
    reply:
      "No problem. What type of property are you looking to secure?",
    next: initialQuicks,
  },
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
