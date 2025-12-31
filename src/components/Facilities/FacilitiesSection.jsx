import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTv,
  FaFan,
  FaWifi,
  FaCookie,
  FaShower,
  FaWater,
  FaBed,
  FaClock,
  FaCarAlt,
  FaHandHoldingMedical,
  FaUserTie,
  FaHotTub,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaCrown,
  FaRegStar,
  FaMagic
} from "react-icons/fa";

const FacilitiesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const facilities = [
    {
      serviceName: "HD Television",
      serviceDesc: "Enjoy your favorite shows with crystal-clear HD television in every room with premium channels.",
      icon: <FaTv />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      features: ["Premium Channels", "4K Resolution", "Smart TV"]
    },
    {
      serviceName: "AC / Non-AC Rooms",
      serviceDesc: "Choose from our comfortable AC and Non-AC rooms with temperature control for your perfect comfort.",
      icon: <FaFan />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      features: ["Climate Control", "Energy Efficient", "Silent Operation"]
    },
    {
      serviceName: "24/7 Hot Water",
      serviceDesc: "Experience the convenience of 24/7 hot water with advanced heating systems for a relaxing stay.",
      icon: <FaShower />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      features: ["Instant Heating", "Solar Powered", "Premium Pressure"]
    },
    {
      serviceName: "Food Service",
      serviceDesc: "Savor delicious multi-cuisine meals with our prompt and quality 24/7 room service.",
      icon: <FaCookie />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      features: ["24/7 Service", "Multi-Cuisine", "Dietary Options"]
    },
    {
      serviceName: "Extra Beds",
      serviceDesc: "Comfortable extra beds available with premium mattresses for added comfort and convenience.",
      icon: <FaBed />,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-500/10",
      features: ["Premium Mattresses", "Memory Foam", "Adjustable"]
    },
    {
      serviceName: "Hot Beverages & Water",
      serviceDesc: "Enjoy refreshing hot beverages and purified mineral water available round the clock.",
      icon: <FaWater />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      features: ["Filtered Water", "Coffee Station", "Tea Selection"]
    },
    {
      serviceName: "24Hr Check-in/out",
      serviceDesc: "Flexible 24-hour check-in and check-out with express service for your convenience.",
      icon: <FaClock />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      features: ["Express Service", "Flexible Timing", "Quick Processing"]
    },
    {
      serviceName: "Car & Bike Parking",
      serviceDesc: "Secure covered parking with CCTV surveillance for cars and two-wheelers.",
      icon: <FaCarAlt />,
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-500/10",
      features: ["Covered Parking", "CCTV Security", "Valet Service"]
    },
    {
      serviceName: "Doctor On Call",
      serviceDesc: "Access to qualified doctors on call with emergency medical assistance available.",
      icon: <FaHandHoldingMedical />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      features: ["24/7 Medical", "Qualified Doctors", "Emergency Kit"]
    },
    {
      serviceName: "Travel Desk",
      serviceDesc: "Comprehensive travel assistance with booking services for flights, trains, and cabs.",
      icon: <FaUserTie />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      features: ["Ticket Booking", "Tour Planning", "Concierge"]
    },
    {
      serviceName: "Dry Cleaning",
      serviceDesc: "Premium dry cleaning and laundry services with express delivery options.",
      icon: <FaHotTub />,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      features: ["Same Day", "Premium Care", "Eco-Friendly"]
    },
    {
      serviceName: "High-Speed WiFi",
      serviceDesc: "Ultra-fast fiber optic WiFi throughout the property for seamless connectivity.",
      icon: <FaWifi />,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10",
      features: ["Fiber Optic", "Multi-Device", "High Speed"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FaCrown className="text-amber-500 text-xl" />
            <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
              PREMIUM FACILITIES
            </span>
            <FaCrown className="text-amber-500 text-xl" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Premium</span> Amenities
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience unparalleled comfort with our range of premium facilities designed for your perfect stay
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${facility.color}/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Icon Container */}
                <div className="relative p-8">
                  <div className={`absolute top-4 right-4 w-12 h-12 ${facility.bgColor} rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    variants={iconVariants}
                    animate={hoveredIndex === index ? "hover" : "visible"}
                    className={`relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-lg`}
                  >
                    <div className="text-white text-2xl">
                      {facility.icon}
                    </div>
                    
                    {/* Star Effect (replacing Sparkles) */}
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2"
                      >
                        <FaRegStar className="text-yellow-400 text-sm" />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Facility Name */}
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {facility.serviceName}
                  </h3>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {facility.features.map((feature, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={hoveredIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {facility.serviceDesc}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span className="text-sm font-semibold text-gray-700">Premium Service</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white"
                      >
                        <FaArrowRight className="text-xs" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Decoration */}
                <div className="relative h-1 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${facility.color}`}
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 rounded-full mb-6">
            <FaCheckCircle className="text-green-500 text-xl" />
            <span className="text-gray-700 font-semibold">
              All facilities maintained to highest standards
            </span>
            <FaCheckCircle className="text-green-500 text-xl" />
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Experience the perfect blend of comfort and luxury with our premium facilities. 
            Every amenity is designed to make your stay memorable and enjoyable.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Your Stay Now
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .text-gradient {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default FacilitiesSection;