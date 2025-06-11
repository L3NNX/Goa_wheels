'use client';
import React, { useState } from 'react';
import { Car, MapPin } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [bookingType, setBookingType] = useState<'pickup' | 'rental'>('pickup');
  const [vehicleCategory, setVehicleCategory] = useState<'Car' | 'Bike' | 'Scooter' | 'Premium'>('Car');

  return (
    <form className="space-y-4">
      {/* Service Type Toggle */}
      <div className="flex space-x-2 mb-6">
        <button
          type="button"
          onClick={() => setBookingType('pickup')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${bookingType === 'pickup'
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Pickup & Drop
        </button>
        <button
          type="button"
          onClick={() => setBookingType('rental')}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${bookingType === 'rental'
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Vehicle Rental
        </button>
      </div>

      {/* Location Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm">
              <option value="">Select pickup location</option>
              <option value="calangute">Calangute Beach</option>
              <option value="baga">Baga Beach</option>
              <option value="panjim">Panjim City</option>
              <option value="airport">Goa Airport</option>
              <option value="margao">Margao Station</option>
            </select>
          </div>
        </div>

        {bookingType === 'pickup' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Drop Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm">
                <option value="">Select drop location</option>
                <option value="calangute">Calangute Beach</option>
                <option value="baga">Baga Beach</option>
                <option value="panjim">Panjim City</option>
                <option value="airport">Goa Airport</option>
                <option value="margao">Margao Station</option>
              </select>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Type
            </label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                value={vehicleCategory}
                onChange={(e) => setVehicleCategory(e.target.value as 'Car' | 'Bike' | 'Scooter' | 'Premium')}
              >
                <option value="Car">Taxi Rental</option>
                <option value="Bike">Self Drive</option>
                <option value="Scooter">Bike Rental</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <input
            type="time"
            className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>
      </div>

      {/* Rental Duration */}
      {bookingType === 'rental' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rental Duration
          </label>
          <div>
            <select className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm">
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i + 1 === 1 ? 'Day' : 'Days'}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}


      {/* Contact Info */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Your contact number"
          className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg text-sm"
      >
        Book Now - Get Instant Quote
      </button>

    </form>
  );
};

export default BookingForm;
