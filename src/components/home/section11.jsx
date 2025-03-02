import React from "react";
import SectionHeading from "../Heading/SectionHeading";

import { Section11cardData } from "../../data/home";
import Section11Slider from "../slider/Section11Slider";

export const Section11 = () => {
  return (
    <div className="md:pl-[7.083vw] pb-60px-mvw md:pb-[9.25vw]">
      <div className=" md:w-[65.2vw]  px-16px-mvw md:px-0">
        <SectionHeading title="Masters Progression" />
      </div>

      <div className="md:pt-40px-vw pt-24px-mvw  px-16px-mvw md:px-0  font-montserrat font-medium text-[#1c1c1c] opacity-80  md:max-w-[70.2vw]  md:leading-normal tracking-tight md:tracking-normal text-[5vw] md:text-[1.15vw]">
        <p>
        Our students get accepted at leading global institutions, including Parsons, University of the Arts London, SCAD, University for the Creative Arts, Rhode Island School of Design, and California College of the Arts, among others. With dedicated guidance from our Masters Progressions team, we help them navigate their career paths, bridging their ambitions with the right opportunities for future growth.
        </p>
      </div>
      <div className="pt-20px-mvw md:pt-60px-vw">
        {/* slider */}
        <Section11Slider Section11cardData={Section11cardData} />
      </div>
    </div>
  );
};

export default Section11;
