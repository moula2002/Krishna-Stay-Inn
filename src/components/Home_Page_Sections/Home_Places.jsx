import React, { useState } from "react";
import {
  FaPlane,
  FaSubway,
  FaTrain,
  FaBus,
  FaHospital,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaRoute,
  FaClock,
  FaCompass,
  FaMap,
  FaDirections,
  FaCar,
  FaWalking,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Home_Places = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);
  
  const places = [
    {
      category: "Airport",
      icon: <FaPlane />,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      data: [
        {
          name: "Bangalore International Airport",
          distance: "33KM",
          time: "1HR",
          travelMode: "Car",
          icon: <FaCar />,
          rating: 4.8,
          description: "International airport with domestic and international flights",
        },
      ],
    },
    {
      category: "Metro",
      icon: <FaSubway />,
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      data: [
        { 
          name: "Jayanagar", 
          distance: "3.5KM", 
          time: "18min",
          travelMode: "Metro",
          icon: <FaSubway />,
          rating: 4.5,
          description: "Nearest metro station on Purple Line"
        },
        { 
          name: "BTM Layout", 
          distance: "1.6KM", 
          time: "5min",
          travelMode: "Walking",
          icon: <FaWalking />,
          rating: 4.7,
          description: "Closest metro station access"
        },
        { 
          name: "Rashtriya Vidyalaya Road", 
          distance: "3.3KM", 
          time: "18min",
          travelMode: "Auto",
          icon: <FaCar />,
          rating: 4.3,
          description: "Metro station with parking facility"
        },
      ],
    },
    {
      category: "Railway",
      icon: <FaTrain />,
      color: "from-amber-500 to-orange-400",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      data: [
        { 
          name: "KSR Railway Station", 
          distance: "11KM", 
          time: "50min",
          travelMode: "Car",
          icon: <FaCar />,
          rating: 4.6,
          description: "Main railway station of Bangalore"
        },
        { 
          name: "Yeshwanthpur", 
          distance: "17KM", 
          time: "1HR",
          travelMode: "Train",
          icon: <FaTrain />,
          rating: 4.4,
          description: "Major railway junction"
        },
        { 
          name: "Cantonment Railway", 
          distance: "8.5KM", 
          time: "45min",
          travelMode: "Car",
          icon: <FaCar />,
          rating: 4.5,
          description: "Heritage railway station"
        },
      ],
    },
    {
      category: "Buses",
      icon: <FaBus />,
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      data: [
        { 
          name: "Koramangala", 
          distance: "2.1KM", 
          time: "9min",
          travelMode: "Bus",
          icon: <FaBus />,
          rating: 4.2,
          description: "Major bus junction"
        },
        { 
          name: "Silk Board", 
          distance: "2.9KM", 
          time: "11min",
          travelMode: "Bus",
          icon: <FaBus />,
          rating: 4.0,
          description: "Bus interchange point"
        },
        { 
          name: "Madiwala", 
          distance: "100M", 
          time: "8min",
          travelMode: "Walking",
          icon: <FaWalking />,
          rating: 4.8,
          description: "Nearest bus stop"
        },
      ],
    },
    {
      category: "Hospital",
      icon: <FaHospital />,
      color: "from-red-500 to-rose-400",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      data: [
        { 
          name: "St John's Hospital", 
          distance: "500M", 
          time: "5min",
          travelMode: "Walking",
          icon: <FaWalking />,
          rating: 4.9,
          description: "Multi-specialty hospital"
        },
      ],
    },
    {
      category: "Education",
      icon: <FaUserGraduate />,
      color: "from-indigo-500 to-violet-400",
      bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
      data: [
        { 
          name: "Christ University", 
          distance: "1KM", 
          time: "9min",
          travelMode: "Walking",
          icon: <FaWalking />,
          rating: 4.7,
          description: "Premium educational institution"
        },
        { 
          name: "Jyoti Nivas College", 
          distance: "1KM", 
          time: "9min",
          travelMode: "Walking",
          icon: <FaWalking />,
          rating: 4.6,
          description: "Autonomous college"
        },
        { 
          name: "BTM Layout", 
          distance: "500M", 
          time: "4min",
          travelMode: "Walking",
          icon: <FaWalking />,
          rating: 4.5,
          description: "Educational hub area"
        },
      ],
    },
  ];

  const nextMobileSlide = () => {
    setMobileSlideIndex((prev) => (prev + 1) % places.length);
  };

  const prevMobileSlide = () => {
    setMobileSlideIndex((prev) => (prev - 1 + places.length) % places.length);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center gap-3 mb-4 px-4 py-2 bg-[#FEA116]/10 rounded-full"
          >
            <FaCompass className="text-[#FEA116]" />
            <span className="font-bold text-[#FEA116] tracking-widest text-xs md:text-sm">
              ACCESSIBILITY GUIDE
            </span>
          </motion.div>
          
          <h1 className="font-bold text-3xl md:text-5xl mb-4">
            <span className="relative inline-block">
              Discover
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FEA116] to-yellow-400"
              />
            </span>
            <br />
            <span className="text-[#FEA116]">
              Nearby Destinations
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-2"
          >
            Strategically located with seamless connectivity to all major transport hubs, 
            healthcare facilities, and premier educational institutions.
          </motion.p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {places.map((place, index) => (
              <motion.button
                key={place.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCategory(place.category);
                  scrollToSection('desktop-table');
                }}
                className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === place.category
                    ? `${place.color.replace('from-', 'bg-gradient-to-r from-')} text-white shadow-lg`
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{place.icon}</span>
                <span className="font-semibold text-sm md:text-base">{place.category}</span>
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/30">
                  {place.data.length}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile View - Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-300 ease-out" 
                   style={{ transform: `translateX(-${mobileSlideIndex * 100}%)` }}>
                {places.map((place, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`rounded-2xl shadow-lg overflow-hidden ${place.bgColor}`}
                    >
                      <div className={`p-6 ${place.color.replace('from-', 'bg-gradient-to-r from-')}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-white/20 rounded-xl">
                            <div className="text-2xl text-white">{place.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{place.category}</h3>
                            <p className="text-white/80 text-sm">{place.data.length} locations</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        {place.data.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="mb-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-start gap-2">
                                <div className="p-1.5 bg-gray-100 rounded-md">
                                  <FaMapMarkerAlt className="text-[#FEA116] text-sm" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                                  <p className="text-gray-600 text-xs">{item.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaStar className="text-amber-400 text-xs" />
                                <span className="text-xs font-bold">{item.rating}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="text-center">
                                  <div className="flex items-center gap-1 text-gray-600">
                                    <FaRoute className="text-xs" />
                                    <span className="text-xs">Distance</span>
                                  </div>
                                  <p className="font-bold text-gray-900">{item.distance}</p>
                                </div>
                                
                                <div className="text-center">
                                  <div className="flex items-center gap-1 text-gray-600">
                                    <FaClock className="text-xs" />
                                    <span className="text-xs">Time</span>
                                  </div>
                                  <p className="font-bold text-gray-900">{item.time}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md">
                                <span className="text-gray-700 text-xs">{item.travelMode}</span>
                                <span className="text-gray-400 text-xs">{item.icon}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevMobileSlide}
                className="p-2 bg-[#FEA116] text-white rounded-full shadow-md"
              >
                <FaChevronLeft />
              </motion.button>
              
              <div className="flex gap-1.5">
                {places.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileSlideIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === mobileSlideIndex 
                        ? 'bg-[#FEA116]' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextMobileSlide}
                className="p-2 bg-[#FEA116] text-white rounded-full shadow-md"
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Desktop View - Enhanced Table */}
        <motion.div
          id="desktop-table"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                    <th className="py-6 px-6 text-left">
                      <div className="flex items-center gap-3 text-white text-lg font-semibold">
                        <div className="p-2 bg-[#FEA116] rounded-lg">
                          <FaMap className="text-white" />
                        </div>
                        Category
                      </div>
                    </th>
                    <th className="py-6 px-6 text-left text-white text-lg font-semibold">Destination</th>
                    <th className="py-6 px-6 text-left text-white text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <FaRoute />
                        Distance
                      </div>
                    </th>
                    <th className="py-6 px-6 text-left text-white text-lg font-semibold">
                      <div className="flex items-center gap-2">
                        <FaClock />
                        Time
                      </div>
                    </th>
                    <th className="py-6 px-6 text-left text-white text-lg font-semibold">Actions</th>
                  </tr>
                </thead>
                
                <tbody>
                  {places.map((place, categoryIndex) => (
                    <React.Fragment key={place.category}>
                      {/* Category Header */}
                      <motion.tr
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 }}
                        className="bg-gray-50 border-b border-gray-100"
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-4 group">
                            <div className={`p-3 rounded-xl ${place.bgColor}`}>
                              <div className={`text-2xl ${place.color.replace('from-', 'text-')}`}>
                                {place.icon}
                              </div>
                            </div>
                            <span className="text-lg font-bold text-gray-900">
                              {place.category}
                            </span>
                          </div>
                        </td>
                        <td colSpan={4}></td>
                      </motion.tr>
                      
                      {/* Places */}
                      {place.data.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                          className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-300"
                        >
                          <td className="py-4 px-6">
                            <div className="pl-12">
                              <div className="w-2 h-2 bg-[#FEA116] rounded-full"></div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gray-100 rounded-lg">
                                <FaMapMarkerAlt className="text-[#FEA116]" />
                              </div>
                              <div>
                                <span className="font-medium text-gray-900">
                                  {item.name}
                                </span>
                                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                      key={star}
                                      className={`text-xs ${
                                        star <= Math.floor(item.rating)
                                          ? "text-amber-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                  <span className="text-xs font-bold text-gray-700 ml-1">{item.rating}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                              <FaRoute className="text-blue-600 text-sm" />
                              <span className="font-bold text-gray-900">{item.distance}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                              <FaClock className="text-green-600 text-sm" />
                              <span className="font-bold text-gray-900">{item.time}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 bg-[#FEA116] text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                              onClick={() => scrollToSection('cta-section')}
                            >
                              <FaDirections />
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FEA116]/20 rounded-lg">
                    <FaCompass className="text-[#FEA116]" />
                  </div>
                  <p className="text-white/80 text-sm">
                    All distances are approximate travel times
                  </p>
                </div>
           
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "6", label: "Categories", icon: <FaCompass />, color: "bg-blue-500" },
            { value: "14+", label: "Locations", icon: <FaMapMarkerAlt />, color: "bg-purple-500" },
            { value: "500M", label: "Nearest Point", icon: <FaWalking />, color: "bg-green-500" },
            { value: "33KM", label: "Farthest Point", icon: <FaCar />, color: "bg-amber-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`p-3 ${stat.color} rounded-lg inline-block mb-3`}>
                <div className="text-white text-xl">{stat.icon}</div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          id="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-[#FEA116] to-yellow-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Directions?</h3>
            <p className="text-white/90 mb-6 max-w-lg mx-auto">
              Get personalized route suggestions based on your preferred mode of transportation
            </p>
         
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home_Places;