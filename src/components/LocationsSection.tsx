import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';
import { locations } from '../data/locations';
import { LocationType } from '../types';


const LocationsSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const mapContainerClass = "w-full h-[400px] rounded-xl shadow-card border-0";
const getIframeSrc = (loc: typeof locations[0]) => {
    if (loc.iframeSrc) return loc.iframeSrc;
    return `https://maps.google.com/maps?q=${loc.coordinates.lat},${loc.coordinates.lng}&z=15&output=embed`;
  };
  return (
    <section id="locations" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
         <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Service Locations
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our extensive coverage across Goa. Whether you're heading to popular beaches or hidden gems,
            we've got your transport needs covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <motion.div
            className="overflow-hidden rounded-xl shadow-card"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <iframe
              src={getIframeSrc(activeLocation)}
              className={mapContainerClass}
              loading="lazy"
              allowFullScreen
              title={`Map of ${activeLocation.name}`}
            />
          </motion.div>

                <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className={`card card-hover p-4 cursor-pointer ${
                  activeLocation.id === location.id ? 'border-2 border-primary-500' : ''
                }`}
                onClick={() => setActiveLocation(location)}
              >
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-lg overflow-hidden">
                    <img
                      src={location.imageUrl}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{location.name}</h3>
                    <p className="text-gray-600">{location.region}</p>
                    {location.popular && (
                      <span className="inline-block mt-1 text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                        Popular Destination
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="card p-6 shadow-md">
            <Navigation className="h-8 w-8 text-primary-500 mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">Coverage Area</h3>
            <p className="text-gray-600">
              We operate across all major locations in North and South Goa, ensuring comprehensive coverage.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-6 shadow-md">
            <Phone className="h-8 w-8 text-primary-500 mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is available round the clock to assist you with your transport needs.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-6 shadow-md">
            <Mail className="h-8 w-8 text-primary-500 mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Book your ride instantly through our website or contact our support team.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#book-now" 
            className="btn btn-primary"
          >
            Book Your Ride Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;