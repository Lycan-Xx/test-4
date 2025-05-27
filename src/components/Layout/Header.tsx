import React, { useState, useRef, useEffect } from "react";
import LogoBeeCV from "../../assets/LogoBeeCV.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBriefcase, FaUserFriends } from "react-icons/fa";
import { FiChevronDown, FiX } from "react-icons/fi";

interface NavLinkItem {
  path: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: ServiceLink[];
}

interface ServiceLink {
  path: string;
  label: string;
  icon: JSX.Element;
  description: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const serviceLinks: ServiceLink[] = [
    { 
      path: "/business-services", 
      label: "Business Services",
      icon: <FaBriefcase className="w-5 h-5" />,
      description: "Strategic consulting and business solutions"
    },
    { 
      path: "/career-services", 
      label: "Career Services",
      icon: <FaUserFriends className="w-5 h-5" />,
      description: "Professional development and career guidance"
    },
  ];

  const navLinks: NavLinkItem[] = [
    { path: "#hero", label: "Home" },
    { path: "#about", label: "About" },
    { 
      path: "#services", 
      label: "Services",
      hasDropdown: true,
      dropdownItems: serviceLinks
    },
    { path: "#why-us", label: "Why Choose Us" },
    { path: "#testimonial", label: "Testimonial" },
    { path: "#contact", label: "Contact" }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleLinkClick();
  };

  // Update NavLink components to use scrollToSection
  const renderNavLink = (path: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      scrollToSection(path);
    };
  };

  // Accessibility: Close dropdowns on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Responsive design: Close dropdowns on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Home"
          >
            <img src={LogoBeeCV} alt="CorporateBee Logo" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div 
                key={link.path}
                className="relative"
                ref={link.hasDropdown ? dropdownRef : null}
              >
                {link.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="flex items-center gap-1 p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                      aria-expanded={isServicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <FiChevronDown className={`w-4 h-4 transition-transform ${
                        isServicesDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-lg ring-1 ring-gray-100 py-4"
                        role="menu"
                      >
                        <div className="px-4 pb-3">
                          <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
                          <p className="text-sm text-gray-600 mt-1">Comprehensive solutions for your needs</p>
                        </div>
                        
                        <div className="grid gap-2 px-2">
                          {link.dropdownItems?.map((item) => (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                handleLinkClick();
                                // For service links that are full routes, we don't use smooth scroll
                              }}
                              className={({ isActive }) => `flex items-start gap-3 p-3 rounded-lg ${
                                isActive 
                                  ? 'bg-primary-50 border border-primary-200' 
                                  : 'hover:bg-gray-50 border border-transparent'
                              }`}
                              role="menuitem"
                            >
                              <span className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                                {item.icon}
                              </span>
                              <div className="flex-1">
                                <p className="text-base font-medium text-gray-900">{item.label}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={(e) => renderNavLink(link.path)(e)}
                    className={({ isActive }) => `px-3 py-2 text-gray-700 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-primary-600 font-semibold' 
                        : 'hover:text-primary-600 focus:ring-2 focus:ring-primary-500'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <>
                <span className="sr-only">Open main menu</span>
                <div className="space-y-1">
                  <div className="w-6 h-px bg-gray-600"></div>
                  <div className="w-6 h-px bg-gray-600"></div>
                  <div className="w-6 h-px bg-gray-600"></div>
                </div>
              </>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={handleMobileMenuToggle}
                className="p-2 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 space-y-4">
              {navLinks.map((link) => (
                <div key={link.path} className="space-y-2">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-expanded={isServicesDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <FiChevronDown className={`w-4 h-4 transition-transform ${
                          isServicesDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {isServicesDropdownOpen && (
                        <div className="ml-4 space-y-2 border-l-2 border-gray-100 pl-4">
                          {link.dropdownItems?.map((item) => (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              onClick={handleMobileMenuToggle}
                              className="block p-3 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-primary-600">{item.icon}</span>
                                <span>{item.label}</span>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={handleMobileMenuToggle}
                      className={({ isActive }) => `block p-3 rounded-lg ${
                        isActive 
                          ? 'bg-primary-50 text-primary-600 font-semibold' 
                          : 'hover:bg-gray-50'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;