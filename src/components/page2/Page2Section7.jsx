import React from "react";

import Page2Section7Card from "../card/Page2Section7Card";
import TagSection7Card from "../card/TagsCardSection7";
import SectionHeading from "../Heading/SectionHeading";
import Slider from "react-slick"; // Import React Slick// Import your Section12Card component
export const Page2Section7 = ({
  SHeading,
  SectioncardDataArray,
  Section7Tagdata,
}) => {
  const CustomArrow = ({ direction, onClick }) => (
    <button
      className={`absolute z-10 text-3xl focus:outline-none rounded-full h-10 flex items-center justify-center ${
        direction === "left"
          ? "left-[31vw] top-[155vw]"
          : "right-[31vw] top-[155vw]" // Position buttons on respective sides
      }`}
      style={{
        transform: "translateY(-50%)", // Center alignment correction
      }}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <img
        src={direction === "left" ? "/icon/prev.svg" : "/icon/next.svg"} // Use different icons
        alt={direction === "left" ? "Previous" : "Next"}
        className="w-[12.53vw] h-[12.53vw]" // Adjust size as needed
      />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };
  return (
    <div className="md:pt-[7.8125vw] pt-[16vw] px-16px-mvw  md:px-[7vw]">
      {/* Section Heading */}
      <div className="pb-24px-mvw md:pb-0">
        <SectionHeading title={SHeading} />
      </div>

      {/* Cards Section */}
      <div className="hidden md:flex items-center  justify-between mt-[3.125vw]">
        {SectioncardDataArray.map((card, index) => (
          <div
            key={index}
            className={`${index > 0 ? "hidden md:block" : ""}`} // Hide all except the first card on mobile
          >
            <Page2Section7Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <div className="relative md:hidden">
        <Slider {...sliderSettings}>
          {SectioncardDataArray.map((card, index) => (
            <div key={index}>
              <Page2Section7Card
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Tags Section */}
      <div className="hidden md:flex w-full h-full justify-between mt-[1.05vw]">
        {/* Left Section */}
        <div className="border-l border-t border-b border-[#1C1C1C66] flex-shrink-0">
          {Section7Tagdata.map((card, index) => (
            <TagSection7Card
              key={index}
              heading={card.heading}
              tags={card.tags}
              bgColor={card.bgColor}
              textColor={card.textColor}
              cardWidth={"39.89vw"}
              cardHeight={"19.05vw"}
              border={card.border}
            />
          ))}
        </div>

        {/* Right Section */}
        <div className="flex-1 h-auto">
          <img
            src="/images/page2/section7RightImg.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2Section7;
