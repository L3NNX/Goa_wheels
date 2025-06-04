import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/85 to-primary-900/70"></div>
      
      <div className="container relative z-10">
        <div ref={contentRef} className="max-w-3xl hero-text text-white">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Explore Goa's Beauty <br/> 
            <span className="text-secondary-300">Your Way</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Premium pickup, drop, and rental services tailored to your needs. Experience the best of Goa with our reliable, comfortable, and affordable transport solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#book-now"
              className="bg-accent-400 hover:bg-accent-500 text-white font-medium px-6 py-3 rounded-md transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Book Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-md transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
              <MapPin className="h-5 w-5 mr-2 text-secondary-300" />
              <span>All Goa Coverage</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
              <span>Free Cancellation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;