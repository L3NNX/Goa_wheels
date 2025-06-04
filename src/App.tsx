import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import VehiclesSection from './components/VehiclesSection';
import LocationsSection from './components/LocationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });

    // Initialize scroll animations
    ScrollTrigger.batch('.scroll-fade-in', {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      }),
      start: 'top 85%',
      once: true
    });

    return () => {
      // Cleanup scroll trigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <HeroSection />
      <ServicesSection />
      <VehiclesSection />
      <LocationsSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;