import { VehicleType } from '../types';

export const vehicles: VehicleType[] = [
  {
    id: 1,
    name: 'Mahindra Bolero',
    type: 'Car',
    imageUrl: 'https://images.pexels.com/photos/13425040/pexels-photo-13425040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
     seats: 2,
    pricePerDay: 799,
    pricePerHour: 99,
    available: true,
    features: ['Helmet Included', 'Saddle Bags', 'Phone Mount', 'First Tank Free']
  },
  {
    id: 3,
    name: 'Activa Scooter',
    type: 'Scooter',
    imageUrl: 'https://images.pexels.com/photos/32379382/pexels-photo-32379382/free-photo-of-vintage-vespa-scooter-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
     seats: 2,
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
  },
  {
    id: 5,
    name: 'Maruti Swift',
    type: 'Car',
    imageUrl: 'https://wallpapercat.com/w/full/e/2/1/1725076-2560x1600-desktop-hd-suzuki-swift-background-photo.jpg',
    seats: 5,
    pricePerDay: 1299,
    pricePerHour: 179,
    available: true,
    features: ['AC', 'Power Windows', 'Bluetooth Audio', 'Airbags']
  },
    {
    id: 6,
    name: 'Hyundai i20',
    type: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1573899754238-2cd9a045b848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGh5dW5kYWklMjBpMjB8ZW58MHx8MHx8fDA%3D',
    seats: 5,
    pricePerDay: 1599,
    pricePerHour: 229,
    available: true,
    features: ['Touchscreen', 'Bluetooth', 'Parking Sensors', 'AC']
  },
];