import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Car, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRentalsOpen, setIsRentalsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    // Close on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsRentalsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md py-2' : 'bg-white/20 backdrop-blur-sm pt-4'
        }`}
    >
      <div className="container-custom mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center header-anim">
            <Car className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-primary-600'}`} />
            <span className={`ml-2 font-heading font-bold text-xl ${isScrolled ? 'text-primary-700' : 'text-primary-600'}`}>
              GoaWheels
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`header-anim font-medium text-sm transition ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-black hover:text-secondary-300'}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`header-anim font-medium text-sm transition ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-black hover:text-secondary-300'}`}
            >
              Services
            </Link>
            <Link
              href="/faq"
              className={`header-anim font-medium text-sm transition ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-black hover:text-secondary-300'}`}
            >
              FAQ
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsRentalsOpen(!isRentalsOpen)}
                className={`header-anim font-medium text-sm transition flex items-center ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-black hover:text-secondary-300'}`}
              >
                Rentals
                <ChevronDown
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isRentalsOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              {/* Dropdown menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transform transition-all duration-200 origin-top ${isRentalsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                  }`}
              >
                <Link
                  href="/rentals/taxi"
                  onClick={() => setIsRentalsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  Taxi Rental
                </Link>
                <Link
                  href="/rentals/self-drive"
                  onClick={() => setIsRentalsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  Self Drive Cars
                </Link>
                <Link
                  href="/rentals/airport"
                  onClick={() => setIsRentalsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  Airport Transfer
                </Link>
              </div>
            </div>

            <Link
              href="#book-now"
              className="header-anim bg-accent-400 hover:bg-accent-500 text-white font-medium px-4 py-2 rounded-md transition-all hover:shadow-lg"
            >
              Book Now
            </Link>
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
            <Link
              href="/about"
              className="font-medium text-sm text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="font-medium text-sm text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/faq"
              className="font-medium text-sm text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="font-medium text-sm text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#book-now"
              className="bg-accent-400 hover:bg-accent-500 text-white font-medium px-4 py-2 rounded-md text-center transition-all hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Quick contact bar */}
      <div className={`hidden lg:block bg-primary-700 text-white text-sm transition-all ${isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
        <div className="container-custom mx-auto px-8 py-1 mt-1 flex justify-end items-center space-x-6">
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