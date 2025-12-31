import React from "react";
import { motion } from "framer-motion";
import { FaBed, FaShieldAlt, FaPhoneAlt, FaStar, FaCrown, FaCheckCircle } from "react-icons/fa";
import AboutImage from "../../../assets/Home_About_Us.png";

const AboutWhyChooseUs = () => {
  const features = [
    {
      icon: <FaBed className="text-white" />,
      title: "Premium Living Experience",
      description: "Experience unparalleled comfort with our meticulously designed rooms featuring premium bedding, luxurious amenities, and elegant decor.",
      highlight: "Luxury Redefined"
    },
    {
      icon: <FaShieldAlt className="text-white" />,
      title: "Advanced Security System",
      description: "Your safety is our priority with 24/7 CCTV surveillance, secure access control, and professional security personnel.",
      highlight: "100% Secure"
    },
    {
      icon: <FaPhoneAlt className="text-white" />,
      title: "Round-the-Clock Support",
      description: "Our dedicated concierge team is available 24/7 to assist with all your needs, from reservations to special requests.",
      highlight: "Always Available"
    },
    {
      icon: <FaCheckCircle className="text-white" />,
      title: "Premium Quality Service",
      description: "Experience service excellence with our trained staff, attention to detail, and commitment to exceeding your expectations.",
      highlight: "Excellence Guaranteed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(254, 161, 22, 0.15)",
      transition: {
        duration: 0.3
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
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-30"></div>
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
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent"></div>
            <span className="text-[#FEA116] font-bold tracking-widest text-sm uppercase flex items-center gap-2">
              <FaCrown className="text-amber-500" />
              PREMIUM EXPERIENCE
              <FaCrown className="text-amber-500" />
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why <span className="relative">
              <span className="text-[#FEA116]">Choose</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FEA116] to-amber-400 rounded-full"></span>
            </span> Us
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of luxury, comfort, and exceptional service at Shri Krishna Stay
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Image Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FEA116]/20 to-amber-400/20 rounded-2xl blur-xl"></div>
              
              {/* Main Image */}
              <img
                src={AboutImage}
                alt="Luxury Hotel Experience"
                className="relative w-full rounded-2xl shadow-2xl border-8 border-white"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
              </motion.div>
              
              {/* Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6  transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 w-[568px]"
              >
                <div className="grid grid-cols-3 gap-2 ml-6">
                  {[
                    { number: "500+", label: "Happy Guests" },
                    { number: "4.9", label: "Rating" },
                    { number: "100%", label: "Satisfaction" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon Container */}
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FEA116] to-amber-500 rounded-xl blur-md opacity-50 group-hover:opacity-70"></div>
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#FEA116] to-amber-500 flex items-center justify-center shadow-lg">
                        {feature.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h4>
                        <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-2 rounded-full bg-gradient-to-r from-[#FEA116] to-amber-400"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-[#FEA116] to-amber-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Book Your Premium Stay Now</span>
                <FaStar className="animate-pulse" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-amber-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-10 w-3 h-3 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
    </section>
  );
};

export default AboutWhyChooseUs;