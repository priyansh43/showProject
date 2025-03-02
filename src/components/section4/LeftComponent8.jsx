import React from "react";
import SectionHeading from "../Heading/SectionHeading";

const LeftComponent8 = ({
  title,
  img,
  style,
  headingWidth,
  sectionWidth,
  gapbtw,
  imgHeight,
  caption,
}) => {
  return (
    <div
      className="flex flex-col "
      style={{ width: sectionWidth, gap: gapbtw }}
    >
      <SectionHeading title={title} style={headingWidth} />
      <div className={`block relative w-full`} style={{ height: imgHeight }}>
        {/* Shadow Image */}
        <div
          className="absolute bottom-0 left-0 w-full h-[5vh] z-10"
          style={{
            background:
              "transparent url('/images/home/section3/bgShadow.png') 80% 0% no-repeat padding-box",
          }}
        ></div>
        <img
          src={img}
          alt="Left Section"
          className="w-full h-full object-cover z-0"
        />
        <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
        <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[3vw] md:text-[1.15vw] font-montserrat font-medium px-2 md:px-[0.5vw] py-1 md:py-[0.3vh] z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
          Lorem Ipsum Text Dummy Content
        </div>
      </div>
    </div>
  );
};

export default LeftComponent8;
