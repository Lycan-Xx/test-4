import React from 'react'

const CareerServices = () => {
  const Services = [
   { title: "Professional Resume & Cover Letter Writing" },
   { title: "LinkedIn Profile Optimization" },
   { title: "Executing Branding" },
   { title: "Career Coaching" },
   { title: "Job Application Support" },
  ];

  return (
    <section className="min-h-screen pt-[100px] bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-lato">
            Career{' '}
            <span className="relative">
              Services
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-gray-700 max-w-3xl">
            Every service is designed to position you for success, providing ongoing support and personalised feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerServices