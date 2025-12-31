import React from "react";
import Slider from "react-slick";
import Moula from "../../assets/Nearby Places/test.jpeg"

const TestimonialCarousel = () => {
  const testimonials = [
    {
      image: Moula,
      name: "Moula",
      profession: "Chennai",
      review:
        "Comfortable and clean rooms with a peaceful ambiance. The staff is very polite and ensures all your needs are met. Great value for money in the heart of Bangalore!",
    },
    {
      image:
        "https://assets.devfolio.co/users/43148b199ca84e31aa0c3df4d8c68457/avatar.jpeg",
      name: "Paramesh",
      profession: "Kerala",
      review:
        "Krishna stay Inn was amazing with top-notch customer service. Rooms are well-maintained, and the location is very convenient for city exploration. Would definitely visit again!",
    },
    {
      image:
        "https://p.kindpng.com/picc/s/600-6005185_branca-de-neve-logo-png-download-birthday-transparent.png",
      name: "Rashmi",
      profession: "Andra Pradesh",
      review:
        "Krishna Stay Inn offers excellent hospitality with cozy, well-kept rooms. The staff is always ready to help, making the experience smooth and enjoyable. Highly recommended for travelers!",
    },
    {
      image:
        "https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Ruchi-Taliwal-MD-179103-circle_large__v1__.png",
      name: "Jahnavi",
      profession: "Hubli",
      review:
        "Krishna Stay Inn provides a homely vibe with clean and spacious rooms. The staff is courteous and ensures a seamless experience. A great place for a comfortable stay in Bangalore!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 ">
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-[#FEA116] mb-2 flex items-center justify-center">
          <span className="hidden sm:inline-block w-12 h-0.5 bg-[#FEA116] mr-4"></span>
          Testimonials
          <span className="hidden sm:inline-block w-12 h-0.5 bg-[#FEA116] ml-4"></span>
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold">
          What Our <span className="text-[#FEA116]">Clients Say</span>
        </h3>
      </div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-center mb-2">
                {testimonial.name}
              </h4>
              <p className="text-[#FEA116] text-center mb-4">
                {testimonial.profession}
              </p>
              <p className="text-gray-600 text-center flex-grow">
                {testimonial.review}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;
