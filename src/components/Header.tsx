import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Car, MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center header-anim">
            <Car className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            <span className={`ml-2 font-heading font-bold text-xl ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
              GoaWheels
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`header-anim font-medium text-sm transition ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Our Services
            </a>
            <a href="#vehicles" className={`header-anim font-medium text-sm transition ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Vehicles
            </a>
            <a href="#locations" className={`header-anim font-medium text-sm transition ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Locations
            </a>
            <a href="#testimonials" className={`header-anim font-medium text-sm transition ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Testimonials
            </a>
            <a 
              href="#book-now" 
              className="header-anim bg-accent-400 hover:bg-accent-500 text-white font-medium px-4 py-2 rounded-md transition-all hover:shadow-lg"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-500 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg">
            <a href="#services" className="font-medium text-sm text-gray-700 hover:text-primary-600 transition" onClick={() => setIsMenuOpen(false)}>
              Our Services
            </a>
            <a href="#vehicles" className="font-medium text-sm text-gray-700 hover:text-primary-600 transition" onClick={() => setIsMenuOpen(false)}>
              Vehicles
            </a>
            <a href="#locations" className="font-medium text-sm text-gray-700 hover:text-primary-600 transition" onClick={() => setIsMenuOpen(false)}>
              Locations
            </a>
            <a href="#testimonials" className="font-medium text-sm text-gray-700 hover:text-primary-600 transition" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a 
              href="#book-now" 
              className="bg-accent-400 hover:bg-accent-500 text-white font-medium px-4 py-2 rounded-md text-center transition-all hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Quick contact bar */}
      <div className={`hidden lg:block bg-primary-700 text-white text-sm transition-all ${isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-6 py-1 flex justify-end items-center space-x-6">
          <a href="tel:+918001234567" className="flex items-center hover:text-secondary-300 transition">
            <Phone className="h-3 w-3 mr-1" /> +91 800 123 4567
          </a>
          <span className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" /> Multiple locations across Goa
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;