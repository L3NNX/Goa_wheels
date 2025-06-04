import { VehicleType } from '../types';

export const vehicles: VehicleType[] = [
  {
    id: 1,
    name: 'Eco Hatchback',
    type: 'Car',
    imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    seats: 5,
    pricePerDay: 1499,
    pricePerHour: 199,
    available: true,
    features: ['AC', 'Bluetooth', 'GPS Navigation', 'Fuel Efficient']
  },
  {
    id: 2,
    name: 'Classic Royal Enfield',
    type: 'Bike',
    imageUrl: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg',
    pricePerDay: 799,
    pricePerHour: 99,
    available: true,
    features: ['Helmet Included', 'Saddle Bags', 'Phone Mount', 'First Tank Free']
  },
  {
    id: 3,
    name: 'Activa Scooter',
    type: 'Scooter',
    imageUrl: 'https://images.pexels.com/photos/13577210/pexels-photo-13577210.jpeg',
    pricePerDay: 499,
    pricePerHour: 79,
    available: true,
    features: ['Helmet Included', 'Basket Storage', 'Fuel Efficient', 'Easy to Drive']
  },
  {
    id: 4,
    name: 'Premium Convertible',
    type: 'Premium',
    imageUrl: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg',
    seats: 2,
    pricePerDay: 3999,
    pricePerHour: 599,
    available: false,
    features: ['Convertible Roof', 'Leather Seats', 'Premium Sound System', 'GPS Navigation']
  }
];