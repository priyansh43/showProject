import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import LeftComponentwithSlider from "../section4/LeftComponentwithSlider";
import { FAQ8 } from "../../data/home";
import RightComponent from "../section4/RightComponent";
import RightComponent8 from "../section4/RightComponent8";
import LeftComponent from "../section4/LeftComponent";

export const Section8 = () => {
  return (
    <div className="flex flex-col   md:flex-row gap-y-40px-mvw md:gap-x-[5.885vw] items-end md:px-[7.29vw] w-full">
      {/* Left Section for Desktop */}
      <div className="hidden md:block flex-1">
       <LeftComponent
          title="Global Learning"
          headingWidth="w-[35.16vw]"
          img={"/images/home/section8/leftImg.png"}
          sectionWidth="35.16vw"
          gapbtw="5.56vh"
          imgHeight="36.05vw"
        /> 
        



      </div>

      {/* Left Section for Mobile */}
      <div className="flex md:hidden flex-1">
        <LeftComponentwithSlider
          title="Our Leadership"
          headingWidth="w-[100vw]"
          img={"/images/home/section8/leftImg.png"}
          sectionWidth="100vw"
          gapbtw="2.083vw"
          imgHeight="64.93vh"
        />
        {/* <div className="w-full">
            <Section3Slider />
          </div> */}
      </div>

      <div className="hidden md:block flex-1">
        <RightComponent8 FAQ={FAQ8} sectionWidth="44.375vw" mobile={false} />
      </div>

      {/* Right Section for Mobile */}
      <div className="block md:hidden flex-1 w-full">
        <RightComponent8 FAQ={FAQ8} sectionWidth="100vw" mobile={true} />
      </div>
    </div>
  );
};

export default Section8;
