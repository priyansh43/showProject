import React from "react";
// import LeftComponent from '../section4/LeftComponent';

import RightComponent from "../section4/RightComponent";
import LeftComponentForSection5 from "../section4/LeftComponentForSection5";
import LeftComponent from "../section4/LeftComponent";
import SectionHeading from "../Heading/SectionHeading";

export const Page2Section5 = ({ SHeading, FAQ5 }) => {
  return (
    <div className="md:pt-[7.81vw]">
      <div className="md:block hidden md:!w-full px-16px-mvw md:px-[7.29vw] ">
        <SectionHeading title={SHeading} style={""} />
      </div>
      <div className="flex flex-col md:flex-row gap-y-[10.67vw] md:gap-y-[5vw] pt-63px-vw  md:gap-x-[5.885vw] md:px-[7.29vw] items-start w-full">
        {/* Left Section for Desktop */}

        <div className="hidden md:block flex-1">
          <LeftComponentForSection5
            title="Why Choose Atlas Isdi For Fashion Design"
            headingWidth="w-[35.16vw]"
            img={"/images/page2/section5Img.svg"}
            sectionWidth="35.15625vw"
            gapbtw="2vw"
            imgHeight="28.23vw"
            caption={false}
          />
        </div>

        <div className="block md:hidden ">
          {console.log("Rendering Left Section for Mobile")}
          <LeftComponent
            title={SHeading}
            headingWidth="w-[100vw]"
            img={"/images/page2/Section1LeftImg.svg"}
            sectionWidth="100vw"
            gapbtw="2.083vw"
            imgHeight="50.72vh"
            caption={true}
            padding={"px-16px-mvw"}
          />
        </div>

        {/* Right Section */}
        {/* Right Section for Desktop */}
        <div className="hidden md:block flex-1">
          <RightComponent FAQ={FAQ5} sectionWidth="44.375vw" mobile={false} />
        </div>

        {/* Right Section for Mobile */}
        <div className="block md:hidden flex-1 w-full px-16px-mvw">
          <RightComponent FAQ={FAQ5} sectionWidth="100vw" mobile={true} />
        </div>
      </div>
    </div>
  );
};

export default Page2Section5;
