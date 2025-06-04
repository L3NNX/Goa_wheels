'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    gsap.from('.error-animate', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="error-animate mb-8">
          <h1 className="font-heading text-6xl font-bold text-primary-600 mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</p>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="error-animate flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}