import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Page2OurPartnersRight from "../ourpartners/Page2OurPartners";
import Page2OurPartnersLeft from "../ourpartners/Page2OurParnersLeft";
import Page3OurPartnersLeft from "../ourpartners/Page3OurPartnersLeft";
import Page3OurPartnersRight from "../ourpartners/Page3OurPartners";

const Page3OurPArtnerSection = () => {
  return (
    <div className="w-full md:px-[7.083vw] pb-[8vw] md:pb-[10vh] pt-60px-mvw md:pt-[7.8125vw]">
      <div className="pt-60px-mvw md:pt-0 px-16px-mvw md:px-0">
        <SectionHeading title="Brands That Back Our Students" />
      </div>

      <div>
        <Page3OurPartnersLeft />

        <div
          className="border border-[#1C1C1C66] border-opacity-40"
          style={{ borderWidth: "0.5px" }}
        ></div>

        <Page3OurPartnersRight />
      </div>
    </div>
  );
};

export default Page3OurPArtnerSection;
