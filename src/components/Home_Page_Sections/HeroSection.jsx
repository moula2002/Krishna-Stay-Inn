import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { 
  FaArrowRight, FaArrowLeft, 
  FaWifi, FaTv, FaBed, FaConciergeBell,
  FaSwimmingPool, FaParking, FaHotTub,
  FaUtensils, FaSnowflake, FaShower,
  FaCar, FaUmbrellaBeach, FaDumbbell
} from "react-icons/fa";
import { 
  MdKingBed, MdMeetingRoom, MdRoomService,
  MdLocalLaundryService, MdAcUnit, MdSecurity,
  MdRestaurant, MdLocalCafe, MdSpa
} from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import slide1 from "../../assets/Home_Page_Banners/slide1.webp";
import slide2 from "../../assets/Home_Page_Banners/slide2.webp";
import slide3 from "../../assets/Home_Page_Banners/slide3.webp";
import slide4 from "../../assets/Home_Page_Banners/slide4.webp";
import "./HeroSection.css";
import { Link } from "react-router-dom";

// Enhanced Arrow Component - Mobile Responsive
const EnhancedArrow = ({ className, style, onClick, icon: Icon, direction }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`${className} enhanced-arrow hidden lg:flex`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        cursor: "pointer",
        opacity: isHovered ? 1 : 0.9,
        width: window.innerWidth < 768 ? "40px" : "48px",
        height: window.innerWidth < 768 ? "40px" : "48px",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Pulsing ring effect - Hidden on mobile */}
        <div className={`absolute inset-0 rounded-full ${
          direction === 'next'
            ? 'bg-gradient-to-r from-[#6a1c44]/30 to-[#8a2458]/30'
            : 'bg-gradient-to-r from-[#4d142f]/30 to-[#6a1c44]/30'
        } ${isHovered ? 'animate-ping' : ''} hidden lg:block`}></div>
        
        {/* Main button - Responsive sizing */}
        <div className={`relative rounded-full flex items-center justify-center ${
          direction === 'next'
            ? 'bg-gradient-to-r from-[#8a2458] to-[#6a1c44] shadow-lg'
            : 'bg-gradient-to-r from-[#4d142f] to-[#6a1c44] shadow-lg'
        } ${isHovered ? 'scale-110 shadow-xl' : 'animate-float-slow'} transition-all duration-300
        w-10 h-10 md:w-12 md:h-12`}>
          <Icon 
            className={`text-white ${isHovered ? 'animate-pulse' : ''}`}
            size={window.innerWidth < 768 ? 14 : 16}
          />
        </div>
      </div>
    </div>
  );
};

// Enhanced Badge Component - Mobile Responsive
const EnhancedBadge = ({ text, icon: Icon, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay || 300);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`relative inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full backdrop-blur-sm border ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } transition-all duration-700 transform hover:scale-105 cursor-pointer group overflow-hidden`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        borderColor: 'rgba(255,255,255,0.2)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Icon with bounce */}
      <div className={`relative ${isHovered && window.innerWidth > 768 ? 'animate-bounce-slow' : ''}`}>
        <Icon className={`${color} ${window.innerWidth < 768 ? 'text-xs' : 'text-sm'}`} />
      </div>
      
      {/* Text - Responsive sizing */}
      <span className="text-white text-xs font-semibold relative z-10 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

// Enhanced Feature Item - Mobile Responsive
const EnhancedFeature = ({ icon: Icon, label, subtext, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = window.innerWidth < 768;
  
  return (
    <div 
      className="group relative flex flex-col items-center text-center gap-2 p-3 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
        animationDelay: `${index * 100}ms`,
        minHeight: isMobile ? '100px' : '120px'
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Background glow on hover - Reduced on mobile */}
      <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#6a1c44]/10 to-[#8a2458]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isHovered ? 'animate-pulse-glow' : ''
      }`}></div>
      
      {/* Icon container - Responsive sizing */}
      <div className={`relative p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-[#6a1c44]/20 to-[#8a2458]/30 backdrop-blur-sm 
        transition-all duration-500 ${isHovered && !isMobile ? 'scale-110' : ''}`}>
        <Icon className="text-white text-lg md:text-xl group-hover:text-yellow-300 transition-colors duration-300" />
      </div>
      
      {/* Text content - Responsive */}
      <div className="flex flex-col flex-1 min-w-0 w-full">
        <span className="text-white font-bold text-sm md:text-base group-hover:text-yellow-300 transition-colors duration-300">
          {label}
        </span>
        {subtext && (
          <span className="text-white/70 text-xs md:text-sm mt-1">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
};

// Floating Particle Component - Reduced on mobile
const FloatingParticle = ({ index }) => {
  const isMobile = window.innerWidth < 768;
  const size = isMobile ? Math.random() * 2 + 1 : Math.random() * 4 + 2;
  const duration = isMobile ? Math.random() * 5 + 5 : Math.random() * 10 + 10;
  const delay = Math.random() * 5;
  
  if (isMobile && index > 5) return null; // Reduce particles on mobile
  
  return (
    <div 
      className="particle absolute rounded-full hidden md:block"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, 
          rgba(141, 34, 89, ${0.2 + Math.random() * 0.3}) 0%,
          rgba(77, 20, 47, ${0.1 + Math.random() * 0.2}) 70%,
          transparent 100%)`,
        animation: `particle-float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        filter: `blur(${Math.random() * 1 + 0.5}px)`,
      }}
    ></div>
  );
};

// Floating Particles Container - Mobile optimized
const FloatingParticles = ({ count = 15 }) => {
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? Math.floor(count / 3) : count;
  
  return (
    <div className="particles-container">
      {[...Array(particleCount)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  const images = [
    { 
      slide: slide1, 
      title: "LUXURY ACCOMMODATION",
      subtitle: "Experience Premium Comfort in the Heart of Bangalore",
      gradient: "from-[#4d142f]/40 via-[#6a1c44]/30 to-[#8a2458]/20",
      features: [
        { icon: MdKingBed, label: "COMFORT BEDS", subtext: "Premium Mattresses" },
        { icon: TbAirConditioning, label: "AC ROOMS", subtext: "Climate Control" },
        { icon: FaWifi, label: "HIGH-SPEED WIFI", subtext: "Free Access" },
        { icon: FaShower, label: "HOT WATER", subtext: "24/7 Available" }
      ],
      mobileTitle: "LUXURY STAY"
    },
    { 
      slide: slide2, 
      title: "PREMIUM AMENITIES",
      subtitle: "World-Class Facilities for Your Comfort",
      gradient: "from-[#6a1c44]/40 via-[#8a2458]/30 to-[#4d142f]/20",
      features: [
        { icon: FaSwimmingPool, label: "SWIMMING POOL", subtext: "Outdoor" },
        { icon: MdRestaurant, label: "RESTAURANT", subtext: "Multi-Cuisine" },
        { icon: FaParking, label: "FREE PARKING", subtext: "Secure" },
        { icon: FaConciergeBell, label: "ROOM SERVICE", subtext: "24/7" }
      ],
      mobileTitle: "PREMIUM AMENITIES"
    },
    { 
      slide: slide3, 
      title: "MODERN FACILITIES",
      subtitle: "Contemporary Comforts for Modern Travelers",
      gradient: "from-[#8a2458]/40 via-[#4d142f]/30 to-[#6a1c44]/20",
      features: [
        { icon: FaTv, label: "SMART TV", subtext: "Entertainment" },
        { icon: FaSnowflake, label: "AIR CONDITIONING", subtext: "Individual Control" },
        { icon: MdLocalLaundryService, label: "LAUNDRY", subtext: "Professional" },
        { icon: FaHotTub, label: "HOT WATER", subtext: "Instant" }
      ],
      mobileTitle: "MODERN FACILITIES"
    },
    { 
      slide: slide4, 
      title: "EXCLUSIVE SERVICES",
      subtitle: "Personalized Experience with Premium Services",
      gradient: "from-[#6a1c44]/40 via-[#4d142f]/30 to-[#8a2458]/20",
      features: [
        { icon: MdSecurity, label: "24/7 SECURITY", subtext: "CCTV Monitored" },
        { icon: MdRoomService, label: "HOUSEKEEPING", subtext: "Daily" },
        { icon: FaCar, label: "TRAVEL ASSIST", subtext: "Cab Service" },
        { icon: MdLocalCafe, label: "COFFEE MAKER", subtext: "In Room" }
      ],
      mobileTitle: "EXCLUSIVE SERVICES"
    },
  ];

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: isMobile ? 5000 : 6000,
    pauseOnHover: !isMobile,
    speed: isMobile ? 800 : 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: isMobile ? null : <EnhancedArrow icon={FaArrowRight} direction="next" />,
    prevArrow: isMobile ? null : <EnhancedArrow icon={FaArrowLeft} direction="prev" />,
    appendDots: dots => (
      <div className={`absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30`}>
        <ul className={`flex gap-1 md:gap-2 backdrop-blur-sm bg-black/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10`}>
          {dots.map((dot, i) => (
            <li key={i} className="mx-0.5">
              <div className={`transition-all duration-500 cursor-pointer ${
                i === currentSlide 
                  ? 'bg-gradient-to-r from-[#8a2458] to-[#6a1c44] shadow-lg shadow-[#8a2458]/30' 
                  : 'bg-white/30 hover:bg-white/50'
              } ${isMobile ? 'w-1.5 h-1.5 rounded-full' : 'w-2 h-2 rounded-full'}`}></div>
            </li>
          ))}
        </ul>
      </div>
    )
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden enhanced-hero">
      {/* Animated Background Layers - Reduced on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Mesh Background - Reduced on mobile */}
        <div className="absolute inset-0 opacity-20 md:opacity-30">
          <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-[#8a2458]/20 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-[#6a1c44]/20 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-[#4d142f]/20 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating Particles */}
        <FloatingParticles count={isMobile ? 8 : 20} />
      </div>

      <Slider 
        {...settings} 
        ref={sliderRef}
        className="relative z-20"
      >
        {images.map((item, index) => (
          <div key={index} className="relative">
            {/* Main Image with Parallax Effect - Mobile optimized */}
            <div className={`relative overflow-hidden ${isMobile ? 'h-[65vh]' : 'h-[85vh] lg:h-[90vh]'}`}>
              <div className="parallax-container">
                <img
                  className="w-full h-full object-cover enhanced-slide-image"
                  src={item.slide}
                  alt={item.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              
              {/* Dynamic Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}></div>
              <div className={`absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30`}></div>
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} ${isMobile ? 'opacity-30' : 'opacity-40'}`}></div>
            </div>

            {/* Content Container - Mobile responsive positioning */}
            <div className={`absolute inset-0 flex items-center ${isMobile ? 'items-start pt-8 md:pt-0 md:items-center' : 'items-center'}`}>
              <div className="container mx-auto px-3 md:px-6 lg:px-8 w-full">
                <div className={`max-w-5xl mx-auto ${isMobile ? 'mt-4 md:mt-0' : ''}`}>

                  {/* Main Title - Mobile responsive */}
                  <div className="overflow-hidden text-center mb-3 md:mb-5">
                    <div className="relative inline-block">
                      {/* Title Background Glow */}
                      <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#8a2458]/20 via-[#6a1c44]/20 to-[#4d142f]/20 blur md:blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      <h1 className={`relative font-bold text-white leading-tight mb-1 md:mb-2
                        ${isMobile ? 'text-2xl sm:text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}>
                        <span className="inline-block text-gradient animate-text-reveal">
                          {isMobile ? item.mobileTitle || item.title : item.title}
                        </span>
                      </h1>
                      
                      {/* Subtitle */}
                      <div className="relative mt-1 md:mt-3">
                        <p className={`text-white/90 font-light mb-3 md:mb-5 text-center animate-fade-in max-w-xl mx-auto
                          ${isMobile ? 'text-sm px-2' : 'text-lg md:text-xl'}`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Services Grid - Mobile responsive layout */}
                  <div className={`grid gap-2 md:gap-3 mb-4 md:mb-6 
                    ${isMobile ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'}`}>
                    {item.features.slice(0, isMobile ? 2 : 4).map((feature, idx) => (
                      <EnhancedFeature 
                        key={idx}
                        icon={feature.icon}
                        label={feature.label}
                        subtext={feature.subtext}
                        index={idx}
                      />
                    ))}
                  </div>

                  {/* Call to Action Buttons - Mobile responsive */}
                  <div className={`flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-3 animate-slide-up ${isMobile ? 'px-2' : ''}`} 
                    style={{ animationDelay: '0.4s' }}>
                    
                    {/* Rooms Button */}
                    <Link to="/rooms" className="group relative w-full sm:w-auto">
                      {/* Button Glow Effect */}
                      <div className={`absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-[#8a2458] via-[#6a1c44] to-[#4d142f] rounded-lg blur opacity-20 md:opacity-30 
                        group-hover:opacity-50 md:group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse-glow`}></div>
                      
                      <button className={`group relative w-full sm:w-auto text-white font-bold rounded-lg shadow-lg md:shadow-xl 
                        transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden
                        ${isMobile ? 'px-4 py-2.5 text-xs' : 'px-6 py-3 text-sm md:text-base'}`}
                        style={{
                          background: 'linear-gradient(135deg, #8a2458 0%, #6a1c44 50%, #4d142f 100%)'
                        }}>
                        <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                          <MdKingBed className="text-sm md:text-base" />
                          <span>Explore Rooms</span>
                          <FaArrowRight className={`group-hover:translate-x-1 transition-transform duration-300
                            ${isMobile ? 'text-xs' : 'text-sm'}`} />
                        </span>
                      </button>
                    </Link>
                    
                    {/* Facilities Button */}
                    <Link to="/facilities" className="group relative w-full sm:w-auto">
                      <button className={`relative w-full sm:w-auto text-white font-semibold rounded-lg border shadow-lg md:shadow-xl 
                        transition-all duration-300 hover:scale-105 active:scale-95 group
                        ${isMobile ? 'px-4 py-2.5 text-xs' : 'px-6 py-3 text-sm md:text-base'}`}
                        style={{
                          background: 'rgba(106, 28, 68, 0.5)',
                          backdropFilter: 'blur(10px)',
                          borderColor: 'rgba(255, 255, 255, 0.3)'
                        }}>
                        <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                          <FaConciergeBell className="text-sm md:text-base" />
                          <span>View Facilities</span>
                        </span>
                      </button>
                    </Link>
                  </div>

                  {/* Mobile only: Additional quick info badges */}
                  {isMobile && (
                    <div className="flex flex-wrap justify-center gap-1.5 mt-3 animate-fade-in">
                      <div className="flex items-center gap-1 px-2 py-1 bg-[#8a2458]/20 backdrop-blur-sm rounded-full border border-[#8a2458]/30">
                        <FaWifi className="text-yellow-400 text-xs" />
                        <span className="text-white text-xs font-medium">Free WiFi</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-[#6a1c44]/20 backdrop-blur-sm rounded-full border border-[#6a1c44]/30">
                        <TbAirConditioning className="text-blue-400 text-xs" />
                        <span className="text-white text-xs font-medium">AC Rooms</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 bg-[#4d142f]/20 backdrop-blur-sm rounded-full border border-[#4d142f]/30">
                        <FaShower className="text-green-400 text-xs" />
                        <span className="text-white text-xs font-medium">Hot Water</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Mobile Navigation Arrows */}
      {isMobile && (
        <>
          {/* Left Arrow */}
          <div 
            className="absolute left-1 top-1/2 transform -translate-y-1/2 z-30 md:hidden"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer active:scale-95 transition-transform">
              <FaArrowLeft className="text-white text-sm" />
            </div>
          </div>
          
          {/* Right Arrow */}
          <div 
            className="absolute right-1 top-1/2 transform -translate-y-1/2 z-30 md:hidden"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer active:scale-95 transition-transform">
              <FaArrowRight className="text-white text-sm" />
            </div>
          </div>
          
          {/* Swipe Indicator */}
          <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1 text-white/60 text-xs transition-all duration-500 ${
            isScrolled ? 'opacity-0 translate-y-10' : 'opacity-100'
          }`}>
            <FaArrowLeft className="text-xs" />
            <span>Swipe</span>
            <FaArrowRight className="text-xs" />
          </div>
        </>
      )}

      {/* Desktop Scroll Indicator */}
      <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500 hidden md:flex ${
        isScrolled ? 'opacity-0 translate-y-10' : 'opacity-100'
      }`}>
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/60 text-xs uppercase tracking-widest">Explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#8a2458]/80 via-[#6a1c44]/60 to-[#4d142f]/40 animate-bounce-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;