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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
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
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl font-poppins font-light pl-8">
              At <span className="text-orange-400 font-medium">CorporateBee</span>, we help professionals unlock their potential and businesses scale with strategic, results-driven solutions. Whether you're advancing your career or strengthening your team, we're here to guide your next step with clarity and confidence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button className="group relative bg-white text-gray-900 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 font-lato min-w-[180px]">
              <span className="relative z-10">LEARN MORE</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-2xl hover:scale-105 font-lato min-w-[180px]">
              <span className="relative z-10">CONTACT</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>


        </div>
      </div>

    </section>
  );
};

export default Hero;