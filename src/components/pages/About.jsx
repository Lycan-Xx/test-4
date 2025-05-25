import React from 'react';

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
     

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">

              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-lato">
                About{' '}
                <span className="relative">
                  Us
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                </span>
              </h1>
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-lato">
                Our Mission: Empowering Growth Through Strategic Support
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-6">
              <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                    <span className="text-orange-500 font-semibold">CorporateBee</span> believes in growth that is 
                    intentional and impactful. We are committed to providing individuals with the tools they need to 
                    thrive in their careers, while helping businesses build strong foundations and high-performing teams.
                  </p>
                </div>
              </div>

              <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                    We don't just deliver services—we <span className="font-semibold text-gray-900">partner with you</span> to 
                    ensure sustainable success. Our approach is grounded in trust, professionalism, and expertise, helping 
                    you navigate your career or business journey with clear, actionable strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl hover:scale-105 font-lato">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>KNOW MORE</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>


          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional business meeting"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;