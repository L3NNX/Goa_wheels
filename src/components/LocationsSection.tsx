import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight, X, Star, Phone } from 'lucide-react';
import { locations } from '../data/locations';

const ServicesSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<null | number>(null);
  const [hoveredCard, setHoveredCard] = useState<null | number>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const detailVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    },
    exit: { opacity: 0, x: 50 }
  };

  const getGridClass = (idx: number) => {
    // Create an asymmetrical bento grid layout
    if (idx === 0) return 'sm:col-span-2 sm:row-span-2';
    if (idx === 3) return 'sm:col-span-2';
    if (idx === 6) return 'sm:row-span-2';
    if (idx === 7) return 'sm:col-span-2';
    return '';
  };

  return (
    <section id="services" className="section bg-gradient-to-b from-white to-secondary-50 py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="section-title text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Service Locations
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our extensive coverage across Goa. Whether you're heading to popular beaches or hidden gems,
            we've got your transport needs covered.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {locations.map((location, idx) => (
            <motion.div 
              key={location.id}
              variants={cardVariants}
              whileHover="hover"
              className={`relative rounded-xl overflow-hidden cursor-pointer shadow-lg ${getGridClass(idx)}`}
              onClick={() => setSelectedLocation(idx)}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <img 
                src={location.imageUrl} 
                alt={location.name} 
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                variants={overlayVariants}
                initial="hidden"
                animate={hoveredCard === idx || selectedLocation === idx ? "visible" : "hidden"}
              />
              
              {/* Location Info */}
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <motion.div
                  animate={{
                    y: hoveredCard === idx || selectedLocation === idx ? 0 : 20,
                    opacity: hoveredCard === idx || selectedLocation === idx ? 1 : 0
                  }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-white font-semibold text-lg">{location.name}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {location.region}
                    </div>
                  </div>
                  {location.popular && (
                    <span className="flex items-center bg-yellow-500/90 text-white text-xs px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </span>
                  )}
                </motion.div>
              </div>
              
              {/* View Button */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  y: hoveredCard === idx || selectedLocation === idx ? 0 : 20,
                  opacity: hoveredCard === idx || selectedLocation === idx ? 1 : 0
                }}
              >
                <button className="bg-white/90 text-primary-600 p-2 rounded-full shadow-sm">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Details Modal */}
        <AnimatePresence>
          {selectedLocation !== null && (
            <motion.div 
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
            >
              <motion.div 
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                variants={detailVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full z-10"
                  onClick={() => setSelectedLocation(null)}
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
                
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-full">
                    <img
                      src={locations[selectedLocation].imageUrl}
                      alt={locations[selectedLocation].name}
                      className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                    />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex items-start mb-6">
                      <div className="bg-primary-100 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                          {locations[selectedLocation].name}
                        </h2>
                        <p className="text-gray-600">{locations[selectedLocation].region}</p>
                        {locations[selectedLocation].popular && (
                          <span className="inline-flex items-center mt-2 text-xs font-medium text-yellow-800 bg-yellow-100 px-2.5 py-1 rounded-full">
                            <Star className="h-3 w-3 mr-1" />
                            Popular Destination
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-900">Address</h3>
                          <p className="text-gray-600">{locations[selectedLocation].address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-900">Contact</h3>
                          <p className="text-gray-600">{locations[selectedLocation].phone || 'Not specified'}</p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <h3 className="font-medium text-gray-900 mb-2">About this location</h3>
                        <p className="text-gray-600">
                          {locations[selectedLocation].description || 
                           'This popular destination offers beautiful views and excellent services for our customers.'}
                        </p>
                      </div>
                    </div>
                    
                    <button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                      Book Service at This Location
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;