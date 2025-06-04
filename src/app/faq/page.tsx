'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type FAQCategory = 'all' | 'booking' | 'vehicles' | 'payment' | 'policies';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: FAQCategory;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do I book a vehicle?',
    answer: 'You can book a vehicle through our website by clicking the "Book Now" button, selecting your preferred vehicle and dates, and following the booking process. You can also call us directly for assistance.',
    category: 'booking'
  },
  {
    id: 2,
    question: 'What documents are required for booking?',
    answer: 'You\'ll need a valid driver\'s license, proof of identity (Passport/Aadhar), and a security deposit. For international customers, an international driving permit is required.',
    category: 'booking'
  },
  {
    id: 3,
    question: 'Do you provide airport pickup services?',
    answer: 'Yes, we offer airport pickup and drop services. You can book this service in advance through our website or by contacting our customer service.',
    category: 'booking'
  },
  {
    id: 4,
    question: 'What is your cancellation policy?',
    answer: 'We offer free cancellation up to 24 hours before your scheduled service. Cancellations within 24 hours may incur a charge of 50% of the booking amount.',
    category: 'policies'
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);


  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="faq-section relative py-20 ">
          <div className="container-custom mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 faq-animate">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our services, booking process, and policies.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="mb-8 faq-animate">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8 faq-animate">
                {(['all', 'booking', 'vehicles', 'payment', 'policies'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full capitalize transition-all ${
                      activeCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="faq-animate bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          openFAQ === faq.id ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`px-6 transition-all duration-200 ease-in-out ${
                        openFAQ === faq.id ? 'py-4' : 'py-0 h-0'
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-8 text-gray-600">
                  No FAQs found matching your criteria.
                </div>
              )}

              <div className="mt-12 text-center faq-animate">
                <p className="text-gray-600 mb-4">
                  Still have questions? We're here to help!
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}