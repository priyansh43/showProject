import React from "react";
import LeftComponent from "../section4/LeftComponent";
import RightComponent from "../section4/RightComponent";
import { PAGE4SECTIONFAQ } from "../../data/Page4Data";

export const Page4Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[5vw] md:gap-x-[5.885vw] items-start px-16px-mvw md:px-[7.29vw] w-full">
      {/* Left Section for Desktop */}
      <div className="hidden md:block flex-1">
        <LeftComponent
          title="Why Choose Atlas Isdi For Communication Design"
          headingWidth="w-[35.16vw]"
          img={"/images/home/section4/leftImg.png"}
          sectionWidth="35.15625vw"
          gapbtw="2vw"
          imgHeight="26.875vw"
          caption={false}
        />
      </div>

      {/* Left Section for Mobile */}
      <div className="flex md:hidden flex-1">
        <LeftComponent
          title="Why Choose Atlas Isdi For Communication Design"
          headingWidth="w-[100vw]"
          img={"/images/home/section3/leftImg.png"}
          sectionWidth="100vw"
          gapbtw="2.083vw"
          imgHeight="50.72vh"
          caption={true}
          padding={"px-16px-mvw"}
        />
      </div>

      {/* Right Section */}
      {/* Right Section for Desktop */}
      <div className="hidden md:block flex-1">
        <RightComponent
          FAQ={PAGE4SECTIONFAQ}
          sectionWidth="44.375vw"
          mobile={false}
        />
      </div>

      {/* Right Section for Mobile */}
      <div className="block md:hidden flex-1 w-full">
        <RightComponent
          FAQ={PAGE4SECTIONFAQ}
          sectionWidth="100vw"
          mobile={true}
        />
      </div>
    </div>
  );
};

export default Page4Section3;
