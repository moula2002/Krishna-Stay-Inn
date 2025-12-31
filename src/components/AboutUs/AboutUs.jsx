import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeAboutUs from "../Home_Page_Sections/HomeAboutUs";
import AboutWhyChooseUs from "./About_Us_Sections/AboutWhyChooseUs";
import AboutUsSecondSection from "./About_Us_Sections/AboutUsSecondSection";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const AboutUs = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col gap-20 overflow-hidden">
      {/* Enhanced Banner Section with Parallax Effect */}
      <section className="relative flex justify-center items-center bg-[url('https://t3.ftcdn.net/jpg/06/42/46/30/360_F_642463002_wcOgUmpJRHjLuwKnUhWr8VKjXC6gfm4d.jpg')] bg-cover bg-fixed bg-center h-[70vh] md:h-[80vh]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#fea116]/20"></div>
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-[#fea116] rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-white rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute left-10 bottom-1/4 w-20 h-20 border-2 border-[#fea116]/30 rounded-full animate-spin-slow hidden md:block"></div>
        <div className="absolute right-10 top-1/3 w-12 h-12 border border-white/20 rounded-full animate-bounce delay-1000 hidden md:block"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center z-50 px-4"
        >
          <motion.div 
            variants={scaleUp}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 bg-[#fea116]/10 backdrop-blur-sm rounded-full border border-[#fea116]/30 mb-4">
              <span className="text-[#fea116] text-sm font-semibold tracking-wider">WELCOME TO OUR STORY</span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#fea116]">
              ABOUT US
            </span>
          </motion.h1>
          
          <motion.div 
            variants={fadeInUp}
            className="w-20 h-1 bg-gradient-to-r from-[#fea116] to-yellow-200 mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            Discover our journey, passion, and commitment to excellence
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Content Sections with Enhanced Animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <HomeAboutUs />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <AboutWhyChooseUs />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <AboutUsSecondSection />
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative py-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fea116] to-transparent"></div>
        
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Ready to Experience More?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-8 max-w-xl mx-auto"
          >
            Explore our world-class facilities and discover what sets us apart
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link to="/facilities" onClick={handleExploreClick}>
              <button className="group relative text-white uppercase font-bold tracking-wider bg-gradient-to-r from-[#fea116] to-[#e99015] px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-200">
                {/* Button shine effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                
                {/* Button text */}
                <span className="relative z-10 flex items-center gap-2">
                  Explore More
                  <motion.svg 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-1/4 w-24 h-24 bg-[#fea116]/5 rounded-full blur-xl"></div>
        <div className="absolute -top-10 right-1/4 w-32 h-32 bg-[#fea116]/5 rounded-full blur-xl"></div>
      </motion.section>
    </main>
  );
};

export default AboutUs;