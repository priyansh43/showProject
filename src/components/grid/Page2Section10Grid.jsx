import React from "react";
import Slider from "react-slick"; // Import React Slick
import Section5Card from "../card/Page1Card";
import { cardData } from "../../data/home";
import Section5CardMobile from "../card/SliderCardMobile";

const CustomArrow = ({ direction, onClick }) => (
  <button
    className="absolute z-10 text-white text-3xl px-4 py-2 focus:outline-none rounded-full w-[30vw] h-10 flex items-center justify-center"
    style={{
      bottom: "-10vh",
      [direction === "left" ? "right" : "left"]: "35.47vw", // Adjust position based on direction
    }}
    onClick={onClick}
  >
    <img
      src={direction === "left" ? "/icon/prev.svg" : "/icon/next.svg"} // Use the appropriate image
      alt={direction === "left" ? "Previous" : "Next"}
      className="w-[12.53vw] h-[12.53vw]" // Set the size of the image
    />
  </button>
);

export const Page2Section10Grid = () => {
  const sliderRef = React.useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-4 gap-[1vw] w-full grid-rows-2">
        {cardData.slice(0, 8).map((card, index) => (
          <div key={index} className="w-full">
            <Section5Card
              cardWidth="100%"
              cardHeight="100%"
              imageHeight="100%"
              imageSrc={card.image}
              caption={card.caption}
              iconSrc={card.icon}
              btn={true}
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="relative md:hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {cardData.map((card, index) => (
            <div key={index}>
              <Section5CardMobile
                cardWidth="100%"
                cardHeight="100%"
                imageHeight="32.593vh"
                imageSrc={card.image}
                caption={card.caption}
                iconSrc={card.icon}
              />
            </div>
          ))}
        </Slider>

        {/* Custom Arrow Buttons outside of the Slider */}
        <CustomArrow
          direction="left"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <CustomArrow
          direction="right"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </div>
  );
};

export default Page2Section10Grid;
