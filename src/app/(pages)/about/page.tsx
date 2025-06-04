'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Award, Clock, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.from('.about-animate', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-section',
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
        <section className="about-section relative py-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 about-animate">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About GoaWheels
              </h1>
              <p className="text-lg text-gray-600">
                Your trusted partner for premium transport services in Goa since 2015.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="about-animate">
                <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Starting with just a few vehicles and a vision to transform Goa's transport
                  services, we've grown into a trusted name in the industry. Our journey has
                  been defined by our commitment to excellence and customer satisfaction.
                </p>
                <p className="text-gray-600">
                  Today, we serve thousands of happy customers annually, providing them with
                  memorable experiences and reliable transport solutions across Goa.
                </p>
              </div>

              <div className="about-animate">
                <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6">
                  To provide exceptional transport services that enhance our customers'
                  Goa experience, combining reliability, comfort, and local expertise.
                </p>
                <p className="text-gray-600">
                  We strive to be the most trusted name in Goa's transport sector,
                  setting industry standards for service quality and customer care.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover about-animate">
                <Users className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  50K+ Customers
                </h3>
                <p className="text-gray-600">
                  Serving thousands of satisfied customers every year
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md card-hover about-animate">
                <Award className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  Top Rated
                </h3>
                <p className="text-gray-600">
                  Consistently rated 4.8+ stars by our customers
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md card-hover about-animate">
                <Clock className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  24/7 Service
                </h3>
                <p className="text-gray-600">
                  Available round the clock for your convenience
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md card-hover about-animate">
                <Shield className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  Safe & Secure
                </h3>
                <p className="text-gray-600">
                  Fully insured and safety-certified vehicles
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}