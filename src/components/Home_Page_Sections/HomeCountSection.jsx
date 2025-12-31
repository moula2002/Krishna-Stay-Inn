import React from "react";
import { FaHotel, FaUsers, FaUserClock, FaBed } from "react-icons/fa";
import CountUp from "react-countup";

const HomeCountSection = () => {
  const array = [
    {
      title: 100,
      icon: <FaHotel />,
      desc: "Rooms",
    },
    {
      title: 20,
      icon: <FaUsers />,
      desc: "Employees",
    },
    {
      title: "24/7",
      icon: <FaUserClock />,
      desc: "Support",
    },
    {
      title: 200,
      icon: <FaBed />,
      desc: "Clean Beds",
    },
  ];

  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-center bg-cover"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp6957266.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {array.map((item, index) => (
            <div
              key={index}
              className="p-6 border-double border-[#f3f5f630] border-4 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="text-4xl md:text-5xl text-[#FEA116] mb-4">
                {item.icon}
              </div>
              {typeof item.title === "number" ? (
                <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">
                  <CountUp end={item.title} duration={5} />
                </h3>
              ) : (
                <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">
                  {item.title}
                </h3>
              )}
              <p className="text-lg md:text-xl text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCountSection;
