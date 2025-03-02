import React, { useRef } from "react";
import Slider from "react-slick"; // Import React Slick
import Section5Card from "../card/Page1Card";
import { cardData, cardDataMobile } from "../../data/home";
import Section5CardMobile from "../card/SliderCardMobile";
import CombineCard from "../card/ComnileCard";
import { Link } from "react-router-dom";

// const CustomArrow = ({ direction, onClick }) => (
//   <button
//     className={`absolute z-50 text-3xl focus:outline-none rounded-full h-10 flex items-center justify-center ${
//       direction === "left"
//         ? "left-[31vw] top-[102vw]"
//         : "right-[31vw] top-[102vw]" // Position buttons on respective sides
//     }`}
//     style={{
//       transform: "translateY(-50%)", // Center alignment correction
//     }}
//     onClick={onClick}
//     aria-label={direction === "left" ? "Previous slide" : "Next slide"}
//   >
//     <img
//       src={direction === "left" ? "/icon/prev.svg" : "/icon/next.svg"} // Use different icons
//       alt={direction === "left" ? "Previous" : "Next"}
//       className="w-[12.53vw] h-[12.53vw]" // Adjust size as needed
//     />
//   </button>
// );
 
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

export const GridComponent = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false, // Disable dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Set animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    prevArrow: <CustomArrow direction="left" />, // Custom left arrow
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <div>
      <div className="hidden md:grid grid-cols-3 gap-[1vw] w-full grid-rows-[auto auto auto]">
        {cardData.map((card, index) => {
          if (index === 7) {
            // Render combined grid for 7th cell
            return (
              <div
                key={index}
                className="col-span-2 row-span-1 flex items-stretch h-full"
              >
                <CombineCard
                  cardWidth="100%"
                  cardHeight="100%"
                  imageHeight="100%"
                  imageSrc={"/images/home/section5/bg.png"} // Group Image
                  caption={card.caption}
                  iconSrc={card.icon}
                />
              </div>
            );
          }

          if (index === 8) return null; // Skip the 9th card as it is combined with the 8th

          // Render individual grid cells for the rest
          return (
            <div key={index} className="w-full">
              <Link to={card.link}>
                <Section5Card
                  cardWidth="100%"
                  cardHeight="100%"
                  imageHeight="100%"
                  imageSrc={card.image}
                  caption={card.caption}
                  iconSrc={card.icon}
                  btn={true}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="relative md:hidden ">
        <Slider ref={sliderRef} {...sliderSettings} >
          {cardDataMobile.map((card, index) => (
            <div key={index} className="px-[0.5vw]" >
              <Link to={card.link}>
                <Section5CardMobile
                  cardWidth="100%"
                  cardHeight="100%"
                  imageHeight="32.593vh"
                  imageSrc={card.image}
                  caption={card.caption}
                  iconSrc={card.icon}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GridComponent;
