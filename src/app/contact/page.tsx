'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="contact-section relative py-20 ">
          <div className="container-custom mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 contact-animate">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-600">
                Have questions about our services? We're here to help 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="contact-animate">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>

              <div className="contact-animate">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Office Location</h3>
                        <p className="text-gray-600">
                          123 Beach Road, Calangute,<br />
                          North Goa, India - 403516
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+918001234567" className="hover:text-primary-600 transition-colors">
                            +91 800 123 4567
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@goawheels.com" className="hover:text-primary-600 transition-colors">
                            info@goawheels.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                      <p className="text-primary-600 font-medium">
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-primary-50 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Quick Response Promise</h3>
                  <p className="text-gray-600">
                    We aim to respond to all inquiries within 2 hours during business hours.
                    For urgent matters, please call our 24/7 support line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}