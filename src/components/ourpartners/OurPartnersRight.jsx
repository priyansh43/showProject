
import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";

const OurPartnersRight = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(30);
  const PartnersImage = [
    { id: 1, imgsrc: "/images/home/section10/7.png" },
    { id: 2, imgsrc: "/images/home/section10/8.png" },
    { id: 3, imgsrc: "/images/home/section10/9.png" },
    { id: 4, imgsrc: "/images/home/section10/10.png" },
    { id: 5, imgsrc: "/images/home/section10/11.png" },
    { id: 6, imgsrc: "/images/home/section10/12.png" },
  ]; 

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
        className="relative overflow-hidden md:py-60px-vw py-23px-mvw z-10" 
        style={{
          WebkitOverflowScrolling: "touch", 
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Marquee
          velocity={velocity}
          minScale={0.9}
          pauseOnHover={isPaused}
          direction="right"
        >
          {PartnersImage.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 items-center justify-center mx-4"
            >
              <img
                src={item.imgsrc}
                alt={`Partner ${item.id}`}
                className="md:mr-[6.35vw]  md:max-h-[5.21vw] md:mx-auto max-h-[21vw] mr-32px-mvw"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurPartnersRight;
