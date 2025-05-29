
import React from 'react';
import aboutImage from '../../assets/aboutImages.jpg';

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

        {/* Call to Action - Added for better UX */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-orange-500/30 transform hover:-translate-y-1"
          >
            Know More
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>


          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Corporate team collaboration"
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