import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";          // ✅ REQUIRED
import "slick-carousel/slick/slick-theme.css";   // ✅ REQUIRED

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

import slide1 from "../../assets/Home_Page_Banners/slide1.webp";
import slide2 from "../../assets/Home_Page_Banners/slide2.webp";
import slide3 from "../../assets/Home_Page_Banners/slide3.webp";
import slide4 from "../../assets/Home_Page_Banners/slide4.webp";

import "./HeroSection.css";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
      features: [
        { icon: MdKingBed, label: "Beds" },
        { icon: TbAirConditioning, label: "AC" },
        { icon: FaWifi, label: "WiFi" },
        { icon: FaShower, label: "Hot Water" },
      ],
    },
    {
      image: slide2,
      title: "PREMIUM AMENITIES",
      subtitle: "World-Class Facilities",
      features: [
        { icon: FaSwimmingPool, label: "Pool" },
        { icon: MdRestaurant, label: "Restaurant" },
        { icon: FaParking, label: "Parking" },
        { icon: FaConciergeBell, label: "Service" },
      ],
    },
    {
      image: slide3,
      title: "MODERN FACILITIES",
      subtitle: "Comfort for Travelers",
      features: [
        { icon: MdSecurity, label: "Security" },
        { icon: MdRoomService, label: "Service" },
        { icon: TbAirConditioning, label: "AC" },
        { icon: FaShower, label: "Hot Water" },
      ],
    },
    {
      image: slide4,
      title: "EXCLUSIVE SERVICES",
      subtitle: "Personalized Hospitality",
      features: [
        { icon: MdSecurity, label: "24/7 Security" },
        { icon: MdRoomService, label: "Housekeeping" },
        { icon: FaParking, label: "Parking" },
        { icon: FaWifi, label: "Free WiFi" },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: !isMobile,
    swipe: true,
  };

  return (
    <div className="hero-wrapper">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-image"
            />

            <div className="hero-overlay" />

            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>

              <div className="hero-features">
                {slide.features.map((f, i) => (
                  <div key={i} className="hero-feature">
                    <f.icon />
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <Link to="/rooms" className="btn-primary">
                  Rooms
                </Link>
                <Link to="/facilities" className="btn-secondary">
                  Facilities
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {isMobile && (
        <>
          <div
            className="mobile-arrow left"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaArrowLeft />
          </div>
          <div
            className="mobile-arrow right"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRight />
          </div>
        </>
      )}
    </div>
  );
};

export default HeroSection;
