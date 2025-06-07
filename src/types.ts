export interface ServiceType {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  priceUnit: string;
}

export interface VehicleType {
  id: number;
  name: string;
 type: 'Car' | 'Bike' | 'Scooter' | 'Premium' | 'Hatchback' | 'Sedan' | 'SUV';
  imageUrl: string;
  seats?: number;
  pricePerDay: number;
  pricePerHour: number;
  available: boolean;
  features: string[];
  price?: string; 
  
}

export interface TestimonialType {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  rating: number;
  text: string;
}

export interface LocationType {
  id: number;
  name: string;
  region: string;
  imageUrl: string;
  popular: boolean;
   iframeSrc?: string;
   coordinates: {
    lat: number;
    lng: number;
  };
}