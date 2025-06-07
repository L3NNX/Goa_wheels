// vehicles.ts
import { ReactNode } from 'react';


export interface CarType {
  id: number;
  name: string;
  type: string;
  price: string;
  seats: number;
  luggage: number;
  transmission: string;
  fuel: string;
  mileage: string;
  features: string[];
  image: string;
  basePrice: number;
  extraKmRate: number;
  extraHourRate: number;
  nightCharge6to11: number;
  nightChargeAfter12: number;
  northGoaTour: number;
  southGoaTour: number;
   location?: string;
}

export const cars: CarType[] = [
  {
    id: 1,
    name: 'Maruti Swift',
    type: 'Hatchback',
    price: '₹1200/day',
    seats: 5,
    luggage: 2,
    transmission: 'Manual',
    fuel: 'Petrol',
    mileage: '20 km/l',
    features: ['AC', 'Power Steering', 'Music System'],
    image: 'https://images.pexels.com/photos/13425040/pexels-photo-13425040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 1200,
    extraKmRate: 18,
    extraHourRate: 200,
    nightCharge6to11: 300,
    nightChargeAfter12: 500,
    northGoaTour: 2000,
    southGoaTour: 2500,
  },
  {
    id: 2,
    name: 'Hyundai i20',
    type: 'Hatchback',
    price: '₹1400/day',
    seats: 5,
    luggage: 2,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '18 km/l',
    features: ['AC', 'Power Steering', 'Touchscreen'],
    image: 'https://images.pexels.com/photos/13425040/pexels-photo-13425040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 1400,
    extraKmRate: 20,
    extraHourRate: 220,
    nightCharge6to11: 350,
    nightChargeAfter12: 550,
    northGoaTour: 2100,
    southGoaTour: 2600,
  },
  {
    id: 3,
    name: 'Toyota Etios',
    type: 'Sedan',
    price: '₹1600/day',
    seats: 5,
    luggage: 3,
    transmission: 'Manual',
    fuel: 'Diesel',
    mileage: '22 km/l',
    features: ['AC', 'Power Steering', 'Airbags'],
    image: 'https://images.pexels.com/photos/13425040/pexels-photo-13425040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 1600,
    extraKmRate: 22,
    extraHourRate: 250,
    nightCharge6to11: 400,
    nightChargeAfter12: 600,
    northGoaTour: 2200,
    southGoaTour: 2700,
  },
  {
    id: 4,
    name: 'Mahindra Scorpio',
    type: 'SUV',
    price: '₹2500/day',
    seats: 7,
    luggage: 4,
    transmission: 'Manual',
    fuel: 'Diesel',
    mileage: '15 km/l',
    features: ['AC', '4WD', 'Touchscreen'],
    image: 'https://images.pexels.com/photos/13425040/pexels-photo-13425040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 2500,
    extraKmRate: 25,
    extraHourRate: 300,
    nightCharge6to11: 500,
    nightChargeAfter12: 700,
    northGoaTour: 2500,
    southGoaTour: 3000,
  },
];


