import React, { useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaCreditCard,
  FaPaperPlane,
  FaUser,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const HomeContactUsSection = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitting(false);
          setIsSent(true);
          e.target.reset();
          
          // Reset success message after 3 seconds
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setIsSubmitting(false);
        }
      );
  };

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3
      }
    }
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50/30"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-pattern" style={{
            backgroundImage: `linear-gradient(rgba(254, 161, 22, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(254, 161, 22, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Heading with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 md:gap-5 mb-4">
            <div className="w-10 md:w-20 h-1 bg-gradient-to-r from-transparent to-amber-500"></div>
            <span className="text-amber-600 font-semibold tracking-widest text-sm md:text-base">
              CONTACT US
            </span>
            <div className="w-10 md:w-20 h-1 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Get in <span className="text-gradient bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or ready to book? Reach out to us for the best experience
          </p>
        </motion.div>

        {/* Contact Info Cards with Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-amber-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Location</h3>
              <a
                href="https://www.google.com/maps?q=No.+9/17,+1st+Main+Road,+Maruthi+Nagar,+Madivala,+Bangalore-560068"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-center block hover:text-amber-600 transition-colors duration-300 group-hover:translate-x-2 transition-transform"
              >
                No. 9/17, 1st Main Road,<br />Maruthi Nagar, Madivala,<br />Bangalore-560068
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Email</h3>
              <a
                href="mailto:krishnastayinn@gmail.com"
                className="text-gray-600 text-center block hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-2 transition-transform"
              >
                krishnastayinn@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-green-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaPhoneAlt className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Phone</h3>
              <div className="space-y-2">
                <a
                  href="tel:9972014954"
                  className="text-gray-600 text-center block hover:text-green-600 transition-colors duration-300 group-hover:translate-x-2 transition-transform"
                >
                  +91 99720 14954
                </a>
                <a
                  href="tel:9019336365"
                  className="text-gray-600 text-center block hover:text-green-600 transition-colors duration-300 group-hover:translate-x-2 transition-transform"
                >
                  +91 90193 36365
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Banner with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12 md:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 rounded-2xl blur-lg opacity-30"></div>
          <div className="relative bg-gradient-to-r from-amber-600 to-orange-500 p-6 md:p-8 rounded-2xl shadow-2xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaClock className="text-2xl text-white" />
                </div>
                <span className="text-white text-lg font-bold">
                  24-Hour Check-Out Time
                </span>
              </motion.div>
              
              <div className="hidden md:block w-px h-12 bg-white/30"></div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaCreditCard className="text-2xl text-white" />
                </div>
                <span className="text-white text-lg font-bold">
                  All Major Cards Accepted
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map Container with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.544196481804!2d77.62104347583347!3d12.91651748945127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5f7436071%3A0xd25c2d78848ef648!2sMaruthi%20Nagar%2C%20Madivala%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1698418845703!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="h-full min-h-[400px]"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Container with Animation */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaPaperPlane className="text-xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Book Your Stay</h2>
                  <p className="text-gray-600">Fill the form below to get in touch</p>
                </div>
              </div>

              {/* Success Message */}
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <FaPaperPlane className="text-sm" />
                    </div>
                    <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-4 md:space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FaUser className="text-amber-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FaEnvelope className="text-amber-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <FaPhoneAlt className="text-amber-600" />
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="+91 98765 43210"
                    required
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FaCalendarAlt className="text-amber-600" />
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      name="checkin"
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FaCalendarAlt className="text-amber-600" />
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      name="checkout"
                      className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <FaHome className="text-amber-600" />
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    name="rooms"
                    min="1"
                    max="10"
                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="1"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 md:py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Booking Request
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for Grid Pattern */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .grid-pattern {
          position: absolute;
          inset: 0;
          mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
        }
        
        .text-gradient {
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default HomeContactUsSection;