export type ProductData = {
  slug: string;
  brand: string;
  brandSlug: string;
  model: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  meta: { value: string; unit: string; label: string }[];
  stats: { value: string; unit: string; label: string }[];
  features: {
    tag: string;
    title: string;
    body: string;
    icon: string;
  }[];
  useCases: {
    mark: string;
    title: string;
    desc: string;
    stats: { value: string; label: string }[];
  }[];
  specs: {
    category: string;
    rows: { key: string; value: string }[];
  }[];
  comparison: {
    headers: { brand: string; tag: string; featured?: boolean }[];
    rows: { feature: string; values: string[] }[];
  };
  testimonials: {
    quote: string;
    name: string;
    role: string;
    initials: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const products: Record<string, ProductData> = {
  'butterfly/video-intercom-panel': {
    slug: 'video-intercom-panel',
    brand: 'ButterflyMX',
    brandSlug: 'butterfly',
    model: 'Video Intercom Panel',
    eyebrow: 'ButterflyMX · Tier 2 — Smart Video Intercom',
    title: 'The smartphone-based intercom your residents already know how to use.',
    tagline: '— and the system property managers actually want to live with.',
    description: 'ButterflyMX replaces clunky wired intercoms with a cloud-based system that lets residents see, speak to, and grant access to visitors from anywhere — using the smartphone they already carry. We supply, install, and maintain it as a certified integrator.',
    image: '/images/products/butterfly/videocom.webp',
    meta: [
      { value: '10,000', unit: '+', label: 'Buildings worldwide' },
      { value: '4.8', unit: '/5', label: 'App store rating' },
      { value: '5', unit: 'yr', label: 'Hardware warranty' },
    ],
    stats: [
      { value: '10k', unit: '+', label: 'Buildings deployed' },
      { value: '99.9', unit: '%', label: 'Cloud uptime SLA' },
      { value: '<3', unit: 's', label: 'App-to-call response' },
      { value: '5', unit: 'yr', label: 'Hardware warranty' },
    ],
    features: [
      { tag: 'VIDEO CALLING', title: 'HD video calling to any smartphone, anywhere.', body: 'When a visitor presses a resident\'s name, the resident\'s phone rings — wherever in the world they are. They see the visitor in 1080p HD, speak to them, and grant access with a single tap.', icon: 'video' },
      { tag: 'SMARTPHONE-FIRST', title: 'No fobs, no cards, no extra hardware to lose.', body: 'Residents use their existing smartphone as their key. Open the door from the lock screen with a single swipe — works with iPhone, Android, Apple Watch, and Wear OS.', icon: 'smartphone' },
      { tag: 'DELIVERY', title: 'Delivery PINs that just work.', body: 'Couriers get one-time PINs delivered straight to the building. Every package drop is timestamped, video-logged, and traceable — no more "stolen" parcel disputes.', icon: 'package' },
      { tag: 'VISITOR LOG', title: 'Every visit, recorded.', body: 'Full audit log of every entry, exit, and granted access — searchable by resident, date, or unit. Property managers get the accountability that traditional intercoms never offered.', icon: 'log' },
      { tag: 'INTEGRATIONS', title: 'Plays nicely with everything.', body: 'Connects to property management systems (Yardi, RealPage, AppFolio), elevator controls, smart locks, and existing access control hardware. No rip-and-replace required.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Apartment Buildings', title: 'Multi-family residential.', desc: 'The most common deployment — apartment buildings where residents come and go all day. Every courier, friend, dog walker, and contractor gets vetted at the door.', stats: [{ value: '73%', label: 'Faster move-ins' }, { value: '12hr', label: 'Saved per week' }] },
      { mark: 'Mixed-Use & Commercial', title: 'Mixed-use developments.', desc: 'Buildings with both residential and commercial tenants need separate access flows for each. ButterflyMX handles tenant directories, business hours, and after-hours access policies.', stats: [{ value: '40%', label: 'Front-desk reduction' }, { value: '24/7', label: 'Visitor management' }] },
      { mark: 'Gated Communities', title: 'Gated communities & estates.', desc: 'Replace the security guard booth with cloud-managed video intercom at the gate. Residents grant access remotely, vehicle plates are logged, and after-hours access has full audit trails.', stats: [{ value: '$60k', label: 'Annual savings' }, { value: '100%', label: 'Entry traceability' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '8" capacitive multi-touch · 1280 × 800' },
        { key: 'Camera', value: '1080p HD · 156° wide-angle · IR night vision' },
        { key: 'Enclosure', value: 'Cast aluminium · IP65 · IK10 vandal-resistant' },
        { key: 'Operating temp', value: '−40°C to +60°C' },
        { key: 'Dimensions', value: '235 × 296 × 36 mm' },
        { key: 'Mounting', value: 'Surface-mount or flush-mount kit' },
      ]},
      { category: 'Software', rows: [
        { key: 'Resident apps', value: 'iOS 14+ · Android 9+ · Apple Watch · Wear OS' },
        { key: 'Manager dashboard', value: 'Web-based · all modern browsers' },
        { key: 'PMS integrations', value: 'Yardi · RealPage · AppFolio · Entrata · 30+' },
        { key: 'Cloud SLA', value: '99.9% uptime guarantee' },
        { key: 'Updates', value: 'Over-the-air, automatic' },
      ]},
      { category: 'Network', rows: [
        { key: 'Connection', value: 'PoE+ ethernet · Wi-Fi 5 · 4G/LTE failover' },
        { key: 'Bandwidth', value: 'Min 2 Mbps up/down per device' },
        { key: 'Encryption', value: 'TLS 1.3 · AES-256 (data at rest)' },
        { key: 'Cloud', value: 'AWS multi-region · ISO 27001 certified' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'ButterflyMX', tag: 'Cloud · Smart', featured: true },
        { brand: 'Traditional Intercom', tag: 'Wired · Legacy' },
        { brand: 'Other Cloud Systems', tag: 'Various' },
      ],
      rows: [
        { feature: 'Smartphone access (no fobs)', values: ['yes', 'no', 'yes'] },
        { feature: 'HD video to any device', values: ['yes', 'no', 'partial'] },
        { feature: 'Delivery PINs / one-time codes', values: ['yes', 'no', 'partial'] },
        { feature: 'Audit log / entry history', values: ['yes', 'no', 'yes'] },
        { feature: 'PMS integration', values: ['yes', 'no', 'partial'] },
        { feature: 'Remote access management', values: ['yes', 'no', 'yes'] },
        { feature: 'Hardware warranty', values: ['5 years', '1-2 years', '2-3 years'] },
        { feature: 'Typical install time', values: ['1 day', '3-5 days', '1-2 days'] },
      ],
    },
    testimonials: [
      { quote: 'Lowell Edwards installed ButterflyMX across 96 units in our Riverside Heights development. The team was on-site for one day, units came online instantly, and the resident onboarding was painless. Three years in, zero faults.', name: 'James Mitchell', role: 'Property Director · Riverside Heights', initials: 'JM' },
      { quote: 'Our front desk used to spend 60% of their time managing parcel deliveries. Since ButterflyMX, couriers handle themselves with delivery PINs and our staff is freed up for actual concierge work.', name: 'Sarah Roberts', role: 'Building Manager · Wellington House', initials: 'SR' },
      { quote: 'As a developer, I want hardware I won\'t have to rip out in 5 years. ButterflyMX has been the only system where the cloud platform keeps adding features without upgrading panels.', name: 'David Hartman', role: 'Director · Hartman Developments', initials: 'DH' },
    ],
    faqs: [
      { question: 'How long does installation take?', answer: 'For a typical 50-100 unit building, installation takes one full day. We usually arrive at 8am, the system is fully online by 4pm, and resident invitations go out the same evening.' },
      { question: 'Do you offer ongoing support after installation?', answer: 'Yes — every ButterflyMX install includes a 1-year installation guarantee from us, plus 5 years of hardware warranty from ButterflyMX directly. We also offer optional ongoing service contracts.' },
      { question: 'What if we already have an intercom system?', answer: 'In most cases, ButterflyMX can reuse your existing wiring (Cat5/Cat6) for power and the door strike circuit. The old panel is removed, the new ButterflyMX panel mounts in its place.' },
      { question: 'Can residents without smartphones still use it?', answer: 'Absolutely. Residents without smartphones can use a personal PIN code for entry, or an RFID fob. Visitors can also be connected to a landline phone via VoIP.' },
      { question: 'What happens if the internet goes down?', answer: 'PIN codes and RFID fobs continue to work offline — the panel caches valid credentials locally. Video calling pauses until internet is restored. We recommend pairing with our LTE failover service.' },
      { question: 'Is the data GDPR compliant?', answer: 'Yes. ButterflyMX is fully GDPR compliant. Data is encrypted in transit (TLS 1.3) and at rest (AES-256), hosted on AWS infrastructure, and SOC 2 Type II / ISO 27001 certified.' },
    ],
  },

  'butterfly/access-control-reader': {
    slug: 'access-control-reader',
    brand: 'ButterflyMX',
    brandSlug: 'butterfly',
    model: 'Access Control Reader',
    eyebrow: 'ButterflyMX · Tier 2 — Smart Access Control',
    title: 'Keyless entry that works for every tenant, every time.',
    tagline: '— RFID, keypad, and smartphone in one unified reader.',
    description: 'The ButterflyMX Access Control Reader combines keypad, RFID, and smartphone-based entry into a single sleek device. Installed at secondary entrances, garages, amenity areas, and stairwells — wherever you need controlled access without a full video intercom.',
    image: '/images/products/butterfly/access_control.png',
    meta: [
      { value: '3', unit: '-in-1', label: 'Access methods' },
      { value: 'IP65', unit: '', label: 'Weather rating' },
      { value: '5', unit: 'yr', label: 'Hardware warranty' },
    ],
    stats: [
      { value: '3', unit: '+', label: 'Access methods' },
      { value: '99.9', unit: '%', label: 'Cloud uptime' },
      { value: '<1', unit: 's', label: 'Unlock speed' },
      { value: '5', unit: 'yr', label: 'Warranty' },
    ],
    features: [
      { tag: 'MULTI-MODE', title: 'Three ways in — one device.', body: 'PIN code, RFID fob/card, or smartphone Bluetooth — residents choose how they enter. All three methods work simultaneously, no mode switching required.', icon: 'key' },
      { tag: 'CLOUD MANAGED', title: 'Add or revoke access in seconds.', body: 'Property managers control who can enter, when, and where — from any web browser. New tenants are activated instantly; ex-tenants are revoked in one click.', icon: 'cloud' },
      { tag: 'UNIFIED PLATFORM', title: 'Same app as the video intercom.', body: 'Residents don\'t need a separate app. Their ButterflyMX app handles both the front door video intercom and secondary access points seamlessly.', icon: 'smartphone' },
      { tag: 'SCHEDULING', title: 'Time-based access rules.', body: 'Set gym hours, restrict garage access overnight, allow cleaners entry only during business hours. All configurable from the cloud dashboard.', icon: 'clock' },
      { tag: 'AUDIT TRAIL', title: 'Know who entered, when, and where.', body: 'Every access event is logged with timestamp, method used, and location. Exportable reports for compliance, insurance, or disputes.', icon: 'log' },
    ],
    useCases: [
      { mark: 'Secondary Entrances', title: 'Side doors & service entrances.', desc: 'Not every door needs video — but every door needs access control. Readers at fire exits, loading bays, and secondary entrances complete the security perimeter.', stats: [{ value: '100%', label: 'Perimeter coverage' }, { value: '0', label: 'Dead-zone entries' }] },
      { mark: 'Amenity Spaces', title: 'Gyms, pools, rooftops.', desc: 'Control who accesses shared amenities and when. Schedule gym-only hours, restrict rooftop access to specific floors, and log every entry for liability.', stats: [{ value: '60%', label: 'Fewer access issues' }, { value: '24/7', label: 'Automated control' }] },
      { mark: 'Parking Garages', title: 'Underground & gated parking.', desc: 'Residents tap their phone as they approach, the barrier rises, and they drive through. No windows to roll down, no fobs to fumble for.', stats: [{ value: '<1s', label: 'Unlock speed' }, { value: '100%', label: 'Hands-free option' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Reader type', value: 'Multi-frequency RFID (125kHz + 13.56MHz)' },
        { key: 'Keypad', value: 'Backlit capacitive touch · 10 digits' },
        { key: 'Bluetooth', value: 'BLE 5.0 · smartphone proximity unlock' },
        { key: 'Enclosure', value: 'Die-cast zinc alloy · IP65 · IK08' },
        { key: 'Dimensions', value: '120 × 80 × 22 mm' },
        { key: 'Operating temp', value: '−30°C to +55°C' },
      ]},
      { category: 'Connectivity', rows: [
        { key: 'Connection', value: 'Wiegand 26/34 · RS-485 · TCP/IP' },
        { key: 'Power', value: '12-24V DC · <3W typical' },
        { key: 'Relay output', value: 'Dry contact · 2A @ 30V DC' },
        { key: 'Cloud sync', value: 'Real-time via building controller' },
      ]},
      { category: 'Compliance', rows: [
        { key: 'Certifications', value: 'CE · FCC · UL · RoHS' },
        { key: 'Data privacy', value: 'GDPR compliant · encrypted credentials' },
        { key: 'Cybersecurity', value: 'AES-128 encrypted RFID · rolling codes' },
        { key: 'Accessibility', value: 'ADA compliant mounting height' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'ButterflyMX Reader', tag: 'Cloud · Multi-mode', featured: true },
        { brand: 'Traditional Fob System', tag: 'Standalone' },
        { brand: 'Keypad Only', tag: 'Basic' },
      ],
      rows: [
        { feature: 'Smartphone access', values: ['yes', 'no', 'no'] },
        { feature: 'RFID fob/card', values: ['yes', 'yes', 'no'] },
        { feature: 'PIN code entry', values: ['yes', 'no', 'yes'] },
        { feature: 'Cloud management', values: ['yes', 'no', 'no'] },
        { feature: 'Audit trail', values: ['yes', 'partial', 'no'] },
        { feature: 'Time-based scheduling', values: ['yes', 'no', 'no'] },
        { feature: 'Remote revocation', values: ['yes', 'no', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'We installed readers at every secondary entrance and the garage. Residents love that their phone unlocks everything — no more carrying fobs for different doors.', name: 'Mark Chen', role: 'Facilities Manager · The Quarters', initials: 'MC' },
      { quote: 'Being able to instantly revoke access when a tenant moves out is game-changing. No more re-coding locks or collecting fobs.', name: 'Lisa Park', role: 'Property Manager · Oak Residences', initials: 'LP' },
      { quote: 'The cloud dashboard shows us exactly who accessed which door and when. We resolved a noise complaint dispute in 2 minutes flat.', name: 'Tom Wallace', role: 'Building Director · Metro Living', initials: 'TW' },
    ],
    faqs: [
      { question: 'Does it work with the ButterflyMX intercom?', answer: 'Yes — they share the same cloud platform and resident app. Residents use one app for both the front door video intercom and all access control readers throughout the building.' },
      { question: 'Can we use existing RFID fobs?', answer: 'In many cases yes. The reader supports both 125kHz (EM/HID) and 13.56MHz (MIFARE) frequencies. We\'ll test your existing fobs during the site survey.' },
      { question: 'What happens during a power outage?', answer: 'The reader has fail-safe/fail-secure options configurable per door. Fire exits default to fail-safe (unlocked) for life safety; secure areas default to fail-secure (locked).' },
      { question: 'How many credentials can it store?', answer: 'The system is cloud-based, so there\'s no practical limit to the number of users or credentials. The local controller caches up to 10,000 credentials for offline operation.' },
    ],
  },

  'akuvox/r29-face-recognition': {
    slug: 'r29-face-recognition',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'R29 Face Recognition',
    eyebrow: 'Akuvox · AI-Powered — Face Recognition Access',
    title: 'AI face recognition that opens doors in under a second.',
    tagline: '— touchless, anti-spoof, and no credentials to carry.',
    description: 'The Akuvox R29 uses deep-learning AI to recognise faces with 99.7% accuracy in under 0.5 seconds. Anti-spoofing technology prevents photos and masks from fooling the system. No keys, no fobs, no phones — just walk up and the door opens.',
    image: '/images/products/akuvox/R29.png',
    meta: [
      { value: '99.7', unit: '%', label: 'Recognition accuracy' },
      { value: '<0.5', unit: 's', label: 'Recognition speed' },
      { value: '10,000', unit: '', label: 'Face capacity' },
    ],
    stats: [
      { value: '99.7', unit: '%', label: 'Recognition accuracy' },
      { value: '<0.5', unit: 's', label: 'Recognition speed' },
      { value: '10k', unit: '', label: 'Face capacity' },
      { value: '3D', unit: '', label: 'Anti-spoof detection' },
    ],
    features: [
      { tag: 'AI RECOGNITION', title: 'Deep-learning face recognition.', body: 'Neural network-based recognition that improves over time. Works in all lighting conditions — bright sun, dim corridors, and complete darkness using IR illumination.', icon: 'face' },
      { tag: 'ANTI-SPOOFING', title: 'Cannot be fooled by photos or masks.', body: '3D structured-light analysis detects flat images, printed photos, and masks. Live-face detection ensures only real people gain entry.', icon: 'shield' },
      { tag: 'TOUCHLESS', title: 'Zero-contact entry for hygiene.', body: 'Post-pandemic buildings demand touchless solutions. Residents simply approach the door — no touching screens, pressing buttons, or scanning devices.', icon: 'hand' },
      { tag: 'MULTI-MODAL', title: 'Face, card, PIN, or QR code.', body: 'Face recognition is the primary method, but RFID cards, PIN codes, and QR-code visitor passes work as fallbacks. Every resident chooses their preferred method.', icon: 'key' },
      { tag: 'SIP COMPATIBLE', title: 'Full SIP video intercom built-in.', body: 'The R29 doubles as a full video intercom — visitors can call residents directly, see them on the 7" touchscreen, and be granted remote access.', icon: 'video' },
    ],
    useCases: [
      { mark: 'Premium Residential', title: 'Luxury apartment buildings.', desc: 'High-end developments where residents expect seamless, keyless entry. The R29 delivers a concierge-level experience without the staffing costs.', stats: [{ value: '0', label: 'Credentials to carry' }, { value: '<0.5s', label: 'Entry time' }] },
      { mark: 'Corporate Offices', title: 'Workplace access control.', desc: 'Employees walk through turnstiles with face recognition — no badge tapping, no queues at peak hours. Attendance is logged automatically.', stats: [{ value: '85%', label: 'Faster entry' }, { value: '100%', label: 'Attendance logging' }] },
      { mark: 'Healthcare & Clean Rooms', title: 'Hygiene-critical environments.', desc: 'Hospitals, labs, and food production facilities where touching shared surfaces is a contamination risk. Zero-contact face recognition eliminates that vector.', stats: [{ value: '0', label: 'Surface contact' }, { value: '99.7%', label: 'Accuracy' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '7" IPS touchscreen · 1024 × 600' },
        { key: 'Camera', value: 'Dual-lens: 2MP visible + IR depth sensor' },
        { key: 'Face capacity', value: '10,000 faces · 50,000 event logs' },
        { key: 'Recognition distance', value: '0.3m – 2.0m adjustable' },
        { key: 'Enclosure', value: 'Aluminium alloy · IP65 · IK08' },
        { key: 'Operating temp', value: '−30°C to +60°C' },
      ]},
      { category: 'Connectivity', rows: [
        { key: 'Network', value: 'Gigabit Ethernet · Wi-Fi 5 (optional)' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP' },
        { key: 'I/O', value: '2× relay output · 1× door sensor · RS-485' },
        { key: 'Power', value: 'PoE (802.3af) · 12V DC' },
      ]},
      { category: 'AI & Security', rows: [
        { key: 'Algorithm', value: 'Deep-learning CNN · on-device inference' },
        { key: 'Anti-spoofing', value: '3D structured light · liveness detection' },
        { key: 'Accuracy', value: '99.7% (LFW benchmark)' },
        { key: 'Speed', value: '<0.5s recognition · <1s total door open' },
        { key: 'Encryption', value: 'TLS 1.2 · SRTP · AES-256 credential store' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox R29', tag: 'AI · Face Recognition', featured: true },
        { brand: 'Traditional RFID', tag: 'Card/Fob' },
        { brand: 'Basic Video Intercom', tag: 'Call-based' },
      ],
      rows: [
        { feature: 'Touchless entry', values: ['yes', 'no', 'no'] },
        { feature: 'Face recognition', values: ['yes', 'no', 'no'] },
        { feature: 'Anti-spoofing', values: ['yes', 'no', 'no'] },
        { feature: 'Video intercom', values: ['yes', 'no', 'yes'] },
        { feature: 'Multi-modal auth', values: ['yes', 'partial', 'no'] },
        { feature: 'Cloud management', values: ['yes', 'no', 'partial'] },
        { feature: 'Attendance logging', values: ['yes', 'partial', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'The Akuvox R29 transformed our building entrance. Residents love the touchless experience — they just walk up and the door opens. It feels like the future.', name: 'Emma Thornton', role: 'Building Manager · Canary Wharf Residences', initials: 'ET' },
      { quote: 'We needed hygiene-first access after COVID. The face recognition means nobody touches shared surfaces anymore. Lowell Edwards had it running in a day.', name: 'Dr. Raj Patel', role: 'Facilities Director · MedTech Campus', initials: 'RP' },
      { quote: 'The anti-spoofing actually works — we tested it with photos and masks during commissioning. Nothing gets through except real faces. Very impressed.', name: 'Kevin O\'Brien', role: 'Security Consultant · SecureAxis', initials: 'KO' },
    ],
    faqs: [
      { question: 'How does the face recognition work in the dark?', answer: 'The R29 has an integrated IR illuminator that provides invisible infrared light. The depth sensor works independently of visible light, so recognition accuracy is identical in complete darkness.' },
      { question: 'What about residents with face coverings?', answer: 'The system can be configured to recognise faces with masks (using periocular recognition) or to require mask removal. This is an admin setting per building.' },
      { question: 'How are face templates stored?', answer: 'Face data is stored as encrypted mathematical templates, not photos. Templates are AES-256 encrypted on-device. They cannot be reverse-engineered back into facial images.' },
      { question: 'Can visitors use the system?', answer: 'Visitors use the video intercom feature — they press the resident\'s name, get a video call, and the resident grants remote access. Alternatively, residents can generate QR-code passes.' },
      { question: 'What about twins or family members who look similar?', answer: 'The R29 uses 3D depth mapping in addition to 2D recognition, making it extremely accurate at distinguishing similar-looking individuals. In testing, it correctly differentiates identical twins.' },
    ],
  },

  'akuvox/e16c-multi-tenant-station': {
    slug: 'e16c-multi-tenant-station',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'E16C Multi-Tenant Station',
    eyebrow: 'Akuvox · Multi-Tenant — Touchscreen Access Station',
    title: 'The large-format touchscreen intercom for high-traffic buildings.',
    tagline: '— search, call, and manage access from a 10" display.',
    description: 'The Akuvox E16C features a 10.1" HD touchscreen with a searchable resident directory, RFID access, PIN entry, and SIP video calling. Designed for multi-tenant buildings with 100+ units where a large, visible, and intuitive entry experience matters.',
    image: '/images/products/akuvox/E16.png',
    meta: [
      { value: '10.1', unit: '"', label: 'HD touchscreen' },
      { value: '500', unit: '+', label: 'Directory entries' },
      { value: 'SIP', unit: '', label: 'Video calling' },
    ],
    stats: [
      { value: '10.1', unit: '"', label: 'HD touchscreen' },
      { value: '500', unit: '+', label: 'Residents supported' },
      { value: '4', unit: '', label: 'Access methods' },
      { value: 'SIP', unit: '', label: 'Protocol' },
    ],
    features: [
      { tag: 'TOUCHSCREEN', title: '10.1" HD capacitive display.', body: 'Visitors search the directory by name, unit number, or company — the large screen is readable even in direct sunlight with its 1000-nit brightness.', icon: 'screen' },
      { tag: 'RFID & PIN', title: 'Multiple access credentials.', body: 'Residents swipe RFID cards, enter PIN codes, or use Bluetooth from their phone. All managed centrally from a web dashboard.', icon: 'key' },
      { tag: 'SIP VIDEO', title: 'Crystal-clear video calling.', body: 'Full SIP video intercom with 2MP wide-angle camera. Residents receive calls on indoor monitors, smartphones, or both simultaneously.', icon: 'video' },
      { tag: 'WEATHERPROOF', title: 'Built for outdoor installation.', body: 'IP65 weather-sealed and IK08 impact-rated. Operating from -30°C to +60°C — built for exposed entry points.', icon: 'shield' },
      { tag: 'SCALABLE', title: 'From 10 to 500+ units.', body: 'Directory supports hundreds of entries with fast search. Multi-panel configurations for buildings with multiple entrances, all centrally managed.', icon: 'building' },
    ],
    useCases: [
      { mark: 'Large Apartment Blocks', title: 'High-rise residential.', desc: 'Buildings with 100+ units where visitors need to quickly find and call the right resident. The large searchable directory handles high traffic without creating queues.', stats: [{ value: '500+', label: 'Units supported' }, { value: '<5s', label: 'Avg search time' }] },
      { mark: 'Student Housing', title: 'University accommodation.', desc: 'High turnover, frequent visitors, and hundreds of residents. RFID cards issued at move-in are instantly provisioned and just as quickly revoked at checkout.', stats: [{ value: '100%', label: 'Digital provisioning' }, { value: '0', label: 'Physical key issues' }] },
      { mark: 'Commercial Buildings', title: 'Multi-tenant offices.', desc: 'Reception-less office buildings where visitors find the company directory, call the right person, and get buzzed in — without a full-time receptionist.', stats: [{ value: '$45k', label: 'Receptionist savings' }, { value: '24/7', label: 'Unmanned access' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '10.1" IPS capacitive · 1280 × 800 · 1000 nit' },
        { key: 'Camera', value: '2MP wide-angle · IR night vision · WDR' },
        { key: 'RFID', value: '13.56MHz MIFARE · 125kHz EM (dual reader)' },
        { key: 'Enclosure', value: 'Die-cast aluminium · IP65 · IK08' },
        { key: 'Dimensions', value: '290 × 360 × 42 mm' },
        { key: 'Operating temp', value: '−30°C to +60°C' },
      ]},
      { category: 'Connectivity', rows: [
        { key: 'Network', value: 'Gigabit Ethernet · PoE (802.3af)' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP/HTTPS API' },
        { key: 'I/O', value: '2× relay · 1× door sensor · RS-485 · Wiegand' },
        { key: 'Audio', value: 'Full-duplex · echo cancellation · noise suppression' },
      ]},
      { category: 'Software', rows: [
        { key: 'Directory', value: 'Up to 500 entries · searchable by name/unit' },
        { key: 'Management', value: 'Web UI · SNMP · auto-provisioning' },
        { key: 'Integration', value: 'SIP PBX · access control systems · elevator' },
        { key: 'Firmware', value: 'Remote OTA updates · backup/restore' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox E16C', tag: 'Touchscreen · SIP', featured: true },
        { brand: 'Basic Intercom Panel', tag: 'Button-based' },
        { brand: 'Keypad Entry', tag: 'PIN only' },
      ],
      rows: [
        { feature: 'Touchscreen directory', values: ['yes', 'no', 'no'] },
        { feature: 'Video calling (SIP)', values: ['yes', 'partial', 'no'] },
        { feature: 'RFID access', values: ['yes', 'no', 'no'] },
        { feature: 'PIN entry', values: ['yes', 'no', 'yes'] },
        { feature: '500+ resident support', values: ['yes', 'partial', 'no'] },
        { feature: 'Remote management', values: ['yes', 'no', 'no'] },
        { feature: 'Weather sealed (IP65)', values: ['yes', 'partial', 'yes'] },
      ],
    },
    testimonials: [
      { quote: 'The 10-inch screen is a game changer for our 200-unit building. Visitors actually find the person they\'re looking for — no more calling the concierge for help.', name: 'Angela Morris', role: 'Property Director · Apex Tower', initials: 'AM' },
      { quote: 'We replaced a 15-year-old button panel with the E16C. The touchscreen search is instant, the video quality is excellent, and residents love it.', name: 'Chris Pemberton', role: 'Facilities Manager · Crown Residences', initials: 'CP' },
      { quote: 'For our student halls, the E16C handles 400 residents without breaking a sweat. RFID provisioning at move-in takes seconds.', name: 'Dr. Helen Ward', role: 'Accommodation Director · Metro University', initials: 'HW' },
    ],
    faqs: [
      { question: 'Can visitors search by company name?', answer: 'Yes — the directory supports search by resident name, unit number, or company/organisation name. You can customise which fields are searchable.' },
      { question: 'How does it handle hundreds of residents?', answer: 'The alphabetical directory with instant search means visitors type a few letters and the matching results appear immediately. No scrolling through endless lists.' },
      { question: 'Does it work with existing door hardware?', answer: 'Yes — the E16C has standard relay outputs that work with electric strikes, magnetic locks, and automatic doors. It also supports Wiegand and RS-485 for third-party controllers.' },
      { question: 'Can residents answer on their smartphone?', answer: 'Yes — when paired with the Akuvox SmartPlus app, residents receive video calls on their smartphone anywhere in the world, with the ability to grant remote access.' },
    ],
  },

  'doorbird/d101s-ip-station': {
    slug: 'd101s-ip-station',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'D101S IP Station',
    eyebrow: 'DoorBird · Premium — Stainless Steel IP Video Station',
    title: 'German-engineered stainless steel doorbell with IP65 resilience.',
    tagline: '— the premium smart doorbell for architecturally-conscious homes.',
    description: 'The DoorBird D101S is a surface-mounted IP video door station crafted from V4A marine-grade stainless steel. With a 180° fisheye camera, native HomeKit/KNX/Control4 integration, and IP65 weatherproofing, it\'s the smart doorbell for premium residential properties.',
    image: '/images/products/doorbird/D101S.png',
    meta: [
      { value: '180', unit: '°', label: 'Fisheye camera' },
      { value: 'IP65', unit: '', label: 'Weather sealed' },
      { value: 'HomeKit', unit: '', label: 'Native integration' },
    ],
    stats: [
      { value: '180', unit: '°', label: 'Field of view' },
      { value: '1080', unit: 'p', label: 'HD video' },
      { value: 'IP65', unit: '', label: 'Weather rating' },
      { value: 'V4A', unit: '', label: 'Stainless steel' },
    ],
    features: [
      { tag: 'PREMIUM MATERIALS', title: 'Marine-grade V4A stainless steel.', body: 'Not plastic — real stainless steel that withstands coastal salt air, extreme temperatures, and decades of use without discolouring or degrading.', icon: 'material' },
      { tag: 'FISHEYE CAMERA', title: '180° panoramic field of view.', body: '1080p fisheye lens captures everything in front of the door — no blind spots. IR night vision ensures 24/7 coverage regardless of ambient light.', icon: 'video' },
      { tag: 'SMART HOME', title: 'Native HomeKit, KNX, Control4, Crestron.', body: 'Certified for Apple HomeKit out of the box. Also integrates natively with KNX, Control4, Crestron, Loxone, and all major home automation platforms.', icon: 'integration' },
      { tag: 'LOCAL STORAGE', title: 'On-device event storage — no subscription.', body: 'Video events are stored locally on the device itself. No cloud subscription required — your footage stays private and under your control.', icon: 'storage' },
      { tag: 'OPEN API', title: 'HTTP API for custom integrations.', body: 'DoorBird provides a fully documented HTTP API. Custom integrations, home automation triggers, and third-party app connections are all supported.', icon: 'api' },
    ],
    useCases: [
      { mark: 'Private Residences', title: 'Architect-designed homes.', desc: 'High-end homes where the entrance hardware must match the architectural standard. DoorBird\'s stainless steel finish and clean lines complement contemporary and classic facades.', stats: [{ value: '50+', label: 'Finish options' }, { value: '0', label: 'Plastic components' }] },
      { mark: 'Gated Estates', title: 'Perimeter entry points.', desc: 'Installed at gates, garden entrances, and driveways. The IP65 rating handles all weather extremes while the fisheye camera covers wide approaches.', stats: [{ value: '180°', label: 'Coverage' }, { value: 'IP65', label: 'All-weather' }] },
      { mark: 'Smart Homes', title: 'Home automation integrations.', desc: 'For homes running KNX, Control4, or Crestron — DoorBird is the video doorbell that integrates natively, not via cloud hacks. Doorbell triggers scenes, unlocks doors, and records events.', stats: [{ value: '15+', label: 'Platforms supported' }, { value: 'Local', label: 'Processing' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Material', value: 'V4A (316) marine-grade stainless steel' },
        { key: 'Camera', value: '1080p · 180° fisheye · IR night vision' },
        { key: 'Audio', value: 'Full-duplex · echo cancellation' },
        { key: 'Protection', value: 'IP65 weather · IK10 vandal' },
        { key: 'Operating temp', value: '−40°C to +60°C' },
        { key: 'Mounting', value: 'Surface mount · 167 × 90 × 25 mm' },
      ]},
      { category: 'Connectivity', rows: [
        { key: 'Network', value: 'PoE (802.3af) · 10/100 Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP' },
        { key: 'Smart home', value: 'HomeKit · KNX · Control4 · Crestron · Loxone' },
        { key: 'Storage', value: 'On-device · no cloud subscription needed' },
      ]},
      { category: 'Integration', rows: [
        { key: 'Door control', value: 'Electric strike relay · Wiegand output' },
        { key: 'Notifications', value: 'Push (iOS/Android) · SIP call · email' },
        { key: 'API', value: 'Full HTTP REST API · event webhooks' },
        { key: 'IFTTT/Home Assistant', value: 'Supported via API + native integration' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird D101S', tag: 'Premium · IP', featured: true },
        { brand: 'Ring / Nest', tag: 'Consumer' },
        { brand: 'Generic IP Doorbell', tag: 'Budget' },
      ],
      rows: [
        { feature: 'Stainless steel build', values: ['yes', 'no', 'no'] },
        { feature: 'HomeKit native', values: ['yes', 'partial', 'no'] },
        { feature: 'KNX / Control4 / Crestron', values: ['yes', 'no', 'no'] },
        { feature: 'No cloud subscription', values: ['yes', 'no', 'partial'] },
        { feature: 'Open API', values: ['yes', 'no', 'partial'] },
        { feature: 'IP65 + IK10', values: ['yes', 'no', 'no'] },
        { feature: 'PoE powered (no battery)', values: ['yes', 'no', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'We specified DoorBird for a £3M new build. The stainless finish matched the architectural metalwork perfectly, and the HomeKit integration means one app for everything.', name: 'Richard Hale', role: 'Architect · Hale & Partners', initials: 'RH' },
      { quote: 'No subscription fees, local storage, and a proper open API. As a home automation installer, DoorBird is the only video doorbell I recommend to clients.', name: 'Nathan Cole', role: 'Smart Home Integrator · TechNest', initials: 'NC' },
      { quote: 'Installed 18 months ago on an exposed coastal property. Salt air, driving rain, winter frost — still looks and works like new. Build quality is exceptional.', name: 'Patricia Shaw', role: 'Homeowner · Cornwall', initials: 'PS' },
    ],
    faqs: [
      { question: 'Does it require a cloud subscription?', answer: 'No. DoorBird stores video events locally on-device. The free DoorBird app provides remote access, push notifications, and live view — no monthly fees ever.' },
      { question: 'Does it work with Apple HomeKit?', answer: 'Yes — native HomeKit Secure Video support is built in. You can view the camera in the Apple Home app, get rich notifications, and use it in automations.' },
      { question: 'What finishes are available?', answer: 'The D101S comes in brushed stainless steel as standard. DoorBird also offers RAL powder-coated options (50+ colours) and brass/titanium finishes for custom projects.' },
      { question: 'Can it control a gate and a door?', answer: 'Yes — the D101S has multiple relay outputs. One can control an electric strike (front door) while another triggers a gate motor. Both are controllable from the app.' },
      { question: 'How does it compare to Ring or Nest?', answer: 'DoorBird is a professional-grade IP device — wired power (no battery), stainless steel, open API, and local storage. Ring/Nest are consumer products with plastic housings, batteries, and mandatory cloud subscriptions.' },
    ],
  },

  'doorbird/d2101v-surface-station': {
    slug: 'd2101v-surface-station',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'D2101V Surface Station',
    eyebrow: 'DoorBird · Premium — Horizontal Surface Mount IP Station',
    title: 'The horizontal-mount IP video station for modern entrances.',
    tagline: '— wide-format design with vandal-proof IK10 construction.',
    description: 'The DoorBird D2101V is a horizontal surface-mounted IP video door station in marine-grade stainless steel. Its landscape orientation is ideal for wide letterbox-slot mounting on gates and modern facades. IP65, IK10 vandal-rated, with full smart home integration.',
    image: '/images/products/doorbird/D2101V.png',
    meta: [
      { value: 'IK10', unit: '', label: 'Vandal proof' },
      { value: 'IP65', unit: '', label: 'Weather sealed' },
      { value: 'Wide', unit: '', label: 'Horizontal mount' },
    ],
    stats: [
      { value: 'IK10', unit: '', label: 'Vandal rating' },
      { value: '1080', unit: 'p', label: 'HD video' },
      { value: 'IP65', unit: '', label: 'Weather rating' },
      { value: 'PoE', unit: '', label: 'Powered' },
    ],
    features: [
      { tag: 'HORIZONTAL DESIGN', title: 'Wide-format mounting for modern facades.', body: 'The landscape orientation fits naturally into wide panel mounts, letterbox positions, and horizontal gate rails where portrait devices look out of place.', icon: 'layout' },
      { tag: 'IK10 VANDAL', title: 'Impact-resistant to IK10 standard.', body: 'Survives 20 joules of impact — equivalent to a 5kg weight dropped from 40cm. Designed for unsupervised locations where vandalism is a risk.', icon: 'shield' },
      { tag: 'HD CAMERA', title: '1080p wide-angle with IR night vision.', body: 'Full HD video with wide-angle lens captures the entire approach area. Infrared LEDs provide clear night vision up to 5m without visible light.', icon: 'video' },
      { tag: 'SMART HOME', title: 'HomeKit, KNX, Control4, Crestron native.', body: 'Same integration ecosystem as all DoorBird devices. Certified for Apple HomeKit Secure Video, KNX, Control4, Crestron, Loxone, and more.', icon: 'integration' },
      { tag: 'MULTI-BUTTON', title: 'Configurable call buttons.', body: 'Single or multi-button variants for properties with separate occupants. Each button can call different indoor stations, smartphones, or SIP endpoints.', icon: 'button' },
    ],
    useCases: [
      { mark: 'Gate Installations', title: 'Perimeter gates & pillars.', desc: 'The horizontal form factor sits naturally on gate rails and wide pillars. IK10 vandal rating means it survives in exposed, unsupervised locations.', stats: [{ value: 'IK10', label: 'Vandal proof' }, { value: 'IP65', label: 'All-weather' }] },
      { mark: 'Multi-Occupancy', title: 'Houses converted to flats.', desc: 'The multi-button variant lets each flat have their own call button, ringing their own indoor station or smartphone. Perfect for HMOs and conversions.', stats: [{ value: '4', label: 'Button options' }, { value: 'SIP', label: 'Per-button routing' }] },
      { mark: 'Commercial Entrances', title: 'Office & shop fronts.', desc: 'The discreet horizontal profile mounts flush with shop fronts and commercial signage. Vandal-proof construction handles busy high-street locations.', stats: [{ value: 'IK10', label: 'Impact rated' }, { value: '24/7', label: 'Unattended operation' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Material', value: 'V4A (316) marine-grade stainless steel' },
        { key: 'Camera', value: '1080p · wide-angle · IR night vision (5m)' },
        { key: 'Audio', value: 'Full-duplex · noise suppression' },
        { key: 'Protection', value: 'IP65 weather · IK10 impact (20J)' },
        { key: 'Operating temp', value: '−40°C to +55°C' },
        { key: 'Mounting', value: 'Surface mount · horizontal orientation' },
      ]},
      { category: 'Connectivity', rows: [
        { key: 'Network', value: 'PoE (802.3af) · 10/100 Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP' },
        { key: 'Smart home', value: 'HomeKit · KNX · Control4 · Crestron · Loxone' },
        { key: 'Relay outputs', value: '2× configurable relays for door/gate' },
      ]},
      { category: 'Variants', rows: [
        { key: 'D2101V', value: '1 call button · single-occupant' },
        { key: 'D2102V', value: '2 call buttons · dual-occupant' },
        { key: 'D2103V', value: '3 call buttons · triple-occupant' },
        { key: 'D2104V', value: '4 call buttons · quad-occupant' },
        { key: 'Finishes', value: 'Stainless · RAL custom · brass · titanium' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird D2101V', tag: 'Premium · Horizontal', featured: true },
        { brand: 'Consumer Doorbell', tag: 'Ring / Nest' },
        { brand: 'Basic IP Station', tag: 'Budget' },
      ],
      rows: [
        { feature: 'Horizontal mounting', values: ['yes', 'no', 'partial'] },
        { feature: 'IK10 vandal proof', values: ['yes', 'no', 'no'] },
        { feature: 'Stainless steel', values: ['yes', 'no', 'no'] },
        { feature: 'HomeKit / KNX / Control4', values: ['yes', 'no', 'no'] },
        { feature: 'No cloud subscription', values: ['yes', 'no', 'partial'] },
        { feature: 'Multi-button variants', values: ['yes', 'no', 'partial'] },
        { feature: 'Open HTTP API', values: ['yes', 'no', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'The horizontal profile was exactly what we needed for the gate pillar. It sits flush and the stainless steel matches our railings perfectly.', name: 'Simon Clarke', role: 'Homeowner · Cheshire', initials: 'SC' },
      { quote: 'We spec\'d the D2101V for a converted Georgian townhouse — 4 flats, 4 buttons, each routing to different smartphones. Elegant solution, beautifully built.', name: 'Anna Reid', role: 'Interior Designer · Reid & Co', initials: 'AR' },
      { quote: 'On a busy high street, vandalism was a real concern. The IK10 rating has proven itself — 2 years exposed and not a scratch. Lowell Edwards recommended it and they were right.', name: 'Marcus Webb', role: 'Shop Owner · Webb & Sons', initials: 'MW' },
    ],
    faqs: [
      { question: 'What\'s the difference between D101S and D2101V?', answer: 'The D101S is portrait (vertical) orientation for standard door-side mounting. The D2101V is landscape (horizontal) for gate rails, letterbox slots, and wide mounting positions. Both share the same internal hardware.' },
      { question: 'Is IK10 really necessary?', answer: 'If the device is in an unsupervised location (gates, alleyways, shared entrances), IK10 protection prevents vandalism damage. For sheltered doorways on private property, IK08 is usually sufficient.' },
      { question: 'Can I get multiple call buttons?', answer: 'Yes — the D2101V series comes in 1, 2, 3, or 4 button configurations. Each button can be independently routed to different indoor stations, phone numbers, or SIP endpoints.' },
      { question: 'Does it control both a door and a gate?', answer: 'Yes — with two relay outputs, you can control two separate access points. Button press calls the resident; they can then choose to open the gate, the door, or both.' },
    ],
  },
};
