export interface AllProductsBrand {
  name: string;
  tagline: string;
  image: string;
  link: string;
  entryFeatures?: string[];
  appFeatures?: string[];
  generalFeatures?: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  brands: AllProductsBrand[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'intercoms',
    title: 'Intercoms',
    subtitle: 'Primary entry management',
    icon: '📞',
    brands: [
      {
        name: 'Akuvox',
        tagline: 'AI-powered face recognition entry',
        image: '/images/gallery/intercom/akuvox.png',
        link: '/products/akuvox/intercoms',
        entryFeatures: ['App', 'Facial Recg', 'Fobs', 'Pin codes', 'Bluetooth', 'Landlines'],
        appFeatures: ['User pin codes', 'Delivery Pin codes', 'Guest Pin codes', 'User Add/Remove FAMILY & TENANTS']
      },
      {
        name: 'ButterflyMX',
        tagline: 'Cloud-first smartphone video entry',
        image: '/images/gallery/intercom/butterfly.png',
        link: '/products/butterflymx/intercoms',
        entryFeatures: ['App', 'Fobs', 'Pin Codes', 'Landlines'],
        appFeatures: ['User Pin Codes', 'Delivery Pin Codes', 'Guest Pin Codes']
      },
      {
        name: 'DoorBird',
        tagline: 'German-engineered premium IP intercoms',
        image: '/images/gallery/intercom/doorbird.jpg',
        link: '/products/doorbird/intercoms',
        entryFeatures: ['App', 'Fobs', 'Pin Codes (some models)'],
        appFeatures: ['Fix Pin codes on keypad models']
      }
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control',
    subtitle: 'Secondary doors & gates',
    icon: '🔐',
    brands: [
      {
        name: 'Akuvox',
        tagline: 'Multi-modal readers & controllers',
        image: '/images/gallery/access_control/akuvox.png',
        link: '/products/akuvox/access-control',
        generalFeatures: ['Keypad', 'Fob', 'Bluetooth', 'Facial Rec', 'APP Integration', 'Shares Info']
      },
      {
        name: 'ButterflyMX',
        tagline: 'Unified cloud access platform',
        image: '/images/gallery/access_control/butterfly.png',
        link: '/products/butterflymx/access-control',
        generalFeatures: ['Keypad', 'Fob', 'APP Integration', 'Shares Info']
      },
      {
        name: 'DoorBird',
        tagline: 'AES-encrypted I/O controllers',
        image: '/images/gallery/access_control/doorbird.png',
        link: '/products/doorbird/access-control',
        generalFeatures: ['Keypad', 'Fob', 'APP Integration', 'Independent']
      }
    ]
  },
  {
    id: 'apartment-stations',
    title: 'Apartment Stations',
    subtitle: 'In-unit resident monitors',
    icon: '🖥',
    brands: [
      {
        name: 'Akuvox',
        tagline: 'Smart screens from 7" to 10"',
        image: '/images/gallery/aparment/akuvox.png',
        link: '/products/akuvox/apartment-stations',
        generalFeatures: ['7" - 10" Screens', 'Doorbell option', 'View & Talk to Visitors', 'Retrofit friendly', 'Wired or WiFi']
      },
      {
        name: 'DoorBird',
        tagline: 'Premium indoor video panels',
        image: '/images/gallery/aparment/doorbird.png',
        link: '/products/doorbird/apartment-stations',
        generalFeatures: ['4" & 7" Screens', 'View & Talk to visitors', 'Wired or WiFi']
      }
    ]
  }
];

export const heroStats = [
  { value: '3', label: 'Premium brands' },
  { value: '300+', label: 'Installations' },
  { value: '5,000+', label: 'Units deployed' },
  { value: '24/7', label: 'Support' },
];
