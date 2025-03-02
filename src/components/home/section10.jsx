import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import OurPartners from "../ourpartners/OurPartners";
import OurPartnersRight from "../ourpartners/OurPartnersRight";

const Section10 = () => {
  return (
    <div className="w-full  md:px-[7.083vw] pb-40px-mvw md:pb-[5.625vw]">
      <div className="pt-60px-mvw md:pt-0 px-16px-mvw md:px-0">
        <SectionHeading title="Brands That Back Our Students" />
      </div>

      <div>
        <OurPartners />

        <div
          className="border border-[#1C1C1C66] border-opacity-40"
          style={{ borderWidth: "0.5px" }}
        ></div>

        <OurPartnersRight />
      </div>
    </div>
  );
};

export default Section10;
