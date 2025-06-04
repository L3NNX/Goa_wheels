import { ServiceType } from '../types';

export const services: ServiceType[] = [
  {
    id: 1,
    name: 'Airport Pickup',
    description: 'Get picked up from Goa airport and reach your destination safely and comfortably.',
    imageUrl: 'https://images.pexels.com/photos/2611830/pexels-photo-2611830.jpeg',
    price: 899,
    priceUnit: 'one-way'
  },
  {
    id: 2,
    name: 'Beach Hopping',
    description: 'Explore the beautiful beaches of Goa with our beach hopping service.',
    imageUrl: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    price: 1499,
    priceUnit: 'day'
  },
  {
    id: 3,
    name: 'City Tour',
    description: 'Discover the cultural heritage and vibrant markets of Goa with our guided city tours.',
    imageUrl: 'https://images.pexels.com/photos/3353210/pexels-photo-3353210.jpeg',
    price: 1299,
    priceUnit: 'tour'
  },
  {
    id: 4,
    name: 'Waterfall Trek',
    description: 'Experience the natural beauty of Goa\'s hidden waterfalls with our trekking service.',
    imageUrl: 'https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg',
    price: 1699,
    priceUnit: 'trip'
  }
];