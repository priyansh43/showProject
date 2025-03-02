import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Section7Slider from "../slider/Section7Slider";

export const Section7 = () => {
  return (
    <div className="md:pl-[7.083vw] px-16px-mvw md:px-0 pb-[7.8125vw]">
      <SectionHeading title="Our Leadership" />
      <div className="pt-20px-mvw md:pt-60px-vw pl-[5.27vw] md:pl-0">
        {/* slider */}
        <Section7Slider />
      </div>
    </div>
  );
};

export default Section7;
