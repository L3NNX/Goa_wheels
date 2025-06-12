import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Car, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRentalsOpen, setIsRentalsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Close dropdown on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsRentalsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Contact Strip */}
      <div className={`bg-primary-700 text-white text-sm transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container-custom mx-auto px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+918001234567" className="flex items-center hover:text-secondary-300 transition-colors">
              <Phone className="h-3 w-3 mr-2" />
              +91 800 123 4567
            </a>
            <span className="hidden md:flex items-center">
              <MapPin className="h-3 w-3 mr-2" />
              Multiple locations across Goa
            </span>
          </div>
          <div className="hidden md:block text-xs">
            24/7 Customer Support Available
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white/10 backdrop-blur-sm py-4'
          }`}
      >
        <div className="container-custom mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center header-anim">
              <span className="h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  width={88}
                  height={88}
                  className={`transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}
                  style={{ objectFit: 'cover' }}
                />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/about"
                className={`font-medium text-sm transition-all duration-300 hover:scale-105 ${isScrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-secondary-300'
                  }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`font-medium text-sm transition-all duration-300 hover:scale-105 ${isScrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-secondary-300'
                  }`}
              >
                Services
              </Link>

              {/* Rentals Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsRentalsOpen(!isRentalsOpen)}
                  className={`font-medium text-sm transition-all duration-300 flex items-center hover:scale-105 ${isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-secondary-300'
                    }`}
                >
                  Rentals
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isRentalsOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-3 z-50 transform transition-all duration-300 origin-top ${isRentalsOpen
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                >
                  <Link
                    href="/rentals/taxi"
                    onClick={() => setIsRentalsOpen(false)}
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg mx-2"
                  >
                    <div className="font-medium">Taxi Rental</div>
                    <div className="text-xs text-gray-500">With professional driver</div>
                  </Link>
                  <Link
                    href="/rentals/self-drive"
                    onClick={() => setIsRentalsOpen(false)}
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg mx-2"
                  >
                    <div className="font-medium">Self Drive Cars</div>
                    <div className="text-xs text-gray-500">Explore at your own pace</div>
                  </Link>
                  <Link
                    href="/rentals/bike"
                    onClick={() => setIsRentalsOpen(false)}
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg mx-2"
                  >
                    <div className="font-medium">Bike Rental</div>
                    <div className="text-xs text-gray-500">Freedom on two wheels</div>
                  </Link>
                </div>
              </div>

              <Link
                href="/pickup-drop"
                className={`font-medium text-sm transition-all duration-300 hover:scale-105 ${isScrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-secondary-300'
                  }`}
              >
                Pickup & Drop
              </Link>

              {/* CTA Button */}
              <Link
                href="#book-now"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
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
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-6 space-y-4">
              <Link
                href="/about"
                className="block font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-700 py-2">Rentals</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/rentals/taxi"
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Taxi Rental
                  </Link>
                  <Link
                    href="/rentals/self-drive"
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Self Drive Cars
                  </Link>
                  <Link
                    href="/rentals/bike"
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bike Rental
                  </Link>
                </div>
              </div>
              <Link
                href="/pickup-drop"
                className="block font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pickup & Drop
              </Link>
              <Link
                href="#book-now"
                className="block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;