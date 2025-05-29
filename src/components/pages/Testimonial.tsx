import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PersonalDetailsProfilePic from '../../assets/PersonalDetailsProfilePic.jpg';

// Consolidated all data and types in the main component file
interface TestimonialType {
  text: string;
  author: string;
  role: string;
  initial: string;
}

const testimonialData: TestimonialType[] = [
  {
    text: "CorporateBee has been a game-changer for my career. Their personalized approach helped me land my dream remote job!",
    author: "Gift Johnson",
    role: "Software Engineer",
    initial: "G"
  },
  {
    text: "Very convenient and easy consultation. I got a lot of knowledge in this new business I created. Thank you for making my business neatly organized.",
    author: "Anthony",
    role: "Founder and CEO", 
    initial: "A"
  },
  {
    text: "Very professional and dedicated team. They helped me find the right talent for my startup, and I couldn't be happier with the results.",
    author: "Timothy",
    role: "HR Manager",
    initial: "T"
  },
  {
    text: "CorporateBee's strategic insights transformed our business operations. Their expertise is unmatched!",
    author: "Sarah",
    role: "Operations Director",
    initial: "S"
  },
  {
    text: "Got the best HR policy suite from CorporateBee and it was a game changer for my organisation.",
    author: "Daniel",
    role: "HR Consultant",
    initial: "D"
  }
];

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate previous and next indices with proper wrapping
  const prevIndex = useMemo(() => 
    (activeIndex - 1 + testimonialData.length) % testimonialData.length, 
    [activeIndex]
  );
  
  const nextIndex = useMemo(() => 
    (activeIndex + 1) % testimonialData.length, 
    [activeIndex]
  );

  // Handle slide changes with animation state management
  const changeSlide = useCallback((newIndex: number, slideDirection: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(slideDirection);
    
    // Short delay to trigger animation
    setTimeout(() => {
      setActiveIndex(newIndex);
      
      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 400);
    }, 50);
  }, [isAnimating]);

  // Handle navigation
  const goToPrev = useCallback(() => {
    changeSlide(prevIndex, 'right');
  }, [prevIndex, changeSlide]);

  const goToNext = useCallback(() => {
    changeSlide(nextIndex, 'left');
  }, [nextIndex, changeSlide]);

  const goToSlide = useCallback((index: number) => {
    if (index === activeIndex || isAnimating) return;
    changeSlide(index, index > activeIndex ? 'left' : 'right');
  }, [activeIndex, isAnimating, changeSlide]);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused || isAnimating) return;
    
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isAnimating, goToNext]);

  // Consolidated testimonial card into a local component
  const TestimonialCard = ({ testimonial, status }: { 
    testimonial: TestimonialType, 
    status: 'active' | 'prev' | 'next' | 'inactive'
  }) => {
    const isActive = status === 'active';
    
    // Determine animation classes based on card status and direction
    const getAnimationClass = () => {
      if (!direction) return '';
      
      if (status === 'active') {
        return direction === 'left' ? 'animate-slide-in-right' : 'animate-slide-in-left';
      }
      if (status === 'prev' && direction === 'left') return 'animate-slide-out-left';
      if (status === 'next' && direction === 'right') return 'animate-slide-out-right';
      return '';
    };

    return (
      <div 
        className={`
          absolute top-0 left-0 w-full transition-all duration-300 ease-in-out
          ${status === 'active' ? 'opacity-100 z-20' : 'opacity-0 z-10'} 
          ${status === 'prev' || status === 'next' ? 'opacity-0' : ''}
          ${getAnimationClass()}
        `}
        style={{
          transform: status === 'active' ? 'translateX(0)' : 
                    status === 'prev' ? 'translateX(-100%)' : 
                    status === 'next' ? 'translateX(100%)' : 'translateX(0)'
        }}
      >
        <div className={`
          rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300
          ${isActive ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-500/20' : 'bg-white'}
        `}>
          {/* Quote icon */}
          <div className="mb-4">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center
              ${isActive ? 'bg-white' : 'bg-orange-100'}
            `}>
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
          </div>

          {/* Testimonial text */}
          <p className={`text-lg mb-6 ${isActive ? 'text-white' : 'text-gray-700'}`}>
            "{testimonial.text}"
          </p>
          
          {/* Author info */}
          <div className="flex items-center space-x-4 border-t border-opacity-20 pt-4 mt-auto border-white">
            <img
              src={PersonalDetailsProfilePic}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
            />
            <div>
              <h4 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-gray-900'}`}>
                {testimonial.author}
              </h4>
              <p className={`text-sm ${isActive ? 'text-orange-100' : 'text-gray-500'}`}>
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight font-lato">
            Testimonials
            <span className="block mt-2 text-orange-500">From Our Clients</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-orange-400 mx-auto rounded-full" />
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto relative"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          
          {/* Navigation Arrows */}
          <div className="absolute top-1/3 transform -translate-y-1/2 left-[-2cm] flex items-center z-30">
            <button 
              onClick={goToPrev}
              disabled={isAnimating}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-orange-500 hover:text-orange-600 transition-all disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/3 transform -translate-y-1/2 right-[-2cm] flex items-center z-30">
            <button 
              onClick={goToNext}
              disabled={isAnimating}
              className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-orange-500 hover:text-orange-600 transition-all disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonial Cards Container */}
          <div className="relative h-[320px] md:h-[300px] overflow-hidden">
            {testimonialData.map((testimonial, index) => {
              let status: 'active' | 'prev' | 'next' | 'inactive' = 'inactive';
              
              if (index === activeIndex) status = 'active';
              else if (index === prevIndex) status = 'prev';
              else if (index === nextIndex) status = 'next';
              
              return (
                <TestimonialCard 
                  key={index} 
                  testimonial={testimonial} 
                  status={status} 
                />
              );
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-8 md:w-12 h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-orange-500' 
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 400ms forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 400ms forwards;
        }
        
        .animate-slide-out-right {
          animation: slideOutRight 400ms forwards;
        }
        
        .animate-slide-out-left {
          animation: slideOutLeft 400ms forwards;
        }

        .testimonial {
          color: #333;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;