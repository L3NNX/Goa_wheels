import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { testimonials } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.from('.testimonial-element', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [inView]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Animation when testimonial changes
    gsap.fromTo(
      '.active-testimonial',
      { 
        opacity: 0,
        scale: 0.95
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      }
    );
  }, [activeIndex]);

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-primary-50">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12 testimonial-element">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their experience with GoaWheels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto testimonial-element">
          <div className="relative bg-white rounded-xl shadow-lg p-8 mb-10">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-primary-100 opacity-80" />
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`flex flex-col md:flex-row items-center gap-8 transition-opacity duration-300 ${
                  index === activeIndex ? 'active-testimonial block' : 'hidden'
                }`}
              >
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h4 className="font-medium text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
            
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full w-10 h-10 shadow flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full w-10 h-10 shadow flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-md py-4">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-2">
              Join Our Satisfied Customers
            </h3>
            <p className="text-gray-600">
              Experience the best transport service in Goa and create your own amazing memories.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#book-now"
              className="bg-accent-400 hover:bg-accent-500 text-white font-medium px-6 py-3 rounded-md transition-all hover:shadow-lg"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-all hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;