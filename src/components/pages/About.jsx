import React from 'react';

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-orange-300 rotate-45 opacity-30"></div>
        
        {/* Dot pattern */}
        <div className="absolute top-20 right-20 grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-40 left-10 grid grid-cols-3 gap-2 opacity-15">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                <span className="text-orange-500 font-semibold text-lg font-poppins tracking-wider">ABOUT US</span>
              </div>
              
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

            {/* Key Values */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 font-lato">Trust</h3>
                <p className="text-sm text-gray-600 font-poppins">Built on integrity</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 font-lato">Expertise</h3>
                <p className="text-sm text-gray-600 font-poppins">Professional excellence</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 font-lato">Partnership</h3>
                <p className="text-sm text-gray-600 font-poppins">Collaborative approach</p>
              </div>
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
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 font-lato">500+</div>
                    <div className="text-sm text-gray-600 font-poppins">Success Stories</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements for Image Section */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-orange-200 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;