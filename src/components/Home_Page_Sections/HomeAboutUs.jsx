import React from "react";
import AboutImage from "../../assets/Home_About_Us.png";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeAboutUs = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  return (
    <section className="container mx-auto px-4 md:py-24">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <section className="relative flex-1">
          <figure className="mb-8 lg:mb-0">
            <img
              className="w-full lg:w-[70%] h-auto object-cover"
              src={AboutImage}
              alt="Shri Krishna Stay Bengaluru"
            />
          </figure>
          <div className="absolute bottom-0 right-0 bg-white w-full lg:w-72 h-24 flex items-center justify-center border-double border-4 outline-4 border-[#f3f5f6]-800">
            <h1 className="font-bold text-xl lg:text-2xl text-center lg:w-60">
              <span className="text-[#FEA116]">Brand</span> New Luxury{" "}
              <span className="text-[#FEA116]">Stay Inn</span>
            </h1>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex flex-col flex-1 gap-6">
          <div className="flex flex-col gap-4">
            <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-3">
              About Us
              <span className="ml-1 w-20 text-center border-t-2 border-[#FEA116]"></span>
            </h5>
            <h1 className="font-bold font-montserrat text-3xl lg:text-4xl">
              Welcome To{" "}
              <span className="text-[#FEA116] uppercase">Krishna Stay Inn</span>
            </h1>
            <p className="text-[#414140] mt-4 text-justify">
              Welcome to Krishna Stay Inn, your home away from home in the
              bustling city of Bengaluru, Karnataka. Located in a prime area,
              our inn offers a harmonious balance of comfort, convenience, and
              impeccable service. Whether you’re visiting for business, leisure,
              or a special occasion, we strive to make every moment of your stay
              truly memorable.
            </p>
            <p className="text-[#414140] text-justify">
              Krishna Stay Inn is designed to be a peaceful retreat amidst the
              vibrancy of Bengaluru. Our elegantly furnished rooms are equipped
              with modern amenities, ensuring you experience the perfect blend
              of sophistication and comfort. From complimentary high-speed Wi-Fi
              to a 24-hour front desk, we cater to all your needs with unmatched
              hospitality.
            </p>
          </div>
          <div className="mt-4">
            <Link to="/about" onClick={handleExploreClick}>
              <button className="w-full md:w-auto text-white uppercase font-medium bg-[#fea116] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
                Explore More
              </button>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HomeAboutUs;
