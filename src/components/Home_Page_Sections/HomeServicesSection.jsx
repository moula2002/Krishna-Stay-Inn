import React from "react";
import { FaHotel, FaWater, FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeServicesSection = () => {

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  const array = [
    {
      icon: <FaHotel className="fill-[#fea116]" />,
      serviceName: "AC / Non AC Rooms",
      desc: "Spacious AC and Non-AC rooms designed for comfort and relaxation",
    },
    {
      icon: <FaWater className="fill-[#fea116]" />,
      serviceName: "24/7 Hot water",
      desc: "Enjoy 24/7 hot water for a refreshing and convenient stay.",
    },
    {
      icon: <FaTv className="fill-[#fea116]" />,
      serviceName: "HD Television",
      desc: "HD televisions in every room for your entertainment needs.",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      {/* Upper Section */}
      <section className="text-center mb-10">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-bold font-montserrat text-[#FEA116] inline-flex items-center gap-5">
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
            Our Facilities
            <span className="w-20 border-t-2 border-[#FEA116]"></span>
          </h5>
          <h1 className="font-bold font-montserrat text-4xl">
            Explore Our{" "}
            <span className="text-[#FEA116] uppercase">Facilities</span>
          </h1>
        </div>
      </section>

      {/* Lower Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5">
          {array.map((items, index) => (
            <div
              key={index}
              className="relative shadow-2xl flex items-center justify-center  border-black h-[30vh] overflow-hidden group"
            >
              {/* Icon */}
              <div className="flex flex-col items-center gap-3 text-4xl">
                {items.icon}
                {/* Heading */}
                <h1 className="text-lg text-center font-bold uppercase font-montserrat">
                  {items.serviceName}
                </h1>
              </div>

              {/* Text Content */}
              <div className="absolute flex items-center inset-0 bg-[#fea116] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h1 className="relative z-10 text-base font-medium text-center p-5 text-white">
                  {items.desc}
                </h1>
              </div>

              
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/facilities" onClick={handleExploreClick}>
            <button className="w-full md:w-auto text-white uppercase font-medium bg-[#fea116] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
              Know More
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default HomeServicesSection;
