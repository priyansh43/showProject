import React from 'react';
import LeftComponent from '../section4/LeftComponent';
import { FAQ } from '../../data/home';
import RightComponent from '../section4/RightComponent';
import LeftSectionOf13 from './LeftSectionof13Section';
import SectionHeading from '../Heading/SectionHeading';

export const Page2Section13 = ({SHeading,palagraph,FAQSection13}) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-[5vw] md:gap-x-[5.94vw] justify-between items-start px-16px-mvw md:px-[7.29vw] w-full my-60px-mvw md:my-0 md:mt-[7.81vw]">
      {/* Left Section for Desktop */}
    <div className='w-full'>
        <div className=''><SectionHeading title={SHeading}/></div>
        <p className='font-montserrat font-medium pt-24px-mvw pb-10px-mvw md:pb-0 md:pt-[2.0835vw] opacity-60 text-16px-mvw md:text-[1.16vw]'>{palagraph}</p>
    </div>
      {/* Left Section for Mobile */}
     

      {/* Right Section */}
    {/* Right Section for Desktop */}
<div className="hidden md:block flex-1">
  <RightComponent FAQ={FAQSection13} sectionWidth="44.375vw" mobile={false}/>
</div>

{/* Right Section for Mobile */}
<div className="block md:hidden flex-1 w-full">
  <RightComponent FAQ={FAQSection13} sectionWidth="100vw" mobile={true} />
</div>

    </div>
  );
};

export default Page2Section13;
