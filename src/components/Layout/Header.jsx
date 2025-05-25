import React, { useState } from "react"
import LogoBeeCV from "../../assets/LogoBeeCV.svg"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [servicesDropdown, setServicesDropdown] = useState(false);
 const location = useLocation();

 const serviceLinks = [
  { path: "/business-services", label: "Business Services" },
  { path: "/career-services", label: "Career Services" },
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
  { path: "/Contact", label: "Contact" },
  { path: "/Testimonial", label: "Testimonial" }
 ];

 const isActive = (path) => {
  return location.pathname === path ? "border-b-4 text-primary border-primary" : "";
 };

 return (
  <header className="bg-white shadow font-lato py-[41px] relative">
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
      <div key={link.path} className="relative">
        {link.hasDropdown ? (
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button 
              className={`hover:text-primary transition-colors flex items-center gap-2 ${
                location.pathname.includes('/services') ? 'text-primary' : ''
              }`}
            >
              {link.label}
              <svg 
                className={`w-4 h-4 transform transition-transform ${
                  servicesDropdown ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Services Dropdown */}
            {servicesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                {link.dropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
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
       <Link
        key={link.path}
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
