const WhyChooseUs = () => {
  const reasons = [
    {
      header: "Proven Expertise",
      text: "Our team brings years of experience in career development and business operations, delivering results that speak for themselves.",
      isHighlighted: true,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
          <path d="M24 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M16 44c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="12" r="2" fill="currentColor" />
          <circle cx="44" cy="12" r="2" fill="currentColor" />
          <circle cx="20" cy="32" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      header: "Tailored Solutions",
      text: "No two clients are the same. We take time to understand your unique goals and craft strategies that fit -- not force -- your growth.",
      isHighlighted: false,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <rect x="12" y="12" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
          <path d="M20 20h24M20 26h20M20 32h16" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
          <path d="M28 48h8M32 44v8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      header: "End-to-End Support",
      text: "From consultation to execution, we provide consistent, hands-on support so you're never navigating alone.",
      isHighlighted: true,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none">
          <path d="M16 24c0-8.8 7.2-16 16-16s16 7.2 16 16c0 8.8-7.2 16-16 16s-16-7.2-16-16z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
          <path d="M24 20l6 6L42 14" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 44h48M12 50h40M16 56h32" stroke="currentColor" strokeWidth="2" />
          <circle cx="8" cy="12" r="2" fill="currentColor" />
          <circle cx="56" cy="20" r="2" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements - Responsive adjustments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left dots - Hidden on small screens */}
        <div className="hidden sm:block absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 opacity-20 sm:opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
              ></div>
            ))}
          </div>
        </div>

        {/* Right dots - Hidden on small screens */}
        <div className="hidden sm:block absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 opacity-20 sm:opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
              ></div>
            ))}
          </div>
        </div>

        {/* Geometric shapes - Responsive sizing and positioning */}
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border border-orange-400 opacity-10 rotate-45"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-orange-400 opacity-5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Improved responsiveness */}
        <div className="space-y-3 text-center sm:text-left mb-10 sm:mb-16 max-w-3xl mx-auto sm:mx-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-lato">
            Why Choose{' '}
            <span className="relative inline-block">
              Us
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-300 text-lg hidden sm:block">
            Delivering excellence through customized solutions and dedicated service
          </p>
        </div>

        {/* Cards Grid - Responsive layout with improved card design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl sm:rounded-3xl transition-all duration-500
                hover:transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl
                ${reason.isHighlighted
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-500/20'
                  : 'bg-white border border-gray-100'
                }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Card Content - Better padding for smaller screens */}
              <div className="p-6 sm:p-8 h-full flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Icon - Responsive sizing */}
                <div className={`mb-5 transition-all duration-300 group-hover:scale-110 ${
                  reason.isHighlighted ? 'text-white' : 'text-gray-800'
                }`}>
                  {reason.icon}
                </div>

                {/* Title - Responsive typography */}
                <h3 className={`text-xl sm:text-2xl font-bold font-lato leading-tight mb-4 ${
                  reason.isHighlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {reason.header}
                </h3>

                {/* Description - Responsive typography */}
                <p className={`text-base sm:text-lg leading-relaxed font-poppins ${
                  reason.isHighlighted ? 'text-orange-50' : 'text-gray-600'
                }`}>
                  {reason.text}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-current border-opacity-10">
                  <button
                    className={`group flex items-center text-sm font-medium transition-all duration-300 ${
                      reason.isHighlighted ? 'text-white hover:text-orange-100' : 'text-orange-500 hover:text-orange-600'
                    }`}
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Effect - More subtle and effective */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action - Added for better UX */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-orange-500/30 transform hover:-translate-y-1"
          >
            Get Started Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        .animate-pulse {
          animation: pulse 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;