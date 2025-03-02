import React from "react";
import LeftComponent from "../section4/LeftComponent";
import { FAQ } from "../../data/home";
import RightComponent from "../section4/RightComponent";
// import LeftSectionOf13 from './LeftSectionof13Section';
import SectionHeading from "../Heading/SectionHeading";
import { PAGE5SECTIONFAQ } from "../../data/Page5Data";

export const Page5Section13 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[5vw] md:gap-x-0 justify-between items-start px-16px-mvw md:px-[7.29vw] w-full mt-[7.81vw]">
      {/* Left Section for Desktop */}
      <div className="w-full">
        <div className="">
          <SectionHeading title={"Frequently Asked Questions"} />
        </div>
        <p className="font-montserrat font-medium pt-24px-mvw pb-10px-mvw md:pb-0 md:pt-[2.0835vw] opacity-60 text-16px-mvw md:text-[1.16vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      {/* Left Section for Mobile */}

      {/* Right Section */}
      {/* Right Section for Desktop */}
      <div className="hidden md:block flex-1">
        <RightComponent
          FAQ={PAGE5SECTIONFAQ}
          sectionWidth="44.375vw"
          mobile={false}
        />
      </div>

      {/* Right Section for Mobile */}
      <div className="block md:hidden flex-1 w-full">
        <RightComponent
          FAQ={PAGE5SECTIONFAQ}
          sectionWidth="100vw"
          mobile={true}
        />
      </div>
    </div>
  );
};

export default Page5Section13;
