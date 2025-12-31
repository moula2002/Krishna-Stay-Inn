import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const DeluxeDoubleNonACRoom = () => {
  const array = [
    {
      img: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2878/x_0,y_33,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_1366,f_auto,c_fit/the-signature-inn-hotel-bangalore/Rooms_The_Signature_Inn_Hotel_near_Majestic_Railway_Station_in_Bangalore_2?1733720046342",
    },
    {
      img: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_248,w_4992,h_2807,r_0,c_crop,q_80,fl_progressive/w_1366,f_auto,c_fit/the-signature-inn-hotel-bangalore/Rooms_The_Signature_Inn_Hotel_near_Majestic_Railway_Station_in_Bangalore_3?1733720065197",
    },
    {
      img: "https://res.cloudinary.com/simplotel/image/upload/x_7,y_0,w_1166,h_656,r_0,c_crop,q_80,fl_progressive/w_1366,f_auto,c_fit/the-signature-inn-hotel-bangalore/Deluxe_Ac_Room_The_Signature_Inn_Hotel_Bangalore_3_rg6tfy?1733720055745",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container mx-auto flex flex-col gap-8 px-4">
      {/* Image Slider */}
      <div>
        <Slider {...settings}>
          {array.map((images, index) => (
            <div key={index}>
              <img
                src={images.img}
                className="w-full h-auto object-cover rounded"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <Link to="/contact">
          <button className="bg-yellow-400  px-6 py-3 font-bold cursor-pointer">
            Book Now
          </button>
        </Link>
      </div>

      {/* Room Description */}
      <div>
        <p className="text-justify leading-6">
          Designed for simplicity and comfort, the Deluxe Room offers a peaceful
          retreat with a welcoming atmosphere. Whether you're visiting for
          business or leisure, the room’s modern amenities provide everything
          you need for a pleasant stay. Located in the heart of Bengaluru, it’s
          the perfect base for exploring the city while enjoying a restful
          environment.
        </p>
      </div>

      {/* Pricing Information */}

      {/* Amenities */}
      <div>
        <h1 className="text-3xl font-montserrat">Amenities</h1>
      </div>
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 list-disc">
          <li>Room Service</li>
          <li>Desk in Room</li>
          <li>Basic Bathroom Amenities</li>
          <li>Toiletries</li>
          <li>Internet Connection</li>
          <li>Make-up / Shaving Mirror</li>
          <li>Telephone</li>
          <li>Safe in Room</li>
          <li>Shower Facility</li>
          <li>Bidet</li>
          <li>Mineral Water</li>
          <li>Hot/Cold Running Water</li>
          <li>Satellite TV</li>
          <li>Housekeeping</li>
          <li>Attached Bathroom</li>
        </ul>
      </div>
    </section>
  );
};

export default DeluxeDoubleNonACRoom;
