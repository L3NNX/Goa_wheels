'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Car, MapPin } from 'lucide-react';

// Zod Schema
const bookingSchema = z.object({
  bookingType: z.enum(['pickup', 'rental']),
  pickupLocation: z.string().nonempty('Pickup location is required'),
  dropLocation: z.string().optional(),
  vehicleCategory: z.enum(['Car', 'Bike', 'Scooter']).optional(),
  date: z.string().nonempty('Date is required'),
  time: z.string().nonempty('Time is required'),
  rentalDuration: z.string().optional(),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm: React.FC = () => {
  const router = useRouter();
  const [bookingType, setBookingType] = useState<'pickup' | 'rental'>('pickup');

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      bookingType: 'pickup',
      vehicleCategory: 'Car',
      rentalDuration: '1',
    },
  });

  const vehicleCategory = watch('vehicleCategory');

  const onSubmit = (data: BookingFormData) => {
    console.log('Form Data:', data);

    if (data.bookingType === 'pickup') {
      router.push('/pickup-drop');
    } else {
      const routeMap: Record<string, string> = {
        Car: '/taxi-rental',
        Bike: '/selfdrive-rental',
        Scooter: '/bike-rental',
      };
      const route = routeMap[data.vehicleCategory || 'Car'];
      router.push(route);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Booking Type Toggle */}
      <div className="flex space-x-2 mb-6">
        <button
          type="button"
          onClick={() => {
            setBookingType('pickup');
          }}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${bookingType === 'pickup'
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Pickup & Drop
        </button>
        <button
          type="button"
          onClick={() => {
            setBookingType('rental');
          }}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${bookingType === 'rental'
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Vehicle Rental
        </button>
      </div>

      <input type="hidden" {...register('bookingType')} value={bookingType} />

      {/* Pickup Location */}
      <div>
        <label className="block text-sm font-medium mb-1">Pickup Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <select
            className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm"
            {...register('pickupLocation')}
          >
            <option value="">Select pickup location</option>
            <option value="calangute">Calangute Beach</option>
            <option value="baga">Baga Beach</option>
            <option value="panjim">Panjim City</option>
            <option value="airport">Goa Airport</option>
            <option value="margao">Margao Station</option>
          </select>
        </div>
        {errors.pickupLocation && <p className="text-red-500 text-sm">{errors.pickupLocation.message}</p>}
      </div>

      {/* Drop Location (only for pickup) */}
      {bookingType === 'pickup' && (
        <div>
          <label className="block text-sm font-medium mb-1">Drop Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm" {...register('dropLocation')}>
              <option value="">Select drop location</option>
              <option value="calangute">Calangute Beach</option>
              <option value="baga">Baga Beach</option>
              <option value="panjim">Panjim City</option>
              <option value="airport">Goa Airport</option>
              <option value="margao">Margao Station</option>
            </select>
          </div>
        </div>
      )}

      {/* Vehicle Category (only for rental) */}
      {bookingType === 'rental' && (
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Type</label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select className="w-full pl-10 pr-4 py-3 border rounded-lg text-sm" {...register('vehicleCategory')}>
              <option value="Car">Taxi Rental</option>
              <option value="Bike">Self Drive</option>
              <option value="Scooter">Bike Rental</option>
            </select>
          </div>
        </div>
      )}

          <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input type="date" className="w-full px-3 py-3 border rounded-lg text-sm" {...register('date')} />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input type="time" className="w-full px-3 py-3 border rounded-lg text-sm" {...register('time')} />
          {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
        </div>
      </div>

      {/* Rental Duration (only for rental) */}
      {bookingType === 'rental' && (
        <div>
          <label className="block text-sm font-medium mb-1">Rental Duration</label>
          <select className="w-full px-3 py-3 border rounded-lg text-sm" {...register('rentalDuration')}>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} {i + 1 === 1 ? 'Day' : 'Days'}</option>
            ))}
          </select>
        </div>
      )}

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          placeholder="Your contact number"
          className="w-full px-3 py-3 border rounded-lg text-sm"
          {...register('phoneNumber')}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 rounded-lg transition-all text-sm"
      >
        {bookingType === 'pickup' ? 'Book Pickup & Drop - Get Quote' : 'Book Vehicle Rental - Get Quote'}
      </button>
    </form>
  );
};

export default BookingForm;
