import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Geometric Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-orange-400 rotate-45"></div>
          <div className="absolute bottom-40 right-40 w-24 h-24 border border-orange-300 rotate-12"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-orange-400 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 font-lato">
            <span className="block mb-2">YOUR TRUSTED</span>
            <span className="block mb-2">PARTNER IN</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              CAREER & BUSINESS
            </span>
            <span className="block mt-2">GROWTH</span>
          </h1>

          {/* Description */}
          <div className="relative mb-12">
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl font-poppins font-light pl-8">
              At <span className="text-orange-400 font-medium">CorporateBee</span>, we help professionals unlock their potential and businesses scale with strategic, results-driven solutions. Whether you're advancing your career or strengthening your team, we're here to guide your next step with clarity and confidence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-white/30 transform hover:-translate-y-1 min-w-[180px]"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-medium rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-orange-500/30 transform hover:-translate-y-1 min-w-[180px]"
            >
              Contact
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;