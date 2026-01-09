// HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaWifi,
  FaArrowLeft,
  FaArrowRight,
  FaSwimmingPool,
  FaParking,
  FaConciergeBell,
  FaShower,
} from "react-icons/fa";
import {
  MdKingBed,
  MdRestaurant,
  MdSecurity,
  MdRoomService,
} from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import slide1 from "../../assets/Home_Page_Banners/slide1.webp";
import slide2 from "../../assets/Home_Page_Banners/slide2.webp";
import slide3 from "../../assets/Home_Page_Banners/slide3.webp";
import slide4 from "../../assets/Home_Page_Banners/slide4.webp";

import "./HeroSection.css";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const slides = [
    {
      image: slide1,
      title: "LUXURY ACCOMMODATION",
      subtitle: "Premium Comfort in Bangalore",
      description: "Experience unparalleled luxury with our premium suites and world-class amenities",
      features: [
        { icon: MdKingBed, label: "Premium Beds" },
        { icon: FaWifi, label: "High-Speed WiFi" },
        { icon: FaShower, label: "Rain Shower" },
        { icon: MdKingBed, label: "Premium Beds" },
      ],
    },
    {
      image: slide2,
      title: "PREMIUM AMENITIES",
      subtitle: "World-Class Facilities",
      description: "Enjoy our state-of-the-art facilities designed for your ultimate comfort",
      features: [
        { icon: MdKingBed, label: "Premium Beds" },
       { icon: MdRoomService, label: "Daily Housekeeping"},
       { icon: MdKingBed, label: "Premium Beds" },
        { icon: FaWifi, label: "High-Speed WiFi" },
      ],
    },
    {
      image: slide3,
      title: "MODERN FACILITIES",
      subtitle: "Comfort for Travelers",
      description: "Perfect blend of modern technology and traditional hospitality",
      features: [
        { icon: MdRoomService, label: "Room Service" },
        { icon: TbAirConditioning, label: "Smart AC" },
        { icon: MdRoomService, label: "Daily Housekeeping"},
        { icon: MdKingBed, label: "Premium Beds" },
      ],
    },
    {
      image: slide4,
      title: "EXCLUSIVE SERVICES",
      subtitle: "Personalized Hospitality",
      description: "Tailored services to make your stay truly memorable",
      features: [
        { icon: MdSecurity, label: "Secure Premises"},
        { icon: MdRoomService, label: "Daily Housekeeping"},
        { icon: FaWifi, label: "Free WiFi"},
        { icon: MdKingBed, label: "Premium Beds" },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false, 
    swipe: true,
    beforeChange: (current, next) => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide(next);
        setIsVisible(true);
      }, 300);
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="hero-wrapper">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="hero-image"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            />

            <div className="hero-overlay" />
            <div className="hero-gradient-overlay" />

            <AnimatePresence>
              {isVisible && currentSlide === index && (
                <motion.div
                  className="hero-content"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >

                  <motion.h1 variants={itemVariants}>
                    {slide.title}
                  </motion.h1>
                  <motion.h2 variants={itemVariants}>
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p
                    className="hero-description"
                    variants={itemVariants}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="hero-features"
                    variants={containerVariants}
                  >
                    {slide.features.map((f, i) => (
                      <motion.div
                        key={i}
                        className="hero-feature"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255,255,255,0.25)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="feature-icon-wrapper">
                          <f.icon />
                        </div>
                        <span>{f.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="hero-actions"
                    variants={itemVariants}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to="/rooms" className="btn-primary">
                        <span>Explore Rooms</span>
                        <div className="btn-hover-effect"></div>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to="/facilities" className="btn-secondary">
                        <span>View Facilities</span>
                        <div className="btn-hover-effect"></div>
                      </Link>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="slide-indicator"
                    variants={itemVariants}
                  >
                    {slides.map((_, idx) => (
                      <div
                        key={idx}
                        className={`indicator-dot ${idx === currentSlide ? "active" : ""}`}
                        onClick={() => sliderRef.current.slickGoTo(idx)}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </Slider>

      {/* Custom navigation arrows - shown on all devices */}
      <motion.div
        className="custom-arrow left"
        onClick={() => sliderRef.current.slickPrev()}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(138, 36, 88, 0.9)" }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft />
      </motion.div>
      <motion.div
        className="custom-arrow right"
        onClick={() => sliderRef.current.slickNext()}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(138, 36, 88, 0.9)" }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowRight />
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;