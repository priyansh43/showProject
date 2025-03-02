import React from "react";
// import { Section7cardDataArray, Section7Tagdata } from "../../data/SecondPage";
import Page2Section7Card from "../card/Page2Section7Card";
import TagSection7Card from "../card/TagsCardSection7";
import SectionHeading from "../Heading/SectionHeading";
import {
  Page7Section7cardDataArray,
  Page7Section7Tagdata,
} from "../../data/Page7Data";

export const Page7Section7 = () => {
  return (
    <div className="pt-[7.8125vw] px-16px-mvw  md:px-[7vw]">
      {/* Section Heading */}
      <SectionHeading title={"Industry Readiness"} />

      {/* Cards Section */}
      <div className="flex items-center justify-center gap-[1.16vw] mt-[3.125vw]">
        {Page7Section7cardDataArray.map((card, index) => (
          <div
            key={index}
            className={`${index > 0 ? "hidden md:block" : ""}`} // Hide all except the first card on mobile
          >
            <Page2Section7Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>

      {/* Tags Section */}
      <div className="hidden md:flex w-full h-full justify-between mt-[1.05vw]">
        {/* Left Section */}
        <div className="border-l border-t border-b border-[#1C1C1C66] flex-shrink-0">
          {Page7Section7Tagdata.map((card, index) => (
            <TagSection7Card
              key={index}
              heading={card.heading}
              tags={card.tags}
              bgColor={card.bgColor}
              textColor={card.textColor}
              cardWidth={"39.89vw"}
              cardHeight={"19.05vw"}
              border={card.border}
            />
          ))}
        </div>

        {/* Right Section */}
        <div className="flex-1 h-auto">
          <img
            src="/images/home/section1/img1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page7Section7;
