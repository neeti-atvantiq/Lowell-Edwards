export interface FeatureGroup {
  label: string;
  items: string[];
}

export interface GalleryBrand {
  cert: string;
  certLogo: string;
  brand: string;
  type: string;
  image: string;
  href: string;
  featureGroups: FeatureGroup[];
}

export interface HardwareCategory {
  id: string;
  title: string;
  brands: GalleryBrand[];
}

export const hardwareCategories: HardwareCategory[] = [
  {
    id: 'intercoms',
    title: 'Intercoms & Entry Systems',
    brands: [
      {
        cert: 'Authorised Partner',
        certLogo: '/images/products/cert/akuvox.png',
        brand: 'Akuvox',
        type: 'AI Smart Intercom',
        image: '/images/gallery/intercom/akuvox.png',
        href: '/products/akuvox/intercoms',
        featureGroups: [
          {
            label: 'Entry Features',
            items: ['App', 'Facial Recognition', 'Fobs', 'PIN Codes', 'Bluetooth', 'Landlines']
          },
          {
            label: 'App Features',
            items: ['User PINs', 'Delivery PINs', 'Guest PINs', 'Add/Remove Family & Tenants']
          }
        ]
      },
      {
        cert: 'Authorised Reseller',
        certLogo: '/images/products/cert/butterfly.png',
        brand: 'ButterflyMX',
        type: 'Video Intercom',
        image: '/images/gallery/intercom/butterfly.png',
        href: '/products/butterflymx/intercoms',
        featureGroups: [
          {
            label: 'Entry Features',
            items: ['App', 'Fobs', 'PIN Codes', 'Landlines']
          },
          {
            label: 'App Features',
            items: ['User PINs', 'Delivery PINs', 'Guest PINs']
          }
        ]
      },
      {
        cert: 'Certified Installer',
        certLogo: '/images/products/cert/doorbird.png',
        brand: 'DoorBird',
        type: 'IP Video Station',
        image: '/images/gallery/intercom/doorbird.jpg',
        href: '/products/doorbird/intercoms',
        featureGroups: [
          {
            label: 'Entry Features',
            items: ['App', 'Fobs', 'PIN Codes (Some Models)']
          },
          {
            label: 'App Features',
            items: ['Fixed PINs (Keypad Models)']
          }
        ]
      }
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control (Secondary Doors)',
    brands: [
      {
        cert: 'Authorised Partner',
        certLogo: '/images/products/cert/akuvox.png',
        brand: 'Akuvox',
        type: 'Smart Readers',
        image: '/images/gallery/access_control/akuvox.png',
        href: '/products/akuvox/access-control',
        featureGroups: [
          {
            label: 'General Features',
            items: ['Keypad', 'Fob', 'Bluetooth', 'Facial Rec', 'App Integration', 'Shares Info via Cloud']
          }
        ]
      },
      {
        cert: 'Authorised Reseller',
        certLogo: '/images/products/cert/butterfly.png',
        brand: 'ButterflyMX',
        type: 'Access Readers',
        image: '/images/gallery/access_control/butterfly.png',
        href: '/products/butterflymx/access-control',
        featureGroups: [
          {
            label: 'General Features',
            items: ['Keypad', 'Fob', 'App Integration', 'Shares Info via Cloud']
          }
        ]
      },
      {
        cert: 'Certified Installer',
        certLogo: '/images/products/cert/doorbird.png',
        brand: 'DoorBird',
        type: 'I/O Controllers',
        image: '/images/gallery/access_control/doorbird.png',
        href: '/products/doorbird/access-control',
        featureGroups: [
          {
            label: 'General Features',
            items: ['Keypad', 'Fob', 'App Integration', 'Independent System']
          }
        ]
      }
    ]
  },
  {
    id: 'apartment-stations',
    title: 'Apartment Stations (In-Unit)',
    brands: [
      {
        cert: 'Authorised Partner',
        certLogo: '/images/products/cert/akuvox.png',
        brand: 'Akuvox',
        type: 'Indoor Monitors',
        image: '/images/gallery/aparment/akuvox.png',
        href: '/products/akuvox/apartment-stations',
        featureGroups: [
          {
            label: 'General Features',
            items: ['7" - 10" Screens', 'Doorbell Option', 'View & Talk to Visitors', 'Retrofit Friendly', 'Wired or WiFi']
          }
        ]
      },
      {
        cert: 'Certified Installer',
        certLogo: '/images/products/cert/doorbird.png',
        brand: 'DoorBird',
        type: 'Indoor Stations',
        image: '/images/gallery/aparment/doorbird.png',
        href: '/products/doorbird/apartment-stations',
        featureGroups: [
          {
            label: 'General Features',
            items: ['4" & 7" Screens', 'View & Talk to Visitors', 'Wired or WiFi']
          }
        ]
      }
    ]
  }
];
