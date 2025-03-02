import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import RightIconButton from "../buttons/RightIconButton";

const Page2Section12Card = () => {
  return (
    <div>
      {/* Original Section */}
      <div className="flex flex-col-reverse md:flex-row  items-center w-full  md:mx-[7.17vw] mx-0  mt-30px-mvw md:mt-0">
        {/* Left Section */}
        <div className="flex flex-col  justify-center items-start md:p-4 w-full md:w-[50%]">
          {/* Heading */}
          <div className="md:block hidden ">
            {" "}
            <SectionHeading title={"SCHOLARSHIPS AND FINANCIAL AID"} />
          </div>
          {/* Paragraph */}
          <p className="text-gray-600 text-start font-montserrat font-medium text-16px-mvw md:text-[1.16vw] mt-24px-mvw md:mt-[1.67vw] w-full md:w-[42.29vw]">
            Lorem ipsum dolor sit amet, consectetur topic adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur topic adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud
            exercitation ullamco laboris. nisi ut aliquip ex ea commodo
            consequat.
          </p>
          {/* Button */}
          <div className="md:mt-[3.125vw] mt-40px-mvw flex  w-full items-center  md:justify-start justify-center">
            <RightIconButton title={"LOREM IPSUM DOLOR"} />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[35.1vw] group overflow-hidden">
          <div className="block md:hidden px-16px-mvw md:px-0">
            {" "}
            <SectionHeading title={"SCHOLARSHIPS AND FINANCIAL AID"} />
          </div>
          <img
            src="/images/home/section2/sectionbg.jpg"
            alt="Visual Representation"
            className="w-full md:h-[28.65vw] h-[90.93vw] object-cover mt-[24px] md:mt-0   z-0 transform transition-transform duration-500 group-hover:scale-110 "
          />
        </div>
      </div>

      {/* Reversed Section */}
      <div className="flex flex-col md:flex-row items-start w-full md:px-0 px-16px-mvw md:mx-[7.17vw] mt-[7.81vw] ">
        {/* Left Section (Image) */}
        <div className="md:hidden block">
          <SectionHeading title={"Who Should Apply"} />
        </div>
        <div className="w-full md:w-[35.1vw] mt-[24px] md:mt-0 group overflow-hidden">
          <img
            src="/images/home/section2/sectionbg.jpg"
            alt="Visual Representation"
            className="w-full md:h-[28.65vw] h-[90.93vw] object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Right Section (Content) */}
        <div className="md:ml-[8.06vw] flex flex-col justify-center items-start  w-full md:w-[50%]">
          {/* Heading */}
          <div className="hidden md:block">
            <SectionHeading title={"Who Should Apply"} />
          </div>
          {/* Paragraph */}
          <p className="text-gray-600 text-start font-montserrat font-medium text-16px-mvw md:text-[1.16vw] mt-24px-mvw md:mt-[1.67vw] w-full md:w-[42.29vw]">
            ATLAS ISDI B.Des Fashion Design Program is ideal for creative
            individuals passionate about fashion design and eager to transform
            their ideas into innovative fashion solutions. Aspiring designers,
            trendsetters, and forward-thinking students who want to develop
            their artistic vision and gain hands-on experience in the fashion
            industry are encouraged to apply. For more information, read our
            Admissions Policy.
          </p>
          {/* Button */}
          <div className="md:mt-[3.125vw]  mt-40px-mvw  w-full flex items-center justify-center md:justify-start">
            <RightIconButton title={"ADMISSION POLICY"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Section12Card;
