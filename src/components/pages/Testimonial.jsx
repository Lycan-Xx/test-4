import React, { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const resumeTimeout = useRef(null);

  const testimonials = [
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

  // Improved autoplay with hover pause/resume
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleTransition = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    handleTransition(nextIndex);
  };

  // Pause on hover, resume 4s after mouse leaves
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };
  const handleMouseLeave = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || (currentIndex === testimonials.length - 1 && index === 0)) return 'right';
    if (diff === -1 || (currentIndex === 0 && index === testimonials.length - 1)) return 'left';
    return 'hidden';
  };

  const ProfileIcon = ({ initial, isCenter }) => (
    <div className={`flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
      isCenter 
        ? 'w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-xl shadow-lg' 
        : 'w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 text-sm'
    }`}>
      {initial}
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated dots pattern */}
        <div className="absolute left-8 top-1/4">
          <div className="grid grid-cols-6 gap-2 opacity-20">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-8"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Testimonial
          </h2>
          <p className="text-xl text-gray-300">
            Loved by clients world wide
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-[450px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {testimonials.map((testimonial, index) => {
                const position = getCardPosition(index);
                const isCenter = position === 'center';
                const isLeft = position === 'left';
                const isRight = position === 'right';
                const isHidden = position === 'hidden';

                // Hide left/right cards on small screens
                if ((isLeft || isRight) && window.innerWidth < 1024) return null;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-600 ease-in-out ${
                      isCenter 
                        ? 'z-20 scale-100 opacity-100 translate-x-0' 
                        : isLeft
                          ? 'z-10 scale-75 opacity-50 -translate-x-96 lg:block hidden'
                          : isRight
                            ? 'z-10 scale-75 opacity-50 translate-x-96 lg:block hidden'
                            : 'z-0 scale-50 opacity-0 translate-x-0'
                    } ${isTransitioning ? 'transition-transform transition-opacity transition-scale' : ''}`}
                    style={{
                      maxWidth: isCenter ? '500px' : '400px',
                      width: '100%'
                    }}
                  >
                    <div className={`relative rounded-3xl p-8 transition-all duration-600 transform hover:scale-105 ${
                      isCenter 
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl shadow-orange-500/20' 
                        : 'bg-white shadow-lg'
                    }`}>
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
                      <div className="space-y-6">
                        <p className={`text-lg leading-relaxed transition-all duration-600 ${
                          isCenter ? 'text-white' : 'text-gray-700'
                        }`}>
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex items-center space-x-4 pt-4 border-t border-opacity-20 border-white">
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
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;