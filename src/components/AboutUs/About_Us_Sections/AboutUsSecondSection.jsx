import React from "react";
import { FaBirthdayCake, FaUtensils, FaWifi, FaShower } from "react-icons/fa";

const AboutUsSecondSection = () => {
  const services = [
    {
      serviceName: "Party Center",
      serviceDesc:
        "A spacious venue for hosting events, from birthdays to corporate gatherings, with all the amenities for a memorable celebration.",
      icon: <FaBirthdayCake className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Restaurant",
      serviceDesc:
        "Enjoy a diverse menu of freshly prepared dishes in a comfortable dining space, perfect for casual meals or special occasions.",
      icon: <FaUtensils className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "24/7 Wifi",
      serviceDesc:
        "Stay connected with high-speed WiFi available 24/7, ideal for both work and leisure.",
      icon: <FaWifi className="text-[#FEA116]" size={30} />,
    },
    {
      serviceName: "Hot Water",
      serviceDesc:
        "Access hot water at any time for your comfort, whether for showers or other needs.",
      icon: <FaShower className="text-[#FEA116]" size={30} />,
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative shadow-2xl flex flex-col items-center justify-center border border-gray-200 rounded-lg h-64 sm:h-72 overflow-hidden group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3 z-10 transition-all duration-300 group-hover:translate-y-[-100%]">
                {item.icon}
                <h2 className="text-lg sm:text-xl font-bold uppercase font-montserrat text-center px-2">
                  {item.serviceName}
                </h2>
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 bg-[#fea116] flex items-center justify-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <p className="text-sm md:mt-5 sm:text-base font-medium text-center text-white">
                  {item.serviceDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSecondSection;
