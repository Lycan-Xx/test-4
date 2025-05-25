import React, { useState } from "react"
import LogoBeeCV from "../../assets/LogoBeeCV.svg"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const location = useLocation();

 const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" }
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
      <Link
       key={link.path}
       to={link.path}
       className={`hover:text-primary transition-colors ${isActive(link.path)}`}
      >
       {link.label}
      </Link>
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
