"use client"
import type React from "react"
import { Car, Phone, MapPin, Palmtree } from "lucide-react"

const CTASection: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-teal-50 to-orange-50">
      {/* Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-teal-100"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-center border border-white/20">

          <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Join Our Happy Customers 
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Experience top-rated taxi and rental services in Goa. Affordable prices, clean vehicles, and customer-first
            support await you!
          </p>

          {/* Stats or Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">500+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">100%</div>
              <div className="text-sm text-gray-500">Clean Vehicles</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#book-now"
              className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-md transition-all transform hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center gap-2 min-w-[160px]"
            >
              <Car className="h-5 w-5" />
              Book Now
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-teal-600 text-teal-700 bg-white hover:bg-teal-50 font-semibold px-8 py-4 rounded-md transition-all transform hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center gap-2 min-w-[160px]"
            >
              <Phone className="h-5 w-5" />
              Contact Us
            </a>
          </div>

        </div>
      </div>

    
    </section>
  )
}

export default CTASection
