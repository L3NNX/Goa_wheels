import { LocationType } from '../types';

export const locations: LocationType[] = [
  {
    id: 1,
    name: 'Calangute Beach',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg',
    popular: true,
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.474948792063!2d73.76393771493218!3d15.56096718956384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfdd0d7a9c0d2d%3A0x7d5af4bfb9a55333!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1689755645987!5m2!1sen!2sin',
    coordinates: {
      lat: 15.5449,
      lng: 73.7526
    }
  },
  {
    id: 2,
    name: 'Palolem Beach',
    region: 'South Goa',
    imageUrl: 'https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg',
    popular: true,
    coordinates: {
      lat: 15.0100,
      lng: 74.0232
    }
  },
  {
    id: 3,
    name: 'Panaji City',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg',
     iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.049414488193!2d73.82661741493259!3d15.497711589991553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfdbcbfcdd6f5d%3A0x6e94b1f38c2d66c1!2sPanaji!5e0!3m2!1sen!2sin!4v1689755704987!5m2!1sen!2sin',
    popular: true,
    coordinates: {
      lat: 15.4989,
      lng: 73.8278
    }
  },
  {
    id: 4,
    name: 'Anjuna Beach',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
    popular: true,
    coordinates: {
      lat: 15.5738,
      lng: 73.7417
    }
  },
  {
    id: 5,
    name: 'Vagator Beach',
    region: 'North Goa',
    imageUrl: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
    popular: false,
    coordinates: {
      lat: 15.5982,
      lng: 73.7444
    }
  },
  {
    id: 6,
    name: 'Colva Beach',
    region: 'South Goa',
    imageUrl: 'https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg',
    popular: false,
    coordinates: {
      lat: 15.2793,
      lng: 73.9147
    }
  }
];