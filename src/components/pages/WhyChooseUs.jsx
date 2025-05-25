import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      header: "Proven Expertise",
      text: "Our team brings years of experience in career development and business operations, delivering results that speak for themselves.",
      isHighlighted: true
    },
    {
      header: "Tailored Solutions", 
      text: "No two clients are the same. We take time to understand your unique goals and craft strategies that fit — not force — your growth.",
      isHighlighted: false
    },
    {
      header: "End-to-End Support",
      text: "From consultation to execution, we provide consistent, hands-on support so you're never navigating alone.",
      isHighlighted: true
    }
  ];

  // Custom SVG Icons to match the design
  const ProvenExpertiseIcon = () => (
    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
      <path d="M24 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 44c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="12" r="2" fill="currentColor"/>
      <circle cx="44" cy="12" r="2" fill="currentColor"/>
      <circle cx="20" cy="32" r="2" fill="currentColor"/>
    </svg>
  );

  const TailoredSolutionsIcon = () => (
    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <rect x="12" y="12" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
      <path d="M20 20h24M20 26h20M20 32h16" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
      <path d="M28 48h8M32 44v8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  const EndToEndSupportIcon = () => (
    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <path d="M16 24c0-8.8 7.2-16 16-16s16 7.2 16 16c0 8.8-7.2 16-16 16s-16-7.2-16-16z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
      <path d="M24 20l6 6L42 14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 44h48M12 50h40M16 56h32" stroke="currentColor" strokeWidth="2"/>
      <circle cx="8" cy="12" r="2" fill="currentColor"/>
      <circle cx="56" cy="20" r="2" fill="currentColor"/>
    </svg>
  );

  const icons = [ProvenExpertiseIcon, TailoredSolutionsIcon, EndToEndSupportIcon];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side dot pattern */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-5 gap-3 opacity-30">
            {[...Array(25)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 2s infinite'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Right side dot pattern */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-5 gap-3 opacity-30">
            {[...Array(25)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 2s infinite reverse'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Background geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 opacity-10 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 opacity-5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-lato">
            Why Choose{' '}
            <span className="relative inline-block">
              Us
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  reason.isHighlighted 
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                    : 'bg-white'
                }`}
                style={{
                  borderRadius: '24px',
                  minHeight: '400px',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Card Content */}
                <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                  {/* Icon */}
                  <div className={`transition-all duration-300 group-hover:scale-110 ${
                    reason.isHighlighted ? 'text-white' : 'text-gray-800'
                  }`}>
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold font-lato leading-tight ${
                    reason.isHighlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {reason.header}
                  </h3>

                  {/* Description */}
                  <p className={`text-lg leading-relaxed font-poppins max-w-sm ${
                    reason.isHighlighted ? 'text-orange-50' : 'text-gray-600'
                  }`}>
                    {reason.text}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-white to-transparent pointer-events-none"></div>
                
                {/* Subtle Border for White Cards */}
                {!reason.isHighlighted && (
                  <div className="absolute inset-0 rounded-3xl border border-gray-200 group-hover:border-orange-300 transition-colors duration-300"></div>
                )}
              </div>
            );
          })}
        </div>


      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;