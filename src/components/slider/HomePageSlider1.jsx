import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { section1 } from "../../data/home";
import { section1Mobile } from "../../data/home";
import "./homeSlider.css"; 


export const HomePageSlider1 = () => {
  // Initialize `isMobile` based on the window size at the first render
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const images = isMobile ? section1Mobile() : section1();

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div className="absolute left-4 top-[90%]">
        <ul className="space-y-2">{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  // Update the screen size for mobile/desktop on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update `isMobile` on window resize
    };

    window.addEventListener("resize", handleResize); // Add resize listener
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener
    };
  }, []);

  return (
    <div
      className="relative w-[100vw] z-0 mt-[18vw] h-full md:mt-[9.11vw] home-slider"
      // style={{ zIndex: 0 }}
    >
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id} className="w-full ">
            <img
              src={item.image}
              alt={`Slide ${item.id}`}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePageSlider1;
