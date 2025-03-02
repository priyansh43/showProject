import React from 'react'
import TagSectionCard from '../card/TagSectionCard';
import { Tagdata } from '../../data/SecondPage';
import SectionHeading from '../Heading/SectionHeading';

const Page2Section6 = ({SHeading,Tagdata}) => {
  return (
    <div className='md:px-[7vw] px-16px-mvw mt-[7.81vw]'>
    <div className='pb-[3.125vw]'>
        <SectionHeading title={SHeading}/>
    </div>
 <div className="flex md:flex-row flex-col flex-wrap md:flex-nowrap gap-[3.733vw] md:gap-[0.78vw] justify-center ">

{Tagdata.map((card, index) => (
  <TagSectionCard
    key={index}
    heading={card.heading}
    tags={card.tags}
    bgColor={card.bgColor}
    textColor={card.textColor}
    cardWidth={"27.92vw"}
    cardHeight={"41.8vw"}
    border={card.border}
    Cardborder={card.Cardborder}
  />
))}
</div>
    </div>
   
  )
}



export default Page2Section6;
