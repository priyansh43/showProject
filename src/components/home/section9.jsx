import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Section9Slider from "../slider/Section9Slider";

export const Section9 = () => {
  return (
    <div className="md:pl-[7.083vw] md:py-150px-vw ">
      <div className="w-full md:w-[65.2vw] px-16px-mvw md:px-0 pt-40px-mvw md:pt-0">
        <SectionHeading title="Atlas Isdi Graduates Join Leading Companies." />
      </div>

      <div className="md:pt-40px-vw pt-24px-mvw font-montserrat font-medium text-[#1c1c1c] opacity-80 w-full px-16px-mvw md:px-0 md:w-[61.2vw]  md:leading-normal tracking-tight md:tracking-normal text-[5vw] md:text-[1.15vw]">
        <p>
        Our graduates joined renowned names in the industry such as Apple, Manish Malhotra, Sabyasachi, Amazon, Google, GUCCI, Louis Vuitton, Deloitte, and more.
        </p>
      </div>
      <div className="md:pt-60px-vw pt-20px-mvw">
        <Section9Slider />
      </div>
      <div className="mt-20px-mvw md:mt-60px-vw px-10px-mvw  md:pl-0  font-montserrat font-medium text-[rgb(28,28,28)] opacity-80  md:w-[85.2vw]  md:leading-normal tracking-tight md:tracking-normal text-[5vw] md:text-[1.15vw] w-full">
        <p>
          The commendable efforts and dedication of our Career Services Team has
          been instrumental in empowering our students and connecting them with
          the right opportunities.
        </p>
      </div>
    </div>
  );
};

export default Section9;
