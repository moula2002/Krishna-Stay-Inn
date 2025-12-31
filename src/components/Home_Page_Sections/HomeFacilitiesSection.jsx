import React from "react";

const HomeFacilitiesSection = () => {
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
    </section>
  );
};

export default HomeFacilitiesSection;
