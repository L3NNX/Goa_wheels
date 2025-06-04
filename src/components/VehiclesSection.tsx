import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { vehicles } from '../data/vehicles';
import { Check, Calendar, Clock } from 'lucide-react';

type FilterType = 'All' | 'Car' | 'Bike' | 'Scooter' | 'Premium';

const VehiclesSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredVehicles = filter === 'All' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === filter);

  useEffect(() => {
    if (inView) {
      gsap.to('.vehicle-card', {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.4)',
      });
    }
  }, [inView]);

  useEffect(() => {
    // Animation when filter changes
    gsap.fromTo(
      '.vehicle-card',
      { 
        scale: 0.9, 
        opacity: 0.5 
      },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.05, 
        duration: 0.4, 
        ease: 'power2.out' 
      }
    );
  }, [filter]);

  return (
    <section id="vehicles" ref={ref} className="py-20">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles to explore Goa in style and comfort.
          </p>
          
          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {(['All', 'Car', 'Bike', 'Scooter', 'Premium'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === type
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="vehicle-card bg-white rounded-lg shadow-md overflow-hidden transform scale-95 opacity-0 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {vehicle.type}
                </div>
                {!vehicle.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-error-500 text-white px-4 py-2 rounded-md font-medium">
                      Currently Unavailable
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-primary-600 mr-1" />
                    <span className="text-primary-600 font-medium">
                      ₹{vehicle.pricePerDay}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      /day
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-primary-600 mr-1" />
                    <span className="text-primary-600 font-medium">
                      ₹{vehicle.pricePerHour}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      /hour
                    </span>
                  </div>
                </div>
                
                {vehicle.seats && (
                  <div className="mb-3 text-gray-600">
                    Seats: <span className="font-medium">{vehicle.seats}</span>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-success-500 mr-1" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  className={`w-full py-2 rounded-md transition-all ${
                    vehicle.available
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!vehicle.available}
                >
                  {vehicle.available ? 'Book Now' : 'Not Available'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;