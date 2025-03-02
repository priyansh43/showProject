import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Page11Section6Card from "../card/Page11Section6Card";
import Page11Section6CardReverse from "../card/Page11Section6CardReverse";
import Page11Section6Card2 from "../card/Page11Section6Card2";

const Page11Section6 = () => {
  return (
    <div className="pt-[34.93vw] md:pt-[7.81vw] px-16px-mvw md:px-[7.29vw] pb-[0vw] md:pb-0">
      <div className="md:w-[68.08vw]">
        <SectionHeading
          title={"Student-Led Events: The Heartbeat Of Atlas Isdi"}
        />
      </div>

      <div className="pt-24px-mvw md:pt-0">
        <Page11Section6Card
          heading={
            "Inferno: Asia’s First Inclusive and Virtual Creative Arts & Design Fest"
          }
          paragraph={
            "Inferno stands as a beacon for creative expression, connecting college-level talent across Asia in arts and design. This virtual fest provides an extraordinary platform for students to showcase their skills, connect with industry leaders, and build collaborative networks. From graphic design to digital arts, Inferno empowers participants with exposure and opportunities that shape thriving careers."
          }
          img1={"/images/page2/section5Img.svg"}
          img2={"/images/page2/section5Img.svg"}
          rightImg={"/images/page2/section5Img.svg"}
        />
      </div>

      <div className="pt-[6.25vw] md:pt-40px-vw">
        <Page11Section6CardReverse
          heading={"Sensorium"}
          paragraph={
            "The Sensorium is where fashion meets technology and entrepreneurship, celebrating inclusivity, identity, and sustainability. This groundbreaking platform is a testament to ATLAS ISDI's commitment to shaping the future of fashion through innovation and creativity."
          }
          img1={"/images/page2/section5Img.svg"}
          img2={"/images/page2/section5Img.svg"}
          rightImg={"/images/page2/section5Img.svg"}
        />
      </div>

      <div className="pt-[6.25vw]  md:pt-40px-vw">
        <Page11Section6Card2
          heading={"Gandhi: The Musical at NCPA"}
          paragraph={
            "This first-of-its-kind production exemplifies the university's dedication to holistic education. Entirely conceptualized and executed by our students, the musical highlighted their exceptional talent and collaborative spirit, leaving an indelible mark on audiences."
          }
          img1={"/images/page2/section5Img.svg"}
          img2={"/images/page2/section5Img.svg"}
          rightImg={"/images/page2/section5Img.svg"}
        />
      </div>
    </div>
  );
};

export default Page11Section6;
