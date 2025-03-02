import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import LeftComponent from "../section4/LeftComponent";
import { FAQ } from "../../data/home";
import RightComponent from "../section4/RightComponent";

export const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[5vw] md:gap-x-[5.885vw] items-start  md:px-[7.29vw] w-full">
      {/* Left Section for Desktop */}
      <div className="hidden md:block flex-1">
        <LeftComponent
          title="Redefining Education In Designing"
          headingWidth="w-[35.16vw]"
          img={"/images/home/section4/leftImg.png"}
          sectionWidth="35.16vw"
          gapbtw="2vw"
          imgHeight="22.47vw"
          caption={true}
        />
      </div>

      {/* Left Section for Mobile */}
      <div className="flex md:hidden flex-1 ">
        <LeftComponent
          title="Redefining Education In Designing"
          headingWidth="w-[100vw]"
          img={"/images/home/section4/leftImg.png"}
          sectionWidth="100vw"
          gapbtw="2.083vw"
          imgHeight="90.93vw"
          caption={true}
          padding={"px-16px-mvw pt-60px-mvw md:pt-0 md:px-0"}
        />
      </div>

      {/* Right Section */}
      {/* Right Section for Desktop */}
      <div className="hidden md:block flex-1 ">
        <RightComponent FAQ={FAQ} sectionWidth="44.375vw" mobile={false} />
      </div>

      {/* Right Section for Mobile */}
      <div className="block md:hidden flex-1 w-full px-16px-mvw  pt-20px-mvw md:pt-0">
        <RightComponent FAQ={FAQ} sectionWidth="100vw" mobile={true} />
      </div>
    </div>
  );
};

export default Section4;
