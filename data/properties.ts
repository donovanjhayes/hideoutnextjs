import { Property } from '@/app/types/property';

export const properties: Property[] = [
  {
    id: 'hideout-chalet',
    name: 'The Hideout Chalet',
    tagline: 'Chalet Woodland Retreat',
    description: 'Escape to the Poconos in this cozy chalet, perfect for a large group with 3 floors of living space, a hot tub, a private deck, and a fireplace. Just minutes from skiing, swimming, and lakes.',
    heroImage: '/images/chalet/chalet-hero.jpg',
    thumbnails: ['/images/chalet/chalet-bedroom.jpg', '/images/chalet/chalet-livingroom.jpg', '/images/chalet/chalet-hottub.jpg','/images/chalet/chalet-number.jpg', '/images/chalet/chalet-mountainart.jpg'],
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
    heroImage: '/images/daybreak/daybreakoutside.jpg',
    thumbnails: ['/images/daybreak/daybreakfirepit.jpg', '/images/daybreak/daybreakhall2.jpg', '/images/daybreak/daybreakkitchen.jpg', '/images/daybreak/daybreakkitchen.jpeg', '/images/daybreak/daybreakguestbed.jpg', '/images/daybreak/daybreakguestbath.jpg', '/images/daybreak/daybreakmainbath.jpg', '/images/daybreak/daybreakbackporch.jpg'],
    amenities: ['Hot Tub', 'Fast Wi-Fi', 'Pet Friendly', 'Fireplace', 'Washer/Dryer'],
    links: {
      details: '/properties/hideout-daybreak/',
      gallery: '/properties/hideout-daybreak/gallery',
      booking: 'https://booking.hospitable.com/widget/a11f249d-d6e0-40e4-abcf-4f4c40fb7ac8/2181616',
      embedbooking: '/properties/hideout-daybreak/#booking-section',
    },
  },
    {
    id: 'hideout-retreat',
    name: 'Retreats in the Hideout',
    tagline: 'Book your own or let us host your group/n\'sl getaway',
    description: 'We can accomodate groups as large as 25... contact us directly for more information! You can contact us through the direct booking engine, or you can send us an email directly at retreats@hideoutvacation.com',
    heroImage: '/images/hideout-northbeach.jpg',
    thumbnails: ['/images/retreat/breakfast.jpeg', '/images/retreat/morebreakfast.jpeg', '/images/retreat/writinglight.jpeg'],
    amenities: ['Book Clubs', 'Family Reunions', 'Writing Retreats', 'Ski and Mountain Biking Trips'],
    links: {
      details: '/properties/hideout-retreat',
      gallery: '/properties/hideout-retreat/gallery',
      booking: 'https://booking.hospitable.com/widget/a11f249d-d6e0-40e4-abcf-4f4c40fb7ac8/1838596',
      embedbooking: '/properties/hideout-chalet/#booking-section',
    },
  },
];