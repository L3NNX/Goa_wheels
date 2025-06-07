"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Clock, Star, MapPin, Phone, Shield, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TaxiVehicle {
  id: number;
  name: string;
  type: string;
  image: string;
  seats: number;
  luggage: number;
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  features: string[];
  available: boolean;
}

const taxiFleet: TaxiVehicle[] = [
  {
    id: 1,
    name: 'Maruti Swift Dzire',
    type: 'Sedan',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    seats: 4,
    luggage: 2,
    hourlyRate: 250,
    dailyRate: 2000,
    weeklyRate: 12000,
    features: ['AC', 'GPS', 'Professional Driver', 'Fuel Included'],
    available: true
  },
  {
    id: 2,
    name: 'Toyota Innova',
    type: 'SUV',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    seats: 7,
    luggage: 4,
    hourlyRate: 400,
    dailyRate: 3200,
    weeklyRate: 19200,
    features: ['AC', 'GPS', 'Professional Driver', 'Spacious', 'Fuel Included'],
    available: true
  },
  {
    id: 3,
    name: 'Hyundai Xcent',
    type: 'Compact Sedan',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    seats: 4,
    luggage: 2,
    hourlyRate: 220,
    dailyRate: 1800,
    weeklyRate: 10800,
    features: ['AC', 'GPS', 'Professional Driver', 'Fuel Included'],
    available: true
  },
  {
    id: 4,
    name: 'Mahindra Scorpio',
    type: 'Large SUV',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    seats: 8,
    luggage: 5,
    hourlyRate: 450,
    dailyRate: 3600,
    weeklyRate: 21600,
    features: ['AC', 'GPS', 'Professional Driver', '4WD', 'Fuel Included'],
    available: true
  }
];

const TaxiRentalPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<TaxiVehicle | null>(null);
  const [rentalType, setRentalType] = useState<'hourly' | 'daily' | 'weekly'>('daily');
  const [duration, setDuration] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const calculatePrice = (vehicle: TaxiVehicle) => {
    switch (rentalType) {
      case 'hourly':
        return vehicle.hourlyRate * duration;
      case 'daily':
        return vehicle.dailyRate * duration;
      case 'weekly':
        return vehicle.weeklyRate * duration;
      default:
        return vehicle.dailyRate;
    }
  };

  const handleBookNow = (vehicle: TaxiVehicle) => {
    setSelectedVehicle(vehicle);
    setShowBookingForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white pt-32 pb-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 container-custom mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Taxi Services in Goa
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Travel in comfort with our professional drivers and well-maintained fleet. Perfect for sightseeing, business trips, and special occasions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
                <Shield className="h-5 w-5 mr-2 text-secondary-300" />
                <span>Licensed Drivers</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
                <CheckCircle className="h-5 w-5 mr-2 text-secondary-300" />
                <span>Fuel Included</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
                <Clock className="h-5 w-5 mr-2 text-secondary-300" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Calculate Your Rental Cost</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Rental Type</label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={rentalType}
                  onChange={(e) => setRentalType(e.target.value as 'hourly' | 'daily' | 'weekly')}
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <input
                  type="number"
                  min="1"
                  max={rentalType === 'hourly' ? 24 : rentalType === 'daily' ? 30 : 12}
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Taxi Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse fleet of well-maintained vehicles, each equipped with modern amenities and driven by professional chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {taxiFleet.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{vehicle.name}</h3>
                      <div className="flex items-center mt-1 text-yellow-500 text-sm">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-gray-400 ml-2">(4.8)</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-primary-500" />
                      {vehicle.seats} Passengers
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                      {vehicle.luggage} Luggage
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                      <div>
                        <div className="font-semibold text-primary-600">₹{vehicle.hourlyRate}</div>
                        <div className="text-gray-500">per hour</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary-600">₹{vehicle.dailyRate}</div>
                        <div className="text-gray-500">per day</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary-600">₹{vehicle.weeklyRate}</div>
                        <div className="text-gray-500">per week</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600 mb-2">
                        ₹{calculatePrice(vehicle)} for {duration} {rentalType.slice(0, -2)}{duration > 1 ? 's' : ''}
                      </div>
                      <button
                        onClick={() => handleBookNow(vehicle)}
                        className="w-full bg-accent-400 hover:bg-accent-500 text-white px-4 py-2 rounded-md font-medium transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Book Your Taxi</h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Pick-up Location</label>
                    <input
                      type="text"
                      placeholder="Enter pick-up address"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Drop-off Location</label>
                    <input
                      type="text"
                      placeholder="Enter drop-off address"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Pick-up Date</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pick-up Time</label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Passengers</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2">
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5">5+ Passengers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vehicle Preference</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2">
                      <option value="">Any Vehicle</option>
                      {taxiFleet.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {vehicle.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Requirements</label>
                  <textarea
                    placeholder="Any special requests or requirements"
                    rows={3}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-accent-400 hover:bg-accent-500 text-white px-4 py-2 rounded-md font-medium"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Customer Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                rating: 5,
                comment: "Excellent service! The driver was punctual and very professional. The car was clean and comfortable.",
                location: "Mumbai"
              },
              {
                name: "John Wilson",
                rating: 5,
                comment: "Used their taxi service for a week-long trip. Great experience throughout. Highly recommended!",
                location: "London"
              },
              {
                name: "Rajesh Kumar",
                rating: 4,
                comment: "Good value for money. The booking process was smooth and the driver knew all the local attractions.",
                location: "Delhi"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({review.rating}.0)</span>
                </div>
                <p className="text-gray-700 mb-4">"{review.comment}"</p>
                <div className="text-sm">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-gray-500">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-primary-700 text-white">
        <div className="container-custom mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Booking?</h2>
          <p className="text-lg mb-8">Our customer service team is available 24/7 to assist you</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="tel:+918001234567" className="flex items-center text-lg hover:text-secondary-300">
              <Phone className="h-6 w-6 mr-2" />
              +91 800 123 4567
            </a>
            <a href="mailto:taxi@goawheels.com" className="flex items-center text-lg hover:text-secondary-300">
              <MapPin className="h-6 w-6 mr-2" />
              taxi@goawheels.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaxiRentalPage;