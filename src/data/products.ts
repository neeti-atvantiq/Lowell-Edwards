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
    image?: string;
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

export type InstallationImage = {
  image: string;
  tag: string;
  title: string;
  desc: string;
};

export type CategoryData = {
  title: string;
  subtitle: string;
  description: string;
  brandName: string;
  brandSlug: string;
  categorySlug: string;
  heroImage: string;
  products: string[];
  highlights: { value: string; label: string }[];
  crossBrandComparison: {
    headers: { brand: string; tag: string; featured?: boolean }[];
    rows: { feature: string; values: string[] }[];
  };
  installationImages: InstallationImage[];
};

export const categories: Record<string, CategoryData> = {
  'akuvox/intercoms': {
    title: 'Akuvox Intercoms & Entry Systems',
    subtitle: 'AI-Powered Entry',
    description: 'Akuvox delivers advanced AI-powered intercom systems on the market — featuring face recognition, touchless entry, and platforms that scale from single doors to entire campuses.',
    brandName: 'Akuvox',
    brandSlug: 'akuvox',
    categorySlug: 'intercoms',
    heroImage: 'https://www.akuvox.com/uploads/202012/2020123119053400.png',
    products: ['akuvox/x915-flagship-panel', 'akuvox/x912-intercom-panel', 'akuvox/s532-video-door-phone'],
    highlights: [
      { value: '99.9%', label: 'Face recognition' },
      { value: '<500ms', label: 'Entry speed' },
      { value: '50,000', label: 'Face capacity' },
      { value: '3D', label: 'Anti-spoof' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'Akuvox', tag: 'AI · Face Recognition', featured: true },
        { brand: 'ButterflyMX', tag: 'Cloud · Video' },
        { brand: 'DoorBird', tag: 'Premium · IP' },
      ],
      rows: [
        { feature: 'AI face recognition', values: ['yes', 'no', 'no'] },
        { feature: '3D anti-spoofing', values: ['yes', 'no', 'no'] },
        { feature: 'Cloud management', values: ['yes', 'yes', 'partial'] },
        { feature: 'Smartphone app', values: ['yes', 'yes', 'yes'] },
        { feature: 'Smart home integration', values: ['partial', 'no', 'yes'] },
        { feature: 'Stainless steel build', values: ['partial', 'no', 'yes'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/11.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full Akuvox access control deployment'
      },
      {
        image: '/images/installations/2.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/10.jpg',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: '/images/installations/4.jpg',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: '/images/installations/5.jpg',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
        ],
  },
  'akuvox/access-control': {
    title: 'Akuvox Access Control',
    subtitle: 'Smart Readers & Terminals',
    description: 'Access control ecosystem featuring compact IP-based terminals for secondary doors, gyms, and office suites via the cloud.',
    brandName: 'Akuvox',
    brandSlug: 'akuvox',
    categorySlug: 'access-control',
    heroImage: 'https://www.akuvox.com/uploads/images/9d537ac8c4fcaea6a45dbe8ed0952389.png',
    products: ['akuvox/a08-access-terminal', 'akuvox/a02-access-terminal', 'akuvox/a01-access-terminal'],
    highlights: [
      { value: '20,000+', label: 'User capacity' },
      { value: 'Cloud', label: 'Managed' },
      { value: 'Multi-modal', label: 'Authentication' },
      { value: 'IP65', label: 'Weather rated' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'Akuvox', tag: 'AI · Cloud-native', featured: true },
        { brand: 'ButterflyMX', tag: 'Cloud · Unified' },
        { brand: 'DoorBird', tag: 'Encrypted · IP' },
      ],
      rows: [
        { feature: 'Face recognition options', values: ['yes', 'no', 'no'] },
        { feature: 'Cloud management', values: ['yes', 'yes', 'partial'] },
        { feature: 'Wiegand support', values: ['yes', 'yes', 'yes'] },
        { feature: 'Fire alarm integration', values: ['yes', 'no', 'partial'] },
        { feature: 'Touch keypad terminals', values: ['yes', 'yes', 'yes'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/11.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full Akuvox access control deployment'
      },
      {
        image: '/images/installations/2.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/10.jpg',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: '/images/installations/4.jpg',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: '/images/installations/5.jpg',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
    ],
  },
  'akuvox/apartment-stations': {
    title: 'Akuvox Apartment Stations',
    subtitle: 'Indoor Monitors & Phones',
    description: 'From budget-friendly audio/video phones to 7" monitors — an indoor station for every unit, budget, and resident preference.',
    brandName: 'Akuvox',
    brandSlug: 'akuvox',
    categorySlug: 'apartment-stations',
    heroImage: '/images/products/akuvox/S562.png',
    products: ['akuvox/c313-indoor-monitor', 'akuvox/s562-indoor-station'],
    highlights: [
      { value: '4.3" to 7"', label: 'Screen range' },
      { value: 'SIP 2.0', label: 'Integration' },
      { value: 'PoE', label: 'Single cable' },
      { value: 'Linux', label: 'Operating System' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'Akuvox', tag: 'SIP Monitors', featured: true },
        { brand: 'DoorBird', tag: 'Premium · IP' },
        { brand: 'Smartphone', tag: 'App-only' },
      ],
      rows: [
        { feature: 'Budget option available', values: ['yes', 'no', 'yes'] },
        { feature: 'SIP protocol support', values: ['yes', 'yes', 'no'] },
        { feature: 'Always-on (no phone needed)', values: ['yes', 'yes', 'no'] },
        { feature: 'Room-to-room calling', values: ['yes', 'partial', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'yes', 'no'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/11.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full Akuvox access control deployment'
      },
      {
        image: '/images/installations/2.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/10.jpg',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: '/images/installations/4.jpg',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: '/images/installations/5.jpg',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
    ],
  },
  'doorbird/intercoms': {
    title: 'DoorBird IP Video Intercoms',
    subtitle: 'German-Engineered Premium',
    description: 'Handcrafted from marine-grade V4A stainless steel with 1080p cameras, native smart home integration, and zero subscription fees — DoorBird is the choice for properties where craftsmanship matters.',
    brandName: 'DoorBird',
    brandSlug: 'doorbird',
    categorySlug: 'intercoms',
    heroImage: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4251489601011',
    products: ['doorbird/d31tdh-display'],
    highlights: [
      { value: 'V4A steel', label: 'Marine-grade' },
      { value: '1080p HD', label: 'Camera' },
      { value: '£0/month', label: 'No subscription' },
      { value: '20+ years', label: 'Lifespan' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'DoorBird', tag: 'Premium · Open', featured: true },
        { brand: 'Akuvox', tag: 'AI · Face Rec' },
        { brand: 'ButterflyMX', tag: 'Cloud · Managed' },
      ],
      rows: [
        { feature: 'V4A stainless steel', values: ['yes', 'partial', 'no'] },
        { feature: '1080p HD camera', values: ['yes', 'yes', 'yes'] },
        { feature: 'HomeKit / KNX / Control4', values: ['yes', 'partial', 'no'] },
        { feature: 'No cloud subscription', values: ['yes', 'yes', 'no'] },
        { feature: 'Open HTTP API', values: ['yes', 'yes', 'no'] },
        { feature: 'Custom finishes (RAL/brass)', values: ['yes', 'no', 'no'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/8.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full DoorBird intercom deployment'
      },
      {
        image: '/images/installations/7.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/6.jpg',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: '/images/installations/12.jpg',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: '/images/installations/9.jpg',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
    ],
  },
  'doorbird/access-control': {
    title: 'DoorBird Access Control',
    subtitle: 'Smart Access Keypads',
    description: 'IP-based access control keypads to complete your ecosystem. Provides standalone RFID and PIN entry for side doors and garages without needing a full video intercom.',
    brandName: 'DoorBird',
    brandSlug: 'doorbird',
    categorySlug: 'access-control',
    heroImage: 'https://www.doorbird.com/shop/media/4260423872059/4260423872066.png',
    products: ['doorbird/a1121-access-keypad'],
    highlights: [
      { value: 'IP65', label: 'Weather rated' },
      { value: '2 relays', label: 'Per controller' },
      { value: 'RFID + PIN', label: 'Multi-modal' },
      { value: 'PoE', label: 'Powered' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'DoorBird', tag: 'Smart Keypad', featured: true },
        { brand: 'Akuvox', tag: 'Cloud Terminals' },
        { brand: 'ButterflyMX', tag: 'Cloud · Unified' },
      ],
      rows: [
        { feature: 'Illuminated Keypad', values: ['yes', 'yes', 'yes'] },
        { feature: 'RFID Reader', values: ['yes', 'yes', 'yes'] },
        { feature: 'Multi-relay outputs', values: ['yes', 'partial', 'no'] },
        { feature: 'Smart home triggers', values: ['yes', 'partial', 'no'] },
        { feature: 'HTTP API', values: ['yes', 'yes', 'no'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/8.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full DoorBird intercom deployment'
      },
      {
        image: '/images/installations/7.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/6.jpg',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: '/images/installations/12.jpg',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: '/images/installations/9.jpg',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
    ],
  },
  'butterflymx/intercoms': {
    title: 'ButterflyMX Video Intercoms',
    subtitle: 'Cloud-First Video Entry',
    description: 'The leading cloud-based video intercom platform for multi-tenant buildings — smartphone access, delivery management, and property-wide control from a single dashboard.',
    brandName: 'ButterflyMX',
    brandSlug: 'butterflymx',
    categorySlug: 'intercoms',
    heroImage: 'https://butterflymx.com/wp-content/uploads/2021/11/11-surface-intercom-butterflymx-jpg.webp',
    products: ['butterfly/video-intercom-panel'],
    highlights: [
      { value: '10,000+', label: 'Buildings' },
      { value: 'Cloud', label: 'Platform' },
      { value: 'Smartphone', label: 'First' },
      { value: '99.9%', label: 'Uptime' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'ButterflyMX', tag: 'Cloud · Smartphone', featured: true },
        { brand: 'Akuvox', tag: 'AI · Face Rec' },
        { brand: 'DoorBird', tag: 'Premium · IP' },
      ],
      rows: [
        { feature: 'Cloud-first platform', values: ['yes', 'partial', 'no'] },
        { feature: 'Property management tools', values: ['yes', 'partial', 'no'] },
        { feature: 'Delivery management', values: ['yes', 'no', 'no'] },
        { feature: 'Smartphone entry', values: ['yes', 'yes', 'yes'] },
        { feature: 'Face recognition', values: ['no', 'yes', 'no'] },
        { feature: 'Smart home integration', values: ['no', 'partial', 'yes'] },
        { feature: 'No cloud subscription', values: ['no', 'yes', 'yes'] },
      ],
    },
    installationImages: [
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/8in-intercom-install.webp',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full ButterflyMX access control deployment'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/bullet-camera-install.webp',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/butterflymx-gated-communities-visitor.webp',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/8in-butterflymx-installation.webp',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/8in-butterflymx-academy-installation.webp',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
    ],
  },
  'butterflymx/access-control': {
    title: 'ButterflyMX Access Control & Security',
    subtitle: 'Unified Cloud Security',
    description: 'Cloud-managed access readers and security cameras that share the same dashboard as your intercom — unified building security with no gaps.',
    brandName: 'ButterflyMX',
    brandSlug: 'butterflymx',
    categorySlug: 'access-control',
    heroImage: 'https://butterflymx.com/wp-content/uploads/2023/02/butterflymx-single-gang-reader.png',
    products: ['butterfly/access-control-reader', 'butterfly/camera'],
    highlights: [
      { value: '3-in-1', label: 'Access methods' },
      { value: '99.9%', label: 'Cloud uptime' },
      { value: 'Unified', label: 'Dashboard' },
      { value: '30 day', label: 'Cloud recording' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'ButterflyMX', tag: 'Cloud · Unified', featured: true },
        { brand: 'Akuvox', tag: 'AI · Multi-door' },
        { brand: 'DoorBird', tag: 'Encrypted · IP' },
      ],
      rows: [
        { feature: 'Unified dashboard with intercom', values: ['yes', 'yes', 'no'] },
        { feature: 'Cloud video recording', values: ['yes', 'no', 'no'] },
        { feature: 'Smartphone access', values: ['yes', 'yes', 'partial'] },
        { feature: 'RFID + PIN + BLE', values: ['yes', 'yes', 'partial'] },
        { feature: 'Multi-door controllers', values: ['no', 'yes', 'yes'] },
        { feature: 'Face recognition', values: ['no', 'yes', 'no'] },
        { feature: 'No subscription', values: ['no', 'yes', 'yes'] },
      ],
    },
    installationImages: [
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/8in-intercom-install.webp',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full ButterflyMX access control deployment'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/bullet-camera-install.webp',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/butterflymx-gated-communities-visitor.webp',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/8in-butterflymx-installation.webp',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: 'https://butterflymx.com/wp-content/uploads/2018/12/8in-butterflymx-academy-installation.webp',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
    ],
  },
  'doorbird/apartment-stations': {
    title: 'DoorBird Indoor Stations',
    subtitle: 'Premium Indoor Monitors',
    description: 'Elegant indoor video stations that pair with any DoorBird intercom — see visitors, communicate, and unlock without reaching for your phone.',
    brandName: 'DoorBird',
    brandSlug: 'doorbird',
    categorySlug: 'apartment-stations',
    heroImage: 'https://www.doorbird.com/shop/media/4260423860902/A1101_Indoor_Station_rgb.jpg',
    products: ['doorbird/a1101-indoor-station'],
    highlights: [
      { value: 'HD video', label: 'Live feed' },
      { value: 'PoE', label: 'Single cable' },
      { value: 'SIP', label: 'Protocol' },
      { value: '0', label: 'Subscription fees' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'DoorBird', tag: 'Premium · SIP', featured: true },
        { brand: 'Akuvox', tag: 'Smart · Range', featured: false },
        { brand: 'Smartphone Only', tag: 'No hardware' },
      ],
      rows: [
        { feature: 'Dedicated wall panel', values: ['yes', 'yes', 'no'] },
        { feature: 'HD video', values: ['yes', 'yes', 'yes'] },
        { feature: 'Always on', values: ['yes', 'yes', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'yes', 'no'] },
        { feature: 'Smart home control', values: ['no', 'yes', 'no'] },
        { feature: 'Budget option', values: ['no', 'yes', 'yes'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/8.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full DoorBird intercom deployment'
      },
      {
        image: '/images/installations/7.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/6.jpg',
        tag: 'Community',
        title: 'Gated Development',
        desc: 'Perimeter security'
      },
      {
        image: '/images/installations/12.jpg',
        tag: 'Student',
        title: 'Student Accommodation',
        desc: '200+ unit rollout'
      },
      {
        image: '/images/installations/9.jpg',
        tag: 'New Build',
        title: 'BTR Development',
        desc: 'Phase 1 of 3 buildings'
      }
    ],
  },
  'akuvox/software': {
    title: 'Akuvox SmartPlus App',
    subtitle: 'Mobile Access & Control',
    description: 'The SmartPlus app turns every resident\'s smartphone into a video intercom, access key, and building management tool — connecting to all Akuvox hardware for seamless control from anywhere.',
    brandName: 'Akuvox',
    brandSlug: 'akuvox',
    categorySlug: 'software',
    heroImage: '/images/products/akuvox/smartplus-app.png',
    products: ['akuvox/smartplus-app'],
    highlights: [
      { value: 'iOS + Android', label: 'Platform' },
      { value: 'Free', label: 'Download' },
      { value: 'Video call', label: 'From anywhere' },
      { value: 'Multi-site', label: 'Support' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'Akuvox SmartPlus', tag: 'Full ecosystem', featured: true },
        { brand: 'DoorBird App', tag: 'Premium · IP' },
        { brand: 'ButterflyMX App', tag: 'Cloud · SaaS' },
      ],
      rows: [
        { feature: 'Video intercom calls', values: ['yes', 'yes', 'yes'] },
        { feature: 'Remote door unlock', values: ['yes', 'yes', 'yes'] },
        { feature: 'Face recognition management', values: ['yes', 'no', 'no'] },
        { feature: 'Indoor station pairing', values: ['yes', 'partial', 'no'] },
        { feature: 'Free (no subscription)', values: ['yes', 'yes', 'no'] },
        { feature: 'Multi-site management', values: ['yes', 'partial', 'yes'] },
        { feature: 'Smart home triggers', values: ['partial', 'yes', 'no'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/akuvox/software-1.jpg',
        tag: 'Software',
        title: 'SmartPlus App',
        desc: 'Mobile access & control'
      },
      {
        image: '/images/installations/akuvox/software-2.jpg',
        tag: 'Software',
        title: 'Cloud Management',
        desc: 'Remote admin tools'
      }
    ],
  },
  'doorbird/software': {
    title: 'DoorBird App',
    subtitle: 'Premium Remote Access',
    description: 'The DoorBird app delivers live video, two-way audio, and remote door control for all DoorBird intercoms — with local image storage, smart home triggers, and zero subscription fees.',
    brandName: 'DoorBird',
    brandSlug: 'doorbird',
    categorySlug: 'software',
    heroImage: '/images/products/doorbird/doorbird-app.png',
    products: ['doorbird/doorbird-app'],
    highlights: [
      { value: 'iOS + Android', label: 'Platform' },
      { value: '£0/month', label: 'No subscription' },
      { value: '4K', label: 'Live view' },
      { value: 'HomeKit', label: 'Native support' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'DoorBird App', tag: 'Premium · Open', featured: true },
        { brand: 'Akuvox SmartPlus', tag: 'AI · Ecosystem' },
        { brand: 'ButterflyMX App', tag: 'Cloud · SaaS' },
      ],
      rows: [
        { feature: 'Live 4K video', values: ['yes', 'no', 'no'] },
        { feature: 'Local image storage', values: ['yes', 'no', 'no'] },
        { feature: 'HomeKit integration', values: ['yes', 'no', 'no'] },
        { feature: 'HTTP API triggers', values: ['yes', 'yes', 'no'] },
        { feature: 'No subscription', values: ['yes', 'yes', 'no'] },
        { feature: 'Multi-device support', values: ['yes', 'yes', 'yes'] },
        { feature: 'Face recognition', values: ['no', 'yes', 'no'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/doorbird/software-1.jpg',
        tag: 'Software',
        title: 'DoorBird App',
        desc: 'Premium remote access'
      },
      {
        image: '/images/installations/doorbird/software-2.jpg',
        tag: 'Software',
        title: 'Cloud Management',
        desc: 'Remote admin tools'
      }
    ],
  },
};

export const products: Record<string, ProductData> = {

  'butterfly/video-intercom-panel': {
    slug: 'video-intercom-panel',
    brand: 'ButterflyMX',
    brandSlug: 'butterfly',
    model: 'Video Intercom Panel',
    eyebrow: 'ButterflyMX · Flagship — Cloud Video Intercom',
    title: 'The building’s front door, managed entirely from the cloud.',
    tagline: '— smartphone video entry for modern multi-tenant buildings.',
    description: 'The ButterflyMX Video Intercom Panel is a cloud-connected video entry system that lets residents grant access via their smartphone from anywhere. Property managers control the entire system from a web dashboard — no on-site hardware management required.',
    image: 'https://butterflymx.com/wp-content/uploads/2024/07/butterflymx-video-intercoms.webp',
    meta: [
      { value: '10,000', unit: '+', label: 'Buildings globally' },
      { value: '99.9', unit: '%', label: 'Cloud uptime' },
      { value: 'HD', unit: '', label: 'Video quality' },
    ],
    stats: [
      { value: '10,000', unit: '+', label: 'Buildings' },
      { value: '99.9', unit: '%', label: 'Cloud uptime' },
      { value: 'HD', unit: '', label: 'Video call quality' },
      { value: '<3', unit: 's', label: 'Entry time' },
    ],
    features: [
      { tag: 'SMARTPHONE ENTRY', title: 'Open the door from anywhere.', body: 'Residents receive a video call on their smartphone when a visitor buzzes. They see, speak to, and grant access from anywhere.', icon: 'smartphone' },
      { tag: 'CLOUD MANAGED', title: 'Zero on-site hardware management.', body: 'Property managers add/remove residents, issue virtual keys, and manage delivery access from a web dashboard.', icon: 'cloud' },
      { tag: 'DELIVERY ACCESS', title: 'One-time PINs for couriers.', body: 'Generate time-limited PINs for deliveries. The system logs every entry with photo, timestamp, and method used.', icon: 'package' },
      { tag: 'VIDEO CALLING', title: 'HD video with two-way audio.', body: 'Crystal-clear video and audio let residents verify visitors before granting access. Night vision ensures visibility.', icon: 'video' },
      { tag: 'AUDIT TRAIL', title: 'Every entry logged.', body: 'Timestamped photo logs of every door event. Exportable reports for compliance, disputes, and building management.', icon: 'log' },
      { tag: 'INTEGRATIONS', title: 'Works with property management software.', body: 'Native integrations with Yardi, RealPage, Entrata, and more. Tenant directories sync automatically.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Build-to-Rent', title: 'Purpose-built rental blocks.', desc: 'The ideal entry system for BTR developments where resident turnover is high and property managers need remote control over access credentials.', stats: [{ value: '60%', label: 'Less admin time' }, { value: '0', label: 'Key handovers' }] },
      { mark: 'Student Housing', title: 'University accommodations.', desc: 'Students manage their own access via smartphone. No physical keys to lose. Batch credential management for yearly intake.', stats: [{ value: '100%', label: 'Self-service' }, { value: '85%', label: 'Fewer lockouts' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '8" or 11.6" options · touchscreen' },
        { key: 'Camera', value: 'HD wide-angle · IR night vision' },
        { key: 'Audio', value: 'Full-duplex · noise cancellation' },
        { key: 'Protection', value: 'IP65 weather rated' },
        { key: 'Mounting', value: 'Surface or flush mount options' },
      ]},
      { category: 'Connectivity & Platform', rows: [
        { key: 'Network', value: 'PoE (802.3af) · Wi-Fi backup' },
        { key: 'Platform', value: 'Cloud-hosted' },
        { key: 'App', value: 'iOS + Android' },
        { key: 'PMS integration', value: 'Yardi · RealPage · Entrata · AppFolio' },
        { key: 'Access methods', value: 'Smartphone · PIN · Virtual key · QR code' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'ButterflyMX', tag: 'Cloud · Smartphone', featured: true },
        { brand: 'Traditional Intercom', tag: 'Wired · Analogue' },
      ],
      rows: [
        { feature: 'Smartphone video entry', values: ['yes', 'no'] },
        { feature: 'Cloud management', values: ['yes', 'no'] },
        { feature: 'Delivery PIN codes', values: ['yes', 'no'] },
        { feature: 'Property management integration', values: ['yes', 'no'] },
        { feature: 'Remote resident management', values: ['yes', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'We eliminated key handovers entirely. New tenants get access via the app before they even move in.', name: 'Sarah Mitchell', role: 'Operations Manager', initials: 'SM' },
    ],
    faqs: [
      { question: 'Is there a monthly subscription?', answer: 'Yes — ButterflyMX operates on a SaaS model. The subscription includes cloud hosting, app access, automatic updates, and PMS integrations.' },
      { question: 'What happens if the internet goes down?', answer: 'The panel has local fallback capabilities. Residents can still use PIN codes at the panel to enter.' },
    ],
  },

  'butterfly/front-desk-station': {
    slug: 'front-desk-station',
    brand: 'ButterflyMX',
    brandSlug: 'butterfly',
    model: 'Front Desk Station',
    eyebrow: 'ButterflyMX \u00b7 Concierge \u2014 Cloud Reception Console',
    title: 'A virtual concierge that works 24/7, even when the desk is unstaffed.',
    tagline: '\u2014 cloud-managed front desk for staffed and unstaffed lobbies.',
    description: 'The ButterflyMX Front Desk Station gives on-site staff a dedicated console to manage visitor entry, package notifications, and building-wide announcements \u2014 or operates autonomously when the desk is unstaffed, routing calls to residents\u2019 smartphones.',
    image: '/images/products/butterfly/front-desk-station.png',
    meta: [
      { value: '24/7', unit: '', label: 'Operation' },
      { value: 'Unified', unit: '', label: 'Dashboard' },
      { value: 'HD', unit: '', label: 'Video feeds' },
    ],
    stats: [
      { value: '24', unit: '/7', label: 'Always on' },
      { value: '100', unit: '%', label: 'Calls handled' },
      { value: '<2', unit: 's', label: 'Response time' },
      { value: 'HD', unit: '', label: 'Video quality' },
    ],
    features: [
      { tag: 'DUAL MODE', title: 'Staffed or unstaffed \u2014 it adapts.', body: 'When concierge staff are present, calls route to the desk station. After hours, calls route directly to residents\u2019 smartphones. Seamless handover, zero gaps.', icon: 'clock' },
      { tag: 'VISITOR MANAGEMENT', title: 'Pre-register guests, log walk-ins.', body: 'Staff can pre-register expected visitors, grant temporary access, and maintain a digital visitor log with photo evidence for every entry.', icon: 'log' },
      { tag: 'PACKAGE ALERTS', title: 'Notify residents of deliveries.', body: 'When a package arrives, staff log it and residents receive instant notifications. No more lost parcels, no more lobby clutter.', icon: 'package' },
      { tag: 'MULTI-CAMERA', title: 'View all entry points from one screen.', body: 'The desk station displays live feeds from all ButterflyMX cameras and intercoms. One screen, full building visibility.', icon: 'video' },
    ],
    useCases: [
      { mark: 'Luxury Residential', title: 'High-end apartments with concierge.', desc: 'Gives concierge staff a professional digital console that matches the building\u2019s premium positioning. Video verification of every visitor before granting access.', stats: [{ value: '100%', label: 'Visitor verified' }, { value: '0', label: 'Unauthorised entries' }] },
      { mark: 'Mixed-Use Buildings', title: 'Residential + commercial lobbies.', desc: 'Manage residential and commercial tenants from one console. Different access rules for offices vs apartments, all from the same interface.', stats: [{ value: '2-in-1', label: 'Management' }, { value: 'Unified', label: 'Platform' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '10.1" IPS touchscreen' },
        { key: 'Camera', value: 'HD \u00b7 120\u00b0 wide angle' },
        { key: 'Audio', value: 'Full-duplex \u00b7 built-in speaker + mic' },
        { key: 'Mounting', value: 'Desktop stand or VESA wall mount' },
        { key: 'Dimensions', value: '280 \u00d7 195 \u00d7 38 mm' },
      ]},
      { category: 'Platform', rows: [
        { key: 'Mode', value: 'Staffed (manual) or unstaffed (auto-route)' },
        { key: 'Cameras', value: 'Live view from all ButterflyMX devices' },
        { key: 'Notifications', value: 'Push \u00b7 SMS \u00b7 email alerts' },
        { key: 'Directory', value: 'Full building directory with search' },
        { key: 'Packages', value: 'Log, notify, track delivery status' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'ButterflyMX Desk', tag: 'Cloud \u00b7 Smart', featured: true },
        { brand: 'Traditional Concierge Phone', tag: 'Analogue' },
        { brand: 'No Front Desk', tag: 'Intercom Only' },
      ],
      rows: [
        { feature: 'Video verification', values: ['yes', 'no', 'partial'] },
        { feature: 'After-hours auto-routing', values: ['yes', 'no', 'yes'] },
        { feature: 'Package management', values: ['yes', 'no', 'no'] },
        { feature: 'Digital visitor log', values: ['yes', 'no', 'no'] },
        { feature: 'Multi-camera view', values: ['yes', 'no', 'no'] },
        { feature: 'Cloud management', values: ['yes', 'no', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'Our concierge team loves it. They can see who\u2019s at every entrance without leaving the desk. After 10pm it handles everything automatically.', name: 'David Osei', role: 'Facilities Manager \u00b7 The Residence', initials: 'DO' },
      { quote: 'Package tracking alone saved us 4 hours a week of staff time. Residents get notified instantly and complaints about lost deliveries dropped to zero.', name: 'Karen Walsh', role: 'Building Manager \u00b7 Harbour Point', initials: 'KW' },
    ],
    faqs: [
      { question: 'Can it work without a concierge on-site?', answer: 'Yes \u2014 in unstaffed mode, visitor calls route directly to residents\u2019 smartphones. The system operates autonomously 24/7 regardless of staffing.' },
      { question: 'Does it integrate with the intercom panel?', answer: 'Yes \u2014 the Front Desk Station, Video Intercom Panel, and Access Readers all share the same ButterflyMX platform. One dashboard, one app, unified management.' },
      { question: 'Can multiple staff members use it?', answer: 'Yes \u2014 staff log in with individual credentials for accountability. Multiple stations can be deployed across different desk positions.' },
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
    image: 'https://butterflymx.com/wp-content/uploads/2023/02/butterflymx-single-gang-reader.png',
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

  'doorbird/a1101-indoor-station': {
    slug: 'a1101-indoor-station',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'A1101 Apartment Station',
    eyebrow: 'DoorBird · Premium — Stainless Steel IP Video Station',
    title: 'German-engineered stainless steel doorbell with IP65 resilience.',
    tagline: '— the premium smart doorbell for architecturally-conscious homes.',
    description: 'The DoorBird A1101 is a premium indoor apartment station with live video, two-way audio, and one-tap unlock. It pairs with DoorBird intercom systems to give residents an always-available in-unit panel without relying on smartphones.',
    image: 'https://www.doorbird.com/shop/media/4260423860902/DoorBird_A1101_indoor-station_rgb.jpg',
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
      { category: 'Connectivity & Integration', rows: [
        { key: 'Network', value: 'PoE (802.3af) · 10/100 Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP' },
        { key: 'Smart home', value: 'HomeKit · KNX · Control4 · Crestron · Loxone' },
        { key: 'Storage', value: 'On-device · no cloud subscription needed' },
        { key: 'Door control', value: 'Electric strike relay · Wiegand output' },
        { key: 'Notifications', value: 'Push (iOS/Android) · SIP call · email' },
        { key: 'API', value: 'Full HTTP REST API · event webhooks' },
        { key: 'IFTTT/Home Assistant', value: 'Supported via API + native integration' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird A1101', tag: 'Premium · Indoor', featured: true },
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
      { question: 'What finishes are available?', answer: 'The A1101 is available in premium finishes including brushed options and selected custom variants for high-end projects.' },
      { question: 'Can it control a gate and a door?', answer: 'The A1101 works with paired DoorBird systems, so residents can trigger approved doors and gates directly from the station interface.' },
      { question: 'How does it compare to Ring or Nest?', answer: 'DoorBird is a professional-grade IP device — wired power (no battery), stainless steel, open API, and local storage. Ring/Nest are consumer products with plastic housings, batteries, and mandatory cloud subscriptions.' },
    ],
  },

  'akuvox/x915-flagship-panel': {
    slug: 'x915-flagship-panel',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'X915 Flagship Panel',
    eyebrow: 'Akuvox · Flagship — AI Face Recognition Panel',
    title: 'The ultimate AI face recognition panel with 8" touchscreen.',
    tagline: '— 3D anti-spoofing for 99.9% accuracy in under 500ms.',
    description: 'The Akuvox X915 is the flagship face recognition panel featuring an 8" IPS display and advanced camera system (RGB + IR + ToF) for 3D anti-spoofing. Supports up to 50,000 face templates with on-device AI processing for touchless, secure entry.',
    image: 'https://www.akuvox.com/uploads/202012/2020123119053400.png',
    meta: [
      { value: '99.9', unit: '%', label: 'Recognition accuracy' },
      { value: '8', unit: '"', label: 'IPS touchscreen' },
      { value: '50,000', unit: '', label: 'Face capacity' },
    ],
    stats: [
      { value: '99.9', unit: '%', label: 'Accuracy' },
      { value: '<500', unit: 'ms', label: 'Recognition speed' },
      { value: '50k', unit: '', label: 'Face templates' },
      { value: '3D', unit: '', label: 'Anti-spoof' },
    ],
    features: [
      { tag: 'TRI-CAMERA', title: 'Advanced triple-lens system.', body: 'Sensors work together: visible-light RGB for clear video, infrared for low-light, and depth mapping for 3D anti-spoofing.', icon: 'face' },
      { tag: 'AI ENGINE', title: 'On-device neural processing unit.', body: 'Dedicated NPU handles face recognition without cloud dependency. All processing is local — no data leaves the device.', icon: 'shield' },
      { tag: 'TOUCHLESS', title: 'Walk-up, hands-free authentication.', body: 'Residents simply approach the panel — no touching, no scanning needed. Unlocks in under 500ms.', icon: 'hand' },
      { tag: 'MULTI-MODAL', title: 'Face, PIN, QR, RFID, BLE.', body: 'Multiple authentication methods available simultaneously as backups for visitors and edge cases.', icon: 'key' },
    ],
    useCases: [
      { mark: 'Premium Residential', title: 'Luxury apartment complexes.', desc: 'The flagship panel for premium developments where touchless entry and cutting-edge technology are expected.', stats: [{ value: '0', label: 'Credentials needed' }, { value: '<500ms', label: 'Entry time' }] },
      { mark: 'High-Security', title: 'Data centres & secure facilities.', desc: '3D anti-spoofing prevents photos, masks, and deepfakes from gaining entry.', stats: [{ value: '3D', label: 'Liveness detection' }, { value: '0', label: 'Spoof breaches' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '8" IPS capacitive touch' },
        { key: 'Camera System', value: 'RGB + IR + Depth sensor' },
        { key: 'Face Capacity', value: '50,000 templates' },
        { key: 'Enclosure', value: 'Die-cast aluminium · IP65 · IK10' },
        { key: 'Operating Temp', value: '−30°C to +60°C' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: 'Gigabit Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · Wiegand' },
        { key: 'Power', value: 'PoE+ or 12V DC' },
        { key: 'AI Processing', value: 'Dedicated NPU · on-device inference' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox X915', tag: 'AI Flagship', featured: true },
        { brand: 'Standard Face Panel', tag: '2D Camera' },
      ],
      rows: [
        { feature: '3D anti-spoofing', values: ['yes', 'no'] },
        { feature: '50,000 face capacity', values: ['yes', 'no'] },
        { feature: 'Touchless entry', values: ['yes', 'partial'] },
        { feature: 'On-device AI', values: ['yes', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'The camera system on the X915 is genuinely next-level. 3D anti-spoofing that actually works.', name: 'James Crawford', role: 'Security Director', initials: 'JC' },
    ],
    faqs: [
      { question: 'Can it detect masks and photos?', answer: 'Yes. The depth sensor creates a 3D map of the face in real-time. Flat images and masks are rejected.' },
      { question: 'Does it work without internet?', answer: 'Absolutely. All AI processing happens on-device. The panel works completely offline.' },
    ],
  },

  'akuvox/x912-intercom-panel': {
    slug: 'x912-intercom-panel',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'X912 Intercom Panel',
    eyebrow: 'Akuvox · Vandal-Resistant — Smart Intercom',
    title: 'The heavy-duty video intercom for high-end buildings.',
    tagline: '— ultra-compact footprint with uncompromising IK10 durability.',
    description: 'The Akuvox X912 is a vandal-resistant door phone designed for high-end residential and commercial projects. It features a compact footprint, a 4-inch touch display, numeric keypad, 2MP camera, and supports multi-way unlock (Face, RFID, PIN, and BLE).',
    image: '/images/products/akuvox/X912.png',
    meta: [
      { value: 'IK10', unit: '', label: 'Vandal rating' },
      { value: '4', unit: '"', label: 'TFT Touchscreen' },
      { value: 'IP65', unit: '', label: 'Weather sealed' },
    ],
    stats: [
      { value: 'IK10', unit: '', label: 'Durability' },
      { value: 'SIP', unit: '', label: 'Video calling' },
      { value: 'Multi', unit: '', label: 'Access modes' },
      { value: 'PoE+', unit: '', label: 'Power' },
    ],
    features: [
      { tag: 'VANDAL RESISTANT', title: 'IK10 certified stainless steel.', body: 'Engineered with a rugged stainless steel front panel and robust components to withstand impact and extreme environments.', icon: 'shield' },
      { tag: 'COMPACT DESIGN', title: 'Perfect for limited spaces.', body: 'With its slim form factor, the X912 is perfectly suited for installations on narrow door mullions or spaces where bulkier panels won\'t fit.', icon: 'layout' },
      { tag: 'MULTI-MODAL', title: 'Face, PIN, Card, Bluetooth.', body: 'Provides comprehensive credential support including face recognition, 13.56MHz/125kHz RFID, NFC, BLE, and standard PIN codes.', icon: 'key' },
      { tag: 'HD VIDEO', title: '2MP HD camera with HDR.', body: 'Full HD video calling with a 125° wide-angle lens, HDR support, and automatic night mode illumination.', icon: 'video' },
    ],
    useCases: [
      { mark: 'Commercial Towers', title: 'Office building access.', desc: 'Offers professionals multiple secure ways to enter without sacrificing the lobby aesthetic.', stats: [{ value: 'Sleek', label: 'Design' }, { value: 'High', label: 'Throughput' }] },
      { mark: 'Condominiums', title: 'Residential entry.', desc: 'High-end apartments requiring an intercom that blends rugged security with modern touch-screen convenience.', stats: [{ value: 'IK10', label: 'Impact rating' }, { value: 'Face', label: 'Recognition' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '4 Inch color TFT LCD · touchscreen' },
        { key: 'Camera', value: '2MP CMOS · HDR · 125°(H) / 65°(V)' },
        { key: 'Keypad', value: 'Physical numeric keypad' },
        { key: 'Readers', value: 'RFID (13.56MHz/125kHz) · NFC · BLE' },
        { key: 'Enclosure', value: 'Stainless steel · IP65 · IK10' },
        { key: 'Dimensions', value: '234 × 94.5 × 34 mm' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: '10/100 Ethernet · PoE+ (802.3at)' },
        { key: 'Protocols', value: 'SIP v1/v2 · ONVIF · HTTP API' },
        { key: 'I/O', value: '2× relays · 3× inputs · Wiegand · RS485' },
        { key: 'Management', value: 'Web UI · Auto-provisioning' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox X912', tag: 'Vandal-Resistant', featured: true },
        { brand: 'Standard Panel', tag: 'Plastic housing' },
      ],
      rows: [
        { feature: 'IK10 Stainless Steel', values: ['yes', 'no'] },
        { feature: 'Face recognition', values: ['yes', 'partial'] },
        { feature: 'Physical keypad', values: ['yes', 'yes'] },
        { feature: 'IP65 weatherproof', values: ['yes', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'The narrow footprint fit perfectly on our glass door mullions, and the stainless steel finish feels incredibly premium.', name: 'Sarah Jensen', role: 'Facilities Director', initials: 'SJ' },
    ],
    faqs: [
      { question: 'Is the X912 weather and vandal proof?', answer: 'Yes, it holds an IP65 rating for water and dust resistance, and a maximum IK10 rating for impact protection.' },
      { question: 'Does it support Bluetooth mobile access?', answer: 'Yes, it features a built-in BLE module allowing residents to unlock the door using their smartphone.' },
    ],
  },

  'akuvox/s532-video-door-phone': {
    slug: 's532-video-door-phone',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'S532 Hybrid Video Door Phone',
    eyebrow: 'Akuvox · Hybrid — IP & Analog Door Phone',
    title: 'The hybrid door phone bridging analog and IP technology.',
    tagline: '— seamless upgrades for traditional intercom systems.',
    description: 'The Akuvox S532 is a Linux-based video door phone that integrates IP technology with existing analog infrastructure. It features a 2.8" color LCD, physical keypad, and multiple access control methods (PIN, RFID, Bluetooth, NFC), making it an ideal choice for modernizing buildings without extensive rewiring.',
    image: '/images/products/akuvox/S532.png',
    meta: [
      { value: '2.8', unit: '"', label: 'Color LCD' },
      { value: 'Hybrid', unit: '', label: 'IP / Analog' },
      { value: 'IP66', unit: '', label: 'Weather rated' },
    ],
    stats: [
      { value: '2.8', unit: '"', label: 'Display' },
      { value: '10k', unit: '', label: 'Users' },
      { value: 'IP66', unit: '', label: 'Weather rating' },
      { value: 'IK08', unit: '', label: 'Impact rating' },
    ],
    features: [
      { tag: 'HYBRID SYSTEM', title: 'IP-to-analog integration.', body: 'Built-in conversion module allows seamless upgrades from legacy analog systems to modern IP functionality without tearing out old wires.', icon: 'integration' },
      { tag: 'MULTI-ACCESS', title: 'PIN, RFID, NFC, BLE.', body: 'Comprehensive access credentials including physical keypad PIN entry, 13.56MHz & 125kHz RFID, Bluetooth, and NFC.', icon: 'key' },
      { tag: 'HD CAMERA', title: '2MP wide-angle lens.', body: 'Provides a 130° horizontal viewing angle with automatic high-intensity IR LEDs for clear vision in the dark.', icon: 'video' },
      { tag: 'RUGGED BUILD', title: 'IP66 & IK08 certification.', body: 'Housed in an aluminum die-cast body, ensuring robust protection against extreme weather and vandalism.', icon: 'shield' },
    ],
    useCases: [
      { mark: 'Retrofit Projects', title: 'Upgrading older buildings.', desc: 'Perfect for apartment complexes looking to upgrade old analog buzzer systems to smart IP video without the cost of rewiring the entire building.', stats: [{ value: 'Low', label: 'Wiring cost' }, { value: 'High', label: 'Feature gain' }] },
      { mark: 'Secondary Doors', title: 'Side gates and service entries.', desc: 'Rugged build quality and keypad make it ideal for exposed perimeter doors.', stats: [{ value: 'IP66', label: 'Waterproof' }, { value: 'IK08', label: 'Vandal resistant' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '2.8 Inch color LCD' },
        { key: 'Camera', value: '2MP CMOS · 130°(H) / 90°(V)' },
        { key: 'Keypad', value: 'Numeric keypad with extra buttons' },
        { key: 'RFID', value: '13.56MHz MIFARE + 125kHz EM · NFC · BLE' },
        { key: 'Enclosure', value: 'Aluminum Diecasting · IP66 · IK08' },
        { key: 'Dimensions', value: '301 × 106 × 37.8 mm' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: 'Ethernet · PoE (802.3at)' },
        { key: 'I/O', value: '2× Relays · 4× Inputs · Wiegand · RS485' },
        { key: 'Protocols', value: 'SIP v1/v2 · ONVIF · HTTP' },
        { key: 'Capacity', value: '10,000 Users · 50,000 Cards' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox S532', tag: 'Hybrid Video', featured: true },
        { brand: 'Standard Keypad', tag: 'Audio Only' },
      ],
      rows: [
        { feature: 'Video Camera', values: ['yes', 'no'] },
        { feature: 'IP / Analog hybrid', values: ['yes', 'no'] },
        { feature: 'RFID & Bluetooth', values: ['yes', 'partial'] },
        { feature: 'IP66 Weatherproof', values: ['yes', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'We deployed the S532 in an old residential block. We kept the legacy 2-wire infrastructure but gained full IP video calling to smartphones. Huge win.', name: 'Rachel Green', role: 'Building Manager', initials: 'RG' },
    ],
    faqs: [
      { question: 'Does it support Bluetooth unlocking?', answer: 'Yes, it has built-in Bluetooth 5.0 for mobile access via the Akuvox app.' },
      { question: 'Can it be installed outside?', answer: 'Yes, the S532 has a high IP66 rating protecting it from heavy rain and dust.' },
    ],
  },

  'akuvox/c313-indoor-monitor': {
    slug: 'c313-indoor-monitor',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'C313 Indoor Monitor',
    eyebrow: 'Akuvox · Indoor — Wall-Mounted Monitor Station',
    title: 'The 7" indoor monitor for residents who prefer a dedicated panel.',
    tagline: '— see visitors, talk, and unlock without reaching for your phone.',
    description: 'The Akuvox C313 is a 7" wall-mounted indoor monitor that pairs with any Akuvox door station. Residents see live video, speak to visitors, and unlock doors directly from their apartment wall panel — no smartphone needed.',
    image: '/images/products/akuvox/C313.png',
    meta: [
      { value: '7', unit: '"', label: 'HD touchscreen' },
      { value: 'SIP', unit: '', label: 'Video calling' },
      { value: 'PoE', unit: '', label: 'Single-cable install' },
    ],
    stats: [
      { value: '7', unit: '"', label: 'Touchscreen' },
      { value: 'HD', unit: '', label: 'Video quality' },
      { value: 'SIP', unit: '', label: 'Protocol' },
      { value: 'PoE', unit: '', label: 'Powered' },
    ],
    features: [
      { tag: 'VIDEO MONITOR', title: 'Live HD video from door stations.', body: 'See who\'s at the door in real-time HD video. Works with all Akuvox outdoor stations for a complete intercom ecosystem.', icon: 'video' },
      { tag: 'TOUCHSCREEN', title: '7" capacitive touch display.', body: 'Intuitive touchscreen interface — answer calls, view logs, unlock doors, and manage settings with simple taps.', icon: 'screen' },
      { tag: 'INTERCOM', title: 'Room-to-room and door calling.', body: 'Not just for the front door — call between indoor monitors, room to room, or station to station within the building.', icon: 'building' },
      { tag: 'UNLOCK', title: 'One-touch door release.', body: 'Grant access with a single tap on screen. Supports multiple doors — front gate, main entrance, lobby — all from one panel.', icon: 'key' },
      { tag: 'PoE INSTALL', title: 'Single ethernet cable installation.', body: 'Power and data over one cable. No separate power supply needed — dramatically simplifies installation in apartments.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Apartment Residents', title: 'In-unit door answering.', desc: 'Residents who prefer a dedicated wall panel over using their smartphone. Always on, always ready — no app to open, no phone to find.', stats: [{ value: 'Always', label: 'On & ready' }, { value: '1-tap', label: 'To unlock' }] },
      { mark: 'Elderly & Accessible', title: 'Accessibility-friendly.', desc: 'Large screen and simple interface for elderly residents or those who are less comfortable with smartphones. Mounted at accessible height.', stats: [{ value: '7"', label: 'Large display' }, { value: 'Simple', label: 'Interface' }] },
      { mark: 'Concierge & Reception', title: 'Staff monitoring stations.', desc: 'Concierge desks and reception areas use indoor monitors to see all entry points, answer visitor calls, and manage access centrally.', stats: [{ value: 'Multi', label: 'Door support' }, { value: 'HD', label: 'Video feed' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '7" IPS capacitive · 1024 × 600' },
        { key: 'Audio', value: 'Full-duplex · built-in speaker & mic' },
        { key: 'Mounting', value: 'Wall-mount · flush or surface' },
        { key: 'Power', value: 'PoE (802.3af) · 12V DC' },
        { key: 'Dimensions', value: '210 × 148 × 22 mm' },
        { key: 'Colour', value: 'White or black faceplate' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: 'Ethernet · Wi-Fi optional' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API' },
        { key: 'Pairing', value: 'Any Akuvox door station' },
        { key: 'Intercom', value: 'Room-to-room · door-to-room' },
        { key: 'Log', value: 'Call history · missed call alerts' },
        { key: 'Management', value: 'Web UI · auto-provisioning' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox C313', tag: 'Indoor · 7"', featured: true },
        { brand: 'Smartphone App', tag: 'Mobile' },
        { brand: 'Audio Handset', tag: 'Basic' },
      ],
      rows: [
        { feature: 'HD video display', values: ['yes', 'yes', 'no'] },
        { feature: 'Always on (no app)', values: ['yes', 'no', 'yes'] },
        { feature: 'Touchscreen controls', values: ['yes', 'yes', 'no'] },
        { feature: 'Room-to-room calls', values: ['yes', 'no', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'no', 'no'] },
        { feature: 'Wall-mounted', values: ['yes', 'no', 'yes'] },
      ],
    },
    testimonials: [
      { quote: 'Our elderly residents love the C313 — big screen, simple buttons, always on. No smartphone gymnastics needed.', name: 'Karen Price', role: 'Warden · Elm Court Sheltered Housing', initials: 'KP' },
      { quote: 'Installed in every unit of our 80-apartment building. Pairs perfectly with our Akuvox entry system at the front door.', name: 'David Okonkwo', role: 'Property Director · Greenfield Residences', initials: 'DO' },
      { quote: 'The concierge uses the C313 to monitor all entry points. One screen, all doors, total visibility.', name: 'Maria Santos', role: 'Building Manager · Skyline Tower', initials: 'MS' },
    ],
    faqs: [
      { question: 'Does it work with all Akuvox door stations?', answer: 'Yes — the C313 is compatible with Akuvox door station deployments used across our intercom range.' },
      { question: 'Can I still use the smartphone app?', answer: 'Absolutely. The C313 and smartphone app work simultaneously — calls ring on both. Whichever you answer first takes the call.' },
      { question: 'Is it PoE or does it need a separate power supply?', answer: 'PoE is standard — one ethernet cable provides both power and data. A 12V DC adapter is available as an alternative for locations without PoE switches.' },
    ],
  },

  'akuvox/s562-indoor-station': {
    slug: 's562-indoor-station',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'S562 Indoor Station',
    eyebrow: 'Akuvox · Premium Indoor — 7" SIP Monitor',
    title: 'A stylish 7-inch touch screen communicator.',
    tagline: '— ultra-clear, space-saving design with SIP integration.',
    description: 'The Akuvox S562 is a multifunctional indoor communicator running a Linux operating system. It features a brilliant 7-inch capacitive touch screen, providing audio and video communication with door phones via the SIP 2.0 protocol in an unobtrusive, space-saving design.',
    image: '/images/products/akuvox/S562.png',
    meta: [
      { value: '7', unit: '"', label: 'TFT Touchscreen' },
      { value: 'SIP', unit: '2.0', label: 'Protocol' },
      { value: 'Linux', unit: '', label: 'OS platform' },
    ],
    stats: [
      { value: '7', unit: '"', label: 'Display' },
      { value: 'Linux', unit: '', label: 'Platform' },
      { value: 'SIP', unit: '', label: 'Integration' },
      { value: 'PoE', unit: '', label: 'Powered' },
    ],
    features: [
      { tag: 'DISPLAY', title: '7" capacitive touch screen.', body: 'Clear 1024x600 resolution TFT LCD display with an energy-saving mode.', icon: 'screen' },
      { tag: 'SIP COMMS', title: 'Two-way audio and video.', body: 'Complies with standard SIP protocols for easy integration into existing PBX networks and communication with door phones.', icon: 'video' },
      { tag: 'ELEGANT DESIGN', title: 'Ultra-clear, stylish appearance.', body: 'Modern aesthetic designed to fit standard US or European electrical wall boxes with a slim profile.', icon: 'layout' },
      { tag: 'PoE READY', title: 'Single cable install.', body: 'Supports 802.3af Power-over-Ethernet for simple, clean installation without needing extra power adapters.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Modern Apartments', title: 'Sleek resident terminals.', desc: 'For apartments where residents want a dedicated wall panel for answering the door that matches modern decor.', stats: [{ value: '7"', label: 'Display size' }, { value: 'Slim', label: 'Profile' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '7" TFT LCD · 1024 × 600 · capacitive' },
        { key: 'OS', value: 'Linux' },
        { key: 'Audio', value: 'Echo Cancellation · two-way audio' },
        { key: 'Mounting', value: 'Wall-mounted (US/EU box compatible)' },
        { key: 'Power', value: 'PoE (802.3af) or 12V DC' },
        { key: 'Dimensions', value: '216.4 × 118.8 × 21.7 mm' },
      ]},
      { category: 'Software & Integration', rows: [
        { key: 'Protocols', value: 'SIP v1/v2 · RTSP · TCP/UDP' },
        { key: 'I/O Interfaces', value: '1× Relay out · 8× I/O · RS485' },
        { key: 'Intercom', value: 'Room-to-room · Door-to-room' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox S562', tag: '7" Linux SIP', featured: true },
        { brand: 'Basic Monitor', tag: 'Analog only' },
      ],
      rows: [
        { feature: '7" Touch Display', values: ['yes', 'partial'] },
        { feature: 'SIP protocol', values: ['yes', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'no'] },
        { feature: 'IP Networked', values: ['yes', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'The S562 has a fast, responsive interface and looks great on the wall. Integrating it with our SIP server took minutes.', name: 'Victoria Lane', role: 'Integration Specialist', initials: 'VL' },
    ],
    faqs: [
      { question: 'Does it run Android apps?', answer: 'No, the S562 operates on a stable Linux OS optimized for intercom and SIP functionality. (For Android apps, look to models like the C315 or S567).' },
      { question: 'How is it powered?', answer: 'PoE (Power over Ethernet) is standard, meaning a single network cable provides both power and data.' },
    ],
  },

  'akuvox/a02-access-terminal': {
    slug: 'a02-access-terminal',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'A02 Access Terminal',
    eyebrow: 'Akuvox · Access — Compact Control Terminal',
    title: 'Three-in-one smart IP access control reader.',
    tagline: '— PIN, RFID, and NFC combined in one stylish unit.',
    description: 'The Akuvox A02 is an IP-based access control terminal that combines a door controller and card reader into a single compact device. It supports PIN codes via a touch keypad, RFID cards, and mobile access via NFC, offering ultimate flexibility.',
    image: '/images/products/akuvox/a02.png',
    meta: [
      { value: 'Touch', unit: '', label: 'Keypad' },
      { value: '3-in-1', unit: '', label: 'Access modes' },
      { value: 'IP65', unit: '', label: 'Rating' },
    ],
    stats: [
      { value: '20k', unit: '', label: 'User capacity' },
      { value: 'IP65', unit: '', label: 'Weather rated' },
      { value: 'PoE', unit: '', label: 'Powered' },
      { value: 'Wiegand', unit: '', label: 'Integration' },
    ],
    features: [
      { tag: 'TOUCH KEYPAD', title: 'Illuminated touch keys.', body: 'Sleek front panel with a touch keypad for reliable PIN code entry, blending aesthetics with durability.', icon: 'screen' },
      { tag: 'MULTI-MODAL', title: 'PIN, RFID, and NFC.', body: 'Multiple authentication options including 13.56MHz and 125kHz RFID card reading and NFC for smartphone access.', icon: 'key' },
      { tag: 'STANDALONE', title: 'Built-in controller.', body: 'Operates as an all-in-one reader and controller, removing the need for a separate costly access control panel for a single door.', icon: 'building' },
      { tag: 'RUGGED', title: 'Aluminum frame, IP65 rated.', body: 'Durable construction suitable for outdoor deployment with a tamper-proof alarm built in.', icon: 'shield' },
    ],
    useCases: [
      { mark: 'Office Doors', title: 'Internal access control.', desc: 'Perfect for securing specific suites or IT rooms inside an office complex without requiring heavy infrastructure.', stats: [{ value: 'Standalone', label: 'Operation' }, { value: 'PoE', label: 'Easy install' }] },
      { mark: 'Secondary Entries', title: 'Side doors and garages.', desc: 'Provides robust PIN and card access for resident side doors that don\'t require video intercoms.', stats: [{ value: 'IP65', label: 'Weatherproof' }, { value: '20k', label: 'Users' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Panel', value: 'Touch Keypad · Aluminum Alloy Frame' },
        { key: 'RFID', value: '13.56MHz & 125kHz · NFC' },
        { key: 'Capacity', value: '20,000 Users · 100,000 Event Logs' },
        { key: 'Power', value: 'PoE (802.3af) or 12V DC' },
        { key: 'Mounting', value: 'Flush-mounted or Wall-mounted' },
        { key: 'Dimensions', value: '86 × 86 × 33 mm' },
      ]},
      { category: 'Connectivity', rows: [
        { key: 'Network', value: '10/100 Ethernet' },
        { key: 'Interfaces', value: '1× Relay · 2× Inputs · Wiegand' },
        { key: 'Management', value: 'Web UI · Cloud Management System' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox A02', tag: 'Terminal + Keypad', featured: true },
        { brand: 'Basic Reader', tag: 'RFID Only' },
      ],
      rows: [
        { feature: 'Touch Keypad', values: ['yes', 'no'] },
        { feature: 'Built-in Controller (Standalone)', values: ['yes', 'no'] },
        { feature: 'NFC support', values: ['yes', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'Fitted A02 units on all our internal IT doors. We just ran a single Cat6 cable to each one. Very clean installation.', name: 'Ian McLeod', role: 'IT Manager', initials: 'IM' },
    ],
    faqs: [
      { question: 'Does the A02 require a separate control board?', answer: 'No, the A02 is a standalone terminal containing both the reader and the door relay controller.' },
    ],
  },

  'akuvox/smartplus-app': {
    slug: 'smartplus-app',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'SmartPlus App',
    eyebrow: 'Akuvox · Mobile — Smartphone Access App',
    title: 'Answer, unlock, and manage access from your smartphone.',
    tagline: '— the Akuvox ecosystem in your pocket.',
    description: 'Akuvox SmartPlus is the companion app for all Akuvox devices. Receive video calls from door stations, unlock remotely, manage visitor access, view call history, and control indoor monitors — all from your iPhone or Android device.',
    image: '/images/products/akuvox/smartplus.png',
    meta: [
      { value: 'iOS', unit: '+ Android', label: 'Platforms' },
      { value: 'Free', unit: '', label: 'Download' },
      { value: 'HD', unit: '', label: 'Video calls' },
    ],
    stats: [
      { value: 'iOS', unit: '', label: '14+' },
      { value: 'Android', unit: '', label: '8+' },
      { value: 'Free', unit: '', label: 'No subscription' },
      { value: 'HD', unit: '', label: 'Video' },
    ],
    features: [
      { tag: 'VIDEO CALLS', title: 'HD video calls from door stations.', body: 'When a visitor presses your name at the door, your phone rings with live HD video. See, talk, and decide whether to grant access.', icon: 'video' },
      { tag: 'REMOTE UNLOCK', title: 'Open doors from anywhere.', body: 'Grant access with a single tap — whether you\'re inside the apartment or across the world. Supports multiple doors.', icon: 'key' },
      { tag: 'VISITOR MANAGEMENT', title: 'Create access credentials.', body: 'Generate QR codes, temporary PINs, or time-limited access for visitors, deliveries, and service personnel.', icon: 'face' },
      { tag: 'HISTORY', title: 'Complete call and access log.', body: 'View missed calls, answered calls, and door unlock events. Screenshot captures from door cameras for every interaction.', icon: 'integration' },
      { tag: 'MULTI-SITE', title: 'Manage multiple properties.', body: 'Control access across multiple buildings or locations from one app. Switch between home, office, and other properties seamlessly.', icon: 'building' },
    ],
    useCases: [
      { mark: 'Remote Workers', title: 'Working from home or office.', desc: 'Never miss a delivery again. Answer the door from your desk at work, see the courier, and unlock remotely.', stats: [{ value: '0', label: 'Missed deliveries' }, { value: 'Any', label: 'Where access' }] },
      { mark: 'Property Managers', title: 'Multi-building oversight.', desc: 'Manage access across multiple buildings from one app. Grant temporary access to contractors without being on site.', stats: [{ value: 'Multi', label: 'Building support' }, { value: 'Remote', label: 'Management' }] },
      { mark: 'Frequent Travellers', title: 'Always connected to home.', desc: 'See who\'s at your door whether you\'re in London or Tokyo. Grant access to cleaners, dog walkers, or family.', stats: [{ value: 'Global', label: 'Access' }, { value: 'Real-time', label: 'Notifications' }] },
    ],
    specs: [
      { category: 'App Details', rows: [
        { key: 'iOS', value: 'iOS 14+ · iPhone · iPad · Apple Watch' },
        { key: 'Android', value: 'Android 8+ · phones & tablets' },
        { key: 'Download', value: 'Free · no subscription fees' },
        { key: 'Video', value: 'HD real-time · adaptive bitrate' },
        { key: 'Audio', value: 'Full-duplex two-way' },
        { key: 'Notifications', value: 'Push · call · missed call alerts' },
      ]},
      { category: 'Features & Security', rows: [
        { key: 'Unlock Methods', value: 'Tap-to-unlock · Bluetooth proximity' },
        { key: 'Visitor Access', value: 'QR codes · temp PIN · time-limited' },
        { key: 'Call History', value: 'Full log with video snapshots' },
        { key: 'Multi-site', value: 'Unlimited properties per account' },
        { key: 'Security', value: 'End-to-end encryption · biometric login' },
        { key: 'Compatibility', value: 'All Akuvox door & indoor stations' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox SmartPlus', tag: 'Full-featured', featured: true },
        { brand: 'Basic SIP App', tag: 'Third-party' },
        { brand: 'No App', tag: 'Indoor only' },
      ],
      rows: [
        { feature: 'HD video calls', values: ['yes', 'partial', 'no'] },
        { feature: 'Remote unlock', values: ['yes', 'partial', 'no'] },
        { feature: 'Visitor QR codes', values: ['yes', 'no', 'no'] },
        { feature: 'Call history with photos', values: ['yes', 'no', 'no'] },
        { feature: 'Multi-site support', values: ['yes', 'no', 'no'] },
        { feature: 'Free (no subscription)', values: ['yes', 'partial', 'yes'] },
      ],
    },
    testimonials: [
      { quote: 'I answer my door from the office every day. Courier drops parcels in the lobby, I unlock remotely. No more missed deliveries.', name: 'Jake Morrison', role: 'Resident · Tower Bridge Apartments', initials: 'JM' },
      { quote: 'Managing visitor access across 3 buildings from one app. QR codes for contractors are brilliant — no more key handovers.', name: 'Diane Foster', role: 'Operations Manager · City Living Group', initials: 'DF' },
      { quote: 'The Apple Watch integration means I can unlock the lobby door without even taking my phone out of my pocket.', name: 'Alex Ng', role: 'Resident · Meridian Tower', initials: 'AN' },
    ],
    faqs: [
      { question: 'Is the app really free?', answer: 'Yes — completely free with no subscription fees. It works with any Akuvox hardware device purchased through an authorised dealer.' },
      { question: 'Can multiple people use it for one apartment?', answer: 'Yes — up to 5 devices can be registered per unit. All family members can answer calls and unlock doors independently.' },
      { question: 'Does it work internationally?', answer: 'Yes — as long as you have internet connectivity, you can answer door calls and unlock from anywhere in the world.' },
    ],
  },

  'doorbird/d210x-push-button': {
    slug: 'd210x-push-button',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'D210X Push Button Series',
    eyebrow: 'DoorBird · Multi-Tenant — Push Button Intercom Range',
    title: 'The push-button intercom range for multi-tenant buildings.',
    tagline: '— from 1 to 6 buttons, each routing to individual units.',
    description: 'The DoorBird D210X series offers push-button video intercoms in configurations from 1 to 6 buttons. Each button independently calls a different apartment or office. Full HD video, IP65 weatherproofing, and native smart home integration — in premium stainless steel.',
    image: '/images/products/doorbird/D210X.png',
    meta: [
      { value: '1-6', unit: '', label: 'Button options' },
      { value: '4K', unit: '', label: 'Camera' },
      { value: 'V4A', unit: '', label: 'Stainless steel' },
    ],
    stats: [
      { value: '6', unit: '', label: 'Max buttons' },
      { value: '4K', unit: '', label: 'Video' },
      { value: 'IP65', unit: '', label: 'Weather rating' },
      { value: 'V4A', unit: '', label: 'Steel grade' },
    ],
    features: [
      { tag: 'MULTI-BUTTON', title: 'Independent routing per button.', body: 'Each button calls a different unit — smartphone, indoor station, or SIP endpoint. No shared ringtones, no confusion about who\'s being called.', icon: 'button' },
      { tag: '4K CAMERA', title: 'Ultra HD video for every visitor.', body: 'Genuine 4K sensor captures every detail. IR night vision ensures 24/7 clarity. 180° wide-angle covers the entire approach.', icon: 'video' },
      { tag: 'STAINLESS STEEL', title: 'V4A marine-grade construction.', body: 'Built from the same stainless steel used in marine and medical equipment. Won\'t rust, corrode, or degrade even in coastal environments.', icon: 'material' },
      { tag: 'SMART HOME', title: 'HomeKit, KNX, Control4 native.', body: 'Each button press can trigger smart home scenes. Lights on, cameras recording, notifications sent — all configurable per button.', icon: 'integration' },
      { tag: 'LOCAL STORAGE', title: 'No cloud subscription needed.', body: 'Store events locally. No monthly fees. Your footage stays private on your own network.', icon: 'storage' },
    ],
    useCases: [
      { mark: 'Converted Houses', title: 'Victorian/Georgian conversions.', desc: 'Townhouses split into 2-6 flats. Each flat gets their own button, their own call routing, their own smartphone access — one elegant panel.', stats: [{ value: '1-6', label: 'Units per panel' }, { value: 'Period', label: 'Suitable finishes' }] },
      { mark: 'Small Apartment Blocks', title: 'Boutique buildings.', desc: 'Buildings with up to 6 units where a large touchscreen directory would be overkill. Individual buttons are intuitive for visitors.', stats: [{ value: 'Simple', label: 'Visitor experience' }, { value: '0', label: 'Learning curve' }] },
      { mark: 'Mixed Commercial', title: 'Shop + residence above.', desc: 'Ground floor shop with residential above. Separate buttons for business and home — different hours, different access rules.', stats: [{ value: 'Separate', label: 'Access policies' }, { value: '24/7', label: 'Per-unit control' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Material', value: 'V4A (316) marine-grade stainless steel' },
        { key: 'Camera', value: '4K UHD · 180° fisheye · IR night vision' },
        { key: 'Buttons', value: '1, 2, 3, 4, 5, or 6 button variants' },
        { key: 'Audio', value: 'Full-duplex · echo cancellation' },
        { key: 'Protection', value: 'IP65 weather · IK10 vandal' },
        { key: 'Operating Temp', value: '−40°C to +60°C' },
        { key: 'Mounting', value: 'Surface or flush mount' },
      ]},
      { category: 'Connectivity & Integration', rows: [
        { key: 'Network', value: 'PoE (802.3af) · 10/100 Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP' },
        { key: 'Smart Home', value: 'HomeKit · KNX · Control4 · Crestron · Loxone' },
        { key: 'Storage', value: 'On-device · no cloud subscription' },
        { key: 'Relay Outputs', value: '2× configurable (door + gate)' },
        { key: 'Notifications', value: 'Push (iOS/Android) · SIP · email' },
        { key: 'Finishes', value: 'Stainless · brass · RAL custom · PVD' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird D210X', tag: 'Premium · Multi-button', featured: true },
        { brand: 'Generic Intercom', tag: 'Budget' },
        { brand: 'Touchscreen Panel', tag: 'Directory' },
      ],
      rows: [
        { feature: 'Individual call buttons', values: ['yes', 'yes', 'no'] },
        { feature: '4K video', values: ['yes', 'no', 'partial'] },
        { feature: 'Stainless steel', values: ['yes', 'no', 'no'] },
        { feature: 'Smart home integration', values: ['yes', 'no', 'partial'] },
        { feature: 'No subscription', values: ['yes', 'partial', 'partial'] },
        { feature: 'Custom finishes', values: ['yes', 'no', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'D2103V on our converted Georgian — 3 buttons for 3 flats, brushed brass finish. Looks like it\'s been there a hundred years.', name: 'Oliver Grant', role: 'Homeowner · Bath', initials: 'OG' },
      { quote: 'Each flat routes to a different smartphone. My tenants manage their own access. Zero involvement from me.', name: 'Sandra Kemp', role: 'Landlord · Brighton', initials: 'SK' },
      { quote: 'The 4K camera means we can actually identify visitors. Our old system was a blurry mess in comparison.', name: 'Phil Norris', role: 'Resident · Manchester', initials: 'PN' },
    ],
    faqs: [
      { question: 'How many buttons can I get?', answer: 'The D210X series comes in 1-button (D2101V), 2-button (D2102V), 3-button (D2103V), 4-button (D2104V), 5-button (D2105V), and 6-button (D2106V) variants.' },
      { question: 'Can each button call a different phone?', answer: 'Yes — each button is independently configurable. It can call a smartphone, indoor station, SIP phone, or any combination simultaneously.' },
      { question: 'What finishes are available?', answer: 'Standard brushed stainless steel, plus brass, bronze, anthracite, and full RAL colour matching for custom projects.' },
    ],
  },

  'doorbird/d21dkv-keypad-station': {
    slug: 'd21dkv-keypad-station',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'D21DKV Keypad Station',
    eyebrow: 'DoorBird · Access — Video Intercom + Keypad',
    title: 'Video intercom with integrated backlit keypad.',
    tagline: '— 4K camera plus PIN entry in one premium steel panel.',
    description: 'The DoorBird D21DKV combines a 4K video intercom with an integrated backlit keypad for PIN code access. Perfect for properties that need both visitor video calling and keyless entry — all in one V4A stainless steel panel.',
    image: '/images/products/doorbird/D21DKV.jpeg',
    meta: [
      { value: '4K', unit: '', label: 'Camera' },
      { value: 'Keypad', unit: '', label: 'PIN access' },
      { value: 'V4A', unit: '', label: 'Stainless steel' },
    ],
    stats: [
      { value: '4K', unit: '', label: 'Video' },
      { value: 'PIN', unit: '', label: 'Keypad entry' },
      { value: 'IP65', unit: '', label: 'Weather rated' },
      { value: '2', unit: '', label: 'Relay outputs' },
    ],
    features: [
      { tag: 'DUAL FUNCTION', title: 'Intercom + keypad in one device.', body: 'Visitors press the bell for video calling. Residents enter their PIN for keyless entry. One panel, two functions, zero compromise.', icon: 'button' },
      { tag: '4K CAMERA', title: 'Ultra-HD visitor identification.', body: 'See every detail of who\'s at the door. Day or night, the 4K sensor with IR illumination delivers crystal-clear footage.', icon: 'video' },
      { tag: 'BACKLIT KEYPAD', title: 'Illuminated keys for night use.', body: 'Backlit capacitive keypad works in complete darkness. Customisable PIN codes managed via the cloud dashboard.', icon: 'key' },
      { tag: 'DUAL RELAY', title: 'Control door and gate separately.', body: 'Two relay outputs mean you can control both a front door electric strike and a gate motor from one panel.', icon: 'layout' },
      { tag: 'SMART HOME', title: 'Full smart home integration.', body: 'HomeKit, KNX, Control4, Crestron — PIN entry and doorbell events trigger automations throughout the house.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Private Homes', title: 'Keyless entry for families.', desc: 'Family members use PIN codes — no keys to lose. Visitors use the video bell. Cleaners get temporary codes that auto-expire.', stats: [{ value: '0', label: 'Keys needed' }, { value: 'Temp', label: 'Codes available' }] },
      { mark: 'Small Offices', title: 'Office access control.', desc: 'Staff enter their PIN to unlock during office hours. After hours, visitors use the video intercom to reach someone inside.', stats: [{ value: 'Dual', label: 'Function' }, { value: '24/7', label: 'Access options' }] },
      { mark: 'Holiday Lets', title: 'Short-term rental access.', desc: 'Set unique codes per guest booking that auto-activate on check-in day and expire on checkout. No key handovers needed.', stats: [{ value: 'Auto', label: 'Code management' }, { value: '0', label: 'Key handovers' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Material', value: 'V4A (316) marine-grade stainless steel' },
        { key: 'Camera', value: '4K UHD · 180° wide-angle · IR night vision' },
        { key: 'Keypad', value: 'Backlit capacitive · 0-9 + bell + key' },
        { key: 'Audio', value: 'Full-duplex · echo cancellation' },
        { key: 'Protection', value: 'IP65 · IK10 vandal-rated' },
        { key: 'Relay Outputs', value: '2× independent (door + gate)' },
        { key: 'Operating Temp', value: '−40°C to +55°C' },
        { key: 'Mounting', value: 'Surface or flush mount' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: 'PoE (802.3af) · 10/100 Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP' },
        { key: 'Smart Home', value: 'HomeKit · KNX · Control4 · Crestron · Loxone' },
        { key: 'PIN Management', value: 'Cloud dashboard · time-limited codes' },
        { key: 'Storage', value: 'On-device · no subscription' },
        { key: 'Notifications', value: 'Push · SIP call · email' },
        { key: 'Mobile App', value: 'DoorBird app · iOS & Android · free' },
        { key: 'Finishes', value: 'Stainless · brass · custom RAL' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird D21DKV', tag: 'Intercom + Keypad', featured: true },
        { brand: 'Separate Devices', tag: 'Bell + keypad' },
        { brand: 'Smart Lock', tag: 'Keypad only' },
      ],
      rows: [
        { feature: 'Video intercom + keypad', values: ['yes', 'partial', 'no'] },
        { feature: '4K camera', values: ['yes', 'partial', 'no'] },
        { feature: 'Stainless steel', values: ['yes', 'no', 'no'] },
        { feature: 'Smart home integration', values: ['yes', 'partial', 'partial'] },
        { feature: 'Time-limited codes', values: ['yes', 'partial', 'yes'] },
        { feature: 'Dual relay (door + gate)', values: ['yes', 'no', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'PIN for the family, video bell for visitors, temporary codes for the Airbnb guests. All from one beautiful panel.', name: 'Julia Hart', role: 'Homeowner · Edinburgh', initials: 'JH' },
      { quote: 'Eliminated keys entirely for our office. Staff use PINs, clients ring the bell. Two functions, one premium device.', name: 'Ben Wallace', role: 'Studio Director · Wallace Design', initials: 'BW' },
      { quote: 'The backlit keypad is gorgeous at night. Guests compliment the entrance hardware — which never happened with our old system.', name: 'Catherine Price', role: 'Airbnb Host · London', initials: 'CP' },
    ],
    faqs: [
      { question: 'How many PIN codes can be stored?', answer: 'Effectively unlimited via the cloud management dashboard. Each code can be assigned time restrictions (e.g., Mon-Fri 9am-5pm) and expiry dates.' },
      { question: 'Can I change codes remotely?', answer: 'Yes — all PIN management is via the web dashboard or mobile app. Add, change, or revoke codes from anywhere without physical access to the device.' },
      { question: 'Is the keypad vandal-proof?', answer: 'Yes — capacitive touch behind stainless steel. No moving parts, no buttons to pry off. IK10 impact-rated and IP65 weather-sealed.' },
    ],
  },

  'doorbird/d21dkh-horizontal-keypad': {
    slug: 'd21dkh-horizontal-keypad',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'D21DKH Horizontal Keypad',
    eyebrow: 'DoorBird · Horizontal — Landscape Keypad Intercom',
    title: 'Horizontal-mount video intercom with keypad for gates.',
    tagline: '— landscape orientation for pillars, rails, and wide mounts.',
    description: 'The DoorBird D21DKH is the horizontal (landscape) variant of the keypad intercom. Designed for gate pillars, wide rails, and letterbox-style mounting where vertical panels don\'t fit. 4K video, backlit keypad, and full smart home integration.',
    image: '/images/products/doorbird/D21DKH.jpeg',
    meta: [
      { value: 'Horizontal', unit: '', label: 'Orientation' },
      { value: '4K', unit: '', label: 'Camera' },
      { value: 'Keypad', unit: '', label: '+ PIN entry' },
    ],
    stats: [
      { value: 'Wide', unit: '', label: 'Format' },
      { value: '4K', unit: '', label: 'Video' },
      { value: 'IK10', unit: '', label: 'Vandal proof' },
      { value: 'PIN', unit: '', label: 'Keypad' },
    ],
    features: [
      { tag: 'HORIZONTAL', title: 'Landscape mounting for gates.', body: 'Purpose-designed for horizontal mounting on gate rails, wide pillars, and narrow letterbox positions where portrait panels can\'t fit.', icon: 'layout' },
      { tag: '4K + KEYPAD', title: 'Video intercom and PIN in one.', body: 'Full 4K video calling plus backlit keypad — visitors ring the bell, residents enter their PIN. Both in one weather-sealed unit.', icon: 'video' },
      { tag: 'GATE CONTROL', title: 'Built for gate automation.', body: 'Dual relay outputs designed with gate installations in mind. Control both pedestrian gate and vehicle gate from one panel.', icon: 'button' },
      { tag: 'IK10 RATED', title: 'Survives exposed locations.', body: '20-joule impact resistance for unsupervised gate locations. Salt-spray tested for coastal properties.', icon: 'shield' },
      { tag: 'SMART HOME', title: 'Full integration ecosystem.', body: 'Gate opens, cameras record, lights activate, notification sent — all triggered by the doorbell or PIN entry event.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Driveway Gates', title: 'Automated vehicle gates.', desc: 'Mounted on the gate pillar at car-window height. Driver enters PIN, gate opens. Visitor presses bell, resident sees them on their phone.', stats: [{ value: 'Car', label: 'Window height' }, { value: 'Auto', label: 'Gate opening' }] },
      { mark: 'Coastal Properties', title: 'Salt-air environments.', desc: 'V4A stainless steel and IP65 sealing handles coastal salt spray. The horizontal format fits on sea-wall gates and promenade entrances.', stats: [{ value: 'V4A', label: 'Marine steel' }, { value: '20yr', label: 'Expected life' }] },
      { mark: 'Commercial Yards', title: 'Service entrances.', desc: 'Delivery drivers enter a code, the barrier lifts. All entries are logged with 4K video for security and accountability.', stats: [{ value: '4K', label: 'Evidence grade' }, { value: '100%', label: 'Entry logged' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Material', value: 'V4A (316) marine-grade stainless steel' },
        { key: 'Orientation', value: 'Horizontal (landscape) mount' },
        { key: 'Camera', value: '4K UHD · wide-angle · IR night vision' },
        { key: 'Keypad', value: 'Backlit capacitive · 12-key' },
        { key: 'Protection', value: 'IP65 · IK10 · salt-spray tested' },
        { key: 'Relay', value: '2× independent outputs' },
        { key: 'Operating Temp', value: '−40°C to +55°C' },
      ]},
      { category: 'Connectivity & Integration', rows: [
        { key: 'Network', value: 'PoE (802.3af) · Ethernet' },
        { key: 'Smart Home', value: 'HomeKit · KNX · Control4 · Crestron' },
        { key: 'PIN Management', value: 'Cloud · time-limited · auto-expire' },
        { key: 'Storage', value: 'On-device · no subscription' },
        { key: 'API', value: 'Full HTTP REST · webhooks' },
        { key: 'App', value: 'DoorBird iOS & Android · free' },
        { key: 'Finishes', value: 'Stainless · brass · RAL custom' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird D21DKH', tag: 'Horizontal · Keypad', featured: true },
        { brand: 'Portrait Panel', tag: 'Vertical mount' },
        { brand: 'Basic Gate Keypad', tag: 'No video' },
      ],
      rows: [
        { feature: 'Horizontal mounting', values: ['yes', 'no', 'yes'] },
        { feature: '4K video', values: ['yes', 'yes', 'no'] },
        { feature: 'PIN keypad', values: ['yes', 'no', 'yes'] },
        { feature: 'Smart home integration', values: ['yes', 'yes', 'no'] },
        { feature: 'IK10 vandal-rated', values: ['yes', 'yes', 'partial'] },
        { feature: 'V4A stainless steel', values: ['yes', 'yes', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'Horizontal format was the only option for our gate rail. Fits perfectly and the keypad means no fumbling for remotes.', name: 'James Ashford', role: 'Homeowner · Devon', initials: 'JA' },
      { quote: 'Coastal property — salt air is brutal on hardware. Two years on, the V4A steel is immaculate. Nothing else would survive.', name: 'Helen Murray', role: 'Homeowner · Cornwall', initials: 'HM' },
      { quote: 'Delivery drivers love the keypad — enter code, gate opens, drop off, leave. All logged on 4K video.', name: 'Robert Drake', role: 'Estate Manager · Surrey', initials: 'RD' },
    ],
    faqs: [
      { question: 'Why horizontal instead of vertical?', answer: 'Gate pillars, wide rails, and letterbox-slot positions often can\'t accommodate a vertical panel. The D21DKH is purpose-designed for these horizontal mounting scenarios.' },
      { question: 'Is it the same internally as the vertical D21DKV?', answer: 'Yes — identical electronics, camera, and keypad. Only the housing orientation differs. Same 4K quality, same smart home integration.' },
      { question: 'Can I control both a gate and a door?', answer: 'Yes — dual relay outputs let you control a pedestrian gate and a vehicle gate (or door and gate) independently from one panel.' },
    ],
  },

  'akuvox/a08-access-controller': {
    slug: 'a08-access-controller',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'A08 Access Controller',
    eyebrow: 'Akuvox · Enterprise — 2-Door Controller',
    title: 'Professional cloud-based 2-door access controller.',
    tagline: '— high-security door management with full offline redundancy.',
    description: 'The A08 is a smart, cloud-based access control unit that manages up to 2 doors. It connects seamlessly to Wiegand or RS485 readers and integrates with the Akuvox cloud platform for remote management across multiple sites.',
    image: 'https://www.akuvox.com/uploads/images/9d537ac8c4fcaea6a45dbe8ed0952389.png',
    meta: [
      { value: '2', unit: 'Door', label: 'Management' },
      { value: '20,000', unit: '', label: 'Card capacity' },
      { value: 'PoE', unit: '', label: 'Powered' },
    ],
    stats: [
      { value: '2', unit: '', label: 'Doors managed' },
      { value: '100k', unit: '', label: 'Event logs' },
      { value: 'PoE+', unit: '', label: 'Standard' },
      { value: 'Web', unit: '', label: 'Management' },
    ],
    features: [
      { tag: 'CLOUD-NATIVE', title: 'Manage from anywhere.', body: 'Configured via web browser and integrated with the Akuvox Cloud. Add or revoke user credentials across multiple global sites without local servers.', icon: 'cloud' },
      { tag: 'REDUNDANCY', title: 'Always-on access.', body: 'Caches 20,000 cards and 100,000 event logs locally. If the internet connection drops, your doors continue to operate securely and sync logs when reconnected.', icon: 'shield' },
      { tag: 'UNIVERSAL COMPATIBILITY', title: 'Works with existing readers.', body: 'Supports standard Wiegand 26/34 and OSDP via RS485. Perfect for retrofitting existing buildings without replacing the physical card readers.', icon: 'integration' },
      { tag: 'FIRE ALARM LINK', title: 'Life safety integration.', body: 'Dedicated fire alarm input instantly releases all connected doors in the event of an emergency, ensuring compliance with building safety codes.', icon: 'video' },
    ],
    useCases: [
      { mark: 'Small Offices', title: 'Multi-door businesses.', desc: 'Perfect for small to medium enterprises needing secure front and rear door access without the overhead of an on-premise server.', stats: [{ value: '100%', label: 'Cloud managed' }, { value: '0', label: 'Local servers' }] },
      { mark: 'Remote Gates', title: 'Perimeter security.', desc: 'Manage vehicle barriers and pedestrian gates remotely. The offline caching ensures residents can always enter, even during network outages.', stats: [{ value: '20k', label: 'Offline users' }, { value: '2', label: 'Relays' }] },
      { mark: 'Retail', title: 'Staff-only areas.', desc: 'Secure stockrooms and back offices. Managers can review access logs centrally from HQ via the web portal.', stats: [{ value: '100k', label: 'Audit trail' }, { value: 'Global', label: 'Visibility' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Capacity', value: '20,000 cards · 100,000 event logs' },
        { key: 'Reader Ports', value: '2× Wiegand · 1× RS485' },
        { key: 'Relays', value: '2× Door lock relays · 2× Aux relays' },
        { key: 'Inputs', value: '2× Door sensor · 2× Exit button · 1× Fire alarm' },
        { key: 'Enclosure', value: 'SGCC steel · wall mountable' },
        { key: 'Dimensions', value: '145 × 90 × 40 mm' },
      ]},
      { category: 'Connectivity & Power', rows: [
        { key: 'Network', value: '10/100 Mbps Ethernet' },
        { key: 'Power Input', value: 'PoE (802.3at) or 12V DC adapter' },
        { key: 'Power Output', value: '12V DC output for readers (via PoE+)' },
        { key: 'Management', value: 'Web UI · Akuvox Cloud · HTTP API' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox A08', tag: 'Cloud · 2-Door', featured: true },
        { brand: 'Standalone Reader', tag: 'No Controller' },
        { brand: 'Legacy Server Panel', tag: 'On-Premise' },
      ],
      rows: [
        { feature: 'Cloud Management', values: ['yes', 'no', 'partial'] },
        { feature: 'Offline Redundancy', values: ['yes', 'yes', 'no'] },
        { feature: 'Fire Alarm Link', values: ['yes', 'no', 'yes'] },
        { feature: 'PoE+ Powered', values: ['yes', 'no', 'partial'] },
        { feature: 'Multi-site sync', values: ['yes', 'no', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'We retrofitted 5 branch offices with A08 controllers. We kept the existing HID readers but moved all management to the Akuvox Cloud. Huge cost saving.', name: 'David Lee', role: 'IT Director · Apex Financial', initials: 'DL' },
      { quote: 'The offline cache is a lifesaver. Our remote gate loses internet occasionally, but the residents never get locked out.', name: 'Sarah Jenkins', role: 'Property Manager', initials: 'SJ' },
    ],
    faqs: [
      { question: 'Can I use my existing key fobs?', answer: 'Yes, if your existing readers output standard Wiegand (26/34 bit) or OSDP via RS485, the A08 can interface with them and read your existing credentials.' },
      { question: 'Do I need an on-site server?', answer: 'No. The A08 connects directly to the Akuvox cloud platform. All administration is done via a secure web browser.' },
    ],
  },

  'akuvox/a01-access-terminal': {
    slug: 'a01-access-terminal',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'A01 Access Terminal',
    eyebrow: 'Akuvox · Access — RFID Control Terminal',
    title: 'The sleek, glass-front RFID access terminal.',
    tagline: '— simplified, robust card access for modern buildings.',
    description: 'The Akuvox A01 is an access control terminal incorporating a door controller and an RFID reader in one standalone device. Equipped with a dual-frequency reader (125kHz and 13.56MHz) and a toughened glass front, it delivers secure, keyless entry.',
    image: 'https://www.cohesiveglobal.com/marketing-materials/Akuvox/datasheet/A01-Access-Control-Unit.pdf', // Example placeholder, actual image would be utilized
    meta: [
      { value: 'RFID', unit: '', label: 'Reader' },
      { value: '20,000', unit: '', label: 'Card capacity' },
      { value: 'Glass', unit: '', label: 'Front panel' },
    ],
    stats: [
      { value: '20k', unit: '', label: 'Cards stored' },
      { value: '100k', unit: '', label: 'Event logs' },
      { value: 'IP65', unit: '', label: 'Rating' },
      { value: 'PoE', unit: '', label: 'Powered' },
    ],
    features: [
      { tag: 'HIGH CAPACITY', title: 'Enterprise-grade storage.', body: 'Manages up to 20,000 users and caches 100,000 event logs locally.', icon: 'storage' },
      { tag: 'TOUGHENED GLASS', title: 'Elegant and durable.', body: 'Features a scratch-resistant toughened glass faceplate with an aluminum alloy frame.', icon: 'layout' },
      { tag: 'DUAL FREQUENCY', title: 'Read almost any card.', body: 'Supports both 125kHz and 13.56MHz RFID formats, simplifying migrations from old systems.', icon: 'key' },
    ],
    useCases: [
      { mark: 'Corporate HQ', title: 'Employee access.', desc: 'Deploy across interior office doors where card-swipe access is preferred over PIN entry.', stats: [{ value: '20k', label: 'Users' }, { value: 'Fast', label: 'Read speed' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Panel', value: 'Toughened Glass · Aluminum Alloy Frame' },
        { key: 'Capacity', value: '20,000 cards · 100,000 event logs' },
        { key: 'Reader', value: 'RFID 13.56MHz & 125kHz' },
        { key: 'Relays', value: '1× Door lock relay · 2× Inputs' },
        { key: 'Mounting', value: 'Flush or Wall mount (86×86×33 mm)' },
      ]},
      { category: 'Connectivity & Power', rows: [
        { key: 'Network', value: '10/100 Mbps Ethernet' },
        { key: 'Power', value: 'PoE (802.3af) or 12V DC' },
        { key: 'Management', value: 'Web UI · Akuvox ACMS' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox A01', tag: 'RFID Terminal', featured: true },
        { brand: 'Akuvox A02', tag: 'Keypad Terminal' },
      ],
      rows: [
        { feature: 'Touch Keypad', values: ['no', 'yes'] },
        { feature: 'Dual-frequency RFID', values: ['yes', 'yes'] },
        { feature: 'Toughened Glass Front', values: ['yes', 'no'] },
        { feature: 'Standalone Controller', values: ['yes', 'yes'] },
      ],
    },
    testimonials: [
      { quote: 'We use the A01 for all back-of-house doors. It looks incredible with the glass front and integrates flawlessly over PoE.', name: 'Mark Evans', role: 'Security Integrator', initials: 'ME' },
    ],
    faqs: [
      { question: 'Does it supply power to the locks?', answer: 'The A01 provides a 12V 600mA power output if you are not using PoE, otherwise you may need a separate power supply for heavy-draw magnetic locks.' },
    ],
  },

  'doorbird/d31tdh-display': {
    slug: 'd31tdh-display',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'D31TDH Display Intercom',
    eyebrow: 'DoorBird · Professional — Large Display Intercom',
    title: 'Smart directory management for larger buildings.',
    tagline: '— High-resolution touchscreen with digital resident search.',
    description: 'The D31TDH features a large 7-inch touchscreen display for intuitive resident search and calling. Encased in V4A marine-grade stainless steel, it provides a modern, touch-based entry experience for multi-tenant properties up to 1000 units while maintaining DoorBird’s legendary durability.',
    image: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4251489601011',
    meta: [
      { value: 'Touch', unit: '', label: 'Digital search' },
      { value: '1080p', unit: 'HD', label: 'Camera' },
      { value: 'V4A', unit: '', label: 'Steel' },
    ],
    stats: [
      { value: '1000', unit: '', label: 'Directory size' },
      { value: '1080p', unit: 'HD', label: 'Video' },
      { value: 'IP65', unit: '', label: 'Rating' },
      { value: 'RFID', unit: '', label: 'Built-in' },
    ],
    features: [
      { tag: 'DIGITAL DIRECTORY', title: 'Effortless visitor search.', body: '7” touchscreen replaces messy paper nameplates. Visitors scroll, search by name, or unit number. Update names instantly via the cloud.', icon: 'screen' },
      { tag: 'HD CAMERA', title: '1080p video clarity.', body: 'Equipped with a 2MP Sony Starvis image sensor and a 180° hemispheric lens, providing razor-sharp video day or night.', icon: 'video' },
      { tag: 'RFID & BLUETOOTH', title: 'Multiple entry methods.', body: 'Access using the built-in 13.56 MHz RFID reader, QR codes, or via Bluetooth (BLE) on a smartphone.', icon: 'key' },
      { tag: 'VANDAL PROOF', title: 'Built like a tank.', body: 'Housing made of V4A (316) marine-grade stainless steel. IK08 impact rated and IP65 weather-sealed.', icon: 'shield' },
    ],
    useCases: [
      { mark: 'Large Apartments', title: 'High-density residential.', desc: 'Perfect for buildings with up to 1000 units where individual push buttons become impractical.', stats: [{ value: '1000', label: 'Names' }, { value: 'Fast', label: 'Search' }] },
      { mark: 'Office Towers', title: 'Multi-tenant commercial.', desc: 'Display company logos and department names. Update the directory instantly from the portal when tenants change.', stats: [{ value: 'Custom', label: 'Branding' }, { value: 'Cloud', label: 'Updates' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '7" True IPS touchscreen (1024 × 600) · scratch-resistant glass' },
        { key: 'Material', value: 'V4A Marine-Grade Stainless Steel' },
        { key: 'Camera', value: '1080p (2MP) Sony Starvis · 180° wide angle' },
        { key: 'Readers', value: 'RFID (13.56MHz) · Bluetooth (BLE) · QR Code' },
        { key: 'Protection', value: 'IP65 · IK08' },
      ]},
      { category: 'Network & Integration', rows: [
        { key: 'Connection', value: 'PoE+ (802.3at) · Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API' },
        { key: 'Smart Home', value: 'HomeKit · KNX · Control4 · Crestron' },
        { key: 'Management', value: 'DoorBird Cloud portal' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird D31TDH', tag: 'Touch Directory', featured: true },
        { brand: 'Legacy Push-Button Panel', tag: 'Button Directory' },
      ],
      rows: [
        { feature: 'Digital Directory (1000 users)', values: ['yes', 'no'] },
        { feature: 'V4A Stainless Steel', values: ['yes', 'yes'] },
        { feature: '1080p Camera', values: ['yes', 'yes'] },
        { feature: 'RFID & Bluetooth built-in', values: ['yes', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'We moved from a massive 40-button brass panel to the D31TDH. The entrance looks cleaner, and updating tenant names now takes 30 seconds online.', name: 'Emma Watson', role: 'Property Manager', initials: 'EW' },
    ],
    faqs: [
      { question: 'Does it require a subscription?', answer: 'Basic cloud administration and the smartphone app are free. DoorBird offers optional paid tiers for extended cloud video recording history.' },
    ],
  },

  'butterfly/camera': {
    slug: 'camera',
    brand: 'ButterflyMX',
    brandSlug: 'butterfly',
    model: 'ButterflyMX Camera',
    eyebrow: 'ButterflyMX · Security — Smart Perimeter Camera',
    title: 'Total visibility of every entry and exit.',
    tagline: '— cloud-based video surveillance that integrates with your intercom.',
    description: 'The ButterflyMX Camera records high-definition video of all activity at your building’s entry points. It works alongside the intercom and access control systems to provide a complete audit trail with video proof of every event.',
    image: 'https://butterflymx.com/wp-content/uploads/2024/08/butterflymx-dome-security-camera-features.webp',
    meta: [
      { value: '1080p', unit: '', label: 'Resolution' },
      { value: '30', unit: 'day', label: 'Cloud storage' },
      { value: 'Unified', unit: '', label: 'Dashboard' },
    ],
    stats: [
       { value: '1080', unit: 'p', label: 'Resolution' },
       { value: '30', unit: 'Day', label: 'Cloud storage' },
       { value: 'PoE', unit: '', label: 'Connection' },
       { value: 'IP67', unit: '', label: 'Weather rated' },
    ],
    features: [
       { tag: 'UNIFIED DASHBOARD', title: 'One login for everything.', body: 'View your camera feeds, door logs, and intercom history in the same ButterflyMX property management portal. No need to switch between different security apps.', icon: 'video' },
       { tag: 'CLOUD RECORDING', title: 'Always backed up.', body: 'Video is continuously recorded and stored securely in the cloud for 30 days. No physical NVRs or hard drives to maintain or worry about failing.', icon: 'cloud' },
       { tag: 'CONTEXTUAL LOGS', title: 'Video-verified access.', body: 'When someone uses a PIN or fob at a ButterflyMX reader, the camera footage is linked to that exact log event, giving you visual proof of who actually entered.', icon: 'integration' },
       { tag: 'DURABLE', title: 'Built for the outdoors.', body: 'Vandal-resistant housing and IP67 weather rating ensures the camera performs flawlessly in rain, snow, and extreme temperatures.', icon: 'shield' },
    ],
    useCases: [
      { mark: 'Package Rooms', title: 'Theft prevention.', desc: 'Point a camera at your package room to deter theft and monitor courier drops. Review footage easily if a resident reports a missing parcel.', stats: [{ value: '100%', label: 'Visibility' }, { value: 'Easy', label: 'Review' }] },
      { mark: 'Parking Gates', title: 'Tailgating monitoring.', desc: 'Monitor vehicle entrances to see if unauthorized vehicles are tailgating residents into the garage.', stats: [{ value: '24/7', label: 'Recording' }, { value: 'HD', label: 'License plates' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Resolution', value: '1080p HD' },
        { key: 'Field of View', value: 'Wide angle lens' },
        { key: 'Night Vision', value: 'Infrared LEDs built-in' },
        { key: 'Protection', value: 'IP67 weather resistant' },
      ]},
      { category: 'Network & Software', rows: [
        { key: 'Connection', value: 'Wired Ethernet' },
        { key: 'Power', value: 'PoE (Power over Ethernet)' },
        { key: 'Storage', value: '30-day continuous cloud recording' },
        { key: 'Platform', value: 'ButterflyMX OS Management Dashboard' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'ButterflyMX Camera', tag: 'Unified Cloud', featured: true },
        { brand: 'Traditional CCTV', tag: 'NVR Required' },
        { brand: 'Consumer WiFi Cam', tag: 'Home Grade' },
      ],
      rows: [
        { feature: 'ButterflyMX Integration', values: ['yes', 'no', 'no'] },
        { feature: 'Cloud Storage', values: ['yes', 'partial', 'yes'] },
        { feature: 'Enterprise Grade', values: ['yes', 'yes', 'no'] },
        { feature: 'PoE Powered', values: ['yes', 'yes', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'Having the cameras on the same dashboard as our intercoms is a game changer. When an incident happens at the front door, we match the door log to the video instantly.', name: 'Tom H.', role: 'Building Director', initials: 'TH' },
    ],
    faqs: [
      { question: 'Do I need a separate NVR (recorder)?', answer: 'No. The ButterflyMX camera is completely cloud-based. It connects directly to the internet and stores footage on ButterflyMX secure servers.' },
      { question: 'How is it powered?', answer: 'It uses PoE (Power over Ethernet), meaning a single Cat5/Cat6 cable provides both internet and power to the camera.' },
    ],
  },
  'doorbird/doorbird-app': {
    slug: 'doorbird-app',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'DoorBird App',
    eyebrow: 'DoorBird · Mobile — Smartphone Access App',
    title: 'See, speak, and open the door from anywhere.',
    tagline: '— no monthly fees, full control in your pocket.',
    description: 'The DoorBird app is the command center for your IP video door station. Receive push notifications when someone rings the bell, view live HD video, speak with visitors, and unlock the door or gate directly from your iOS or Android device — whether you are at home or halfway across the world.',
    image: 'https://www.doorbird.com/images/en_phone_live.png',
    meta: [
      { value: 'iOS', unit: '+ Android', label: 'Platforms' },
      { value: 'Free', unit: '', label: 'No subscription' },
      { value: 'Local', unit: '', label: 'Storage focus' },
    ],
    stats: [
      { value: 'iOS', unit: '', label: '14.0+' },
      { value: 'Android', unit: '', label: '7.0+' },
      { value: '£0', unit: '/mo', label: 'Monthly fees' },
      { value: '50', unit: '', label: 'Free image history' },
    ],
    features: [
      { tag: 'REMOTE ACCESS', title: 'Answer from anywhere.', body: 'Receive a push notification the second a visitor rings the bell. View live video and speak to them in real-time, no matter where you are.', icon: 'video' },
      { tag: 'NO SUBSCRIPTION', title: 'Zero monthly fees.', body: 'Unlike consumer doorbells, DoorBird does not force you into a cloud subscription. Core functionality and local event logs are completely free.', icon: 'shield' },
      { tag: 'VISITOR HISTORY', title: 'Log of your last 50 visitors.', body: 'The app stores the 50 most recent visitor events (including a high-res photo and timestamp) locally on the device for free.', icon: 'log' },
      { tag: 'DOOR & GATE', title: 'Control multiple relays.', body: 'If your DoorBird station is wired to both a pedestrian gate and a driveway gate, you can choose which one to open directly from the call screen.', icon: 'layout' },
      { tag: 'MULTI-PROPERTY', title: 'Manage multiple homes.', body: 'Add your primary residence, holiday home, and office door panels all to the same app. Seamlessly switch between properties.', icon: 'building' },
    ],
    useCases: [
      { mark: 'Homeowners', title: 'Never miss a delivery.', desc: 'Talk to the courier from your desk at work and ask them to leave the parcel in a safe place, or unlock the side gate remotely.', stats: [{ value: '0', label: 'Missed parcels' }, { value: '100%', label: 'Remote control' }] },
      { mark: 'Holiday Lets', title: 'Remote property management.', desc: 'Check in on your Airbnb property, grant remote access to cleaners, and review visitor history without needing to be on site.', stats: [{ value: 'Remote', label: 'Management' }, { value: 'Free', label: 'History log' }] },
      { mark: 'Family Access', title: 'Multi-user households.', desc: 'Grant app access to the whole family. Everyone gets notifications and can answer the door independently from their own phones.', stats: [{ value: '8', label: 'Devices per panel' }, { value: 'Custom', label: 'Permissions' }] },
    ],
    specs: [
      { category: 'App Details', rows: [
        { key: 'iOS', value: 'iOS 14.0 or later · iPhone & iPad' },
        { key: 'Android', value: 'Android 7.0 or later' },
        { key: 'Download', value: 'Free via App Store and Google Play' },
        { key: 'Video', value: 'HD live streaming · bandwidth optimized' },
        { key: 'Audio', value: 'Two-way audio · echo cancellation' },
        { key: 'Notifications', value: 'Push notifications · visual alerts' },
      ]},
      { category: 'Features & Security', rows: [
        { key: 'Unlock Methods', value: 'Tap-to-unlock · PIN codes (on supported devices)' },
        { key: 'History', value: 'Last 50 motion/ring events (free tier)' },
        { key: 'Multi-site', value: 'Unlimited DoorBird devices per app' },
        { key: 'Security', value: 'Bank-level encryption · TLS' },
        { key: 'Local Network', value: 'Direct IP connection when on home Wi-Fi' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird App', tag: 'Professional', featured: true },
        { brand: 'Consumer Apps (Ring/Nest)', tag: 'Subscription' },
        { brand: 'Standard SIP App', tag: 'Third-party' },
      ],
      rows: [
        { feature: 'No monthly subscription fees', values: ['yes', 'no', 'yes'] },
        { feature: 'Visitor photo history included', values: ['yes', 'no (paid)', 'no'] },
        { feature: 'Local network IP mode', values: ['yes', 'no', 'partial'] },
        { feature: 'Multiple relay control (Door + Gate)', values: ['yes', 'no', 'no'] },
        { feature: 'Push notifications', values: ['yes', 'yes', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'The fact that I don\'t have to pay £3 a month just to see who was at my door yesterday is why I chose DoorBird. The app does exactly what it needs to do.', name: 'James Carter', role: 'Homeowner', initials: 'JC' },
      { quote: 'I have my office, my house, and my parents\' house all on the same app. Super easy to switch between them and manage access.', name: 'Priya Patel', role: 'Business Owner', initials: 'PP' },
    ],
    faqs: [
      { question: 'Is the app really completely free?', answer: 'Yes. The DoorBird app is free to download, and all core features—live video, two-way audio, remote unlock, and the 50-visitor history log—have no monthly subscription fees.' },
      { question: 'How many smartphones can connect to one DoorBird?', answer: 'You can connect up to 8 smartphones or tablets to a single DoorBird IP video door station. All devices will receive push notifications simultaneously.' },
      { question: 'Does the app work if my internet goes down?', answer: 'If your home internet drops but your local Wi-Fi network is still up, the app will connect directly to the DoorBird via Local Area Network (LAN) mode, allowing you to answer the door while at home.' },
      { question: 'Do I need the app if I have an indoor station?', answer: 'No, but they work great together. You can use the physical indoor station while at home, and rely on the smartphone app when you are out in the garden or at work.' },
    ],
  },
  'doorbird/a1121-access-keypad': {
    slug: 'a1121-access-keypad',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'A1121 Access Control Keypad',
    eyebrow: 'DoorBird · Access — IP Keypad',
    title: 'Tamper-proof keypad access for your doors and gates.',
    tagline: '— secure access control without the need for a video station.',
    description: 'The DoorBird A1121 is a compact, IP-based multi-technology access control keypad designed for side doors, garages, and areas where a full video intercom is not required. Encased in solid stainless steel, it supports PIN codes, RFID, and Bluetooth.',
    image: 'https://www.doorbird.com/shop/media/4260423872059/4260423872066.png',
    meta: [
      { value: '12', unit: 'Key', label: 'Illuminated' },
      { value: '2', unit: '', label: 'Relay outputs' },
      { value: 'PoE', unit: '', label: 'Powered' },
    ],
    stats: [
      { value: '500', unit: '', label: 'PIN Codes' },
      { value: '2', unit: '', label: 'Relays' },
      { value: 'IP65', unit: '', label: 'Weather rated' },
      { value: 'Wiegand', unit: '', label: 'Output' },
    ],
    features: [
      { tag: 'MULTI-MODAL', title: 'PIN, RFID, and BLE.', body: 'Supports up to 500 individual PIN codes, 125KHz or 13.56MHz RFID transponders, and Bluetooth Low Energy (BLE) via smartphone.', icon: 'key' },
      { tag: 'ILLUMINATED KEYPAD', title: 'Easy operation at night.', body: 'The 12-key module is fully backlit, ensuring the device can be easily operated in unlit environments like side alleys or underground garages.', icon: 'screen' },
      { tag: 'DUAL RELAYS', title: 'Control two access points.', body: 'Equipped with two configurable bistable latching relays, allowing you to trigger a door strike and an alarm system simultaneously.', icon: 'layout' },
      { tag: 'NETWORKED', title: 'WiFi & PoE Support.', body: 'Connects to your local network via LAN (with PoE) or WiFi. Features an open API for seamless smart home integration (e.g., FIBARO, Control4).', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Secondary Doors', title: 'Side gates and garages.', desc: 'Enables secure access control in areas where the installation of an IP video door station is overkill, keeping hardware consistent across the property.', stats: [{ value: 'Consistent', label: 'Aesthetic' }, { value: 'IP65', label: 'Outdoor Ready' }] },
      { mark: 'Temporary Access', title: 'Visitors and Cleaners.', desc: 'Ideal for creating one-time or schedule-based PIN codes for temporary visitors or service staff, manageable entirely via the app.', stats: [{ value: '500', label: 'Max PINs' }, { value: 'Remote', label: 'Management' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Front Panel', value: '3 mm Brushed stainless steel V2A / V4A' },
        { key: 'Keypad', value: '12 keys, illuminated' },
        { key: 'Readers', value: 'RFID (125 KHz or 13.56 MHz) · BLE' },
        { key: 'Relay Outputs', value: '2× Bistable latching relay (max 1-24 V DC/AC, 1 A)' },
        { key: 'Mounting', value: 'Surface or Flush-mounted options' },
        { key: 'Dimensions', value: '128 × 62 × 28 mm' },
      ]},
      { category: 'Software & Security', rows: [
        { key: 'Network', value: 'LAN/PoE (802.3af) · WiFi (2.4 GHz)' },
        { key: 'Integrations', value: 'Wiegand · HTTP(s) API' },
        { key: 'Configuration', value: 'Via DoorBird App or WebAdmin' },
        { key: 'Protection', value: 'IP65 weather rating · Tamper sensor' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird A1121', tag: 'Smart Keypad', featured: true },
        { brand: 'Standard Keypad', tag: 'Analog' },
      ],
      rows: [
        { feature: 'Network IP Communication (WiFi/LAN)', values: ['yes', 'no'] },
        { feature: 'App/Cloud PIN Management', values: ['yes', 'no'] },
        { feature: 'RFID & Bluetooth', values: ['yes', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'We added the A1121 to the side door. It matches the DoorBird video intercom at the front perfectly, and managing all PINs from one app is fantastic.', name: 'Marcus D.', role: 'Homeowner', initials: 'MD' },
    ],
    faqs: [
      { question: 'Does the A1121 have a camera?', answer: 'No, the A1121 is strictly an access control keypad and RFID reader. For video, you would use models like the D21DKV or D1101V.' },
      { question: 'Does it work if the internet goes down?', answer: 'Yes, if there is temporarily no internet connection, all access functions within the local network continue to work seamlessly.' },
    ],
  },
};
