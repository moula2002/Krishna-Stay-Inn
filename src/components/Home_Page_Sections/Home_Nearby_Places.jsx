import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaArrowRight, FaStar } from "react-icons/fa";

// Import your images
import Iscon from "../../assets/Nearby Places/Iscon Temple.webp";
import KSR from "../../assets/Nearby Places/KSR Railway Station.webp";
import KBS from "../../assets/Nearby Places/Majestic.webp";
import VidhanaSoudha from "../../assets/Nearby Places/Vidhana Souda.webp";

const Home_Nearby_Places = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const places = [
    {
      img: Iscon,
      title: "Iscon Temple Bengaluru",
      desc: "A spiritual haven known for its stunning architecture and peaceful ambiance",
      km: "1 KM",
      rating: 4.8,
      category: "Religious",
      travelTime: "5 min drive",
    },
    {
      img: KSR,
      title: "Krantiveera Sangolli Rayanna Railway Station",
      desc: "Major railway hub connecting Bangalore to various destinations",
      km: "2 KM",
      rating: 4.5,
      category: "Transport",
      travelTime: "8 min drive",
    },
    {
      img: KBS,
      title: "Kempegowda Bus Station",
      desc: "Central bus terminal with extensive connectivity across Karnataka",
      km: "3 KM",
      rating: 4.3,
      category: "Transport",
      travelTime: "10 min drive",
    },
    {
      img: VidhanaSoudha,
      title: "Vidhana Soudha",
      desc: "Iconic seat of Karnataka's legislature with magnificent architecture",
      km: "1.5 KM",
      rating: 4.9,
      category: "Landmark",
      travelTime: "7 min drive",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FEA116]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FEA116]/5 rounded-full blur-3xl"></div>
      
      {/* Map icon decoration */}
      <div className="absolute top-10 right-10 opacity-5">
        <FaMapMarkerAlt className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-[#FEA116] to-orange-300 rounded-full"
              ></motion.div>
              
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase font-bold font-montserrat text-[#FEA116] tracking-wider text-lg"
              >
                Nearby Places
              </motion.span>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-orange-300 to-[#FEA116] rounded-full"
              ></motion.div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold font-montserrat text-4xl md:text-5xl lg:text-6xl mb-4"
            >
              Explore Nearby{" "}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative text-[#FEA116] uppercase inline-block"
              >
                Places
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#FEA116] to-orange-300 rounded-full"></span>
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Discover iconic landmarks and essential services just minutes away from our location
            </motion.p>
          </div>
        </motion.div>

        {/* Slider Section */}
        <motion.div 
          variants={slideInVariants}
          className="relative"
        >
          <div className="slider-container overflow-visible">
            <Slider {...settings}>
              {places.map((place, index) => (
                <motion.div
                  key={place.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-6"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                  >
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-[#FEA116] text-white text-xs font-bold rounded-full shadow-lg">
                        {place.category}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                      <FaStar className="text-yellow-500 w-4 h-4" />
                      <span className="text-sm font-bold text-gray-800">{place.rating}</span>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <motion.img
                        src={place.img}
                        alt={place.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Distance Badge */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                      >
                        <FaMapMarkerAlt className="text-[#FEA116] w-4 h-4" />
                        <span className="font-bold text-gray-800">{place.km}</span>
                        <span className="text-xs text-gray-500">• {place.travelTime}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]"
                      >
                        {place.title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-sm mb-4 line-clamp-3"
                      >
                        {place.desc}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-between mt-4"
                      >
                        <span className="text-sm font-semibold text-[#FEA116]">
                          Get Directions
                        </span>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="w-8 h-8 rounded-full bg-[#FEA116] flex items-center justify-center text-white hover:bg-[#e99015] transition-colors"
                        >
                          <FaArrowRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FEA116]/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Custom Navigation Arrows (if needed) */}
          <style jsx>{`
            .slick-prev, .slick-next {
              width: 50px;
              height: 50px;
              background: white;
              border-radius: 50%;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              z-index: 10;
              display: flex !important;
              align-items: center;
              justify-content: center;
            }
            .slick-prev:hover, .slick-next:hover {
              background: #FEA116;
              color: white;
            }
            .slick-prev {
              left: -60px;
            }
            .slick-next {
              right: -60px;
            }
            .slick-prev:before, .slick-next:before {
              font-size: 24px;
              color: #FEA116;
              opacity: 1;
            }
            .slick-prev:hover:before, .slick-next:hover:before {
              color: white;
            }
            .slick-dots li button:before {
              font-size: 12px;
              color: #FEA116;
            }
            .slick-dots li.slick-active button:before {
              color: #FEA116;
            }
          `}</style>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            More amazing places are waiting to be discovered
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#FEA116] to-[#e99015] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              View All Nearby Places
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#e99015] to-[#FEA116] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home_Nearby_Places;