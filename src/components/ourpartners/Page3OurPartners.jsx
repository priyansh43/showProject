import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";

const Page3OurPartnersRight = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(30);
  const PartnersImage = [
    { id: 1, imgsrc: "/images/home/section10/1.png" },
    { id: 2, imgsrc: "/images/home/section10/2.png" },
    { id: 3, imgsrc: "/images/home/section10/3.png" },
    { id: 4, imgsrc: "/images/home/section10/4.png" },
    { id: 5, imgsrc: "/images/home/section10/5.png" },
    { id: 6, imgsrc: "/images/home/section10/1.png" },
    { id: 7, imgsrc: "/images/home/section10/2.png" },
    { id: 8, imgsrc: "/images/home/section10/3.png" },
    { id: 9, imgsrc: "/images/home/section10/4.png" },
    { id: 10, imgsrc: "/images/home/section10/5.png" },
  ];

  useEffect(() => {
    const calculateVelocity = () => {
      const baseVelocity = 30; // Default speed
      const screenFactor = window.innerWidth / 1920; // Adjust relative to 1920px
      return Math.max(10, baseVelocity * screenFactor); // Minimum speed of 10
    };

    const handleResize = () => {
      setVelocity(calculateVelocity());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                className="md:mr-[6.35vw]  max-w-[28vw] md:max-w-full mr-32px-mvw"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Page3OurPartnersRight;
