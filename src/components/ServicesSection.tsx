import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { services } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
    <section id="services" ref={ref} className="py-24 bg-gray-50">
      <div className="container-custom mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Enjoy a stress-free experience in Goa with our reliable, stylish and flexible transportation solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white rounded-lg shadow-card transform translate-y-8 opacity-0 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 min-w-[300px] max-w-[340px] w-full"
            >
              <div className="h-52 rounded-t-lg overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-semibold text-base">
                    ₹{service.price}
                    <span className="text-sm text-gray-500"> /{service.priceUnit}</span>
                  </span>
                  <a
                    href="#book-now"
                    className="btn-primary hover:bg-accent-500 text-white font-medium px-2 py-1 rounded-sm transition-all hover:shadow-lg inline-flex items-center justify-center"
                  >
                    Book Now <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-24 bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-10 text-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-heading text-3xl text-white font-bold mb-6 leading-snug">
                Why Choose Us?
              </h3>
              <ul className="space-y-4 text-base">
                {[
                  'Experienced and professional drivers',
                  'Well-maintained and comfortable vehicles',
                  'Flexible booking options',
                  '24/7 customer support',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-secondary-400 mr-3 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-left">
              <a
                href="#book-now"
                className="inline-block w-full md:w-auto bg-accent-500 hover:bg-accent-600 transition-all text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-md"
              >
                Book Your Goa Adventure Now
              </a>
              <p className="mt-4 text-sm opacity-90 text-center md:text-left">
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
