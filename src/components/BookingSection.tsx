import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Calendar, Clock, MapPin, Car, X } from 'lucide-react';

type BookingType = 'pickup' | 'rental';
type VehicleCategory = 'Car' | 'Bike' | 'Scooter' | 'Premium';

const BookingSection: React.FC = () => {
  const [bookingType, setBookingType] = useState<BookingType>('pickup');
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>('Car');
  const [showSuccess, setShowSuccess] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.from('.booking-element', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [inView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="book-now" ref={ref} className="py-20">
      <div className="contcontainer-customainer mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 booking-element">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Goa Adventure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick and easy booking for your transport needs in Goa. Select your service type, provide details, and we'll take care of the rest.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden booking-element">
            <div className="flex flex-col md:flex-row">
              {/* Booking Form */}
              <div className="md:w-2/3 p-6 md:p-8">
                {showSuccess && (
                  <div className="bg-success-50 text-success-700 px-4 py-3 rounded-md mb-6 flex justify-between items-center">
                    <span>Booking request submitted successfully! We'll contact you shortly.</span>
                    <button onClick={() => setShowSuccess(false)}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}

                <div className="flex space-x-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setBookingType('pickup')}
                    className={`flex-1 py-3 rounded-md transition-all ${bookingType === 'pickup'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    Pickup & Drop
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('rental')}
                    className={`flex-1 py-3 rounded-md transition-all ${bookingType === 'rental'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    Vehicle Rental
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {bookingType === 'pickup' ? 'Pickup Location' : 'Pickup Location'}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <select className="bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                          <option value="">Select location</option>
                          <option value="calangute">Calangute</option>
                          <option value="baga">Baga</option>
                          <option value="panjim">Panjim</option>
                          <option value="airport">Goa Airport</option>
                          <option value="margao">Margao</option>
                        </select>
                      </div>
                    </div>

                    {bookingType === 'pickup' ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Drop Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <select className="bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                            <option value="">Select location</option>
                            <option value="calangute">Calangute</option>
                            <option value="baga">Baga</option>
                            <option value="panjim">Panjim</option>
                            <option value="airport">Goa Airport</option>
                            <option value="margao">Margao</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vehicle Type
                        </label>
                        <div className="relative">
                          <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <select
                            className="bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={vehicleCategory}
                            onChange={(e) => setVehicleCategory(e.target.value as VehicleCategory)}
                          >
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Scooter">Scooter</option>
                            <option value="Premium">Premium</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="date"
                          className="bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="time"
                          className="bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                  </div>

                  {bookingType === 'rental' && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rental Duration
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <select className="bg-gray-50 border border-gray-200 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                        <div>
                          <select className="bg-gray-50 border border-gray-200 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="bg-gray-50 border border-gray-200 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Your contact number"
                        className="bg-gray-50 border border-gray-200 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      placeholder="Any special requirements or requests"
                      rows={3}
                      className="bg-gray-50 border border-gray-200 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent-400 hover:bg-accent-500 text-white font-medium py-3 rounded-md transition-all hover:shadow-lg"
                  >
                    Book Now
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="md:w-1/3 bg-primary-700 text-white p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold mb-6">
                  Booking Information
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-secondary-300 mb-1">
                      {bookingType === 'pickup' ? 'Pickup & Drop Service' : 'Vehicle Rental'}
                    </h4>
                    <p className="text-sm opacity-90">
                      {bookingType === 'pickup'
                        ? 'Our comfortable and reliable pickup and drop service across Goa.'
                        : `Rent a ${vehicleCategory.toLowerCase()} and explore Goa at your own pace.`}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-secondary-300 mb-1">
                      Payment Options
                    </h4>
                    <p className="text-sm opacity-90">
                      Pay online or cash on pickup. No hidden charges.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-secondary-300 mb-1">
                      Cancellation Policy
                    </h4>
                    <p className="text-sm opacity-90">
                      Free cancellation up to 24 hours before your scheduled service.
                    </p>
                  </div>
                </div>

                <div className="border-t border-primary-600 pt-6 mb-6">
                  <h4 className="text-sm font-medium text-secondary-300 mb-3">
                    Need Assistance?
                  </h4>
                  <a href="tel:+918001234567" className="block text-white hover:text-secondary-300 transition-colors mb-2">
                    +91 800 123 4567
                  </a>
                  <a href="mailto:bookings@goawheels.com" className="block text-white hover:text-secondary-300 transition-colors">
                    bookings@goawheels.com
                  </a>
                </div>

                <div className="bg-primary-800 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium mb-2">Promotional Code</p>
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="bg-primary-900 border border-primary-600 rounded-md py-2 px-4 w-full text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-300 text-center mb-2"
                  />
                  <button
                    type="button"
                    className="text-xs text-secondary-300 hover:text-secondary-200 transition-colors"
                  >
                    Apply Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;