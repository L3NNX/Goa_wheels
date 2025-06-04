'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    gsap.from('.service-animate', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="services-section py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 service-animate">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-lg text-gray-600">
                Discover our comprehensive range of transport services designed to make
                your Goa experience memorable and hassle-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-animate bg-white rounded-lg shadow-md overflow-hidden card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-600 font-medium">
                        ₹{service.price} <span className="text-gray-500 text-sm">/{service.priceUnit}</span>
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium"
                      >
                        Book Now <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}