import React from "react";
import SectionHeading from "../Heading/SectionHeading";


import Section15Slider from "../slider/Section15Slider";

export const Section15 = ({Section15cardData,Sheading,paragraph}) => {
  return (
    <div className="md:pl-[7.083vw] pl-16px-mvw md:pb-[2vw] md:py-150px-vw  py-60px-mvw ">
      <div className="  md:w-full max-w-[80%]  ">
        <SectionHeading title={Sheading} />
      </div>

      <div className="pt-[3.7vh] pb-[2vh] md:pt-40px-vw md:pb-60px-vw font-montserrat font-medium text-[#1c1c1c] opacity-80 w-[92vw] md:w-[61.2vw]  md:leading-normal tracking-tight md:tracking-normal text-[5vw] md:text-[1.15vw]">
        <p>
          {paragraph}
        </p>
      </div>
      <div className="pt-20px-mvw md:pt-0 md:pr-[7.19vw]">
        {/* slider */}
        <Section15Slider Section11cardData={Section15cardData} />
      </div>
    </div>
  );
};

export default Section15;
