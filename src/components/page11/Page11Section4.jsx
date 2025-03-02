import React from "react";
import { LearningBeyandData } from "../../data/Page11Data";
import LearningBeyondCard from "../card/LearningBeyondCard";
import LearningBeyondCardMobile from "../card/LearningBeyondCardMobile";
import SectionHeading from "../Heading/SectionHeading";
import Slider from "react-slick";

export const Page11Section4 = () => {
  const CustomArrow = ({ direction, onClick }) => (
    <button
      className={`absolute z-10 w-[12.53vw] flex items-center justify-center bg-white rounded-full shadow-md focus:outline-none ${
        direction === "left" ? "left-[33%]" : "right-[33%]"
      } bottom-[-15%]`}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <img
        src={direction === "left" ? "/icon/prev.svg" : "/icon/next.svg"}
        alt={direction === "left" ? "Previous" : "Next"}
        className="w-full h-full"
      />
    </button>
  );

  const sliderSettings = {
    infinite: true,
    speed: 3000, // Smooth continuous scroll
    slidesToShow: 1, // Ensure only one slide is shown
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay for continuous scroll
    autoplaySpeed: 0, // Continuous autoplay
    cssEase: "linear", // Smooth transition
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    pauseOnHover: false, // Continuous scrolling without interruption
    centerMode: false, // Turn off center mode for full-width slides
  };

  return (
    <div className="pt-60px-mvw md:pt-[7.81vw] px-16px-mvw md:px-[7.29vw]">
      <SectionHeading title={"Learning Beyond Classrooms"} />

      {/* Desktop Grid */}
      <div className="hidden !pt-60px-vw md:grid grid-cols-2 gap-60px-vw">
        {LearningBeyandData.map((item, index) => (
          <LearningBeyondCard
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden w-full pt-24px-mvw mb-[40vw]">
        <Slider {...sliderSettings}>
          {LearningBeyandData.map((item, index) => (
            <div key={index} className="">
              <LearningBeyondCardMobile
                img={item.img}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Page11Section4;
