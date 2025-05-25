import React, { useState, useRef, useEffect } from "react"
import LogoBeeCV from "../../assets/LogoBeeCV.svg"
import { Link, useLocation } from "react-router-dom"
import { FaBriefcase, FaUserFriends } from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [servicesDropdown, setServicesDropdown] = useState(false);
 const location = useLocation();
 const dropdownRef = useRef(null);

 const serviceLinks = [
  { 
    path: "/business-services", 
    label: "Business Services",
    icon: <FaBriefcase className="w-6 h-6" />,
    description: "Strategic consulting and business solutions"
  },
  { 
    path: "/career-services", 
    label: "Career Services",
    icon: <FaUserFriends className="w-6 h-6" />,
    description: "Professional development and career guidance"
  },
 ];

 const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { 
    path: "/services", 
    label: "Services",
    hasDropdown: true,
    dropdownItems: serviceLinks
  },
  { path: "/WhyUs", label: "Why Choose Us" },
  { path: "/Testimonial", label: "Testimonial" },
  { path: "/Contact", label: "Contact" }
 ];

 const isActive = (path) => {
  return location.pathname === path ? "border-b-4 text-primary border-primary" : "";
 };

 // Close dropdown when clicking outside
 useEffect(() => {
   const handleClickOutside = (event) => {
     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
       setServicesDropdown(false);
     }
   };

   document.addEventListener('mousedown', handleClickOutside);
   return () => {
     document.removeEventListener('mousedown', handleClickOutside);
   };
 }, []);

 const toggleServicesDropdown = () => {
   setServicesDropdown(!servicesDropdown);
 };

 return (
  <header className="bg-white shadow font-lato py-[27px] relative">
   <div className="container mx-auto flex justify-between items-center px-4">
    <div className="font-openSans font-semibold text-2xl leading-[120%]">
     <Link to="/">
      <img src={LogoBeeCV} alt="CorporateBee Logo" />
     </Link>
    </div>

    {/* Mobile Menu Button */}
    <button 
     className="lg:hidden z-50"
     onClick={() => setIsOpen(!isOpen)}
    >
     <div className="w-6 h-1 bg-gray-600 mb-1"></div>
     <div className="w-6 h-1 bg-gray-600 mb-1"></div>
     <div className="w-6 h-1 bg-gray-600"></div>
    </button>

    {/* Desktop Navigation */}
    <ul className="hidden lg:flex flex-row gap-[24px] font-semibold font-lato text-[20px] text-[#344054]">
     {navLinks.map((link) => (
      <div key={link.path} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
        {link.hasDropdown ? (
          <div className="relative">
            <button 
              onClick={toggleServicesDropdown}
              className={`hover:text-primary transition-colors flex items-center gap-2 ${
                location.pathname.includes('/services') ? 'text-primary' : ''
              }`}
            >
              {link.label}
              <FiChevronDown 
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  servicesDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {/* Services Grid Dropdown */}
            {servicesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50">
                <div className="px-4 pb-3 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">Our Services</h3>
                  <p className="text-sm text-gray-600">Choose the service that fits your needs</p>
                </div>
                
                <div className="grid grid-cols-1 gap-2 p-2">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="px-4 pt-3 border-t border-gray-100">
                  <Link
                    to="/services"
                    onClick={() => setServicesDropdown(false)}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={link.path}
            className={`hover:text-primary transition-colors ${isActive(link.path)}`}
          >
           {link.label}
          </Link>
        )}
      </div>
     ))}
    </ul>

    {/* Mobile Navigation Drawer */}
    <div 
     className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
     } z-40`}
    >
     <div className="flex flex-col pt-20 px-4">
      {navLinks.map((link) => (
        <div key={link.path} className="w-full">
          {link.hasDropdown ? (
            <>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="w-full text-left py-2 text-lg font-semibold text-gray-600 hover:text-primary flex items-center justify-between"
              >
                {link.label}
                <FiChevronDown
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    servicesDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {servicesDropdown && (
                <div className="ml-4 border-l-2 border-orange-100">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 pl-4 text-gray-600 hover:text-primary"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesDropdown(false);
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block py-2 pl-4 text-orange-600 hover:text-orange-700 font-medium"
                    onClick={() => {
                      setIsOpen(false);
                      setServicesDropdown(false);
                    }}
                  >
                    View all services →
                  </Link>
                </div>
              )}
            </>
          ) : (
            <Link
              to={link.path}
              className={`py-2 text-lg font-semibold ${
                isActive(link.path)
                  ? 'text-primary border-l-4 border-primary pl-2'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          )}
        </div>
      ))}
     </div>
    </div>

    {/* Overlay for mobile menu */}
    {isOpen && (
     <div 
      className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
      onClick={() => setIsOpen(false)}
     />
    )}
   </div>
  </header>
 );
};

export default Header;