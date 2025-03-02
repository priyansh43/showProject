import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Section3Slider from "../slider/Section3Slider";

const LeftComponentwithSlider = ({
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
      className="flex flex-col items-start justify-between mt-40px-mvw md:mt-0 "
      style={{ width: sectionWidth, gap: gapbtw }}
    > 
    <div className="px-16px-mvw  md:pb-0 md:px-0">
    <SectionHeading title={title}  />
    </div>
     

      <div className="md:hidden block w-full mt-16px-mvw ">
        <Section3Slider />
      </div>
    </div>
  );
};

export default LeftComponentwithSlider;
