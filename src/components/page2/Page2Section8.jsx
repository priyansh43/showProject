import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Section9Slider from "../slider/Section9Slider";

export const Page2Section8 = () => {
  return (
    <div className="md:pl-[7.083vw] md:py-150px-vw">
      <div className="w-full md:w-[65.2vw] px-16px-mvw md:px-0 mt-60px-mvw md:mt-0 pt-40px-mvw md:pt-0">
        <SectionHeading title="OUR FACULTY" />
      </div>

      <div className="pt-20px-mvw md:pt-60px-vw">
        <Section9Slider />
      </div>
    </div>
  );
};

export default Page2Section8;
