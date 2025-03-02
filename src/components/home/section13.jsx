import React from "react";

import { Section13Data } from "../../data/home";
import Section13Slider from "../slider/Section13Slider";
import Section3Slider from "../slider/Section3Slider";
import Section13MobileSlider from "../slider/Section13MobileSlider";
import SectionHeading from "../Heading/SectionHeading";
import RightIconButton from "../buttons/RightIconButton";
const Section13 = () => {
  return (
    <div className="flex flex-col gap-[5vh] md:mt-0 mt-[12vh]  md:py-150px-vw">
      <div className="flex items-center justify-between md:px-[7.083vw] px-[4.44vw]">
        <SectionHeading title="Student Life At Atlas Isdi" />
        <div className="  md:w-auto hidden flex-nowrap   md:flex items-center justify-center ">
          <button className="md:text-[1.25vw] w-[12vw] text-[4vw] font-montserrat bg-[#E12A7B] text-white uppercase whitespace-nowrap font-bold px-[5.4vw] md:px-[1.61458vw] py-[3.3vw] md:py-[0.9vw] flex flex-nowrap items-center gap-[3vw] md:gap-[0.5vw] hover:border-[1px] hover:border-[#E12A7B] hover:bg-[#ffff] hover:text-[#1c1c1c]">
            view all
            {/* <span> */}
            <img
              src="/images/home/section3/arrowIcon.svg"
              alt="Arrow Icon"
              className="md:w-[2.08vw] w-[5vw]  md:mr-32px-vw"
            />
            {/* </span> */}
          </button>
        </div>
      </div>
      <div className="hidden  md:block">
        <Section13Slider Section13Data={Section13Data} />
      </div>
      <div className="block md:hidden">
        <Section13MobileSlider Section13Data={Section13Data} />
      </div>
      <div>
        <div className=" w-full md:w-auto flex  md:hidden items-center justify-center ">
          <RightIconButton  title={"View All"} />
        </div>
      </div>
    </div>
  );
};

export default Section13;
