
import React from 'react';
import cooperateCelebration from '../../assets/Cooperatecelebration.jpg';

const icons = {
  phone: (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  website: (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  email: (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  location: (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
};

const contactInfo = [
  {
    icon: icons.phone,
    label: "Telephone",
    info: "+2348136589531",
    link: "tel:+2348136589531"
  },
  {
    icon: icons.website,
    label: "Website", 
    info: "www.corporatebee.cc",
    link: "https://www.corporatebee.cc"
  },
  {
    icon: icons.email,
    label: "E-mail",
    info: "corporatebee.cc@gmail.com",
    link: "mailto:corporatebee.cc@gmail.com"
  },
  {
    icon: icons.location,
    label: "Address",
    info: "Abuja, Nigeria",
    link: null
  }
];

const ContactUs = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${cooperateCelebration})`
      }} />

      {/* Overlay decorations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-24 h-24 border border-orange-400 opacity-20 rotate-45"></div>
        <div className="absolute bottom-16 right-16 w-20 h-20 bg-orange-400 opacity-10 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-lato leading-tight">
            INTERESTED IN WORKING<br />WITH US?
          </h1>
          <h2 className="mt-6 text-xl sm:text-2xl text-white font-lato font-bold">CONTACT US NOW!</h2>
          <p className="mt-2 text-md sm:text-lg text-gray-200 font-poppins">For information, please contact us via:</p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl">
          {contactInfo.map(({ icon, label, info, link }, i) => (
            <div
              key={i}
              onClick={() => link && window.open(link, '_blank')}
              className="group flex items-start gap-4 p-4 rounded-xl cursor-pointer hover:bg-orange-50 transition-transform hover:scale-105"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-md">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold font-lato text-gray-900 group-hover:text-orange-600">{label}</h3>
                <p className="text-sm text-gray-700 group-hover:text-gray-900 font-poppins">{info}</p>
              </div>
            </div>
          ))}
        </div>


        {/* Call to Action - Added for better UX */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-orange-500/30 transform hover:-translate-y-1"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
