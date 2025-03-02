import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import RightIconButton from "../buttons/RightIconButton";

const Page3Section12Card = ({
  leftHeading,
  leftP,
  leftButton,
  rightHeading,
  rightP,
  rightButton,
}) => {
  return (
    <div>
      {/* Original Section */}
      <div className="flex flex-col-reverse md:flex-row items-center w-full md:mx-[7.17vw] mx-0 md:px-0 mt-30px-mvw md:mt-0">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start md:p-4 w-full md:w-[50%]">
          {/* Heading */}
          <div className="md:block hidden">
            <SectionHeading title={leftHeading} />
          </div>
          {/* Paragraph */}
          <p className="text-[#1c1c1c] opacity-60 text-start font-montserrat font-medium text-16px-mvw md:text-[1.16vw] mt-24px-mvw px-16px-mvw md:px-0 md:mt-[1.67vw] w-full md:w-[42.29vw]">
            {leftP}
          </p>
          {/* Button */}
          <div className="md:mt-[3.125vw] mt-40px-mvw flex w-full items-center md:justify-start justify-center">
            <RightIconButton title={leftButton} />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[35.1vw] group overflow-hidden relative">
          <div className="block md:hidden px-16px-mvw md:px-0">
            <SectionHeading title={leftHeading} />
          </div>
          <img
            src="/images/page2/Sabyasatchi.svg"
            alt="Visual Representation"
            className="w-full md:h-[28.65vw] h-[90.93vw] object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Shadow Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
        </div>
      </div>

      {/* Reversed Section */}
      <div className="flex flex-col md:flex-row items-start w-full md:mx-[7.17vw] mt-[16vw] md:mt-[7.81vw]">
        {/* Left Section (Image) */}
        <div className="md:hidden block px-16px-mvw md:px-0">
          <SectionHeading title={rightHeading} />
        </div>
        <div className="w-full md:w-[35.1vw] mt-[24px] md:mt-0 group overflow-hidden relative">
          <img
            src="/images/page2/Sabyasatchi.svg"
            alt="Visual Representation"
            className="w-full md:h-[28.65vw] h-[90.93vw] object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Shadow Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
        </div>

        {/* Right Section (Content) */}
        <div className="md:ml-[8.06vw] flex flex-col justify-center items-start w-full md:w-[50%]">
          {/* Heading */}
          <div className="hidden md:block">
            <SectionHeading title={rightHeading} />
          </div>
          {/* Paragraph */}
          <p className="text-[#1c1c1c] px-16px-mvw md:px-0 opacity-60 text-start font-montserrat font-medium text-16px-mvw md:text-[1.16vw] mt-24px-mvw md:mt-[1.67vw] w-full md:w-[42.29vw]">
            {rightP}
          </p>
          {/* Button */}
          <div className="md:mt-[3.125vw] mt-40px-mvw w-full flex items-center justify-center md:justify-start">
            <RightIconButton title={rightButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3Section12Card;
