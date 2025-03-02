import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";

const Page2OurPartnersLeft = ({ PartnersImage }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(30);

   useEffect(() => {
      const calculateVelocity = () => {
        const baseVelocity = 200; // A higher base value to scale appropriately
        const numLogos = PartnersImage.length; // Get the number of logos
        const screenFactor = window.innerWidth / 1920; // Adjust relative to screen size
        const adjustedSpeed = baseVelocity / numLogos; // Normalize speed by number of logos
        return Math.max(8, adjustedSpeed * screenFactor); // Ensure a minimum speed of 8
      };
  
      const handleResize = () => {
        setVelocity(calculateVelocity());
      };
  
      handleResize(); // Calculate velocity on mount
      window.addEventListener("resize", handleResize); // Recalculate velocity on resize
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [PartnersImage.length]);
    

  return (
    <section className="w-full relative grid place-items-center">
      <div
        className="relative flex items-center justify-center overflow-hidden md:py-60px-vw py-23px-mvw z-10"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Marquee velocity={velocity} minScale={0.9} pauseOnHover={isPaused}>
          {PartnersImage.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 items-center justify-center mx-4"
            >
              <img
                src={item.imgsrc}
                alt={`Partner ${item.id}`}
                className=" max-h-[21vw] md:max-h-[5vw] md:mr-[5vw] mr-24px-mvw object-contain mx-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Page2OurPartnersLeft;
