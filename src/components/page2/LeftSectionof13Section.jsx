import React from "react";
import SectionHeading from "../Heading/SectionHeading";

const LeftSectionOf13 = ({
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
      className=""
     
    >
      <div className="">
      <SectionHeading title={title} style={"md:!w-[30.8333vw]"} />
      </div>
     <div>
        <p className="text-[1.16vw] font-medium font-montserrat pt-[2.0833vw]">
            {caption}
        </p>
     </div>
    </div>
  );
};

export default LeftSectionOf13;
