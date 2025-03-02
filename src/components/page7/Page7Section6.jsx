import React from "react";
import TagSectionCard from "../card/TagSectionCard";
import { Tagdata } from "../../data/SecondPage";
import SectionHeading from "../Heading/SectionHeading";
import { Page7Tagdata } from "../../data/Page7Data";

const Page7Section6 = () => {
  return (
    <div className="md:px-[7vw] px-16px-mvw mt-[7.81vw]">
      <div className="pb-[3.125vw]">
        <SectionHeading title={"Learning Outcomes Of Our Program!"} />
      </div>
      <div className="flex md:flex-row flex-col flex-wrap gap-[3.733vw] md:gap-[0.5vw] justify-center ">
        {Page7Tagdata.map((card, index) => (
          <TagSectionCard
            key={index}
            heading={card.heading}
            tags={card.tags}
            bgColor={card.bgColor}
            textColor={card.textColor}
            cardWidth={"27.92vw"}
            cardHeight={"41.8vw"}
            border={card.border}
          />
        ))}
      </div>
    </div>
  );
};

export default Page7Section6;
