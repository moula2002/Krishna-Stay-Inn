import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBed, 
  FaSnowflake, 
  FaUsers, 
  FaStar, 
  FaArrowRight, 
  FaChevronLeft, 
  FaChevronRight,
  FaWifi,
  FaTv,
  FaCoffee,
  FaShower,
  FaParking,
  FaUtensils
} from "react-icons/fa";
import { MdAcUnit, MdOutlineBathtub, MdLocalOffer, MdSecurity } from "react-icons/md";
import { TbAirConditioning, TbBeach } from "react-icons/tb";
import { GiHotMeal, GiVacuumCleaner } from "react-icons/gi";

// Import Sidebar Components
import DeluxeDoubleNonACRoom from "../SidebarComponent/DeluxeDoubleNonACRoom";
import DeluxeDoubleACRoom from "../SidebarComponent/DeluxeDoubleACRoom";
import DeluxeNonACTripleRoom from "../SidebarComponent/DeluxeNonACTripleRoom";
import DeluxeACTripleRoom from "../SidebarComponent/DeluxeACTripleRoom";
import DeluxeNonACFourBedRoom from "../SidebarComponent/DeluxeNonACFourBedRoom";
import DeluxeACFourBedRoom from "../SidebarComponent/DeluxeACFourBedRoom";

// Import Images
import roomsBg from "../../assets/Home_Page_Banners/roomsbg.webp";
import galleryImg1 from "../../assets/gallery images/1.webp";
import galleryImg2 from "../../assets/gallery images/2.webp";
import galleryImg3 from "../../assets/gallery images/3.webp";
import galleryImg4 from "../../assets/gallery images/4.webp";
import galleryImg5 from "../../assets/gallery images/5.webp";
import galleryImg6 from "../../assets/gallery images/6.webp";

const Rooms = () => {
  const images = [
    { img: galleryImg1 },
    { img: galleryImg2 },
    { img: galleryImg3 },
    { img: galleryImg4 },
    { img: galleryImg5 },
    { img: galleryImg6 },
  ];

  const rooms = [
    {
      id: 1,
      name: "Deluxe Double Non-AC Room",
      content: <DeluxeDoubleNonACRoom />,
      icon: <FaBed className="text-xl" />,
      features: ["Double Bed", "Non-AC", "Garden View", "Free WiFi", "Smart TV", "Mini Fridge"],
      rating: 4.2,
      isPopular: false,
      color: "from-blue-400 via-blue-500 to-blue-600",
      accentColor: "bg-blue-500",
      tagline: "Comfort meets affordability"
    },
    {
      id: 2,
      name: "Deluxe Double AC Room",
      content: <DeluxeDoubleACRoom />,
      icon: <MdAcUnit className="text-xl" />,
      features: ["Double Bed", "AC", "Sea View", "Free Breakfast", "Balcony", "Room Service"],
      rating: 4.7,
      isPopular: true,
      color: "from-emerald-400 via-emerald-500 to-emerald-600",
      accentColor: "bg-emerald-500",
      tagline: "Luxury with breathtaking views"
    },
    {
      id: 3,
      name: "Deluxe Non-AC Triple Room",
      content: <DeluxeNonACTripleRoom />,
      icon: <FaUsers className="text-xl" />,
      features: ["Triple Bed", "Non-AC", "Mountain View", "Sofa", "Study Table", "Wardrobe"],
      rating: 4.4,
      isPopular: false,
      color: "from-amber-400 via-amber-500 to-amber-600",
      accentColor: "bg-amber-500",
      tagline: "Perfect for small families"
    },
    {
      id: 4,
      name: "Deluxe AC Triple Room",
      content: <DeluxeACTripleRoom />,
      icon: <TbAirConditioning className="text-xl" />,
      features: ["Triple Bed", "AC", "Pool View", "Mini Bar", "Jacuzzi", "Private Terrace"],
      rating: 4.8,
      isPopular: true,
      color: "from-purple-400 via-purple-500 to-purple-600",
      accentColor: "bg-purple-500",
      tagline: "Ultimate relaxation experience"
    },
    {
      id: 5,
      name: "Deluxe Non-AC Four Bed Room",
      content: <DeluxeNonACFourBedRoom />,
      icon: <FaBed className="text-xl" />,
      features: ["Four Beds", "Non-AC", "Family Room", "Sofa Set", "Dining Area", "Kitchenette"],
      rating: 4.5,
      isPopular: false,
      color: "from-rose-400 via-rose-500 to-rose-600",
      accentColor: "bg-rose-500",
      tagline: "Spacious family accommodation"
    },
    {
      id: 6,
      name: "Deluxe AC Four Bed Room",
      content: <DeluxeACFourBedRoom />,
      icon: <FaSnowflake className="text-xl" />,
      features: ["Four Beds", "AC", "Suite", "Jacuzzi", "Butler Service", "Private Pool"],
      rating: 4.9,
      isPopular: true,
      color: "from-indigo-400 via-indigo-500 to-indigo-600",
      accentColor: "bg-indigo-500",
      tagline: "Presidential suite luxury"
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-carousel for gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const roomVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.6, 
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }),
    hover: { 
      y: -10, 
      scale: 1.03, 
      transition: { 
        duration: 0.3, 
        ease: "easeInOut",
        type: "spring",
        stiffness: 400,
        damping: 25
      } 
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { 
        duration: 0.4,
        ease: "easeIn"
      } 
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollProgress * 50}px)`,
        }}
      >
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${roomsBg})`,
            scale: 1 + scrollProgress * 0.1,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 mix-blend-overlay"></div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-10 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <FaStar className="text-yellow-300 text-2xl" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
                Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">Rooms</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-100 text-xl md:text-3xl mb-10 font-light drop-shadow-lg max-w-3xl mx-auto"
            >
              Where elegance meets comfort in every detail
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 group hover:scale-105">
                <FaStar className="group-hover:rotate-12 transition-transform" /> 
                Premium Selection
              </div>
              <div className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                6 Luxury Room Types
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white/60 text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mt-2 flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </motion.section>

      <div className="container mx-auto px-4 py-16 relative z-20" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8"
        >
          
          {/* Sidebar */}
          <section className="lg:w-1/3 space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Select Your Room</h2>
                <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full">
                  {rooms.length} Options
                </span>
              </div>
              
              <div className="space-y-4">
                {rooms.map((room, index) => (
                  <motion.div
                    key={room.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={roomVariants}
                    onClick={() => setSelectedIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative cursor-pointer p-5 rounded-2xl transition-all duration-300 border-2 overflow-hidden group ${
                      selectedIndex === index
                        ? `border-transparent shadow-2xl scale-[1.02]`
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${room.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                      selectedIndex === index ? 'opacity-20' : ''
                    }`}></div>
                    
                    {/* Popular Badge */}
                    {room.isPopular && (
                      <div className="absolute -top-2 -right-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-sm"></div>
                          <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <FaStar className="text-xs" /> POPULAR
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl transition-all duration-300 ${
                          selectedIndex === index 
                            ? 'bg-white text-white shadow-lg scale-110'
                            : 'bg-gradient-to-br from-white to-gray-50 shadow-md group-hover:shadow-lg'
                        }`} style={{
                          background: selectedIndex === index ? `linear-gradient(135deg, ${room.color.replace('from-', '').split(' ')[0]}, ${room.color.split(' ').pop()})` : ''
                        }}>
                          {room.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-gray-900">
                            {room.name}
                          </h3>
                          <p className={`text-sm transition-colors ${
                            selectedIndex === index ? 'text-white/90' : 'text-gray-500 group-hover:text-gray-600'
                          }`}>
                            {room.tagline}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={`text-xs ${
                                  i < Math.floor(room.rating) 
                                    ? 'text-amber-400' 
                                    : 'text-gray-300'
                                }`} />
                              ))}
                            </div>
                            <span className={`text-xs font-medium ${
                              selectedIndex === index ? 'text-white' : 'text-gray-400'
                            }`}>
                              {room.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features Tags */}
                    <div className="relative mt-4 flex flex-wrap gap-2">
                      {room.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${
                          selectedIndex === index
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                        }`}>
                          {feature}
                        </span>
                      ))}
                      {room.features.length > 3 && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          selectedIndex === index
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                        }`}>
                          +{room.features.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Animated Arrow */}
                    <motion.div
                      animate={{ x: hoveredIndex === index || selectedIndex === index ? 5 : 0 }}
                      className={`absolute right-5 top-1/2 transform -translate-y-1/2 ${
                        selectedIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-gray-400'
                      }`}
                    >
                      <FaArrowRight />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Amenities Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 border border-blue-100"
            >
              <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MdLocalOffer className="text-blue-500 text-xl" />
                Premium Amenities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaWifi, label: "High-speed WiFi", color: "text-blue-500" },
                  { icon: FaUtensils, label: "Restaurant", color: "text-amber-500" },
                  { icon: FaParking, label: "Free Parking", color: "text-emerald-500" },
                  { icon: GiHotMeal, label: "24/7 Room Service", color: "text-rose-500" },
                ].map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className={`p-2 rounded-lg bg-white ${amenity.color}`}>
                      <amenity.icon />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Main Content Area */}
          <section className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
              >
                {/* Floating Price Badge */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 right-6 z-10"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur-lg opacity-60"></div>
                    <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl shadow-2xl">
                      <div className="text-3xl font-black">{rooms[selectedIndex].price}</div>
                      <div className="text-xs opacity-90">per night</div>
                    </div>
                  </div>
                </motion.div>

                {/* Detail Header */}
                <div className={`relative bg-gradient-to-r ${rooms[selectedIndex].color} p-8 md:p-12 text-white overflow-hidden`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                      backgroundSize: '100px 100px'
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start gap-6">
                      <div>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            {rooms[selectedIndex].name}
                          </h2>
                          <p className="text-xl opacity-90 mb-6">
                            {rooms[selectedIndex].tagline}
                          </p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="flex items-center gap-4"
                        >
                          <div className="flex text-amber-300">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className={i < Math.floor(rooms[selectedIndex].rating) ? "opacity-100" : "opacity-30"} />
                            ))}
                          </div>
                          <span className="font-medium text-lg">{rooms[selectedIndex].rating} Excellent Rating</span>
                          {rooms[selectedIndex].isPopular && (
                            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold flex items-center gap-2">
                              <FaStar className="text-amber-300" /> Most Popular
                            </span>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room Features Grid */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="p-8 border-b border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Room Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {rooms[selectedIndex].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 group hover:border-gray-200 transition-all"
                      >
                        <div className={`p-2 rounded-lg ${rooms[selectedIndex].accentColor} text-white`}>
                          {idx === 0 && <FaBed />}
                          {idx === 1 && <MdAcUnit />}
                          {idx === 2 && <TbBeach />}
                          {idx === 3 && <FaCoffee />}
                          {idx === 4 && <FaTv />}
                          {idx === 5 && <FaShower />}
                        </div>
                        <span className="font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Actual Room Content from Components */}
                <div className="p-8">
                  {rooms[selectedIndex].content}
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 pt-8 border-t border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-gray-600">
                        <div className="flex items-center gap-2 mb-2">
                          <MdLocalOffer className="text-green-500" />
                          <span className="font-semibold">Best Price Guarantee</span>
                        </div>
                        <p className="text-sm">Book directly for the best rates</p>
                      </div>
                      
  
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Gallery Preview with Animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl text-gray-800">Photo Gallery</h3>
                <div className="flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        imageIndex === idx 
                          ? `w-8 ${rooms[selectedIndex].accentColor}` 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-64 group">
                <motion.img
                  key={imageIndex}
                  src={images[imageIndex].img}
                  alt="Gallery"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => setImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() => setImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default Rooms;