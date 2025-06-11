import React, { useState } from 'react';

const TestimonialComponent = () => {
  const [activeQuote, setActiveQuote] = useState(7); // Default active quote is 7

  // Sample data - you can replace with your actual testimonials
  const testimonials = [
    {
      id: 1,
      name: "JOHN SMITH",
      image: "http://nanaetben.fr/animation/assets/images/website/Ben-1.png",
      quote: "Amazing experience with exceptional service and attention to detail. Highly recommended for anyone looking for quality."
    },
    {
      id: 2,
      name: "SARAH JOHNSON",
      image: "http://nanaetben.fr/animation/assets/images/website/Ben-2.png",
      quote: "Outstanding results that exceeded all expectations. The team was professional and delivered on time."
    },
    {
      id: 3,
      name: "MIKE WILSON",
      image: "http://nanaetben.fr/animation/assets/images/website/Ben-3.png",
      quote: "Incredible journey from start to finish. The support provided was comprehensive and truly valuable."
    },
    {
      id: 4,
      name: "EMMA DAVIS",
      image: "http://nanaetben.fr/animation/assets/images/website/Nana-4.png",
      quote: "Revolutionary approach that transformed our perspective completely. Couldn't be happier with the outcome."
    },
    {
      id: 5,
      name: "ALEX BROWN",
      image: "http://nanaetben.fr/animation/assets/images/website/Nana-2.png",
      quote: "Exceptional quality and service that goes above and beyond expectations. Worth every investment made."
    },
    {
      id: 6,
      name: "LISA TAYLOR",
      image: "http://nanaetben.fr/animation/assets/images/website/Nana-3.png",
      quote: "Fantastic experience with remarkable results. The attention to detail was impressive throughout the process."
    },
    {
      id: 7,
      name: "DAVID MARTINEZ",
      image: "http://nanaetben.fr/animation/assets/images/website/Nana-1.png",
      quote: "Perfect solution that delivered exactly what was promised. Professional service with outstanding communication."
    }
  ];

  // Group testimonials for left and right sides
  const leftSideTestimonials = testimonials.slice(0, 3); // First 3
  const rightSideTestimonials = testimonials.slice(3, 6); // Next 3
  const activeTestimonial = testimonials.find(t => t.id === activeQuote) || testimonials[6]; // Last one as default

  interface Testimonial {
    id: number;
    name: string;
    image: string;
    quote: string;
  }

  const handleQuoteClick = (id: number): void => {
    setActiveQuote(id);
  };

  return (
    <div>
      <style jsx>{`
        @keyframes wave {
          0% { margin-left: 0; }
          100% { margin-left: -1600px; }
        }
        
        @keyframes swell {
          0%, 100% { transform: translate3d(0,-25px,0); }
          50% { transform: translate3d(0,5px,0); }
        }
        
        @keyframes floating {
          0% { transform: rotate(0deg) translate(-10px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(-10px) rotate(-360deg); }
        }
        
        .wave-animation {
          background: url(data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='3' ry='3' stroke='%23333' stroke-width='1' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e) repeat-x;
          animation: wave 7s cubic-bezier(.36,.45,.63,.53) infinite;
          transform: translate3d(0, 0, 0);
        }
        
        .wave-animation:nth-of-type(2) {
          animation: wave 7s cubic-bezier(.36,.45,.63,.53) -.125s infinite, swell 7s ease -1.25s infinite;
        }
        
        .floating-1 { animation: floating 10s linear infinite; }
        .floating-2 { animation: floating 12s linear infinite; }
        .floating-3 { animation: floating 6s linear infinite; }
        .floating-4 { animation: floating 5s linear infinite; }
        .floating-5 { animation: floating 8s linear infinite; }
        .floating-6 { animation: floating 7s linear infinite; }
        .floating-7 { animation: floating 7s linear infinite; }
        
        .delay-0 { transition-delay: 0s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-600 { transition-delay: 0.6s; }
        .delay-700 { transition-delay: 0.7s; }
        
        .quote-hide-bottom {
          opacity: 0;
          transform: translateX(-50%) translateY(100%) rotateX(-70deg);
        }
        
        .quote-hide-top {
          opacity: 0;
          transform: translateX(-50%) translateY(-100%) rotateX(70deg);
        }
        
        .quote-show {
          opacity: 1;
          transform: translateX(-50%) translateY(0%) rotateX(0deg);
        }
        
        .dp-hide-bottom {
          opacity: 0;
          transform: translateX(0%) translateY(100%) rotateX(-70deg);
        }
        
        .dp-hide-top {
          opacity: 0;
          transform: translateX(0%) translateY(-100%) rotateX(70deg);
        }
        
        .dp-show {
          opacity: 1;
          transform: translateX(0%) translateY(0%) rotateX(0deg);
        }
        
        .pp-quote:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          height: calc(100% + 5px);
          width: calc(100% + 5px);
          border-radius: 100%;
          background-color: #7fb3e4;
          transform: translate(-50%, -50%) scale(0.9);
          transition: all .25s ease;
        }
        
        .pp-quote:hover:after,
        .pp-quote.active:after {
          transform: translate(-50%, -50%) scale(1);
        }

        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>

      <section className="relative" id="section5">
      
          <div className="mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Left floating images */}
              <div className="w-full md:w-1/4 px-4">
                <div className="absolute h-full top-0 left-0 z-10 md:relative md:h-[500px] md:max-w-[300px] md:mx-auto md:-mt-[70px]">
                  <div 
                    className={`pp-quote cursor-pointer absolute rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[2s] ease-in-out opacity-100 floating-1 delay-600 ${activeQuote === 1 ? 'active' : ''}`}
                    style={{
                      height: '104px',
                      width: '104px',
                      left: '15px',
                      top: '95px',
                      transformOrigin: '50% 1px'
                    }}
                    onClick={() => handleQuoteClick(1)}
                  >
                    <img src={testimonials[0].image} alt="" className="overflow-hidden rounded-full h-full w-full relative z-10" />
                  </div>
                  <div 
                    className={`pp-quote cursor-pointer absolute rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[2s] ease-in-out opacity-100 floating-2 delay-0 ${activeQuote === 2 ? 'active' : ''}`}
                    style={{
                      height: '63px',
                      width: '63px',
                      left: '120px',
                      top: '270px',
                      transformOrigin: '50% 1px'
                    }}
                    onClick={() => handleQuoteClick(2)}
                  >
                    <img src={testimonials[1].image} alt="" className="overflow-hidden rounded-full h-full w-full relative z-10" />
                  </div>
                  <div 
                    className={`pp-quote cursor-pointer absolute rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[2s] ease-in-out opacity-100 floating-3 delay-200 ${activeQuote === 3 ? 'active' : ''}`}
                    style={{
                      height: '64px',
                      width: '64px',
                      left: '68px',
                      top: '380px',
                      transformOrigin: '50% 1px'
                    }}
                    onClick={() => handleQuoteClick(3)}
                  >
                    <img src={testimonials[2].image} alt="" className="overflow-hidden rounded-full h-full w-full relative z-10" />
                  </div>
                </div>
              </div>

              {/* Center content */}
              <div className="w-full md:w-1/2 px-4">
                <div className="text-center">
                  {/* Profile name section */}
                  <div className="relative w-full mt-[10px] h-[225px] text-center" style={{ perspective: '10000px' }}>
                    {testimonials.map((testimonial) => (
                      <div 
                        key={`dp-${testimonial.id}`}
                        className={`w-full h-full absolute top-0 left-0 cursor-pointer text-center transition-all duration-1000 ease-[cubic-bezier(0.5,-0.01,0,1.005)] ${
                          activeQuote === testimonial.id ? 'dp-show' : 
                          testimonial.id === 4 ? 'dp-hide-bottom' : 'dp-hide-top'
                        }`}
                      >
                        <img src={testimonial.image} alt="" className="py-[2vh] mx-auto" />
                        <h1 className="py-[2vh] text-[#434C57] leading-[1.3] text-[40px] font-['Amatic_SC',cursive] tracking-[2px] pb-[30px]">
                          {testimonial.name}
                        </h1>
                      </div>
                    ))}
                  </div>

                  {/* Quote section */}
                  <div className="relative w-full mt-[10px] h-[135px] md:h-[205px] md:overflow-hidden md:overflow-y-auto scrollbar-hide" style={{ perspective: '10000px' }}>
                    {testimonials.map((testimonial) => (
                      <div 
                        key={`quote-${testimonial.id}`}
                        className={`max-w-[520px] w-full h-full absolute top-0 left-1/2 cursor-pointer text-center transition-all duration-1000 ease-[cubic-bezier(0.5,-0.01,0,1.005)] ${
                          activeQuote === testimonial.id ? 'quote-show' : 
                          testimonial.id === 4 ? 'quote-hide-bottom' : 'quote-hide-top'
                        }`}
                      >
                        <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="" className="py-[2vh] mx-auto" />
                        <p className="py-[2vh] text-[14px] leading-[1.6] text-[#434C57] font-['Maven_Pro',sans-serif]">
                          {testimonial.quote}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right floating images */}
              <div className="w-full md:w-1/4 px-4">
                <div className="absolute h-full top-0 right-0 z-10 md:relative md:h-[500px] md:max-w-[300px] md:mx-auto md:-mt-[70px]">
                  <div 
                    className={`pp-quote cursor-pointer absolute rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[2s] ease-in-out opacity-100 floating-4 delay-700 ${activeQuote === 4 ? 'active' : ''}`}
                    style={{
                      height: '73px',
                      width: '73px',
                      right: '-15px',
                      top: '110px',
                      transformOrigin: '50% 1px'
                    }}
                    onClick={() => handleQuoteClick(4)}
                  >
                    <img src={testimonials[3].image} alt="" className="overflow-hidden rounded-full h-full w-full relative z-10" />
                  </div>
                  <div 
                    className={`pp-quote cursor-pointer absolute rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[2s] ease-in-out opacity-100 floating-5 delay-400 ${activeQuote === 5 ? 'active' : ''}`}
                    style={{
                      height: '73px',
                      width: '73px',
                      right: '28px',
                      top: '265px',
                      transformOrigin: '50% 1px'
                    }}
                    onClick={() => handleQuoteClick(5)}
                  >
                    <img src={testimonials[4].image} alt="" className="overflow-hidden rounded-full h-full w-full relative z-10" />
                  </div>
                  <div 
                    className={`pp-quote cursor-pointer absolute rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[2s] ease-in-out opacity-100 floating-6 delay-200 ${activeQuote === 6 ? 'active' : ''}`}
                    style={{
                      height: '45px',
                      width: '45px',
                      right: '108px',
                      top: '170px',
                      transformOrigin: '50% 1px'
                    }}
                    onClick={() => handleQuoteClick(6)}
                  >
                    <img src={testimonials[5].image} alt="" className="overflow-hidden rounded-full h-full w-full relative z-10" />
                  </div>
                  <div 
                    className={`pp-quote cursor-pointer absolute rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[2s] ease-in-out opacity-100 floating-7 delay-300 ${activeQuote === 7 ? 'active' : ''}`}
                    style={{
                      height: '48px',
                      width: '48px',
                      right: '40px',
                      top: '414px',
                      transformOrigin: '50% 1px'
                    }}
                    onClick={() => handleQuoteClick(7)}
                  >
                    <img src={testimonials[6].image} alt="" className="overflow-hidden rounded-full h-full w-full relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
   
            
      </section>
    </div>
  );
};

export default TestimonialComponent;