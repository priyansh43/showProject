import React from "react";
import Slider from "react-slick";
import { section3Mobile, section4Mobile } from "../../data/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section4Slider = ({ showContent }) => {
  console.log(showContent, "showContent");
  // Custom Arrow Buttons
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 transform w-36px-mvw  -translate-y-1/2 cursor-pointer z-10"
    >
      <img
        src="/icon/next.svg"
        alt="Next"
        className="w-full h-full object-cover"
      />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute w-36px-mvw h-36px-mvw top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
    >
      <img
        src="/icon/prev.svg"
        alt="Previous"
        className="h-full w-full object-cover"
      />
    </div>
  );

  // Slick Slider settings
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    autoPlay: true,
    autoPlaySpeed: 3000,
    speed: 300,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  // Call section3Mobile to get the array of images
  const images = section4Mobile();

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-[100vw] h-[90.93vw]">
            <img
              src={img.image}
              alt={`Slider ${index + 1}`}
              className="w-full h-full object-cover inset-0"
              style={{
                background:
                  "transparent url('/images/home/section3/bgShadow.png') 50% 100% no-repeat padding-box",
              }}
            />
            {showContent && (
              <>
                <div className="absolute bottom-0 left-[4.27vw] brightness-200 w-full z-20 pb-[4vw] md:pb-0 p-2 text-white text-[4.27vw] font-montserrat font-semibold">
                  Lorem Ipsum Text Dummy Content
                </div>
                <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00]"></div>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section4Slider;
