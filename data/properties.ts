import { Property } from '@/app/types/property';

export const properties: Property[] = [
  {
    id: 'hideout-cabin',
    name: 'The Hideout Cabin',
    tagline: 'Cozy woodland retreat for two',
    description: 'Escape the city in this beautifully renovated A-frame cabin featuring a private hot tub, fire pit, and stunning forest views.',
    heroImage: '/images/cabin-hero.jpg',
    thumbnails: ['/images/cabin-1.jpg', '/images/cabin-2.jpg', '/images/cabin-3.jpg'],
    amenities: ['Hot Tub', 'Wi-Fi', 'Fireplace', 'Pet Friendly'],
    links: {
      details: '/properties/hideout-cabin',
      gallery: '/properties/hideout-cabin/gallery',
      booking: 'https://your-booking-engine.com/cabin', // External or internal
    },
  },
  {
    id: 'hideout-loft',
    name: 'The Hideout Loft',
    tagline: 'Modern downtown living',
    description: 'A sleek, sun-drenched loft in the heart of the city. Walkable to top restaurants and coffee shops, perfect for urban explorers.',
    heroImage: '/images/loft-hero.jpg',
    thumbnails: ['/images/loft-1.jpg', '/images/loft-2.jpg', '/images/loft-3.jpg'],
    amenities: ['City View', 'Fast Wi-Fi', 'Gym Access', 'Washer/Dryer'],
    links: {
      details: '/properties/hideout-loft',
      gallery: '/properties/hideout-loft/gallery',
      booking: 'https://your-booking-engine.com/loft',
    },
  },
];