import React from "react";
import SectionHeading from "../Heading/SectionHeading";

const LeftComponentForSection5 = ({
  title,
  img,
  style,
  headingWidth,
  sectionWidth,
  gapbtw,
  imgHeight,
  caption,
  padding
}) => {
  return (
    <div
      className="flex flex-col items-start justify-between mt-40px-mvw md:mt-0"
      style={{ width: sectionWidth, gap: gapbtw }}
    >
      {/* Image with Shadow and Animation */}
      <div
        className={`relative w-full group overflow-hidden`}
        style={{ height: imgHeight }}
      >
        {/* Image */}
        {img && (
          <img
            src={img}
            alt="Left Section"
            className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
          />
        )}

        {/* Shadow Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>

        {/* Caption Text Animation */}
        {caption && (
          <div className="absolute bottom-[2%] left-[2%] brightness-200 z-20 text-[#FFFFFF] text-[1.15vw] font-montserrat font-medium px-[0.5vw] py-[0.3vh] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftComponentForSection5;
