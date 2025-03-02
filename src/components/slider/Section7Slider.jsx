import React, { useState, useEffect } from "react";
import SectionHeading from "../Heading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section7Card from "../card/Section7Card";
import { Section7cardData } from "../../data/home";
import Marquee from "react-marquee-slider";

export const Section7Slider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(30);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const calculateVelocity = () => {
      const baseVelocity = 200;
      const numLogos = Section7cardData.length;
      const screenFactor = window.innerWidth / 1920;
      const adjustedSpeed = baseVelocity / numLogos;
      return Math.max(2, adjustedSpeed * screenFactor);
    };

    const handleResize = () => {
      setVelocity(calculateVelocity());
      setIsMobile(window.innerWidth <= 768); // Detect if it's mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed for each slide transition
    slidesToShow: 4.2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Remove delay between transitions
    cssEase: "linear", // Ensure smooth continuous scrolling
    centerMode: true,
    centerPadding: "5%", // Padding on each side of the centered card
    focusOnSelect: true, // Allow selecting the card by clicking on it
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Define props based on screen size
  const cardProps = isMobile
    ? {
        cardWidth: "70.916vw",
        // cardHeight: "93vw",
        imageHeight: "53.07vw", 
      }
    : {
        cardWidth: "18.916vw",
        // cardHeight: "28vw ",
        imageHeight: "18.33vw",
      };

  return (
    <div className="w-full">
      <Marquee
        velocity={velocity}
        minScale={0.8}
        className="partner-marquee"
        pauseOnHover={isPaused}
      >
        {Section7cardData.map((card, index) => (
          <Section7Card
            key={index}
            cardWidth={cardProps.cardWidth}
            cardHeight={cardProps.cardHeight}
            imageHeight={cardProps.imageHeight}
            imageSrc={card.image}
            caption={card.caption}
            logo={card.logo} 
            para={card.para}
            designation={card.designation} 
            isMobile={isMobile} 
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Section7Slider; 