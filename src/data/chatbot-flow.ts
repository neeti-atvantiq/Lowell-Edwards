export type Msg = { from: 'bot' | 'user'; text: string };
export type Quick = { label: string; key: string };
export type FlowNode = { reply: string; next?: Quick[] };

export const initialMsgs: Msg[] = [
  {
    from: 'bot',
    text: "Hello 👋 I'm here to help you find the right intercom system for your building. What type of property are you looking to secure?",
  },
];

export const initialQuicks: Quick[] = [
  { label: '🏠 Residential', key: 'residential' },
  { label: '🏢 Commercial', key: 'office' },
  { label: '💲 Pricing', key: 'pricing' },
  { label: '📋 Book a Survey', key: 'survey' },
];

export const flow: Record<string, FlowNode> = {
  residential: {
    reply:
      'Great — for residential apartment buildings, the ButterflyMX video intercom is our most popular recommendation. It includes mobile app entry, HD video calling, and a dedicated package delivery system so couriers can access a secure lobby. How many units does your building have?',
    next: [
      { label: '1–10 units', key: 'units_1_10' },
      { label: '11–50 units', key: 'units_11_50' },
      { label: '50+ units', key: 'units_50_plus' },
      { label: '💲 Get a quote', key: 'get_quote' },
    ],
  },
  office: {
    reply:
      'For commercial offices, we typically recommend the Akuvox face recognition system — touchless entry for staff, SIP/PBX integration, and full audit logs for compliance. Would you like to know more, or go straight to a quote?',
    next: [
      { label: 'Tell me more', key: 'office_more' },
      { label: '💲 Get a quote', key: 'get_quote' },
      { label: '📋 Book a survey', key: 'survey' },
    ],
  },
  pricing: {
    reply:
      "Pricing depends on your building size and requirements. A single-entry video intercom system typically starts around $1,000 installed, including hardware and labor. We'll give you an exact quote — free and with zero obligation.",
    next: [
      { label: '💲 Request a quote', key: 'get_quote' },
      { label: '📋 Book a site survey', key: 'survey' },
      { label: "What's included?", key: 'residential' },
    ],
  },
  survey: {
    reply:
      'We offer free site surveys for all projects. One of our engineers will visit your building, assess your entry points, and put together a detailed, line-item proposal. Would you like to arrange one?',
    next: [
      { label: 'Yes — book a survey', key: 'get_quote' },
      { label: '💲 Quote first please', key: 'get_quote' },
      { label: '📞 Call me instead', key: 'get_quote' },
    ],
  },
  units_1_10: {
    reply:
      'Perfect. For 1–10 units, a single-entry ButterflyMX setup is usually the best fit. We can provide an exact fixed quote based on your doorway and wiring layout.',
    next: [{ label: '💲 Get a quote', key: 'get_quote' }],
  },
  units_11_50: {
    reply:
      'Great. For 11–50 units, we typically recommend a multi-tenant ButterflyMX configuration with portfolio-level remote management and delivery access controls.',
    next: [{ label: '💲 Get a quote', key: 'get_quote' }],
  },
  units_50_plus: {
    reply:
      'Excellent. For 50+ units, we design a staged rollout with multi-entrance control, resident app onboarding, and centralized management for your full site.',
    next: [{ label: '💲 Get a quote', key: 'get_quote' }],
  },
  office_more: {
    reply:
      'Akuvox can combine face recognition, RFID, PIN, and mobile access in one system, with full audit logs and integration into your existing SIP/PBX environment.',
    next: [{ label: '💲 Get a quote', key: 'get_quote' }],
  },
  get_quote: {
    reply:
      'Great choice. Please tap Request a Quote in the page quote section and share your building details. Our team will return a tailored quote within 1 business day.',
    next: [{ label: 'Start over', key: 'restart' }],
  },
  restart: {
    reply: "No problem. What type of property are you looking to secure?",
    next: initialQuicks,
  },
};
