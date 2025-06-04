import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { locations } from '../data/locations';
import { MapPin } from 'lucide-react';

const LocationsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.to('.location-card', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
      });
    }
  }, [inView]);

  // Separate popular and non-popular locations
  const popularLocations = locations.filter(loc => loc.popular);
  const otherLocations = locations.filter(loc => !loc.popular);

  return (
    <section id="locations" ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We cover all of Goa's popular destinations. Book our services for pickup, drop, or rentals at these locations.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <MapPin className="h-5 w-5 text-accent-500 mr-2" /> Popular Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularLocations.map((location) => (
              <div
                key={location.id}
                className="location-card bg-white rounded-lg shadow-md overflow-hidden transform translate-y-8 opacity-0 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.imageUrl}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-heading font-semibold text-lg text-gray-900">
                      {location.name}
                    </h4>
                    <span className="bg-primary-50 text-primary-600 text-xs px-2 py-1 rounded">
                      {location.region}
                    </span>
                  </div>
                  <button
                    className="mt-4 w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-all"
                  >
                    See Services
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <MapPin className="h-5 w-5 text-primary-500 mr-2" /> Other Destinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherLocations.map((location) => (
              <div
                key={location.id}
                className="location-card bg-white rounded-lg shadow-sm p-4 transform translate-y-8 opacity-0 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-md overflow-hidden mr-3">
                    <img
                      src={location.imageUrl}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {location.name}
                    </h4>
                    <span className="text-sm text-primary-600">
                      {location.region}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your destination? We provide services across Goa, even to less frequented locations.
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-all hover:shadow-lg">
            Check Custom Locations
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;