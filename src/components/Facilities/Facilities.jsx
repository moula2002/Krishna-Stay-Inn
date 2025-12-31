import React from "react";
import { motion } from "framer-motion";
import FacilitiesSection from "./FacilitiesSection";

const Facilities = () => {
  const title = "FACILITIES";

  return (
    <main className="relative overflow-hidden">
      {/* Banner Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-600/10 to-orange-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-amber-600/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-4">
          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-transparent to-amber-500"></div>
            <span className="text-amber-500 font-semibold tracking-widest text-sm md:text-base">
              PREMIUM AMENITIES
            </span>
            <div className="w-20 md:w-32 h-1 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat mb-6"
          >
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Experience world-class amenities and premium facilities designed for your comfort
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl shadow-2xl overflow-hidden"
          >
            <span className="relative flex items-center gap-3">
              Explore Facilities
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2 tracking-widest">
            SCROLL
          </span>
          <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-amber-500 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Facilities Section */}
      <section className="relative">
        <FacilitiesSection />
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .text-gradient {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </main>
  );
};

export default Facilities;