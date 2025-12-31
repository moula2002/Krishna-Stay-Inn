import React, { useState } from "react";
import DeluxeDoubleNonACRoom from "../SidebarComponent/DeluxeDoubleNonACRoom";
import DeluxeDoubleACRoom from "../SidebarComponent/DeluxeDoubleACRoom";
import DeluxeNonACTripleRoom from "../SidebarComponent/DeluxeNonACTripleRoom";
import DeluxeACTripleRoom from "../SidebarComponent/DeluxeACTripleRoom";
import DeluxeNonACFourBedRoom from "../SidebarComponent/DeluxeNonACFourBedRoom";
import DeluxeACFourBedRoom from "../SidebarComponent/DeluxeACFourBedRoom";

const Restaurant = () => {
  const array = [
    {
      navMain: "Deluxe Double Non-AC Room",
      content: <DeluxeDoubleNonACRoom />,
    },
    { navMain: "Deluxe Double AC Room", content: <DeluxeDoubleACRoom /> },
    {
      navMain: "Deluxe Non-AC Triple Room",
      content: <DeluxeNonACTripleRoom />,
    },
    { navMain: "Deluxe AC Triple Room", content: <DeluxeACTripleRoom /> },
    {
      navMain: "Deluxe Non-AC Four Bed Room",
      content: <DeluxeNonACFourBedRoom />,
    },
    { navMain: "Deluxe AC Four Bed Room", content: <DeluxeACFourBedRoom /> },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main className="container mx-auto flex flex-col lg:flex-row gap-6 px-4 mt-10">
      {/* Main Content Section */}
      <section className="lg:w-2/3 w-full p-4">
        <h1 className="text-2xl font-bold font-montserrat mb-4">
          {array[selectedIndex].navMain}
        </h1>
        <div>{array[selectedIndex].content}</div>
      </section>

      {/* Sidebar Section */}
      <section className="lg:w-1/3 w-full bg-gray-100 p-4 rounded">
        <ul className="space-y-2">
          {array.map((navItem, index) => (
            <li
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer p-2 rounded ${
                selectedIndex === index
                  ? "bg-blue-500 text-white font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              {navItem.navMain}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Restaurant;
