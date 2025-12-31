import React, { useState } from "react";
import image from "../../assets/Home_Page_Banners/slide2.webp";
import { Link } from "react-router-dom";

const HomeLuxuryLiving = () => {
const handleExploreClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
};
  return (
    <>
      <section className="flex flex-col-reverse md:flex md:flex-row container mx-auto">
        {/* Left Section */}
        <div className="px-6 md:px-14 flex-1 text-white flex flex-col gap-2 items-start py-20 justify-center bg-[#0F172B]">
          {/* <div className="px-14 flex flex-col"> */}
          <h5 className="inline-flex items-center font-bold font-montserrat">
            Luxury Living
            <span className="ml-1 w-20 font-bold text-center border-t-2 border-[#FEA116]"></span>
          </h5>
          <h1 className="font-bold font-montserrat text-3xl md:text-4xl text-white md:w-[70%]">
            Discover A Brand Luxurious Hotel
          </h1>
          <p className="text-white mt-4 text-justify">
            Welcome to Krishna Stay Inn, nestled in Bengaluru, Karnataka. Enjoy
            comfort and excellent service in a serene environment. Whether for
            business or leisure, we ensure a relaxing stay.
          </p>
          <Link to="/rooms" onClick={handleExploreClick}>
            <button className="text-white uppercase font-medium  bg-[#fea116] px-14 py-4 mt-5">
              Explore More
            </button>
          </Link>
          {/* </div> */}
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img src={image} className="w-full object-cover h-full" alt="" />
        </div>
        <div></div>
      </section>
    </>
  );
};

export default HomeLuxuryLiving;
