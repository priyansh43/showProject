import React from "react";
import Slider from "react-slick"; // Import React Slick
import Section5Card from "../card/Page1Card";
import { cardData } from "../../data/home";
import Section5CardMobile from "../card/SliderCardMobile";

// Custom Arrow Component for Slider Navigation
const CustomArrow = ({ direction, onClick }) => (
  <button
    className="absolute z-10 text-white text-3xl px-4 py-2 focus:outline-none rounded-full w-[30vw] h-10 flex items-center justify-center"
    style={{
      bottom: "-10vh",
      [direction === "left" ? "right" : "left"]: "38.47vw",
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


// Main Grid Component with Slider for Mobile
export const GridComponentSecond = () => {
  const sliderRef = React.useRef(null);

  // Slider Settings with Autoplay and Responsive Options
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Show arrows on mobile
        },
      },
    ],
  };

  return (
    <div>
      {/* Desktop Grid Layout with 3 Cards */}
      <div className="hidden md:grid grid-cols-3 gap-[1vw] w-full">
        {cardData.slice(0, 2).map((card, index) => (
          <div key={index} className="w-full ">
            <Section5Card
              cardWidth="100%"
              cardHeight="100%"
              imageHeight="32.593vh"
              imageSrc={card.image}
              caption={card.caption}
              iconSrc={card.icon}
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider with 2 Cards */}
      <div className="relative md:hidden">
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          onInit={() => console.log("Slider initialized")}
        >
          {cardData.slice(0, 2).map((card, index) => (
            <div key={index} className="px-[0.5vw]">
              <Section5CardMobile
                cardWidth="100%"
                cardHeight="100%"
                imageHeight="36.29vh"
                imageSrc={card.image}
                caption={card.caption}
                iconSrc={card.icon}
              />
            </div>
          ))}
        </Slider>

        {/* Custom Arrow Buttons */}
        <CustomArrow
          direction="left"
          onClick={() => {
            console.log("Previous slide triggered");
            sliderRef.current.slickPrev(); // Previous slide
          }}
        />
        <CustomArrow
          direction="right"
          onClick={() => {
            console.log("Next slide triggered");
            sliderRef.current.slickNext(); // Next slide
          }}
        />
      </div>
    </div>
  );
};

export default GridComponentSecond;
