import React from "react";
import Slider from "react-slick";
import { section3Mobile } from "../../data/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section13MobileSlider = ({Section13Data}) => {
  // Custom Arrow Buttons
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
    >
      <img src="/icon/next.svg" alt="Next" className="w-[9.6vw] h-[9.6vw]" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
    >
      <img
        src="/icon/prev.svg"
        alt="Previous"
        className="w-[9.6vw] h-[9.6vw]"
      />
    </div>
  );

  // Slick Slider settings
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1, // Default for desktop
    speed: 300,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1.2, // Show 1.5 slides on mobile
          centerMode: true, // Keeps the center slide larger
          centerPadding: "10%", // Adds some padding for the 1.5 slides
        },
      },
    ],
  };

  // Call section3Mobile to get the array of images
  const images = section3Mobile();
  console.log(images[0].image, "image data ");

  return (
    <div className="relative">
      <Slider {...settings}>
        {Section13Data.map((item, index) => (
          <div key={index} className="relative w-[100vw] h-[116.13vw]">
            <img
              src={item.image} // Correctly reference the image
              alt={`Slider  ${index + 1}`}
              className="w-full h-full object-cover inset-0"
              style={{
                background:
                  "transparent url('/images/home/section13/bgShadow.png') 50% 100% no-repeat padding-box",
              }}
            />
            <div className="absolute bottom-0 left-[4.27vw] w-full bg-opacity-50 p-[6vw]  brightness-200 z-20 text-white text-center text-[4.27vw] font-montserrat font-semibold ">
            {item.caption}
            </div>
            <div className="w-full absolute bottom-0 h-[20%] bg-[linear-gradient(to_bottom,_#1C1C1C00,_#1C1C1C)]"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section13MobileSlider;
