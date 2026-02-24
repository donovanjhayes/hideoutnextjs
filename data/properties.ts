import { Property } from '@/app/types/property';

export const properties: Property[] = [
  {
    id: 'hideout-chalet',
    name: 'The Hideout Chalet',
    tagline: 'Chalet woodland retreat',
    description: 'Escape to the Poconos in this cozy chalet, perfect for a large group with 3 floors of living space, a hot tub, a private deck, and a fireplace. Just minutes from skiing, swimming, and lakes.',
    heroImage: '/images/chalet-hero.jpg',
    thumbnails: ['/images/chalet-bedroom.jpg', '/images/chalet-livingroom.jpg', '/images/chalet-hot-tub.jpg','/images/chalet-deck.jpg'],
    amenities: ['Hot Tub', 'Wi-Fi', 'Fireplace', 'Pet Friendly'],
    links: {
      details: '/properties/hideout-chalet',
      gallery: '/properties/hideout-chalet/gallery',
      booking: 'https://booking.hospitable.com/widget/a11f249d-d6e0-40e4-abcf-4f4c40fb7ac8/1838596',
      embedbooking: '/properties/hideout-chalet/#booking-section',
},
  },
  {
    id: 'hideout-daybreak',
    name: 'Daybreak',
    tagline: 'Modern Poconos Getaway',
    description: 'Just across the street from the Chalet, youn/n\'ll find Daybreak, a modern and stylish retreat with sleek design, a private hot tub, and all the comforts you need for a memorable stay in the Poconos.',
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