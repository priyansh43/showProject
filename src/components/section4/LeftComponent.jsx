import React from "react";
import SectionHeading from "../Heading/SectionHeading";

const LeftComponent = ({
  title,
  img,
  style,
  headingWidth,
  sectionWidth,
  gapbtw,
  imgHeight,
  caption,
  padding,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-between md:mt-0`}
      style={{ width: sectionWidth, gap: gapbtw }}
    >
      <div
        className={` pb-17px-mvw pt-60px-mvw px-16px-mvw md:px-0 md:pt-0 md:pb-0`}
      >
        <SectionHeading title={title} style={"md:!w-[30.8333vw]"} />
      </div>

      {/* Image with Shadow and Text Animation */}
      <div
        className={`relative w-full group overflow-hidden`}
        style={{ height: imgHeight }}
      >
        <img
          src={img}
          alt="Left Section"
          className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
        <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[3vw] md:text-[1.15vw] font-montserrat font-medium px-2 md:px-[0.5vw] py-1 md:py-[0.3vh] z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
          Lorem Ipsum Text Dummy Content
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
