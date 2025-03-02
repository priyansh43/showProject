import React from 'react';
import LeftComponent from '../section4/LeftComponent';
// import { FAQ } from '../../data/home';
import RightComponent from '../section4/RightComponent';


export const Page2Section3 = ({SHeading,SECTIONFAQ}) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[5vw] items-start md:gap-x-[5.885vw]   md:px-[7.29vw] w-full">
      {/* Left Section for Desktop */}
      <div className="hidden md:block flex-1">
        <LeftComponent
          title={SHeading}
          headingWidth="w-[35.16vw]"
          img={'/images/page2/Section3Img.svg'}
          sectionWidth="35.15625vw"
          gapbtw="2vw"
          imgHeight="26.875vw"
          caption={false}
        />
      </div>

      {/* Left Section for Mobile */}
      <div className="flex md:hidden flex-1">
        <LeftComponent
          title={SHeading}
          headingWidth="w-[100vw]"
          img={'/images/page2/Section1LeftImg.svg'}
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
  <RightComponent FAQ={SECTIONFAQ} sectionWidth="44.375vw" mobile={false}/>
</div>

{/* Right Section for Mobile */}
<div className="block md:hidden flex-1 w-full px-16px-mvw">
  <RightComponent FAQ={SECTIONFAQ} sectionWidth="100vw" mobile={true} />
</div>

    </div>
  );
};

export default Page2Section3;
