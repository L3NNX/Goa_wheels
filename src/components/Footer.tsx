import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-7 w-7 text-accent-400" />
              <span className="ml-2 font-heading font-bold text-xl text-white">GoaWheels</span>
            </div>
            <p className="mb-6 text-sm text-gray-400">
              Premium pickup, drop, and rental services in Goa. Explore the beauty of Goa with comfort and style.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-accent-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-accent-400 transition-colors">Vehicle Fleet</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-accent-400 transition-colors">Service Locations</a>
              </li>
              <li>
                <a href="#book-now" className="hover:text-accent-400 transition-colors">Book Now</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">Airport Transfers</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">Car Rentals</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">Bike Rentals</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">Sightseeing Tours</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">Beach Hopping</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-400 transition-colors">Corporate Services</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <span>
                  123 Beach Road, Calangute,<br />
                  North Goa, India - 403516
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <a href="tel:+918001234567" className="hover:text-accent-400 transition-colors">
                  +91 800 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@goawheels.com" className="hover:text-accent-400 transition-colors">
                  info@goawheels.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium text-white text-sm mb-3">Business Hours</h4>
              <p className="text-sm text-gray-400">
                Open 24/7 for your convenience
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} GoaWheels. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-accent-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-accent-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-accent-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;