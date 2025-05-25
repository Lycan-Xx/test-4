import React from 'react';

const ContactUs = () => {
  // Custom SVG Icons matching the design system
  const PhoneIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );

  const WebsiteIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      label: "Telephone",
      info: "+2348136589531",
      link: "tel:+2348136589531"
    },
    {
      icon: <WebsiteIcon />,
      label: "Website", 
      info: "www.corporatebee.cc",
      link: "https://www.corporatebee.cc"
    },
    {
      icon: <EmailIcon />,
      label: "E-mail",
      info: "corporatebee.cc@gmail.com",
      link: "mailto:corporatebee.cc@gmail.com"
    },
    {
      icon: <LocationIcon />,
      label: "Address",
      info: "Abuja, Nigeria",
      link: null
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 opacity-20 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-orange-300 opacity-15 rotate-12"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header Section */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 leading-tight font-lato">
              INTERESTED IN WORKING
              <br />
              WITH US?
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-white font-lato">
                CONTACT US NOW!
              </h2>
              <p className="text-lg lg:text-xl text-gray-200 font-poppins">
                For Information, please contact via:
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="bg-white bg-opacity-65 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-6 p-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:scale-105 cursor-pointer"
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-left">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 font-lato group-hover:text-orange-600 transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-lg text-gray-600 font-poppins group-hover:text-gray-800 transition-colors duration-300">
                      {item.info}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  {item.link && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl hover:scale-105 font-lato">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>GET IN TOUCH</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;