import React, { useState, useEffect } from 'react';
import GalleryTabs from './Gallery_Sections/GalleryTabs';
import { motion } from 'framer-motion';

// Import the image from your assets
import galleryHeroBg from "../../assets/Delux Non Ac Room/Deluxe AC Four Bed Room.jpg"; 

const Gallery = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <main className="flex flex-col gap-0">
      {/* Hero Section - UPDATED WITH BACKGROUND IMAGE */}
      <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img 
            src={galleryHeroBg} 
            alt="Gallery Background" 
            className="w-full h-full object-cover"
          />
          {/* Darker Overlay to make text pop (Removed the solid black/blue gradient) */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent"></div>
              <span className="uppercase font-bold text-[#FEA116] tracking-widest text-sm">
                Visual Journey
              </span>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent"></div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-2xl"
            >
              <span className="text-white">Discover Our</span>
              <br />
              <span className="bg-gradient-to-r from-[#FEA116] via-yellow-400 to-[#FEA116] bg-clip-text text-transparent">
                Visual Story
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-100 text-lg max-w-3xl mx-auto mb-8 font-medium drop-shadow-md"
            >
              Immerse yourself in the beauty and elegance of Shri Krishna Stay through 
              our curated collection of premium photographs
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/80 text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              ></motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-4 mb-4">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent"></div>
              <span className="uppercase font-bold text-[#FEA116] tracking-widest text-sm">
                Premium Collection
              </span>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FEA116] to-transparent"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="relative inline-block">
                Explore Our
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FEA116] to-yellow-400"></span>
              </span>
              <br />
              <span className="text-[#FEA116] mt-2 block">
                Visual Gallery
              </span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Experience luxury and comfort through our exclusive collection of professionally 
              captured moments. Each image tells a story of elegance and exceptional service.
            </p>
          </div>

          {/* Feature preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "High Resolution", icon: "📷" },
              { label: "Professionally Edited", icon: "🎨" },
              { label: "360° Views", icon: "🔄" },
              { label: "Real Guest Photos", icon: "👥" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900">{feature.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Tabs Section */}
      <section className="py-8 bg-gray-50">
        <GalleryTabs />
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-[#FEA116] to-yellow-500"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience It Yourself?
            </h2>
            
            <p className="text-white/90 mb-8">
              Book your stay now and create your own beautiful memories at Shri Krishna Stay
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#FEA116] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Stay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Gallery;