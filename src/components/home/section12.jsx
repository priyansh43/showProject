import React, { useEffect, useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import RightIconButton from "../buttons/RightIconButton";

const CustomArrow = ({ direction, onClick }) => (
  <button
    className={`absolute z-50 text-3xl focus:outline-none rounded-full h-10 flex items-center justify-center ${
      direction === "left"
        ? "left-[29vw] top-[130vw]"
        : "right-[29vw] top-[130vw]" // Position buttons on respective sides
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

const Section12 = ( {section12data}) => {
  const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items
  const totalItems = section12data.length; // Total number of items in the array
  const sliderRef = React.useRef(null);
  const [viewAll, setViewAll] = useState(false);

 

  const handleViewMore = () => {
    setVisibleItems(totalItems);
    setViewAll(true);
  };

 

  // Update the number of visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (!viewAll) {
        if (window.innerWidth < 768) {
          setVisibleItems(2); // Show 2 items on mobile
        } else {
          setVisibleItems(4); // Show 4 items on desktop
        }
      }
    };

    updateVisibleItems(); // Set the initial value
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [viewAll]);

  return (
    <div className="md:px-[7.083vw] px-16px-mvw">
      {/* Desktop Grid Layout */}
      <div className="md:w-[65.2vw] ">
        <SectionHeading title="Student Projects" />
      </div>

      <div className="pt-24px-mvw md:pt-32px-vw md:pb-60px-vw pb-20px-mvw font-montserrat font-medium text-[#1c1c1c] opacity-80 w-[92vw] md:w-full md:leading-normal tracking-tight md:tracking-normal text-[5vw] md:text-[1.15vw]">
        <p>
          Explore the innovative projects by ATLAS ISDI students, where
          creativity meets real-world challenges, showcasing their skills and
          impact on the design industry.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28px-mvw md:gap-40px-vw">
        {section12data.slice(0, visibleItems).map((item, index) => (
          <div
            key={index}
            className="flex flex-col  font-montserrat border border-[#1C1C1C66] text-[#1C1C1C] items-start"
          >
            <div className="md:max-h-[20.83vw] relative  ">
              <div className="bg-[#E12A7B] z-10 md:px-20px-vw px-8px-mvw py-6px-mvw md:py-12px-vw absolute left-16px-mvw top-16px-mvw md:left-16px-vw md:top-16px-vw text-white font-bold text-12px-mvw md:text-16px-vw uppercase">
                {item.sticker}
              </div>
              <img
                src={item.imgsrc}
                alt="imgsrc"
                className="w-full h-full object-fill"
              />
            </div>
            <div className=" p-12px-mvw md:p-22px-vw ">
              <div className="pt-6px-vw font-semibold text-[5.87vw] md:text-32px-vw">
                {item.heading}
              </div>
              <div className="font-medium pt-14px-vw text-16px-mvw md:text-20px-vw">
                {item.name}
              </div>
              <div className="font-medium pt-12px-mvw md:pt-32px-vw text-16px-mvw md:text-18px-vw opacity-60">
                {item.para}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally Render View More Button */}
      {visibleItems < totalItems && (
        <div className="text-center pt-30px-mvw md:pt-60px-vw">
          <RightIconButton onClick={handleViewMore} title={"View More"} />
        </div>
      )}

    </div>
  );
};

export default Section12;
