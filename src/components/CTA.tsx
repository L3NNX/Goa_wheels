// components/CTASection.tsx
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 via-primary-100 to-accent-100 rounded-xl shadow-lg p-8 text-center">
        <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
          Join Our Happy Customers
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Experience top-rated taxi and rental services in Goa. Affordable prices, clean vehicles, and customer-first support await you!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#book-now"
            className="bg-accent-400 hover:bg-accent-500 text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg"
          >
            Book Now
          </a>
          <a
            href="#contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;