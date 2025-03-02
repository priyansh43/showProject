import React, { useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UrbanTechCard from "../card/UrbanTechCard";
import { UrbanCardData } from "../../data/Page11Data";

export const Page11Section3 = () => {
  const [isPaused, setIsPaused] = useState(false);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3.16,
    slidesToScroll: 1,
    speed: 5000,
    centerMode: true,
    autoplay: !isPaused, // Toggle autoplay based on hover state
    autoplaySpeed: 1, // Keep autoplay active for seamless pause/resume
    cssEase: "linear",
    centerPadding: "5.30vw",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.01,
          centerPadding: "21px",
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.01,
          centerPadding: "21px",
        },
      },
    ],
  };

  return (
    <div>
      {/* Section Heading */}
      <div className="px-16px-mvw md:px-[7.29vw] pt-60px-mvw md:pt-[7.81vw]">
        <SectionHeading title={"Urban Tech-Enabled Campus"} />
      </div>

      {/* Slider Section */}
      <div className="md:pt-[60px] pt-[24px] md:pl-[7.29vw]">
        <Slider
          {...sliderSettings}
          onMouseEnter={() => setIsPaused(true)} // Pause slider on hover
          onMouseLeave={() => setIsPaused(false)} // Resume slider when hover ends
        >
          {UrbanCardData &&
            UrbanCardData.map((data, index) => (
              <UrbanTechCard key={index} img={data.img} title={data.title} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Page11Section3;
