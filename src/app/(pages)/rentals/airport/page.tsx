"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Plane, Clock, Shield, Users, MapPin, Phone, CheckCircle, Star, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface AirportVehicle {
  id: number;
  name: string;
  type: string;
  image: string;
  seats: number;
  luggage: number;
  price: number;
  features: string[];
  suitable: string[];
}

interface Airport {
  id: number;
  name: string;
  code: string;
  location: string;
  distance: string;
  transferTime: string;
}

const airportFleet: AirportVehicle[] = [
  {
    id: 1,
    name: 'Maruti Swift Dzire',
    type: 'Sedan',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    seats: 4,
    luggage: 3,
    price: 1200,
    features: ['AC', 'GPS Tracking', 'Professional Driver', 'Meet & Greet'],
    suitable: ['Solo Travelers', 'Couples', 'Small Families']
  },
  {
    id: 2,
    name: 'Toyota Innova',
    type: 'SUV',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    seats: 7,
    luggage: 5,
    price: 1800,
    features: ['AC', 'GPS Tracking', 'Professional Driver', 'Extra Space', 'Meet & Greet'],
    suitable: ['Large Families', 'Groups', 'Business Travel']
  },
  {
    id: 3,
    name: 'Luxury Sedan',
    type: 'Premium',
    image: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg',
    seats: 4,
    luggage: 3,
    price: 2500,
    features: ['Luxury Interior', 'GPS Tracking', 'Chauffeur', 'Complimentary Water', 'Meet & Greet'],
    suitable: ['Business Executives', 'VIP Guests', 'Special Occasions']
  },
  {
    id: 4,
    name: 'Tempo Traveller',
    type: 'Mini Bus',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    seats: 12,
    luggage: 8,
    price: 3000,
    features: ['AC', 'GPS Tracking', 'Professional Driver', 'Group Seating', 'Meet & Greet'],
    suitable: ['Large Groups', 'Corporate Events', 'Wedding Parties']
  }
];

const supportedAirports: Airport[] = [
  {
    id: 1,
    name: 'Goa International Airport',
    code: 'GOI',
    location: 'Dabolim, Goa',
    distance: '30 km from Panaji',
    transferTime: '45-60 minutes'
  },
  {
    id: 2,
    name: 'Manohar International Airport',
    code: 'GOX',
    location: 'Mopa, North Goa',
    distance: '35 km from Panaji',
    transferTime: '50-70 minutes'
  }
];

const AirportTransferPage = () => {
  const [transferType, setTransferType] = useState<'pickup' | 'drop' | 'roundtrip'>('pickup');
  const [selectedVehicle, setSelectedVehicle] = useState<AirportVehicle | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(supportedAirports[0]);

  const calculatePrice = (vehicle: AirportVehicle) => {
    const basePrice = vehicle.price;
    switch (transferType) {
      case 'roundtrip':
        return basePrice * 1.8; // 10% discount for round trip
      case 'drop':
      case 'pickup':
      default:
        return basePrice;
    }
  };

  const handleBookNow = (vehicle: AirportVehicle) => {
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
          backgroundImage: "url('https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 container-custom mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reliable Airport Transfer Services
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Start your Goa journey stress-free with our professional airport transfer services. Pre-book for guaranteed pickup with flight tracking and meet & greet service.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
                <Plane className="h-5 w-5 mr-2 text-secondary-300" />
                <span>Flight Tracking</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
                <Shield className="h-5 w-5 mr-2 text-secondary-300" />
                <span>Meet & Greet</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
                <Clock className="h-5 w-5 mr-2 text-secondary-300" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Airport Transfer Booking</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Transfer Type</label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={transferType}
                  onChange={(e) => setTransferType(e.target.value as 'pickup' | 'drop' | 'roundtrip')}
                >
                  <option value="pickup">Airport Pickup</option>
                  <option value="drop">Airport Drop</option>
                  <option value="roundtrip">Round Trip</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Airport</label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  value={selectedAirport.id}
                  onChange={(e) => setSelectedAirport(supportedAirports.find(a => a.id === parseInt(e.target.value)) || supportedAirports[0])}
                >
                  {supportedAirports.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                      {airport.name} ({airport.code})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  Book Transfer
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Selected Airport Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-700">
                <div>
                  <strong>Location:</strong> {selectedAirport.location}
                </div>
                <div>
                  <strong>Distance:</strong> {selectedAirport.distance}
                </div>
                <div>
                  <strong>Transfer Time:</strong> {selectedAirport.transferTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Airport Transfer Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect vehicle for your airport transfer. All vehicles come with professional drivers and complimentary meet & greet service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {airportFleet.map((vehicle) => (
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
                        <span className="text-gray-400 ml-2">(4.9)</span>
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
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Included Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Perfect For</h4>
                    <div className="text-sm text-gray-600">
                      {vehicle.suitable.join(', ')}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-primary-600">
                          ₹{calculatePrice(vehicle)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {transferType === 'roundtrip' ? 'Round Trip' : 'One Way'}
                        </div>
                      </div>
                      <button
                        onClick={() => handleBookNow(vehicle)}
                        className="bg-accent-400 hover:bg-accent-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
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

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Airport Transfer?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Plane className="h-8 w-8 text-primary-500" />,
                title: "Flight Tracking",
                description: "We monitor your flight status and adjust pickup time accordingly for delays or early arrivals."
              },
              {
                icon: <Shield className="h-8 w-8 text-primary-500" />,
                title: "Meet & Greet",
                description: "Our driver will meet you at the arrival gate with a name board for easy identification."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary-500" />,
                title: "24/7 Service",
                description: "Available round the clock for early morning and late night flights. No extra charges."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary-500" />,
                title: "Fixed Pricing",
                description: "No surge pricing or hidden costs. Pay the quoted price regardless of traffic or delays."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Booking Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Book Online",
                  description: "Select your vehicle, enter flight details, and confirm your booking online."
                },
                {
                  step: "2",
                  title: "Confirmation",
                  description: "Receive instant confirmation with driver details and contact information."
                },
                {
                  step: "3",
                  title: "Flight Tracking",
                  description: "We track your flight and adjust pickup time for any delays or changes."
                },
                {
                  step: "4",
                  title: "Meet & Travel",
                  description: "Meet your driver at the designated point and enjoy a comfortable ride."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Book Airport Transfer</h3>
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
                    <label className="block text-sm font-medium mb-2">Transfer Type</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2">
                      <option value="pickup">Airport Pickup</option>
                      <option value="drop">Airport Drop</option>
                      <option value="roundtrip">Round Trip</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Airport</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2">
                      {supportedAirports.map((airport) => (
                        <option key={airport.id} value={airport.id}>
                          {airport.name} ({airport.code})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Flight Number</label>
                    <input
                      type="text"
                      placeholder="e.g., AI 123"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Arrival/Departure Date</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Arrival/Departure Time</label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
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
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Destination Address</label>
                  <input
                    type="text"
                    placeholder="Enter your hotel/destination address"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
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
                    placeholder="Child seats, wheelchair accessibility, extra luggage, etc."
                    rows={3}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  ></textarea>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Booking Summary</h4>
                  <div className="text-sm text-blue-700">
                    <div>Vehicle: {selectedVehicle?.name}</div>
                    <div>Transfer: {transferType === 'roundtrip' ? 'Round Trip' : 'One Way'}</div>
                    <div className="font-semibold mt-2">Total: ₹{selectedVehicle ? calculatePrice(selectedVehicle) : 0}</div>
                  </div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Airport Transfer Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Johnson",
                rating: 5,
                comment: "Perfect airport pickup! Driver was waiting with my name board and helped with luggage. Very professional service.",
                location: "New York",
                date: "2 weeks ago"
              },
              {
                name: "Anita Patel",
                rating: 5,
                comment: "Flight was delayed by 2 hours but the driver waited patiently. Excellent service and fair pricing.",
                location: "Mumbai",
                date: "1 month ago"
              },
              {
                name: "David Smith",
                rating: 4,
                comment: "Smooth booking process and reliable service. The vehicle was clean and comfortable. Highly recommended!",
                location: "London",
                date: "3 weeks ago"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
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

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How early should I book my airport transfer?",
                answer: "We recommend booking at least 24 hours in advance to guarantee availability. However, we also accept last-minute bookings subject to vehicle availability."
              },
              {
                question: "What if my flight is delayed or arrives early?",
                answer: "We track all flights automatically and adjust pickup times accordingly. Our drivers will wait for delayed flights at no extra charge for up to 60 minutes."
              },
              {
                question: "Where will the driver meet me at the airport?",
                answer: "For arrivals, our driver will meet you at the arrival gate with a name board. For departures, we'll pick you up from your specified location and drop you at the appropriate terminal."
              },
              {
                question: "Can I modify or cancel my booking?",
                answer: "Yes, you can modify or cancel your booking up to 4 hours before the scheduled pickup time without any charges. Cancellations within 4 hours may incur a 50% charge."
              },
              {
                question: "Are there any additional charges for luggage?",
                answer: "Standard luggage is included in the price. For oversized luggage or more than 2 bags per passenger, please inform us during booking as additional charges may apply."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-primary-700 text-white">
        <div className="container-custom mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg mb-8">Our airport transfer team is available 24/7 for bookings and support</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="tel:+918001234567" className="flex items-center text-lg hover:text-secondary-300">
              <Phone className="h-6 w-6 mr-2" />
              +91 800 123 4567
            </a>
            <a href="mailto:airport@goawheels.com" className="flex items-center text-lg hover:text-secondary-300">
              <Plane className="h-6 w-6 mr-2" />
              airport@goawheels.com
            </a>
          </div>
          
          <div className="mt-8">
            <button
              onClick={() => setShowBookingForm(true)}
              className="bg-accent-400 hover:bg-accent-500 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Book Airport Transfer Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AirportTransferPage;