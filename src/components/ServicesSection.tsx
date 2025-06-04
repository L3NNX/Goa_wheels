import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { services } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.to('.service-card', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [inView]);

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best of Goa with our range of premium transport services designed to make your trip memorable and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white rounded-lg shadow-md overflow-hidden transform opacity-0 translate-y-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-medium">
                    ₹{service.price} <span className="text-gray-500 text-sm">/{service.priceUnit}</span>
                  </span>
                  <a
                    href="#book-now"
                    className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium"
                  >
                    Book Now <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-700 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Why Choose Our Services?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-300 mr-2 mt-1" />
                  <span>Experienced and professional drivers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-300 mr-2 mt-1" />
                  <span>Well-maintained and comfortable vehicles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-300 mr-2 mt-1" />
                  <span>Flexible booking options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-300 mr-2 mt-1" />
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="#book-now"
                className="block w-full bg-accent-400 hover:bg-accent-500 text-white font-medium px-6 py-4 rounded-md transition-all hover:shadow-lg text-center"
              >
                Book Your Goa Adventure Now
              </a>
              <p className="mt-4 text-sm text-center opacity-90">
                Free cancellation up to 24 hours before your scheduled service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;