import React, { useState, useEffect } from "react";
import { 
  FaGreaterThan, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaWifi,
  FaTv,


  FaArrowUp,
 
} from "react-icons/fa";
import { 
  MdHotel, 
  MdRestaurant, 
  MdSecurity,
  MdLocationOn
} from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { GiWaterDrop } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Facilities", link: "/facilities" },
    { name: "Gallery", link: "/gallery" },
    { name: "Rooms", link: "/rooms" },
    { name: "Contact Us", link: "/contact" },
  ];

  const facilities = [
    { icon: <FaWifi />, name: "High-Speed WiFi", color: "text-rose-300" },
    { icon: <TbAirConditioning />, name: "AC Rooms", color: "text-red-300" },
    { icon: <FaTv />, name: "HD Television", color: "text-orange-300" },
    { icon: <GiWaterDrop />, name: "Hot Water", color: "text-rose-400" },
    { icon: <MdRestaurant />, name: "Restaurant", color: "text-amber-400" },
    { icon: <MdSecurity />, name: "24/7 Security", color: "text-red-400" },
  ];

  

  const contactInfo = [
    { 
      icon: <FaPhoneAlt />, 
      text: "9972014954", 
      link: "tel:9972014954",
      color: "text-rose-200"
    },
    { 
      icon: <FaEnvelope />, 
      text: "krishnastayinn2026@gmail.com",
      link: "mailto:krishnastayinn2026@gmail.com",
      color: "text-amber-200"
    },
    { 
      icon: <FaMapMarkerAlt />, 
      text: "Madivala, Bangalore-560068", 
      link: "#",
      color: "text-red-200"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0B1120] via-[#1E293B] to-[#0F172A] text-white pt-16 pb-8 mt-20 overflow-hidden">
      {/* Simple gradient background without animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/5 via-blue-500/3 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-purple-500/5 via-pink-500/3 to-transparent rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-md opacity-40"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-lg border border-slate-700/50 shadow-xl">
                  <MdHotel className="text-2xl text-cyan-100" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Krishna Stay Inn
                </h2>
                <p className="text-xs uppercase tracking-widest text-cyan-300/60">Premium Boutique Stay</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-sm">
              Experience luxury redefined at Krishna Stay Inn, where modern elegance meets 
              traditional hospitality in the heart of Bengaluru.
            </p>
            
          </motion.div>

          {/* Links & Facilities */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                  <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">Explore</span>
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((item, index) => (
                    <li key={index} className="relative">
                      <Link
                        to={item.link}
                        onClick={scrollToTop}
                        onMouseEnter={() => setHoveredLink(index)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="flex items-center gap-2 py-1.5 group"
                      >
                        <FaGreaterThan className={`text-[8px] transition-all ${hoveredLink === index ? 'text-cyan-400 translate-x-0.5' : 'text-slate-500'}`} />
                        <span className={`text-xs text-slate-300 group-hover:text-white transition-colors ${hoveredLink === index ? 'font-semibold' : ''}`}>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                  <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">Amenities</span>
                </h3>
                <div className="gridgap-2">
                  {facilities.slice(0, 4).map((facility, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all backdrop-blur-sm"
                    >
                      <span className={`${facility.color} text-sm`}>{facility.icon}</span>
                      <span className="text-[10px] font-medium text-slate-300 truncate">{facility.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full"></div>
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Connect</span>
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.link}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all group backdrop-blur-sm"
                >
                  <div className={`text-sm ${contact.color} group-hover:scale-110 transition-transform`}>
                    {contact.icon}
                  </div>
                  <span className="text-xs text-slate-300 group-hover:text-white truncate">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <div className="w-1.5 h-4 bg-gradient-to-b from-pink-400 to-rose-500 rounded-full"></div>
              <span className="bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">Location</span>
            </h3>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Map Container */}
              <div className="h-48 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750383173748!2d77.6186422!3d12.9237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f9d99776d3%3A0x7e4465551f87961b!2sMadiwala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Krishna Stay Inn Location - Madivala, Bangalore"
                  className="absolute inset-0"
                />
                
                {/* Overlay with Directions Button */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Madivala+Market+Bangalore+560068"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs font-medium py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaMapMarkerAlt className="text-xs" />
                    Get Directions
                  </a>
                </div>
                
                {/* Location Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full"
                    />
                    <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-2 rounded-full shadow-xl">
                      <MdLocationOn className="text-lg" />
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Address below map */}
              <div className="p-3 bg-gradient-to-r from-slate-900/20 via-slate-800/10 to-slate-900/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="p-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <FaMapMarkerAlt className="text-cyan-300 text-xs" />
                  </div>
                  <p className="text-xs font-medium text-white">
                    Madivala, Bangalore-560068
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs text-center">
          <p>© {new Date().getFullYear()} Krishna Stay Inn. All rights reserved.</p>
          <div className="flex items-center gap-2" style={{marginRight: "110px"}}>
            <span className="text-slate-300">Powered by Innomatrics</span>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-2xl hover:from-cyan-600 hover:to-blue-700 transition-all hover:shadow-3xl hover:scale-105 active:scale-95"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;