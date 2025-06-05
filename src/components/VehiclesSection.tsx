'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { vehicles } from '../data/vehicles';
import { Check, Calendar, Clock } from 'lucide-react';

type FilterType = 'All' | 'Car' | 'Bike' | 'Scooter' | 'Premium';

const VehiclesSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredVehicles =
    filter === 'All' ? vehicles : vehicles.filter((v) => v.type === filter);

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
    gsap.fromTo(
      '.vehicle-card',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
      }
    );
  }, [filter]);

  return (
    <section id="vehicles" ref={ref} className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Vehicle Fleet</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Choose from a variety of vehicles to explore Goa comfortably and affordably.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {(['All', 'Car', 'Bike', 'Scooter', 'Premium'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`btn ${
                filter === type ? 'btn-primary' : 'btn-outline'
              } text-sm`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
             className="vehicle-card card scale-95 opacity-0 card-hover flex flex-col justify-between h-full"

            >
              <div className="relative h-60">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {vehicle.type}
                </div>
                {!vehicle.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-error-500 text-white px-4 py-2 rounded-md font-semibold text-sm">
                      Currently Unavailable
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {vehicle.name}
                </h3>

                <div className="flex justify-between text-sm mb-4 text-primary-700">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    ₹{vehicle.pricePerDay}
                    <span className="text-gray-500 ml-1">/day</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    ₹{vehicle.pricePerHour}
                    <span className="text-gray-500 ml-1">/hour</span>
                  </div>
                </div>

                {vehicle.seats && (
                  <div className="mb-2 text-sm text-gray-600">
                    Seats: <span className="font-semibold">{vehicle.seats}</span>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-4 h-4 text-success-500 mr-1" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  disabled={!vehicle.available}
                  className={`btn w-full text-sm ${
                    vehicle.available
                      ? 'btn-primary'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
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
