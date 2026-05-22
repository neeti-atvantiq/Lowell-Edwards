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
    description: 'Akuvox delivers the most advanced AI-powered intercom systems on the market — featuring face recognition, touchless entry, and a modular platform that scales from single doors to entire campuses.',
    brandName: 'Akuvox',
    brandSlug: 'akuvox',
    categorySlug: 'intercoms',
    heroImage: 'https://www.akuvox.com/uploads/202012/2020123119053400.png',
    products: ['akuvox/x915-flagship-panel', 'akuvox/x912-intercom-panel', 'akuvox/s532-body-temperature'],
    highlights: [
      { value: '99.9% accurate', label: 'Face recognition' },
      { value: '<500ms', label: 'Entry speed' },
      { value: '50,000', label: 'Face capacity' },
      { value: '3D anti-spoof', label: 'Security level' },
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
        { feature: 'Modular design', values: ['yes', 'no', 'no'] },
        { feature: 'Cloud management', values: ['yes', 'yes', 'partial'] },
        { feature: 'Smartphone app', values: ['yes', 'yes', 'yes'] },
        { feature: 'Smart home integration', values: ['partial', 'no', 'yes'] },
        { feature: 'Stainless steel build', values: ['no', 'no', 'yes'] },
        { feature: 'No cloud subscription', values: ['yes', 'partial', 'yes'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/8.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full Akuvox intercom deployment'
      },
      {
        image: '/images/installations/2.jpg',
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
    subtitle: 'Smart Readers & Controllers',
    description: 'Complete access control ecosystem — from compact face-recognition terminals for secondary doors to enterprise 4-door controllers managing entire campuses via the cloud.',
    brandName: 'Akuvox',
    brandSlug: 'akuvox',
    categorySlug: 'access-control',
    heroImage: 'https://www.akuvox.com/uploads/images/9d537ac8c4fcaea6a45dbe8ed0952389.png',
    products: ['akuvox/a02s-indoor-phone', 'akuvox/a08-access-controller', 'akuvox/a01-access-controller'],
    highlights: [
      { value: '50,000', label: 'User capacity' },
      { value: 'Cloud', label: 'Managed' },
      { value: 'Face + Card + PIN', label: 'Multi-modal' },
      { value: '4 doors', label: 'Per controller' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'Akuvox', tag: 'AI · Cloud-native', featured: true },
        { brand: 'ButterflyMX', tag: 'Cloud · Unified' },
        { brand: 'DoorBird', tag: 'Encrypted · IP' },
      ],
      rows: [
        { feature: 'Face recognition readers', values: ['yes', 'no', 'no'] },
        { feature: 'Cloud management', values: ['yes', 'yes', 'partial'] },
        { feature: 'Offline redundancy', values: ['yes', 'partial', 'yes'] },
        { feature: 'Multi-door controllers', values: ['yes', 'no', 'no'] },
        { feature: 'Anti-passback', values: ['yes', 'no', 'no'] },
        { feature: 'Fire alarm integration', values: ['yes', 'no', 'partial'] },
        { feature: 'Encrypted communication', values: ['yes', 'yes', 'yes'] },
        { feature: 'DIN-rail mount', values: ['yes', 'no', 'partial'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/8.jpg',
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
        image: '/images/installations/6.jpg',
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
    subtitle: 'Indoor Monitors & Panels',
    description: 'From budget-friendly 4.3" video phones to premium 10" smart home panels — an indoor station for every unit, every budget, and every resident preference.',
    brandName: 'Akuvox',
    brandSlug: 'akuvox',
    categorySlug: 'apartment-stations',
    heroImage: '/images/products/akuvox/S562.png',
    products: ['akuvox/c313-indoor-monitor', 'akuvox/s562-indoor-station'],
    highlights: [
      { value: '4.3" to 10"', label: 'Screen range' },
      { value: 'Smart home', label: 'Integration' },
      { value: 'PoE', label: 'Single cable' },
      { value: 'From budget to premium', label: 'For every unit' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'Akuvox', tag: '3 tiers · Smart', featured: true },
        { brand: 'DoorBird', tag: 'Premium · IP' },
        { brand: 'Smartphone', tag: 'App-only' },
      ],
      rows: [
        { feature: 'Budget option available', values: ['yes', 'no', 'yes'] },
        { feature: 'Smart home control', values: ['yes', 'no', 'no'] },
        { feature: '10" display option', values: ['yes', 'no', 'no'] },
        { feature: 'Always-on (no phone needed)', values: ['yes', 'yes', 'no'] },
        { feature: 'Room-to-room calling', values: ['yes', 'partial', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'yes', 'no'] },
        { feature: 'Elderly-friendly', values: ['yes', 'yes', 'no'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/1.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full Akuvox indoor station deployment'
      },
      {
        image: '/images/installations/2.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/3.jpg',
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
        image: '/images/installations/1.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full ButterflyMX intercom deployment'
      },
      {
        image: '/images/installations/2.jpg',
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
        image: '/images/installations/7.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full ButterflyMX access control deployment'
      },
      {
        image: '/images/installations/6.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/8.jpg',
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
    description: 'Handcrafted from marine-grade V4A stainless steel with 4K cameras, native smart home integration, and zero subscription fees — DoorBird is the choice for properties where craftsmanship matters.',
    brandName: 'DoorBird',
    brandSlug: 'doorbird',
    categorySlug: 'intercoms',
    heroImage: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4251489601011',
    products: ['doorbird/d31tdh-display'],
    highlights: [
      { value: 'V4A steel', label: 'Marine-grade' },
      { value: '4K UHD', label: 'Camera' },
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
        { feature: 'V4A stainless steel', values: ['yes', 'no', 'no'] },
        { feature: '4K camera', values: ['yes', 'no', 'partial'] },
        { feature: 'HomeKit / KNX / Control4', values: ['yes', 'partial', 'no'] },
        { feature: 'No cloud subscription', values: ['yes', 'yes', 'no'] },
        { feature: 'Open HTTP API', values: ['yes', 'yes', 'no'] },
        { feature: 'Custom finishes (RAL/brass)', values: ['yes', 'no', 'no'] },
        { feature: 'AI face recognition', values: ['no', 'yes', 'no'] },
        { feature: 'Cloud management portal', values: ['partial', 'yes', 'yes'] },
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
  'doorbird/access-control': {
    title: 'DoorBird Access Control',
    subtitle: 'Encrypted I/O Controllers',
    description: 'Network-based IP controllers with AES-128 encryption — keeping door relay switching safely inside the building, far from tampering hands.',
    brandName: 'DoorBird',
    brandSlug: 'doorbird',
    categorySlug: 'access-control',
    heroImage: 'https://www.doorbird.com/shop/media/4260423872028/A1121_surface_steel_front.png',
    products: ['doorbird/a1121-access-controller'],
    highlights: [
      { value: 'AES-128', label: 'Encryption' },
      { value: '3 relays', label: 'Per controller' },
      { value: 'Tamper-proof', label: 'Inside mount' },
      { value: 'PoE', label: 'Powered' },
    ],
    crossBrandComparison: {
      headers: [
        { brand: 'DoorBird', tag: 'Encrypted · IP', featured: true },
        { brand: 'Akuvox', tag: 'Cloud · Multi-door' },
        { brand: 'ButterflyMX', tag: 'Cloud · Unified' },
      ],
      rows: [
        { feature: 'AES encrypted communication', values: ['yes', 'partial', 'yes'] },
        { feature: 'Tamper-proof (indoor mount)', values: ['yes', 'partial', 'no'] },
        { feature: 'Multi-relay (3 outputs)', values: ['yes', 'yes', 'no'] },
        { feature: 'Smart home triggers', values: ['yes', 'partial', 'no'] },
        { feature: 'HTTP API', values: ['yes', 'yes', 'no'] },
        { feature: 'Cloud management', values: ['partial', 'yes', 'yes'] },
        { feature: 'Face recognition readers', values: ['no', 'yes', 'no'] },
      ],
    },
    installationImages: [
      {
        image: '/images/installations/8.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full DoorBird access control deployment'
      },
      {
        image: '/images/installations/7.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/1.jpg',
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
        image: '/images/installations/7.jpg',
        tag: 'Residential',
        title: '48-Unit Apartment Block',
        desc: 'Full DoorBird indoor station deployment'
      },
      {
        image: '/images/installations/6.jpg',
        tag: 'Commercial',
        title: 'Office Complex',
        desc: 'Multi-entry system'
      },
      {
        image: '/images/installations/8.jpg',
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
    title: 'The building\u2019s front door, managed entirely from the cloud.',
    tagline: '\u2014 smartphone video entry for modern multi-tenant buildings.',
    description: 'The ButterflyMX Video Intercom Panel is a cloud-connected video entry system that lets residents grant access via their smartphone from anywhere. Property managers control the entire system from a web dashboard \u2014 no on-site hardware management required.',
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
      { tag: 'SMARTPHONE ENTRY', title: 'Open the door from anywhere on Earth.', body: 'Residents receive a video call on their smartphone when a visitor buzzes. They see, speak to, and grant access from anywhere \u2014 at home, at work, or on holiday.', icon: 'smartphone' },
      { tag: 'CLOUD MANAGED', title: 'Zero on-site hardware management.', body: 'Property managers add/remove residents, issue virtual keys, and manage delivery access from a web dashboard. No server room, no IT staff, no site visits.', icon: 'cloud' },
      { tag: 'DELIVERY ACCESS', title: 'One-time PINs for couriers and guests.', body: 'Generate time-limited PINs for deliveries, dog walkers, cleaners. The system logs every entry with photo, timestamp, and method used.', icon: 'package' },
      { tag: 'VIDEO CALLING', title: 'HD video with two-way audio.', body: 'Crystal-clear video and audio let residents verify visitors before granting access. Night vision ensures visibility at all hours.', icon: 'video' },
      { tag: 'AUDIT TRAIL', title: 'Every entry logged with photo evidence.', body: 'Timestamped photo logs of every door event. Exportable reports for compliance, disputes, and building management.', icon: 'log' },
      { tag: 'INTEGRATIONS', title: 'Works with property management software.', body: 'Native integrations with Yardi, RealPage, Entrata, and more. Tenant directories sync automatically \u2014 no manual data entry.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Build-to-Rent', title: 'Purpose-built rental blocks.', desc: 'The ideal entry system for BTR developments where resident turnover is high and property managers need remote control over access credentials.', stats: [{ value: '60%', label: 'Less admin time' }, { value: '0', label: 'Key handovers' }] },
      { mark: 'Student Housing', title: 'University accommodations.', desc: 'Students manage their own access via smartphone. No physical keys to lose, no locksmith callouts. Batch credential management for yearly intake.', stats: [{ value: '100%', label: 'Self-service' }, { value: '85%', label: 'Fewer lockouts' }] },
      { mark: 'Co-Living Spaces', title: 'Shared living developments.', desc: 'Flexible access for short and long-term residents. Virtual keys issued and revoked instantly as residents come and go.', stats: [{ value: '<1min', label: 'New resident setup' }, { value: '24/7', label: 'Remote management' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '11.6" IPS touchscreen \u00b7 1080p' },
        { key: 'Camera', value: 'HD wide-angle \u00b7 IR night vision' },
        { key: 'Audio', value: 'Full-duplex \u00b7 noise cancellation' },
        { key: 'Protection', value: 'IP65 weather rated' },
        { key: 'Mounting', value: 'Surface or flush mount' },
        { key: 'Dimensions', value: '332 \u00d7 175 \u00d7 45 mm' },
      ]},
      { category: 'Connectivity & Platform', rows: [
        { key: 'Network', value: 'PoE (802.3af) \u00b7 Wi-Fi backup' },
        { key: 'Platform', value: 'Cloud-hosted \u00b7 99.9% SLA' },
        { key: 'App', value: 'iOS + Android \u00b7 ButterflyMX app' },
        { key: 'PMS integration', value: 'Yardi \u00b7 RealPage \u00b7 Entrata \u00b7 AppFolio' },
        { key: 'Access methods', value: 'Smartphone \u00b7 PIN \u00b7 Virtual key \u00b7 QR code' },
        { key: 'Directory', value: 'Unlimited residents \u00b7 auto-sync' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'ButterflyMX', tag: 'Cloud \u00b7 Smartphone', featured: true },
        { brand: 'Traditional Intercom', tag: 'Wired \u00b7 Analogue' },
        { brand: 'Budget IP Intercom', tag: 'Basic' },
      ],
      rows: [
        { feature: 'Smartphone video entry', values: ['yes', 'no', 'partial'] },
        { feature: 'Cloud management', values: ['yes', 'no', 'no'] },
        { feature: 'Delivery PIN codes', values: ['yes', 'no', 'no'] },
        { feature: 'Property management integration', values: ['yes', 'no', 'no'] },
        { feature: 'Photo audit trail', values: ['yes', 'no', 'partial'] },
        { feature: 'No on-site server', values: ['yes', 'no', 'partial'] },
        { feature: 'Remote resident management', values: ['yes', 'no', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'We eliminated key handovers entirely. New tenants get access via the app before they even move in. It\u2019s transformed our operations.', name: 'Sarah Mitchell', role: 'Operations Manager \u00b7 Urban Living', initials: 'SM' },
      { quote: 'The delivery PIN feature alone justified the investment. No more missed packages, no more angry residents. Couriers enter, deliver, leave \u2014 all logged.', name: 'James Parker', role: 'Building Manager \u00b7 Riverside Quay', initials: 'JP' },
      { quote: 'Managing 400 units across 3 buildings from one dashboard. Resident move-ins and move-outs are handled in minutes, not hours.', name: 'Lisa Chen', role: 'Property Director \u00b7 Apex Residential', initials: 'LC' },
    ],
    faqs: [
      { question: 'Is there a monthly subscription?', answer: 'Yes \u2014 ButterflyMX operates on a SaaS model. The subscription includes cloud hosting, app access, automatic updates, PMS integrations, and 24/7 platform support. Pricing is per-unit.' },
      { question: 'What happens if the internet goes down?', answer: 'The panel has local fallback capabilities. Residents can still use PIN codes at the panel, and the system queues events for upload when connectivity is restored.' },
      { question: 'Can residents have multiple devices?', answer: 'Yes \u2014 each resident can have the app installed on multiple devices (phone, tablet). All household members can receive video calls and grant access independently.' },
      { question: 'How long does installation take?', answer: 'A typical 50-unit building takes 1\u20132 days. We handle cabling, mounting, configuration, and resident onboarding. The cloud platform means minimal on-site setup.' },
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
    title: 'The ultimate AI face recognition panel with tri-camera system.',
    tagline: '— 8MP RGB + IR + ToF for 99.9% accuracy in under 500ms.',
    description: 'The Akuvox X915 is the flagship face recognition panel featuring a 10" IPS display and tri-camera system (8MP RGB + IR + ToF) for 3D anti-spoofing. Supports up to 50,000 face templates with on-device AI processing for touchless, secure entry.',
    image: 'https://www.akuvox.com/uploads/202012/2020123119053400.png',
    meta: [
      { value: '99.9', unit: '%', label: 'Recognition accuracy' },
      { value: '10', unit: '"', label: 'IPS touchscreen' },
      { value: '50,000', unit: '', label: 'Face capacity' },
    ],
    stats: [
      { value: '99.9', unit: '%', label: 'Accuracy' },
      { value: '<500', unit: 'ms', label: 'Recognition speed' },
      { value: '50k', unit: '', label: 'Face templates' },
      { value: '3D', unit: '', label: 'Anti-spoof' },
    ],
    features: [
      { tag: 'TRI-CAMERA', title: '8MP RGB + IR + ToF triple-lens system.', body: 'Three sensors work together: visible-light RGB for clear video, infrared for low-light, and Time-of-Flight depth for 3D anti-spoofing. The combination ensures recognition in any condition.', icon: 'face' },
      { tag: 'AI ENGINE', title: 'On-device neural processing unit.', body: 'Dedicated NPU handles face recognition without cloud dependency. All processing is local — no data leaves the device, no internet required for authentication.', icon: 'shield' },
      { tag: 'TOUCHLESS', title: 'Walk-up, hands-free authentication.', body: 'Residents simply approach the panel — no touching, no scanning, no interaction needed. The system recognises and unlocks in under 500ms at up to 3 metres.', icon: 'hand' },
      { tag: 'MULTI-MODAL', title: 'Face, fingerprint, card, PIN, QR.', body: 'Five authentication methods available simultaneously. Face recognition is primary, with fingerprint, RFID, PIN, and QR code as fallbacks for visitors and edge cases.', icon: 'key' },
      { tag: 'FULL INTERCOM', title: 'Complete SIP video intercom built-in.', body: 'Beyond access control, the X915 is a full video intercom with HD calling to smartphones, indoor monitors, and SIP endpoints.', icon: 'video' },
    ],
    useCases: [
      { mark: 'Premium Residential', title: 'Luxury apartment complexes.', desc: 'The flagship panel for premium developments where touchless entry and cutting-edge technology are expected amenities.', stats: [{ value: '0', label: 'Credentials needed' }, { value: '<500ms', label: 'Entry time' }] },
      { mark: 'Corporate HQ', title: 'Enterprise office buildings.', desc: 'Turnstile and door integration for large corporate campuses. Automatic attendance logging and multi-zone access control.', stats: [{ value: '50k', label: 'User capacity' }, { value: '100%', label: 'Audit trail' }] },
      { mark: 'High-Security', title: 'Data centres & secure facilities.', desc: '3D anti-spoofing prevents photos, masks, and deepfakes from gaining entry. Multi-factor with face + fingerprint for sensitive areas.', stats: [{ value: '3D', label: 'Liveness detection' }, { value: '0', label: 'Spoof breaches' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '10" IPS capacitive · 1280 × 800' },
        { key: 'Camera System', value: '8MP RGB + 2MP IR + ToF depth sensor' },
        { key: 'Face Capacity', value: '50,000 templates · 100,000 event logs' },
        { key: 'Recognition Distance', value: '0.3m – 3.0m adjustable' },
        { key: 'Fingerprint', value: 'Optical sensor · 5,000 templates' },
        { key: 'Enclosure', value: 'Die-cast aluminium · IP65 · IK09' },
        { key: 'Operating Temp', value: '−30°C to +60°C' },
        { key: 'Dimensions', value: '310 × 155 × 32 mm' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: 'Gigabit Ethernet · Wi-Fi 6 · Bluetooth 5.2' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP · MQTT' },
        { key: 'I/O', value: '4× relay · 2× door sensor · RS-485 · Wiegand' },
        { key: 'Power', value: 'PoE+ (802.3at) · 12V DC' },
        { key: 'AI Processing', value: 'Dedicated NPU · on-device inference' },
        { key: 'Anti-Spoofing', value: '3D structured light · liveness detection' },
        { key: 'Management', value: 'Web UI · SNMP · cloud platform · GDPR' },
        { key: 'Integration', value: 'Elevator · PMS · turnstile · BMS' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox X915', tag: 'AI · Tri-Camera', featured: true },
        { brand: 'Standard Face Panel', tag: '2D Camera' },
        { brand: 'RFID System', tag: 'Card-based' },
      ],
      rows: [
        { feature: '3D anti-spoofing', values: ['yes', 'no', 'no'] },
        { feature: '50,000 face capacity', values: ['yes', 'no', 'no'] },
        { feature: 'Touchless entry', values: ['yes', 'partial', 'no'] },
        { feature: 'Multi-factor auth', values: ['yes', 'no', 'partial'] },
        { feature: 'Video intercom', values: ['yes', 'partial', 'no'] },
        { feature: 'On-device AI', values: ['yes', 'no', 'no'] },
        { feature: 'IP65 weatherproof', values: ['yes', 'partial', 'yes'] },
      ],
    },
    testimonials: [
      { quote: 'The tri-camera system on the X915 is genuinely next-level. 3D anti-spoofing that actually works, not just marketing. We tested everything during commissioning.', name: 'James Crawford', role: 'Security Director · Canary Wharf Group', initials: 'JC' },
      { quote: 'Deployed across 4 buildings, 2,000+ faces enrolled. Recognition is instant even in the underground car park with zero ambient light.', name: 'Priya Sharma', role: 'Facilities Manager · TechHub Campus', initials: 'PS' },
      { quote: 'The combination of face + fingerprint for our server room gives us the multi-factor we needed without slowing anyone down.', name: 'Michael Torres', role: 'IT Director · DataSecure Ltd', initials: 'MT' },
    ],
    faqs: [
      { question: 'What makes the X915 a flagship model?', answer: 'The X915 combines tri-camera 3D anti-spoofing, a 10" display, 50,000 face capacity, fingerprint support, Wi-Fi 6, and a dedicated NPU for high-performance on-device recognition.' },
      { question: 'Can it detect masks and photos?', answer: 'Yes. The ToF (Time-of-Flight) depth sensor creates a 3D map of the face in real-time. Flat images (photos, screens) and masks are immediately detected and rejected.' },
      { question: 'Does it work without internet?', answer: 'Absolutely. All AI processing happens on-device. The panel works completely offline — internet is only needed for remote management and smartphone app notifications.' },
      { question: 'How long does face enrollment take?', answer: 'Under 3 seconds per person. Residents simply look at the camera from 1 metre away. Bulk enrollment is also supported via admin upload of photos.' },
    ],
  },

  'akuvox/x912-intercom-panel': {
    slug: 'x912-intercom-panel',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'X912 Intercom Panel',
    eyebrow: 'Akuvox · Modular — Smart Video Intercom',
    title: 'The modular video intercom system that grows with your building.',
    tagline: '— mix and match modules for the perfect entry solution.',
    description: 'The Akuvox X912 is a modular intercom system with swappable face panels — choose from HD camera, face recognition, keypad, card reader, and display modules. Build exactly the entry solution your building needs.',
    image: '/images/products/akuvox/X912.png',
    meta: [
      { value: 'Modular', unit: '', label: 'Panel system' },
      { value: '6', unit: '+', label: 'Module options' },
      { value: 'IP65', unit: '', label: 'Weather sealed' },
    ],
    stats: [
      { value: '6', unit: '+', label: 'Module types' },
      { value: 'SIP', unit: '', label: 'Video calling' },
      { value: 'IP65', unit: '', label: 'Weather rating' },
      { value: 'PoE', unit: '', label: 'Power' },
    ],
    features: [
      { tag: 'MODULAR', title: 'Build your own entry panel.', body: 'Choose from camera, display, keypad, card reader, face recognition, and button modules. Snap together the combination your building needs.', icon: 'building' },
      { tag: 'HD VIDEO', title: '2MP wide-angle HD camera module.', body: 'Full HD video calling with wide-angle lens and IR night vision. Crystal-clear video to smartphones, indoor monitors, or SIP desk phones.', icon: 'video' },
      { tag: 'FACE + RFID', title: 'AI face recognition module available.', body: 'Add face recognition capability to your modular setup. Same AI engine as the flagship, in a compact module form factor.', icon: 'face' },
      { tag: 'SCALABLE', title: 'Expand without replacing.', body: 'Start with camera and keypad, add face recognition later. The modular design means upgrades don\'t require ripping out existing hardware.', icon: 'integration' },
      { tag: 'WEATHERPROOF', title: 'IP65 rated for any location.', body: 'All modules are weather-sealed to IP65. Install outdoors on gates, walls, or pillars with confidence in any UK weather.', icon: 'shield' },
    ],
    useCases: [
      { mark: 'Multi-Entrance Buildings', title: 'Different needs per door.', desc: 'Main entrance gets camera + display + face recognition. Side door gets keypad + card reader. Same system, different configurations per entry point.', stats: [{ value: '6+', label: 'Module types' }, { value: '∞', label: 'Combinations' }] },
      { mark: 'Phased Deployments', title: 'Budget-friendly upgrades.', desc: 'Install basic camera + keypad now, add face recognition and display modules later as budget allows. No forklift upgrade needed.', stats: [{ value: '0', label: 'Wasted investment' }, { value: '100%', label: 'Future-proof' }] },
      { mark: 'Mixed-Use Properties', title: 'Residential meets commercial.', desc: 'Different security requirements for different tenants. Customise each entrance to match the specific needs of each occupant type.', stats: [{ value: 'Custom', label: 'Per entrance' }, { value: '1', label: 'Management platform' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'System Type', value: 'Modular snap-fit panel system' },
        { key: 'Camera Module', value: '2MP wide-angle · WDR · IR night vision' },
        { key: 'Display Module', value: '4.3" IPS touchscreen · directory search' },
        { key: 'Face Recognition', value: 'AI module · 10,000 faces · <1s' },
        { key: 'Keypad Module', value: 'Backlit capacitive · 12-key' },
        { key: 'Card Reader', value: 'MIFARE + EM dual-frequency RFID' },
        { key: 'Enclosure', value: 'Aluminium alloy · IP65 · IK08' },
        { key: 'Operating Temp', value: '−30°C to +55°C' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: 'Gigabit Ethernet · PoE (802.3af)' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API · RTSP' },
        { key: 'I/O', value: '2× relay · door sensor · RS-485 · Wiegand' },
        { key: 'Audio', value: 'Full-duplex · echo cancellation' },
        { key: 'Management', value: 'Web UI · SNMP · auto-provisioning' },
        { key: 'Integration', value: 'SIP PBX · access control · elevator' },
        { key: 'Mobile App', value: 'Akuvox SmartPlus · iOS & Android' },
        { key: 'Firmware', value: 'Remote OTA updates' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox X912', tag: 'Modular · Flexible', featured: true },
        { brand: 'Fixed Panel', tag: 'Single config' },
        { brand: 'Basic Intercom', tag: 'Audio only' },
      ],
      rows: [
        { feature: 'Modular design', values: ['yes', 'no', 'no'] },
        { feature: 'Face recognition option', values: ['yes', 'partial', 'no'] },
        { feature: 'Video calling', values: ['yes', 'yes', 'no'] },
        { feature: 'Upgrade without replacement', values: ['yes', 'no', 'no'] },
        { feature: 'IP65 weatherproof', values: ['yes', 'yes', 'partial'] },
        { feature: 'SIP compatible', values: ['yes', 'partial', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'We used different module configurations on each entrance — full face-rec on the front, simple keypad on the bike store. Same system, one dashboard.', name: 'Tom Bailey', role: 'Property Manager · Hartland Estate', initials: 'TB' },
      { quote: 'Started with camera + keypad. Added face recognition 6 months later without touching the wiring. Brilliant modular concept.', name: 'Sarah Jensen', role: 'Facilities Director · Nexus Place', initials: 'SJ' },
      { quote: 'For our mixed-use building, the X912 let us tailor each entrance. Residents get face-rec, office tenants get card + PIN.', name: 'Amir Hassan', role: 'Development Manager · CityBuild', initials: 'AH' },
    ],
    faqs: [
      { question: 'Can I add modules later?', answer: 'Yes — that\'s the core design principle. Start with what you need now and add modules as requirements evolve. No rewiring or panel replacement needed.' },
      { question: 'Are all modules weatherproof?', answer: 'Yes. Every module in the X912 system is IP65 rated for outdoor installation in all weather conditions.' },
      { question: 'Does it work with the Akuvox app?', answer: 'Yes — residents receive video calls on the Akuvox SmartPlus app (iOS & Android) and can grant remote access from anywhere.' },
    ],
  },

  'akuvox/s532-body-temperature': {
    slug: 's532-body-temperature',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'S532 Access Terminal',
    eyebrow: 'Akuvox · Smart — Touchscreen Access Terminal',
    title: 'Touchscreen access terminal with face recognition and RFID.',
    tagline: '— compact all-in-one for secondary entrances and amenities.',
    description: 'The Akuvox S532 is a compact 5" touchscreen access terminal combining face recognition, RFID card reader, and PIN entry in a sleek wall-mounted unit. Ideal for secondary doors, gyms, car parks, and amenity spaces.',
    image: '/images/products/akuvox/S532.png',
    meta: [
      { value: '5', unit: '"', label: 'Touchscreen' },
      { value: '3-in-1', unit: '', label: 'Access methods' },
      { value: '10,000', unit: '', label: 'User capacity' },
    ],
    stats: [
      { value: '5', unit: '"', label: 'Display' },
      { value: '3', unit: '', label: 'Auth methods' },
      { value: '10k', unit: '', label: 'Users' },
      { value: 'IP65', unit: '', label: 'Weather rated' },
    ],
    features: [
      { tag: 'COMPACT', title: '5" touchscreen in a slim package.', body: 'Small enough for tight spaces — stairwells, lift lobbies, amenity doors — but with a clear 5" display for user feedback and status.', icon: 'screen' },
      { tag: 'FACE + CARD + PIN', title: 'Three ways to authenticate.', body: 'Face recognition for hands-free, RFID card for traditional access, PIN code for visitors. All managed from one central platform.', icon: 'key' },
      { tag: 'FAST RECOGNITION', title: 'Under 1 second face auth.', body: 'AI-powered face recognition completes in under 1 second, even in low-light conditions with IR illumination.', icon: 'face' },
      { tag: 'CENTRAL MANAGEMENT', title: 'Cloud or on-premise control.', body: 'Manage all S532 terminals across your building from a single web dashboard. Add/revoke users instantly.', icon: 'integration' },
      { tag: 'WIEGAND OUTPUT', title: 'Integrates with existing controllers.', body: 'Wiegand 26/34 output connects to existing access control systems. Retrofit without replacing your door controller infrastructure.', icon: 'building' },
    ],
    useCases: [
      { mark: 'Amenity Areas', title: 'Gyms, pools, and shared spaces.', desc: 'Control who accesses shared amenities and when. Face recognition means residents don\'t need to carry anything to the gym.', stats: [{ value: '0', label: 'Items to carry' }, { value: '24/7', label: 'Automated access' }] },
      { mark: 'Secondary Entrances', title: 'Fire exits and service doors.', desc: 'Every door needs access control but not every door needs a video intercom. The S532 provides secure authentication in a compact form.', stats: [{ value: '100%', label: 'Perimeter control' }, { value: 'Compact', label: 'Form factor' }] },
      { mark: 'Car Parks', title: 'Underground parking access.', desc: 'Face recognition at the car park entrance — no fumbling for fobs while driving. The barrier opens as you approach.', stats: [{ value: '<1s', label: 'Unlock time' }, { value: 'Hands-free', label: 'Operation' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '5" IPS capacitive · 720 × 1280' },
        { key: 'Camera', value: '2MP · IR illumination · WDR' },
        { key: 'Face Capacity', value: '10,000 templates' },
        { key: 'RFID', value: '13.56MHz MIFARE + 125kHz EM' },
        { key: 'Enclosure', value: 'Aluminium · IP65 · IK08' },
        { key: 'Dimensions', value: '186 × 92 × 26 mm' },
        { key: 'Operating Temp', value: '−20°C to +55°C' },
      ]},
      { category: 'Connectivity & Software', rows: [
        { key: 'Network', value: 'Ethernet · Wi-Fi · PoE (802.3af)' },
        { key: 'I/O', value: 'Relay · Wiegand 26/34 · RS-485' },
        { key: 'Protocols', value: 'HTTP API · ONVIF' },
        { key: 'Management', value: 'Web UI · cloud platform' },
        { key: 'Integration', value: 'Access controllers · elevator · BMS' },
        { key: 'Mobile App', value: 'Akuvox SmartPlus' },
        { key: 'Updates', value: 'Remote OTA firmware' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox S532', tag: 'Compact · Multi-mode', featured: true },
        { brand: 'Standalone Reader', tag: 'Card only' },
        { brand: 'Basic Keypad', tag: 'PIN only' },
      ],
      rows: [
        { feature: 'Face recognition', values: ['yes', 'no', 'no'] },
        { feature: 'RFID card', values: ['yes', 'yes', 'no'] },
        { feature: 'PIN code', values: ['yes', 'no', 'yes'] },
        { feature: 'Touchscreen display', values: ['yes', 'no', 'no'] },
        { feature: 'Central management', values: ['yes', 'partial', 'no'] },
        { feature: 'IP65 weatherproof', values: ['yes', 'partial', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'We put S532s on every secondary door. Residents love face-rec at the gym — no fob needed, just walk up.', name: 'Rachel Green', role: 'Building Manager · The Hub', initials: 'RG' },
      { quote: 'Compact enough for our narrow lift lobbies and smart enough to replace the old card readers entirely.', name: 'Paul Fletcher', role: 'Facilities Director · Meridian Place', initials: 'PF' },
      { quote: 'Deployed 12 units across our campus. Central management means one dashboard for all doors.', name: 'Linda Wu', role: 'Security Manager · Innovation Park', initials: 'LW' },
    ],
    faqs: [
      { question: 'Can it replace our existing card readers?', answer: 'Yes — the S532 has Wiegand output, so it connects directly to your existing access control panels. You get face recognition on top of card access without replacing your infrastructure.' },
      { question: 'Does it work in the dark?', answer: 'Yes. Built-in IR illumination means face recognition works in complete darkness, such as underground car parks.' },
      { question: 'How small is it?', answer: 'Just 186 × 92 × 26 mm — about the size of a large smartphone. It fits in tight spaces where full intercom panels won\'t.' },
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
    eyebrow: 'Akuvox · Premium Indoor — 10" Smart Monitor',
    title: 'The premium 10" indoor station with smart home integration.',
    tagline: '— more than a monitor — a smart home control panel.',
    description: 'The Akuvox S562 is a premium 10" indoor station that combines video intercom with smart home control. View door cameras, manage access, control lighting and climate, and monitor security — all from one elegant wall panel.',
    image: '/images/products/akuvox/S562.png',
    meta: [
      { value: '10', unit: '"', label: 'HD touchscreen' },
      { value: 'Smart', unit: '', label: 'Home control' },
      { value: 'Android', unit: '', label: 'OS platform' },
    ],
    stats: [
      { value: '10', unit: '"', label: 'Display' },
      { value: 'Android', unit: '', label: 'Platform' },
      { value: 'Smart', unit: '', label: 'Home control' },
      { value: 'HD', unit: '', label: 'Video' },
    ],
    features: [
      { tag: 'LARGE DISPLAY', title: '10" HD touchscreen panel.', body: 'Beautiful 10" IPS display with wide viewing angles. Large enough to display multiple camera feeds or smart home dashboards simultaneously.', icon: 'screen' },
      { tag: 'SMART HOME', title: 'Control lights, climate, and more.', body: 'Android-based platform supports smart home apps. Control Zigbee/Z-Wave devices, view security cameras, and manage scenes from one panel.', icon: 'integration' },
      { tag: 'INTERCOM', title: 'Full video intercom capabilities.', body: 'See and talk to visitors at any door station. Multi-door support means one panel controls access to every entry point.', icon: 'video' },
      { tag: 'SECURITY', title: 'Security system integration.', body: 'View IP cameras, receive motion alerts, arm/disarm zones. Integrates with the building\'s security infrastructure.', icon: 'shield' },
      { tag: 'ELEGANT', title: 'Premium glass-front design.', body: 'Flush-mounted with a glass fascia that complements modern interior design. Replaces cluttered wall switches and panels.', icon: 'building' },
    ],
    useCases: [
      { mark: 'Smart Apartments', title: 'Connected living spaces.', desc: 'For premium apartments where residents want one central control point for intercom, lighting, climate, and security.', stats: [{ value: '1', label: 'Control point' }, { value: '∞', label: 'Device control' }] },
      { mark: 'Penthouse Suites', title: 'Luxury residential.', desc: 'Large-format panel befitting luxury interiors. Glass-front flush mount integrates with high-end interior design.', stats: [{ value: '10"', label: 'Display size' }, { value: 'Glass', label: 'Front panel' }] },
      { mark: 'Show Homes', title: 'Developer display units.', desc: 'Showcase the building\'s smart features to prospective buyers. The S562 demonstrates the full capabilities at a glance.', stats: [{ value: 'Demo', label: 'Ready' }, { value: 'All', label: 'Features visible' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '10.1" IPS · 1280 × 800 · capacitive' },
        { key: 'Processor', value: 'Quad-core ARM · 2GB RAM' },
        { key: 'Storage', value: '16GB internal · expandable' },
        { key: 'Audio', value: 'Dual speakers · far-field mic array' },
        { key: 'Camera', value: '2MP front-facing (for video calls)' },
        { key: 'Mounting', value: 'Flush or surface · PoE' },
        { key: 'Dimensions', value: '275 × 185 × 22 mm' },
      ]},
      { category: 'Software & Integration', rows: [
        { key: 'OS', value: 'Android-based · custom launcher' },
        { key: 'Smart Home', value: 'Zigbee 3.0 · Z-Wave · Wi-Fi devices' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP · MQTT' },
        { key: 'Intercom', value: 'Multi-door · room-to-room' },
        { key: 'Security', value: 'IP camera viewer · zone arm/disarm' },
        { key: 'Updates', value: 'OTA firmware · app store' },
        { key: 'Management', value: 'Central provisioning · web UI' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox S562', tag: 'Smart · 10"', featured: true },
        { brand: 'Basic Monitor', tag: 'Intercom only' },
        { brand: 'Tablet Wall Mount', tag: 'DIY' },
      ],
      rows: [
        { feature: '10" integrated display', values: ['yes', 'no', 'yes'] },
        { feature: 'Native intercom', values: ['yes', 'yes', 'no'] },
        { feature: 'Smart home control', values: ['yes', 'no', 'partial'] },
        { feature: 'Security integration', values: ['yes', 'no', 'partial'] },
        { feature: 'Professional flush-mount', values: ['yes', 'yes', 'no'] },
        { feature: 'PoE powered', values: ['yes', 'partial', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'The S562 replaced 4 separate wall panels in our show apartment — intercom, thermostat, light switches, and security panel. One elegant screen.', name: 'Victoria Lane', role: 'Sales Director · Prestige Developments', initials: 'VL' },
      { quote: 'Residents in our premium tier get the S562 as standard. It\'s become a genuine selling point for the development.', name: 'Richard Yates', role: 'Managing Director · Apex Living', initials: 'RY' },
      { quote: 'Smart home control plus intercom in one panel. The glass-front flush mount looks beautiful against our feature walls.', name: 'Sophie Chen', role: 'Interior Designer · Chen & Associates', initials: 'SC' },
    ],
    faqs: [
      { question: 'Can it control third-party smart home devices?', answer: 'Yes — built-in Zigbee 3.0 and Z-Wave radios connect directly to smart lights, thermostats, blinds, and sensors. Wi-Fi devices are also supported.' },
      { question: 'Does it run Android apps?', answer: 'It runs a custom Android-based OS with a curated app ecosystem. Core functionality (intercom, smart home, security) is built-in. Additional apps can be sideloaded.' },
      { question: 'How is it powered?', answer: 'PoE (Power over Ethernet) is standard — single cable for power and data. This makes installation clean with no visible power cables.' },
    ],
  },

  'akuvox/a02s-indoor-phone': {
    slug: 'a02s-indoor-phone',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'A02S Indoor Phone',
    eyebrow: 'Akuvox · Budget — Compact Indoor Phone',
    title: 'The affordable 4.3" indoor phone for every apartment.',
    tagline: '— simple, reliable video answering for cost-conscious projects.',
    description: 'The Akuvox A02S is a compact 4.3" indoor video phone providing essential intercom functionality at an accessible price point. Video preview, two-way audio, and door unlock — the basics done well for every unit in the building.',
    image: '/images/products/akuvox/a02.png',
    meta: [
      { value: '4.3', unit: '"', label: 'Display' },
      { value: 'Budget', unit: '', label: 'Price tier' },
      { value: 'SIP', unit: '', label: 'Protocol' },
    ],
    stats: [
      { value: '4.3', unit: '"', label: 'Screen' },
      { value: 'SIP', unit: '', label: 'Protocol' },
      { value: 'PoE', unit: '', label: 'Power' },
      { value: 'HD', unit: '', label: 'Video' },
    ],
    features: [
      { tag: 'AFFORDABLE', title: 'Professional quality, budget price.', body: 'Full SIP video phone capability at a price point that works for every unit in a 200-apartment building. No compromise on core functionality.', icon: 'building' },
      { tag: 'VIDEO', title: 'See who\'s at the door.', body: 'Colour video preview from any paired door station. See visitors clearly before deciding to answer or unlock.', icon: 'video' },
      { tag: 'SIMPLE', title: 'No training required.', body: 'Physical buttons for answer, unlock, and volume. Intuitive enough for any resident regardless of age or tech comfort.', icon: 'screen' },
      { tag: 'SIP', title: 'Standard SIP protocol.', body: 'Works with any SIP-compatible door station or PBX. No proprietary systems — open standards for flexibility.', icon: 'integration' },
      { tag: 'COMPACT', title: 'Fits anywhere.', body: 'Small footprint wall-mount design. Unobtrusive in hallways and kitchens where space is limited.', icon: 'key' },
    ],
    useCases: [
      { mark: 'Social Housing', title: 'Affordable housing projects.', desc: 'When you need quality video intercom in every unit but budget is paramount. The A02S delivers professional results at scale.', stats: [{ value: 'Budget', label: 'Friendly' }, { value: '100%', label: 'Units covered' }] },
      { mark: 'Student Halls', title: 'High-volume deployments.', desc: 'Hundreds of rooms, tight budget, high turnover. Simple, robust, and affordable — the A02S is purpose-built for this use case.', stats: [{ value: '500+', label: 'Units typical' }, { value: 'Robust', label: 'Build quality' }] },
      { mark: 'Retrofit Projects', title: 'Upgrading legacy systems.', desc: 'Replace ageing audio-only handsets with video capability without the premium price of flagship monitors.', stats: [{ value: 'Video', label: 'Upgrade' }, { value: 'Low', label: 'Unit cost' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: '4.3" TFT colour · 480 × 272' },
        { key: 'Audio', value: 'Hands-free speaker + handset option' },
        { key: 'Buttons', value: 'Answer · unlock · volume · settings' },
        { key: 'Power', value: 'PoE (802.3af) · 12V DC' },
        { key: 'Mounting', value: 'Wall-mount bracket included' },
        { key: 'Dimensions', value: '155 × 115 × 24 mm' },
      ]},
      { category: 'Connectivity', rows: [
        { key: 'Network', value: '10/100 Ethernet' },
        { key: 'Protocol', value: 'SIP 2.0 compliant' },
        { key: 'Pairing', value: 'Any Akuvox door station · SIP PBX' },
        { key: 'Unlock', value: 'DTMF relay trigger' },
        { key: 'Management', value: 'Web UI · auto-provisioning' },
        { key: 'Firmware', value: 'Remote OTA update' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox A02S', tag: 'Budget · Video', featured: true },
        { brand: 'Audio Handset', tag: 'Legacy' },
        { brand: 'Premium Monitor', tag: 'High-end' },
      ],
      rows: [
        { feature: 'Video preview', values: ['yes', 'no', 'yes'] },
        { feature: 'Budget-friendly', values: ['yes', 'yes', 'no'] },
        { feature: 'SIP compatible', values: ['yes', 'no', 'yes'] },
        { feature: 'PoE powered', values: ['yes', 'no', 'yes'] },
        { feature: 'Scale to 500+ units', values: ['yes', 'yes', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'Fitted A02S units in all 180 apartments. Budget approved, residents happy with video. Job done.', name: 'Ian McLeod', role: 'Housing Manager · Civic Homes', initials: 'IM' },
      { quote: 'For our student halls, we needed cheap, robust, and replaceable. The A02S ticks every box.', name: 'Dr. Susan Park', role: 'Accommodation Head · City University', initials: 'SP' },
      { quote: 'Upgraded from audio-only intercoms. Residents can now see who\'s at the door before buzzing in.', name: 'Tony Bridges', role: 'Facilities · Oakwood Estate', initials: 'TB' },
    ],
    faqs: [
      { question: 'Is it really professional quality at this price?', answer: 'Yes. It uses the same SIP stack and build quality as Akuvox\'s premium range. The savings come from a smaller screen and fewer features — but core video intercom functionality is identical.' },
      { question: 'Can residents still use the smartphone app?', answer: 'Yes — calls can ring on both the A02S and the smartphone app simultaneously. The A02S is an additional option, not a replacement for mobile access.' },
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

  'akuvox/a01-access-controller': {
    slug: 'a01-access-controller',
    brand: 'Akuvox',
    brandSlug: 'akuvox',
    model: 'A01 Access Controller',
    eyebrow: 'Akuvox · Infrastructure — 4-Door Controller',
    title: 'The powerhouse of building security.',
    tagline: '— unified control for 4 doors in a single DIN-rail mountable unit.',
    description: 'The A01 is a professional-grade 4-door access controller designed for medium to large enterprises. It features high-capacity storage, global anti-passback, and extensive I/O for fire alarms and auxiliary sensors.',
    image: 'https://www.akuvox.com/uploads/202107/2021070813551430.png',
    meta: [
      { value: '4', unit: 'Door', label: 'Control' },
      { value: '50,000', unit: '', label: 'Card capacity' },
      { value: 'DIN', unit: '', label: 'Rail mount' },
    ],
    stats: [
       { value: '4', unit: '', label: 'Doors managed' },
       { value: '50k', unit: '', label: 'Cards stored' },
       { value: 'OSDP', unit: '', label: 'Supported' },
       { value: 'IP20', unit: '', label: 'Rating' },
    ],
    features: [
       { tag: 'HIGH CAPACITY', title: 'Enterprise-grade storage.', body: 'Manages up to 50,000 users and caches 100,000 event logs locally. Perfect for large corporate headquarters and university campuses.', icon: 'storage' },
       { tag: 'ADVANCED LOGIC', title: 'Anti-passback & interlocking.', body: 'Supports complex access logic including multi-door interlocking (mantrap) and global anti-passback to prevent credential sharing.', icon: 'shield' },
       { tag: 'DIN MOUNTABLE', title: 'Clean rack installations.', body: 'Designed for IT closets. The DIN-rail mountable enclosure ensures a clean, professional installation alongside existing network infrastructure.', icon: 'layout' },
       { tag: 'MULTI-READER', title: 'Comprehensive I/O.', body: 'Connect up to 4 Wiegand readers or an array of RS485/OSDP readers. Includes dedicated inputs for exit buttons, door sensors, and fire alarms.', icon: 'integration' },
    ],
    useCases: [
      { mark: 'Corporate HQ', title: 'Enterprise access.', desc: 'Manage hundreds of employees across multiple floors. The A01 scales easily by networking multiple units together via the cloud.', stats: [{ value: '50k', label: 'Users' }, { value: 'Advanced', label: 'Access logic' }] },
      { mark: 'Data Centres', title: 'High-security environments.', desc: 'Utilise the interlocking (mantrap) features to ensure only one secure door is open at a time in sensitive server areas.', stats: [{ value: 'Mantrap', label: 'Support' }, { value: 'OSDP', label: 'Encryption' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Capacity', value: '50,000 cards · 100,000 event logs' },
        { key: 'Reader Ports', value: '4× Wiegand · 1× RS485 (OSDP)' },
        { key: 'Relays', value: '4× Door lock relays · 4× Aux relays' },
        { key: 'Inputs', value: '4× Door sensor · 4× Exit button · 1× Fire alarm' },
        { key: 'Mounting', value: 'DIN-rail (35mm) or wall mount' },
      ]},
      { category: 'Connectivity & Power', rows: [
        { key: 'Network', value: '10/100 Mbps Ethernet' },
        { key: 'Power Input', value: '12V DC or 24V DC' },
        { key: 'Backup Power', value: 'Support for external backup battery' },
        { key: 'Management', value: 'Web UI · Akuvox SmartPlus Cloud' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'Akuvox A01', tag: '4-Door Enterprise', featured: true },
        { brand: 'Akuvox A08', tag: '2-Door Compact' },
        { brand: 'Legacy Panel', tag: 'Serial RS485' },
      ],
      rows: [
        { feature: 'Doors Managed', values: ['4', '2', '2-8'] },
        { feature: 'User Capacity', values: ['50,000', '20,000', '10,000'] },
        { feature: 'Anti-passback', values: ['yes', 'no', 'partial'] },
        { feature: 'DIN Rail Mount', values: ['yes', 'no', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'The A01 is our go-to for commercial fit-outs. It fits perfectly into standard electrical enclosures and the wiring layout is incredibly logical.', name: 'Mark Evans', role: 'Security Integrator', initials: 'ME' },
    ],
    faqs: [
      { question: 'What is anti-passback?', answer: 'Anti-passback prevents a user from passing their card back to another person to use. The system requires an "exit" swipe before it will accept another "entry" swipe from the same card.' },
      { question: 'Does it supply power to the locks?', answer: 'The A01 provides dry contact relays. You will need a separate, appropriately rated power supply for your magnetic locks or electric strikes.' },
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
    description: 'The D31TDH features a large high-resolution display for intuitive resident search and calling. Encased in V4A marine-grade stainless steel, it provides a modern, touch-based entry experience for multi-tenant properties while maintaining DoorBird’s legendary durability.',
    image: 'https://www.doorbird.com/web-interface/media/productImage.php?ean=4251489601011',
    meta: [
      { value: 'Touch', unit: '', label: 'Digital search' },
      { value: '4K', unit: '', label: 'Camera' },
      { value: 'V4A', unit: '', label: 'Steel' },
    ],
    stats: [
       { value: '∞', unit: '', label: 'Directory size' },
       { value: '4K', unit: 'UHD', label: 'Video' },
       { value: 'IP65', unit: '', label: 'Rating' },
       { value: 'RFID', unit: '', label: 'Built-in' },
    ],
    features: [
       { tag: 'DIGITAL DIRECTORY', title: 'Effortless visitor search.', body: 'Replaces messy paper nameplates. Visitors use the capacitive touchscreen to scroll, search by name, or search by unit number. Instantly update names via the cloud.', icon: 'screen' },
       { tag: '4K CAMERA', title: 'Unmatched video clarity.', body: 'Equipped with a 4K image sensor and infrared LEDs, providing razor-sharp video to resident smartphones day or night.', icon: 'video' },
       { tag: 'RFID & BLUETOOTH', title: 'Multiple entry methods.', body: 'Residents don\'t need to touch the screen. They can gain access using the built-in 125kHz/13.56MHz RFID reader or via Bluetooth on their smartphone.', icon: 'key' },
       { tag: 'VANDAL PROOF', title: 'Built like a tank.', body: 'Housing made of V4A (316) marine-grade stainless steel. IK08 impact rated and IP65 weather-sealed against the elements.', icon: 'shield' },
    ],
    useCases: [
      { mark: 'Large Apartments', title: 'High-density residential.', desc: 'Perfect for buildings with 20+ units where individual push buttons become impractical. The digital directory scales endlessly.', stats: [{ value: 'Unlimited', label: 'Names' }, { value: 'Fast', label: 'Search' }] },
      { mark: 'Office Towers', title: 'Multi-tenant commercial.', desc: 'Display company logos and department names. Update the directory instantly from the portal when tenants change.', stats: [{ value: 'Custom', label: 'Branding' }, { value: 'Cloud', label: 'Updates' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Display', value: 'Color LCD touchscreen · scratch-resistant glass' },
        { key: 'Material', value: 'V4A Marine-Grade Stainless Steel' },
        { key: 'Camera', value: '4K UHD · 180° wide angle' },
        { key: 'Readers', value: 'RFID (125KHz/13.56MHz) · Bluetooth (BLE)' },
        { key: 'Protection', value: 'IP65 · IK08' },
      ]},
      { category: 'Network & Integration', rows: [
        { key: 'Connection', value: 'PoE (802.3af) · Ethernet' },
        { key: 'Protocols', value: 'SIP · ONVIF · HTTP API' },
        { key: 'Smart Home', value: 'HomeKit · KNX · Control4 · Crestron' },
        { key: 'Management', value: 'DoorBird Cloud portal' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird D31TDH', tag: 'Touch Directory', featured: true },
        { brand: 'Legacy Push-Button Panel', tag: 'Button Directory' },
        { brand: 'Generic Touch Panel', tag: 'Plastic Build' },
      ],
      rows: [
        { feature: 'Digital Directory', values: ['yes', 'no', 'yes'] },
        { feature: 'V4A Stainless Steel', values: ['yes', 'yes', 'no'] },
        { feature: '4K Camera', values: ['yes', 'yes', 'partial'] },
        { feature: 'RFID built-in', values: ['yes', 'partial', 'no'] },
      ],
    },
    testimonials: [
      { quote: 'We moved from a massive 40-button brass panel to the D31TDH. The entrance looks so much cleaner, and updating tenant names now takes 30 seconds online.', name: 'Emma Watson', role: 'Property Manager', initials: 'EW' },
    ],
    faqs: [
      { question: 'Does it require a subscription?', answer: 'Basic cloud administration and the smartphone app are free. DoorBird offers optional paid tiers for extended cloud video recording history.' },
      { question: 'Can it be flush mounted?', answer: 'Yes, DoorBird offers specific flush-mount and surface-mount backboxes for the D31TDH series to suit your facade.' },
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
  'doorbird/a1121-access-controller': {
    slug: 'a1121-access-controller',
    brand: 'DoorBird',
    brandSlug: 'doorbird',
    model: 'A1121 Network I/O Controller',
    eyebrow: 'DoorBird · Security — Encrypted Door Controller',
    title: 'Tamper-proof security for your doors and gates.',
    tagline: '— keep the switching relays safely inside the building.',
    description: 'The DoorBird A1121 is an IP I/O Door Controller that provides tamper-proof control of your doors, gates, and elevators. Mounted securely inside the building, it communicates with your exterior DoorBird intercom via encrypted network traffic, ensuring that ripping the intercom off the wall cannot trigger the door strike.',
    image: 'https://www.doorbird.com/shop/media/4260423872059/4260423872066.png',
    meta: [
      { value: '3', unit: '', label: 'Relay outputs' },
      { value: 'AES', unit: '', label: 'Encrypted' },
      { value: 'PoE', unit: '', label: 'Powered' },
    ],
    stats: [
      { value: '3', unit: '', label: 'Relays' },
      { value: '2', unit: '', label: 'Sensor inputs' },
      { value: 'Network', unit: '', label: 'Placement' },
      { value: '128-bit', unit: '', label: 'Encryption' },
    ],
    features: [
      { tag: 'TAMPER PROOF', title: 'Relays stay inside.', body: 'By placing the A1121 securely inside the building, you separate the physical door strike wiring from the exterior intercom panel. Sabotaging the outdoor panel will not open the door.', icon: 'shield' },
      { tag: 'NETWORKED', title: 'Encrypted IP communication.', body: 'Communicates with the DoorBird intercom over your local network using AES-128 encryption. No direct wiring required between the intercom and the door controller.', icon: 'integration' },
      { tag: 'MULTI-RELAY', title: 'Control up to three doors.', body: 'Features three independently configurable relays. Use one for the pedestrian gate, one for the driveway gate, and one for a garage door—all triggered from the app.', icon: 'layout' },
      { tag: 'SMART INTEGRATION', title: 'HTTP API and Smart Home.', body: 'Can be triggered by third-party smart home systems, smart locks, or custom API calls independently of the intercom panel.', icon: 'cloud' },
    ],
    useCases: [
      { mark: 'High Security', title: 'Tamper-resistant entries.', desc: 'For street-facing gates and doors where vandalism is a risk. Keeps the physical unlocking mechanism out of reach from intruders.', stats: [{ value: 'Inside', label: 'Mounting' }, { value: 'Zero', label: 'Exposed wires' }] },
      { mark: 'Gate Automation', title: 'Complex gate systems.', desc: 'Mount the A1121 near the gate motor controller inside the property, connected via standard Ethernet, eliminating long analog wire runs to the intercom.', stats: [{ value: 'PoE', label: 'Network' }, { value: '3', label: 'Outputs' }] },
      { mark: 'Elevator Control', title: 'Call the lift.', desc: 'Use one of the relays to trigger an elevator call when a resident unlocks the front door, ensuring the lift is waiting for them.', stats: [{ value: 'Custom', label: 'Triggers' }, { value: 'API', label: 'Support' }] },
    ],
    specs: [
      { category: 'Hardware', rows: [
        { key: 'Relay Outputs', value: '3× bi-stable latching relays (up to 24V DC / 1A)' },
        { key: 'Digital Inputs', value: '2× inputs for sensors or exit buttons' },
        { key: 'Network', value: '10/100 Base-T Ethernet' },
        { key: 'Power', value: 'PoE (802.3af Mode A) or 15V DC adapter' },
        { key: 'Mounting', value: 'DIN-rail or wall mount' },
        { key: 'Dimensions', value: '122 × 86 × 32 mm' },
      ]},
      { category: 'Software & Security', rows: [
        { key: 'Encryption', value: 'AES-128 bit' },
        { key: 'Compatibility', value: 'All DoorBird IP Video Door Stations' },
        { key: 'Configuration', value: 'Via DoorBird App' },
        { key: 'API', value: 'HTTP(S) API integration' },
      ]},
    ],
    comparison: {
      headers: [
        { brand: 'DoorBird A1121', tag: 'Network / Encrypted', featured: true },
        { brand: 'Direct Wiring', tag: 'Vulnerable' },
        { brand: 'Standard Relay', tag: 'Analog' },
      ],
      rows: [
        { feature: 'Tamper-proof (mounted inside)', values: ['yes', 'no', 'partial'] },
        { feature: 'Network IP Communication', values: ['yes', 'no', 'no'] },
        { feature: 'AES Encryption', values: ['yes', 'no', 'no'] },
        { feature: 'Number of relays', values: ['3', '1-2', '1'] },
        { feature: 'PoE powered', values: ['yes', 'no', 'partial'] },
      ],
    },
    testimonials: [
      { quote: 'We never wire the door strike directly to the outdoor panel on street-facing properties. The A1121 goes in the comms rack, completely securing the building perimeter.', name: 'Richard Hale', role: 'Security Integrator', initials: 'RH' },
      { quote: 'Used the three relays to control the pedestrian gate, the main driveway gates, and the garage door. All connected to one DoorBird intercom on the street.', name: 'Marcus D.', role: 'Homeowner', initials: 'MD' },
    ],
    faqs: [
      { question: 'Why do I need this instead of wiring the lock to the intercom?', answer: 'Wiring a lock directly to an outdoor intercom means if a thief removes the intercom from the wall, they can short the wires and open the door. The A1121 moves the switching relay inside the secure area of the building, preventing this attack.' },
      { question: 'Can I use multiple A1121 controllers?', answer: 'Yes, you can pair multiple A1121 controllers to a single DoorBird door station over the network, allowing you to control many doors or gates from one intercom.' },
      { question: 'Does it work with standard electric strikes?', answer: 'Yes, the relays can switch any standard low-voltage electric strike or magnetic lock (up to 24V DC / 1A).' },
    ],
  },
};
