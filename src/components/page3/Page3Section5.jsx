import React from "react";
// import LeftComponent from '../section4/LeftComponent';
// import { FAQ } from '../../data/home';
import RightComponent from "../section4/RightComponent";
import LeftComponentForSection5 from "../section4/LeftComponentForSection5";
import LeftComponent from "../section4/LeftComponent";
import SectionHeading from "../Heading/SectionHeading";
import { THIRDPAGESECTION5 } from "../../data/ThirdPage";
import NewSectionHeading from "../Heading/SectionHeadingNew";

export const Page3Section5 = () => {
  return (
    <div className="md:pt-[7.81vw]">
      <div className="md:block hidden md:!w-full px-16px-mvw md:px-[7.29vw] ">
        <NewSectionHeading
          title={"Empowering Through Industry-Ready Learning"}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-y-[5vw] pt-63px-vw  md:gap-x-[5.885vw] px-16px-mvw md:px-[7.29vw] items-start w-full">
        {/* Left Section for Desktop */}

        <div className="hidden md:block flex-1">
          <LeftComponentForSection5
            title="Empowering Through Industry-Ready Learning"
            headingWidth="w-[35.16vw]"
            img={"/images/home/section4/leftImg.png"}
            sectionWidth="35.15625vw"
            gapbtw="2vw"
            imgHeight="26.875vw"
            caption={false}
          />
        </div>

        <div className="block md:hidden ">
          <LeftComponent
            title="Empowering Through Industry-Ready Learning"
            headingWidth="w-[100vw]"
            img={"/images/home/section3/leftImg.png"}
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
          <RightComponent
            FAQ={THIRDPAGESECTION5}
            sectionWidth="44.375vw"
            mobile={false}
          />
        </div>

        {/* Right Section for Mobile */}
        <div className="block md:hidden flex-1 w-full">
          <RightComponent
            FAQ={THIRDPAGESECTION5}
            sectionWidth="100vw"
            mobile={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Page3Section5;
