import React from 'react';
import { TestimonialType } from './testimonialData';
import ProfileIcon from './ProfileIcon';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
  currentIndex: number;
  totalItems: number;
  isTransitioning: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  index, 
  currentIndex,
  totalItems,
  isTransitioning
}) => {
  // Calculate position relative to currentIndex
  let offset = index - currentIndex;
  
  // Handle looping for circular carousel
  if (offset < -1) offset += totalItems;
  if (offset > 1) offset -= totalItems;

  // Hide cards that are not left, center, or right
  if (Math.abs(offset) > 1) return null;

  // Calculate translateX for smooth animation
  let translateX = 0;
  if (offset === -1) translateX = -260;
  if (offset === 1) translateX = 260;

  const isCenter = offset === 0;
  
  return (
    <div
      className={`absolute transition-all duration-600 ease-in-out
        ${isCenter ? 'z-20 scale-90 opacity-100' : 'z-10 scale-80 opacity-60 lg:block hidden'}`}
      style={{
        width: '500px', // Fixed width for consistency
        transform: `translateX(${translateX}px) ${isTransitioning ? 'scale(0.95)' : ''}`,
        transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)'
      }}
    >
      <div 
        className={`relative rounded-3xl p-8 h-[300px] flex flex-col transition-all duration-600 ${
          isCenter 
            ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl shadow-orange-500/20' 
            : 'bg-white shadow-lg'
        }`}
      >
        {/* Quote decoration for center card */}
        {isCenter && (
          <div className="absolute -top-4 left-8 animate-bounce-gentle">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col h-full">
          <p className={`text-lg leading-relaxed flex-grow transition-all duration-600 ${
            isCenter ? 'text-white' : 'text-gray-700'
          }`}>
            "{testimonial.text}"
          </p>
          
          <div className="flex items-center space-x-4 pt-4 mt-auto border-t border-opacity-20 border-white">
            <ProfileIcon initial={testimonial.initial} isCenter={isCenter} />
            <div>
              <h4 className={`text-xl font-bold transition-all duration-600 ${
                isCenter ? 'text-white' : 'text-gray-900'
              }`}>
                {testimonial.author}
              </h4>
              <p className={`text-sm transition-all duration-600 ${
                isCenter ? 'text-orange-100' : 'text-gray-500'
              }`}>
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;