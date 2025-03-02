import React, { useEffect, useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import RightIconButton from "../buttons/RightIconButton";
import Slider from "react-slick";
import { globallearning } from "../../data/home";
import { Link } from "react-router-dom";
import "./Globallearning.css";

const Globallearning = () => {
  const [isMobile, setIsMobile] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots custom-dotted",  // Unique dots class
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="globallearning-component w-full md:px-[7.29vw]">
      <div
        className={`pb-60px-mvw pt-60px-mvw px-16px-mvw md:px-0 md:pt-0 md:pb-0`}
      >
        <SectionHeading title={"Global Learning"} />
        <Slider {...settings} className="global-learning-slider">
          {globallearning.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex md:flex-row items-center relative justify-center pt-24px-mvw md:pt-50px-vw">
                <div className="w-full">
                  <img
                    src={isMobile ? item.mobileimg : item.imgsrc}
                    alt="img"
                    className="w-full h-full object-contain" 
                     loading="lazy"
                  />
                </div>
                {/* <div className="absolute right-80px-mvw bottom-20px-mvw md:bottom-88px-vw md:right-48px-vw">
                  <RightIconButton title="Read More" />
                </div> */}
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Globallearning;
