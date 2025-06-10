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
        h1 {
          padding: 2vh 0 3vh 0;
          color: #434C57;
          line-height: 1.3;
          font-size: 40px;
          font-family: 'Amatic SC', cursive;
          letter-spacing: 2px;
          padding-bottom: 30px;
        }
        
        .section-eight {
          padding: 40px 0 0px 0;
          margin-top: 130px;
          position: relative;
        }
        
        .op-eight-section {
          position: relative;
        }
        
        .ocean-2 {
          height: 5%;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #015871;
        }
        
        .wave-2 {
          background: url(data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='3' ry='3' stroke='%23333' stroke-width='1' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e) repeat-x;
          position: absolute;
          top: -198px;
          width: 6400px;
          height: 198px;
          animation: wave 7s cubic-bezier(.36,.45,.63,.53) infinite;
          transform: translate3d(0, 0, 0);
        }
        
        .wave-2:nth-of-type(2) {
          top: -196px;
          animation: wave 7s cubic-bezier(.36,.45,.63,.53) -.125s infinite, swell 7s ease -1.25s infinite;
          opacity: 1;
        }
        
        @keyframes wave {
          0% {
            margin-left: 0;
          }
          100% {
            margin-left: -1600px;
          }
        }
        
        @keyframes swell {
          0%, 100% {
            transform: translate3d(0,-25px,0);
          }
          50% {
            transform: translate3d(0,5px,0);
          }
        }
        
        .sec-eight-text-area {
          text-align: center;
          padding: 100px 0 240px;
        }
        
        .sec-eight-text-area img {
          padding: 2vh 0;
        }
        
        .sec-eight-text-area h1 {
          padding: 2vh 0 3vh 0;
          color: #434C57;
          line-height: 1.3;
          font-size: 40px;
          font-family: 'Amatic SC', cursive;
          letter-spacing: 2px;
          padding-bottom: 30px;
        }
        
        .sec-eight-text-area p {
          padding: 2vh 0;
          font-size: 14px;
          line-height: 1.6;
          color: #434C57;
          font-family: 'Maven Pro', sans-serif;
        }
        
        .container-pe-quote {
          position: absolute;
          height: 100%;
          top: 0px;
          z-index: 1;
        }
        
        .container-pe-quote.left {
          left: 0px;
        }
        
        .container-pe-quote.right {
          right: 0px;
        }
        
        .pp-quote {
          cursor: pointer;
          position: absolute;
          border-radius: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          animation-name: floating;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          transform-origin: 50% 1px;
          opacity: 1;
          transition: all 2s ease;
        }
        
        .pp-quote img {
          overflow: hidden;
          border-radius: 100%;
          height: 100%;
          width: 100%;
          position: relative;
          z-index: 1;
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
        
        .li-quote-1 {
          height: 104px;
          width: 104px;
          left: 15px;
          top: 95px;
          animation-duration: 10s;
          transition-delay: 0.6s;
        }
        
        .li-quote-2 {
          height: 63px;
          width: 63px;
          left: 120px;
          top: 270px;
          animation-duration: 12s;
          transition-delay: 0s;
        }
        
        .li-quote-3 {
          height: 64px;
          width: 64px;
          left: 68px;
          top: 380px;
          animation-duration: 6s;
          transition-delay: 0.2s;
        }
        
        .li-quote-4 {
          height: 73px;
          width: 73px;
          right: -15px;
          top: 110px;
          animation-duration: 5s;
          transition-delay: 0.7s;
        }
        
        .li-quote-5 {
          height: 73px;
          width: 73px;
          right: 28px;
          top: 265px;
          animation-duration: 8s;
          transition-delay: 0.4s;
        }
        
        .li-quote-6 {
          height: 45px;
          width: 45px;
          right: 108px;
          top: 170px;
          animation-duration: 7s;
          transition-delay: 0.2s;
        }
        
        .li-quote-7 {
          height: 48px;
          width: 48px;
          right: 40px;
          top: 414px;
          animation-duration: 7s;
          transition-delay: 0.3s;
        }
        
        @keyframes floating {
          0% {
            transform: rotate(0deg) translate(-10px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translate(-10px) rotate(-360deg);
          }
        }
        
        .container-quote {
          position: relative;
          width: 100%;
          margin-top: 10px;
          height: 135px;
          perspective: 10000px;
        }
        
        .quote {
          max-width: 520px;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0px;
          left: 50%;
          cursor: pointer;
          text-align: center;
          transform: translateX(-50%);
          transition: all 1s cubic-bezier(0.5, -0.01, 0, 1.005);
        }
        
        .quote.hide-bottom {
          opacity: 0;
          transform: translateX(-50%) translateY(100%) rotateX(-70deg);
        }
        
        .quote.hide-top {
          opacity: 0;
          transform: translateX(-50%) translateY(-100%) rotateX(70deg);
        }
        
        .quote.show {
          opacity: 1;
          transform: translateX(-50%) translateY(0%) rotateX(0deg);
        }
        
        .container-dp-name {
          position: relative;
          width: 100%;
          margin-top: 10px;
          height: 225px;
          perspective: 10000px;
          text-align: center;
        }
        
        .box-dpname {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0px;
          left: 0;
          cursor: pointer;
          text-align: center;
          transition: all 1s cubic-bezier(0.5, -0.01, 0, 1.005);
        }
        
        .box-dpname.hide-dp-bottom {
          opacity: 0;
          transform: translateX(0%) translateY(100%) rotateX(-70deg);
        }
        
        .box-dpname.hide-dp-top {
          opacity: 0;
          transform: translateX(0%) translateY(-100%) rotateX(70deg);
        }
        
        .box-dpname.look {
          opacity: 1;
          transform: translateX(0%) translateY(0%) rotateX(0deg);
        }
        
        @media screen and (max-width: 767px) {
          .sec-eight-text-area {
            padding: 10px 0 10px 0;
          }
          .container-pe-quote {
            position: relative;
            height: 500px;
            top: 0px;
            z-index: 1;
            max-width: 300px;
            margin: -70px auto 0;
          }
        }
        
        @media screen and (max-width: 480px) {
          .li-quote-2 {
            left: 60px;
            top: 270px;
          }
          .li-quote-6 {
            right: 100px;
            top: 179px;
          }
          .li-quote-3 {
            left: 0;
          }
          .container-quote {
            height: 205px;
            overflow: hidden;
            overflow-y: auto;
          }
          .sec-eight-text-area {
            padding: 10px 0 100px 0;
          }
        }
      `}</style>

      <section className="op-section op-eight-section section" id="section5">
      
        
        <div className="section-eight">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Left floating images */}
              <div className="w-full md:w-1/4 px-4">
                <div className="container-pe-quote left">
                  <div 
                    className={`pp-quote li-quote-1 ${activeQuote === 1 ? 'active' : ''}`}
                    onClick={() => handleQuoteClick(1)}
                  >
                    <img src={testimonials[0].image} alt="" />
                  </div>
                  <div 
                    className={`pp-quote li-quote-2 ${activeQuote === 2 ? 'active' : ''}`}
                    onClick={() => handleQuoteClick(2)}
                  >
                    <img src={testimonials[1].image} alt="" />
                  </div>
                  <div 
                    className={`pp-quote li-quote-3 ${activeQuote === 3 ? 'active' : ''}`}
                    onClick={() => handleQuoteClick(3)}
                  >
                    <img src={testimonials[2].image} alt="" />
                  </div>
                </div>
              </div>

              {/* Center content */}
              <div className="w-full md:w-1/2 px-4">
                <div className="sec-eight-text-area">
                  {/* Profile name section */}
                  <div className="container-dp-name">
                    {testimonials.map((testimonial) => (
                      <div 
                        key={`dp-${testimonial.id}`}
                        className={`box-dpname dp-name-${testimonial.id} ${
                          activeQuote === testimonial.id ? 'look' : 
                          testimonial.id === 4 ? 'hide-dp-bottom' : 'hide-dp-top'
                        }`}
                      >
                        <img src={testimonial.image} alt="" />
                        <h1>{testimonial.name}</h1>
                      </div>
                    ))}
                  </div>

                  {/* Quote section */}
                  <div className="container-quote">
                    {testimonials.map((testimonial) => (
                      <div 
                        key={`quote-${testimonial.id}`}
                        className={`quote quote-text-${testimonial.id} ${
                          activeQuote === testimonial.id ? 'show' : 
                          testimonial.id === 4 ? 'hide-bottom' : 'hide-top'
                        }`}
                      >
                        <img src="http://nanaetben.fr/animation/assets/images/website/quote.png" alt="" />
                        <p>{testimonial.quote}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right floating images */}
              <div className="w-full md:w-1/4 px-4">
                <div className="container-pe-quote right">
                  <div 
                    className={`pp-quote li-quote-4 ${activeQuote === 4 ? 'active' : ''}`}
                    onClick={() => handleQuoteClick(4)}
                  >
                    <img src={testimonials[3].image} alt="" />
                  </div>
                  <div 
                    className={`pp-quote li-quote-5 ${activeQuote === 5 ? 'active' : ''}`}
                    onClick={() => handleQuoteClick(5)}
                  >
                    <img src={testimonials[4].image} alt="" />
                  </div>
                  <div 
                    className={`pp-quote li-quote-6 ${activeQuote === 6 ? 'active' : ''}`}
                    onClick={() => handleQuoteClick(6)}
                  >
                    <img src={testimonials[5].image} alt="" />
                  </div>
                  <div 
                    className={`pp-quote li-quote-7 ${activeQuote === 7 ? 'active' : ''}`}
                    onClick={() => handleQuoteClick(7)}
                  >
                    <img src={testimonials[6].image} alt="" />
                  </div>
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