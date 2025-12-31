import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaAlignJustify,
  FaTimesCircle,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30; // Reduced from 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setToggle(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/rooms", label: "Rooms" },
    { path: "/facilities", label: "Facilities" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Info Bar - Reduced height */}
      <section className="bg-gradient-to-r from-[#C8D2DB] to-[#dbe4ed] py-2 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
            <div className="flex items-center justify-center sm:justify-start space-x-2 group">
              <div className="bg-white p-1.5 rounded-full shadow-sm group-hover:bg-blue-50 transition-all duration-300 group-hover:scale-110">
                <FaMobileAlt className="text-[#4d142f] text-xs" />
              </div>
              <a
                href="tel:9972014954"
                className="font-medium text-xs sm:text-sm text-gray-700 hover:text-[#4d142f] transition-colors duration-300"
              >
                +91 99720 14954
              </a>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start space-x-2 group">
              <div className="bg-white p-1.5 rounded-full shadow-sm group-hover:bg-blue-50 transition-all duration-300 group-hover:scale-110">
                <FaEnvelope className="text-[#4d142f] text-xs" />
              </div>
              <a
                href="mailto:krishnastayinn@gmail.com"
                className="font-medium text-xs sm:text-sm text-gray-700 hover:text-[#4d142f] transition-colors duration-300"
              >
                krishnastayinn@gmail.com
              </a>
            </div>

            <div className="hidden sm:flex items-center justify-center sm:justify-start space-x-2 group">
              <div className="bg-white p-1.5 rounded-full shadow-sm group-hover:bg-blue-50 transition-all duration-300 group-hover:scale-110">
                <FaMapMarkerAlt className="text-[#4d142f] text-xs" />
              </div>
              <a
                href="https://www.google.com/maps?q=No.+9/17+1st+Main+Road,+Maruthi+Nagar,+Madivala,+Bangalore-560068"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-700 hover:text-[#4d142f] transition-colors duration-300 max-w-xs"
              >
                No. 9/17 1st Main Road, Maruthi Nagar Madivala Bangalore-560068
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header - Reduced height */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#4d142f] shadow-lg' : 'bg-[#4d142f]'}`}>
        {/* Desktop Navigation */}
        <section className="hidden md:flex items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8 py-2"> {/* Reduced py-4 to py-2 */}
          {/* Logo with animation - Smaller */}
          <figure className="transform hover:scale-105 transition-transform duration-300">
            <img 
              src={logo} 
              alt="sri krishna stay bengaluru logo" 
              className="h-10 w-auto" // Reduced from h-14 to h-10
            />
          </figure>

          {/* Navigation menu with hover effects - Compact */}
          <nav className="flex-1 max-w-2xl mx-6">
            <ul className="flex justify-center gap-0.5"> {/* Reduced gap */}
              {navItems.map((item) => (
                <li key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-3 py-1.5 rounded-md transition-all duration-200 font-medium flex items-center space-x-1 text-sm ${
                      location.pathname === item.path
                        ? "text-white bg-[#6a1c44] shadow-inner"
                        : "text-gray-200 hover:text-white hover:bg-[#5a1638]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {location.pathname === item.path && (
                      <FaStar className="text-yellow-400 text-xs animate-pulse" />
                    )}
                  </Link>
                  {/* Hover underline effect - Smaller */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-3/4 transition-all duration-200"></div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Now Button with animation - Smaller */}
          <div className="transform hover:-translate-y-0.5 transition-transform duration-200">
            <Link to="/contact">
              <button className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 font-bold cursor-pointer rounded-md shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 group overflow-hidden text-sm">
                <span className="relative z-10 flex items-center space-x-1">
                  <span>Book Now</span>
                  <FaArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200 text-xs" />
                </span>
                {/* Button hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
              </button>
            </Link>
          </div>
        </section>

        {/* Mobile Navigation - Reduced height */}
        <section className="flex md:hidden items-center justify-between px-4 py-2"> {/* Reduced py-3 to py-2 */}
          {/* Logo - Smaller */}
          <figure className="transform hover:scale-105 transition-transform duration-300">
            <img 
              src={logo} 
              alt="sri krishna stay bengaluru logo" 
              className="h-9 w-auto" // Reduced from h-12 to h-9
            />
          </figure>

          {/* Mobile Menu Button and Navigation */}
          <div className="flex items-center space-x-3">
            {/* Book Now Button for Mobile - Smaller */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-3 py-1.5 font-bold cursor-pointer rounded-md shadow hover:shadow-md transition-shadow duration-300 text-xs">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle - Smaller */}
            <button
              onClick={handleToggle}
              className="relative z-50 p-1.5 rounded-md bg-[#5a1638] hover:bg-[#6a1c44] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {toggle ? (
                <FaTimesCircle className="text-white text-xl transition-transform duration-300 rotate-180" /> // Reduced from text-2xl
              ) : (
                <FaAlignJustify className="text-white text-xl transition-transform duration-300" /> // Reduced from text-2xl
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
              toggle
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={handleToggle}
          >
            {/* Side Menu - Compact */}
            <div
              className={`absolute right-0 top-0 h-full w-56 bg-gradient-to-b from-[#4d142f] to-[#6a1c44] shadow-xl transform transition-transform duration-300 ease-out ${
                toggle ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header - Compact */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <img 
                    src={logo} 
                    alt="sri krishna stay bengaluru logo" 
                    className="h-8 w-auto" // Reduced from h-10
                  />
                  <button
                    onClick={handleToggle}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  >
                    <FaTimesCircle className="text-white text-lg" /> {/* Reduced from text-xl */}
                  </button>
                </div>
                <div className="text-yellow-400 text-xs font-medium">
                  Luxury Stay in Bangalore
                </div>
              </div>

              {/* Menu Items - Compact */}
              <nav className="p-3">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={handleToggle}
                        className={`flex items-center justify-between p-3 rounded-md transition-all duration-200 text-sm ${
                          location.pathname === item.path
                            ? "bg-white/20 text-white shadow-inner"
                            : "text-gray-200 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        {location.pathname === item.path && (
                          <FaStar className="text-yellow-400 animate-pulse text-xs" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Info in Mobile Menu - Compact */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 border-t border-white/10">
                <div className="space-y-2">
                  <a
                    href="tel:9972014954"
                    className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors duration-200 p-2 rounded-md hover:bg-white/5 text-xs"
                  >
                    <FaMobileAlt className="text-yellow-400 text-xs" />
                    <span>+91 99720 14954</span>
                  </a>
                  <a
                    href="mailto:krishnastayinn@gmail.com"
                    className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors duration-200 p-2 rounded-md hover:bg-white/5 text-xs"
                  >
                    <FaEnvelope className="text-yellow-400 text-xs" />
                    <span>krishnastayinn@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;