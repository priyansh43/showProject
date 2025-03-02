import React, { useState, useEffect } from "react";
import SectionHeading from "../Heading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section7Card from "../card/Section7Card";
import { Section11cardData } from "../../data/home";
import Marquee from "react-marquee-slider";

export const Section11Slider = () => { 
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(30);
  const [isMobile, setIsMobile] = useState(false);

  

    useEffect(() => {
        const calculateVelocity = () => {
          const baseVelocity = 200;
          const numLogos = Section11cardData.length;
          const screenFactor = window.innerWidth / 1920;
          const adjustedSpeed = baseVelocity / numLogos;
          return Math.max(4, adjustedSpeed * screenFactor);
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
      
      
 
  const cardProps = isMobile
    ? {
        cardWidth: "70.916vw",
        // cardHeight: "49.72vh",
        // imageHeight: "35.60vh",
      }
    : {
        cardWidth: "18.916vw",
        // cardHeight: "49.72vh",
        // imageHeight: "32.60vh",
      };

  return (
    <div className="">
       <Marquee
        velocity={velocity}
        minScale={0.8}
        className="partner-marquee"
        pauseOnHover={isPaused}
      >
        {Section11cardData.map((card, index) => (
          <Section7Card
            key={index}
            cardWidth={cardProps.cardWidth}
            cardHeight={cardProps.cardHeight}
            imageHeight={cardProps.imageHeight}
            imageSrc={card.image}
            caption={card.caption}
            designation={card.designation}
            logo={card.logo} 
            link={card.link}
          />
        ))} 
        </Marquee>
     
    </div>
  );
};

export default Section11Slider;
