import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaWifi,
  FaSnowflake,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import slide1 from "../../assets/Delux Non Ac Room/Deluxe Double Non-AC Room.jpg";
import slide2 from "../../assets/Delux Non Ac Room/Deluxe_Non_Ac_Room_2_Sri_Krishna_Stay_In_Bengaluru.avif";
import slide3 from "../../assets/Delux Non Ac Room/Deluxe Non-AC Triple Room.png";
import slide4 from "../../assets/Delux Non Ac Room/Deluxe AC Triple Room.avif";
import slide5 from "../../assets/Delux Non Ac Room/Deluxe Non-AC Four Bed Room.avif";
import slide6 from "../../assets/Delux Non Ac Room/Deluxe AC Four Bed Room.jpg";




const HomeRoomsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const rooms = [
    {
      image: slide1,
      roomBed: "2 Bed",
      roomBath: "1 Bath",
      roomWifi: "Free WiFi",
      roomAc: "Non-AC",
      roomName: "Deluxe Double Non-AC Room",
      roomDesc: "Relax in our Deluxe Double Non-AC Room, offering comfort and convenience with modern amenities.",
      amenities: ["WiFi", "TV", "Coffee Maker", "Parking"],
      rating: 4.5,
      link: "/Deluxe_Double_Non-AC_Room",
      color: "from-blue-500 to-cyan-600"
    },
    {
      image: slide2,
      roomBed: "2 Bed",
      roomBath: "1 Bath",
      roomWifi: "Free WiFi",
      roomAc: "AC",
      roomName: "Deluxe Double AC Room",
      roomDesc: "Experience premium comfort and style in our Deluxe Double AC Room with modern amenities and climate control.",
      amenities: ["WiFi", "TV", "AC", "Mini Bar"],
      rating: 4.8,
      link: "/Deluxe_Double_AC_Room",
      color: "from-purple-500 to-pink-600"
    },
    {
      image: slide3,
      roomBed: "3 Bed",
      roomBath: "1 Bath",
      roomWifi: "Free WiFi",
      roomAc: "Non-AC",
      roomName: "Deluxe Non-AC Triple Room",
      roomDesc: "Spacious comfort for groups in our Deluxe Non-AC Triple Room with modern amenities and ample space.",
      amenities: ["WiFi", "TV", "Work Desk", "Parking"],
      rating: 4.6,
      link: "/Deluxe_Non-AC_Triple_Room",
      color: "from-amber-500 to-orange-600"
    },
    {
      image: slide4,
      roomBed: "3 Bed",
      roomBath: "1 Bath",
      roomWifi: "Free WiFi",
      roomAc: "AC",
      roomName: "Deluxe AC Triple Room",
      roomDesc: "Premium group accommodation with climate control, modern amenities, and spacious layout.",
      amenities: ["WiFi", "TV", "AC", "Room Service"],
      rating: 4.9,
      link: "/Deluxe_AC_Triple_Room",
      color: "from-emerald-500 to-teal-600"
    },
    {
      image: slide5,
      roomBed: "4 Bed",
      roomBath: "1 Bath",
      roomWifi: "Free WiFi",
      roomAc: "Non-AC",
      roomName: "Deluxe Non-AC Four Bed Room",
      roomDesc: "Perfect for families or groups with spacious layout and all essential amenities included.",
      amenities: ["WiFi", "TV", "Family Friendly", "Parking"],
      rating: 4.7,
      link: "/Deluxe_Non-AC_Four_Bed_Room",
      color: "from-red-500 to-rose-600"
    },
    {
      image: slide6,
      roomBed: "4 Bed",
      roomBath: "1 Bath",
      roomWifi: "Free WiFi",
      roomAc: "AC",
      roomName: "Deluxe AC Four Bed Room",
      roomDesc: "Ultimate luxury accommodation for large groups with premium amenities and climate control.",
      amenities: ["WiFi", "TV", "AC", "Mini Bar", "Room Service"],
      rating: 5.0,
      link: "/Deluxe_AC_Four_Bed_Room",
      color: "from-indigo-500 to-blue-600"
    },
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
    hidden: { y: 50, opacity: 0 },
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

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-amber-500"></div>
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="text-amber-600 font-bold tracking-widest text-sm uppercase"
            >
              Luxury Accommodation
            </motion.span>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Explore Our <span className="text-gradient bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">Premium</span> Rooms
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Experience unparalleled comfort with our range of luxurious rooms designed for your perfect stay
          </motion.p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${room.color}/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    animate={hoveredIndex === index ? "hover" : "initial"}
                    className="relative h-full"
                  >
                    <img
                      src={room.image}
                      alt={room.roomName}
                      className="w-full h-full object-cover"
                    />
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Room Type Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${room.color} text-white text-xs font-bold rounded-full`}>
                      {room.roomAc}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-sm text-gray-600 font-medium">Luxury Category</span>
                  </div>

                  {/* Room Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {room.roomName}
                  </h3>

                  {/* Room Description */}
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                    {room.roomDesc}
                  </p>

                  {/* Amenities Icons */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaBed className="text-blue-600 text-sm" />
                      </div>
                      <span className="text-sm text-gray-700">{room.roomBed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaBath className="text-green-600 text-sm" />
                      </div>
                      <span className="text-sm text-gray-700">{room.roomBath}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FaWifi className="text-purple-600 text-sm" />
                      </div>
                      <span className="text-sm text-gray-700">WiFi</span>
                    </div>
                    {room.roomAc.includes("AC") && (
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <FaSnowflake className="text-cyan-600 text-sm" />
                        </div>
                        <span className="text-sm text-gray-700">AC</span>
                      </div>
                    )}
                  </div>

                  {/* Additional Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((amenity, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                      >
                        {amenity}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link 
                      to="/contact" 
                      onClick={handleExploreClick}
                      className="group/btn relative"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2.5 bg-gradient-to-r ${room.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                      >
                        Book Now
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <FaArrowRight className="text-sm" />
                        </motion.span>
                      </motion.button>
                    </Link>

                    <Link 
                      to={room.link} 
                      onClick={handleExploreClick}
                      className="group/btn"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                      >
                        Details
                        <motion.div
                          animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                          transition={{ type: "spring" }}
                        >
                          <FaArrowRight className="text-sm" />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${room.color} rounded-2xl pointer-events-none transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/rooms">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              View All Rooms
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>
          </Link>
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .border-gradient-to-r {
          border-image: linear-gradient(to right, var(--tw-gradient-stops)) 1;
        }
      `}</style>
    </section>
  );
};

export default HomeRoomsSection;