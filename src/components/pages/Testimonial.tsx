import React, { useState, useEffect } from 'react';
import TestimonialCard from './testimonials/TestimonialCard';
import { testimonialData } from './testimonials/testimonialData';
import './testimonials/animations.css';

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalTestimonials = testimonialData.length;

  // Handle auto-play with pause/resume
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, isTransitioning]);

  const handleTransition = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalTestimonials;
    handleTransition(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    handleTransition(prevIndex);
  };

  const handleIndicatorClick = (index: number) => {
    if (index !== currentIndex) {
      handleTransition(index);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-visible z-0">
        <div className="absolute right-8 bottom-1/4">
          <div className="grid grid-cols-6 gap-2 opacity-20">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.15}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-orange-400 opacity-10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400 opacity-5 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-lato">
            Testimonials{' '}

						<span className="relative">
             from our clients
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>

          </h2>

        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[400px] overflow-visible">
            <div className="absolute inset-0 flex items-center justify-center">
              {testimonialData.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                  currentIndex={currentIndex}
                  totalItems={totalTestimonials}
                  isTransitioning={isTransitioning}
                />
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Testimonial;