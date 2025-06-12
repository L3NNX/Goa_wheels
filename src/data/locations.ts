import { LocationType } from '../types';

export const locations: LocationType[] = [
  {
    id: 1,
    name: 'Calangute Beach',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg',
    popular: true,
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.474948792063!2d73.76393771493218!3d15.56096718956384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfdd0d7a9c0d2d%3A0x7d5af4bfb9a55333!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1689755645987!5m2!1sen!2sin',
    coordinates: { lat: 15.5449, lng: 73.7526 },
    address: 'Calangute Beach, North Goa, Goa 403516, India',
    phone: '+91 98765 43210',
    description: 'Calangute Beach is one of the most popular beaches in Goa, offering water sports, nightlife, and beautiful sunsets.'
  },
  {
    id: 2,
    name: 'Palolem Beach',
    region: 'South Goa',
    imageUrl: 'https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg',
    popular: true,
    coordinates: { lat: 15.0100, lng: 74.0232 },
    address: 'Palolem Beach, Canacona, South Goa, Goa 403702, India',
    phone: '+91 98765 43211',
    description: 'Palolem Beach is a serene crescent-shaped beach, famous for its calm waters and picturesque surroundings.'
  },
  {
    id: 3,
    name: 'Panaji City',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.049414488193!2d73.82661741493259!3d15.497711589991553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfdbcbfcdd6f5d%3A0x6e94b1f38c2d66c1!2sPanaji!5e0!3m2!1sen!2sin!4v1689755704987!5m2!1sen!2sin',
    popular: true,
    coordinates: { lat: 15.4989, lng: 73.8278 },
    address: 'Panaji City, North Goa, Goa 403001, India',
    phone: '+91 98765 43212',
    description: 'Panaji is Goa’s capital city, known for its vibrant culture, heritage buildings, riverfront, and markets.'
  },
  {
    id: 4,
    name: 'Anjuna Beach',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
    popular: true,
    coordinates: { lat: 15.5738, lng: 73.7417 },
    address: 'Anjuna Beach, Bardez, North Goa, Goa 403509, India',
    phone: '+91 98765 43213',
    description: 'Anjuna Beach is famous for its flea market, vibrant nightlife, and rocky shores.'
  },
  {
    id: 5,
    name: 'Vagator Beach',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
    popular: false,
    coordinates: { lat: 15.5982, lng: 73.7444 },
    address: 'Vagator Beach, Bardez, North Goa, Goa 403509, India',
    phone: '+91 98765 43214',
    description: 'Vagator Beach is known for its dramatic red cliffs, party scene, and scenic vistas of the Arabian Sea.'
  },
  {
    id: 6,
    name: 'Colva Beach',
    region: 'South Goa',
    imageUrl: 'https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg',
    popular: false,
    coordinates: { lat: 15.2793, lng: 73.9147 },
    address: 'Colva Beach, Salcete, South Goa, Goa 403708, India',
    phone: '+91 98765 43215',
    description: 'Colva Beach offers long stretches of white sand, coconut trees, and a quieter atmosphere perfect for families.'
  }
];
