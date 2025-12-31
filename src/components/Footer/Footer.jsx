import React, { useState, useEffect } from "react";
import { 
  FaGreaterThan, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaWifi,
  FaTv,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaWhatsapp
} from "react-icons/fa";
import { 
  MdHotel, 
  MdRestaurant, 
  MdSecurity
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

  const socialLinks = [
    { icon: <FaFacebookF />, link: "#", color: "hover:bg-red-800", bg: "bg-red-900" },
    { icon: <FaInstagram />, link: "#", color: "hover:bg-rose-700", bg: "bg-rose-800" },
    { icon: <FaTwitter />, link: "#", color: "hover:bg-red-900", bg: "bg-red-950" },
    { icon: <FaYoutube />, link: "#", color: "hover:bg-red-700", bg: "bg-red-600" },
    { icon: <FaWhatsapp />, link: "#", color: "hover:bg-green-700", bg: "bg-green-600" },
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
      text: "srikrishnastay@gmail.com", 
      link: "mailto:srikrishnastay@gmail.com",
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
    <footer className="relative bg-gradient-to-b from-[#2D0B0B] via-[#1a0505] to-black text-white pt-16 pb-8 mt-20 overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Maroon Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-maroon-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-lg blur-md opacity-40"></div>
                <div className="relative bg-gradient-to-br from-red-800 to-maroon-950 p-3 rounded-lg border border-red-700/30">
                  <MdHotel className="text-3xl text-rose-100" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-200 to-amber-200 bg-clip-text text-transparent">
                  Krishna Stay Inn
                </h2>
                <p className="text-xs uppercase tracking-widest text-rose-300/60">Luxury Boutique Stay</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm">
              Welcome to Krishna Stay Inn, your premium sanctuary in Bengaluru. 
              We blend traditional hospitality with modern luxury for an 
              unforgettable Karnataka experience.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  whileHover={{ y: -5, backgroundColor: '#7f1d1d' }}
                  className={`${social.bg} p-3 rounded-xl transition-all duration-300 shadow-lg border border-white/5`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
              Explore
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index} className="relative">
                  <Link
                    to={item.link}
                    onClick={scrollToTop}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-3 py-1.5 group"
                  >
                    <FaGreaterThan className={`text-[10px] transition-all ${hoveredLink === index ? 'text-red-500 translate-x-1' : 'text-gray-500'}`} />
                    <span className={`text-gray-300 group-hover:text-white transition-colors ${hoveredLink === index ? 'font-semibold' : ''}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Amenities Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-amber-600 rounded-full"></div>
              Amenities
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {facilities.map((facility, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                  <span className={`${facility.color} text-lg`}>{facility.icon}</span>
                  <span className="text-xs font-medium text-gray-300">{facility.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-rose-600 rounded-full"></div>
              Connect
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.link}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-all group"
                >
                  <div className={`text-lg ${contact.color} group-hover:scale-110 transition-transform`}>
                    {contact.icon}
                  </div>
                  <span className="text-xs text-gray-300 group-hover:text-white truncate">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-xs text-center md:text-left">
          <p>© {new Date().getFullYear()} Krishna Stay Inn. Built with excellence.</p>
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
            className="fixed bottom-8 right-8 z-50 p-4 bg-red-700 text-white rounded-2xl shadow-2xl hover:bg-red-600 transition-all"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;