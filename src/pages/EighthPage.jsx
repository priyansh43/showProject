import React, { useEffect } from "react";
import Page2Section1 from "../components/page2/Page2Section1";
import Page2Section2 from "../components/page2/Page2Section2";
import Page2Section3 from "../components/page2/Page2Section3";
import Page2Section4 from "../components/page2/Page2Section4";
import Page2Section6 from "../components/page2/Page2Section6";
import Page2Section7 from "../components/page2/Page2Section7";
import Page2Section10 from "../components/page2/Page2Section10";
import Page2Section13 from "../components/page2/Page2Section13";
import Page2Section4Mobile from "../components/page2/Page2Section4Mobile";
import Page2OurParnets from "../components/page2/Page2OurPartners";
import Page2Section5 from "../components/page2/Page2Section5";
import Page2Section8 from "../components/page2/Page2Section8";
import Page3Section12Card from "../components/page3/Page3Section12Card";
import {
  PAGE2FAQ5,
  PAGE2SECTIONFAQ,
  PartnersImage,
  PartnersImagehalf,
  Section7cardDataArray,
  Section7Tagdata,
  Tagdata,
} from "../data/SecondPage";
import { dummyDataSection12, section12data } from "../data/home";
import {
  PAGE8FAQ5,
  Page8LastFAQ,
  Page8Section7cardDataArray,
  Page8Section7Tagdata,
  PAGE8SECTIONFAQ,
  Page8Tagdata,
} from "../data/Page8Data";

export const EighthPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | B.Des Animation & VFX Program"
        BHeading="B.Des Animation & VFX Program"
      />
      <Page2Section2
        SHeading="Crafting Worlds. Bringing Imagination To Life."
        paragraph="At ATLAS ISDI, dive into the world of Animation & VFX, where you’ll develop expertise in 3D modeling, digital compositing, motion graphics, and visual storytelling. Our program equips you with the technical skills of CGI, character rigging, and rendering, allowing you to master the tools that bring your imagination to life. You'll learn how to create lifelike animations and stunning visual effects, transforming creative concepts into reality. By the end of the program, you’ll be ready to lead in the ever-evolving industries of animation, film, and gaming, creating immersive experiences that captivate audiences worldwide."
        buttonText="SCHEDULE A VISIT"
        leftImgText="Lorem Ipsum"
        rightImgText="Lorem Ipsum"
        palagraphPadding="1.67vw"
      />

      {/* third */}
      <Page2Section3
        SHeading="Why Choose Atlas Isdi For Animation & VFX"
        SECTIONFAQ={PAGE8SECTIONFAQ}
      />
      <div>
        <Page2Section4 />
      </div>
      <div>
        <Page2Section4Mobile />
      </div>
      <Page2Section5
        SHeading="The Learning Journey at ATLAS ISDI"
        FAQ5={PAGE8FAQ5}
      />

      <Page2Section6
        SHeading={"Learning Outcomes Of Our Program!"}
        Tagdata={Page8Tagdata}
      />
      <Page2Section7
        Section7Tagdata={Page8Section7Tagdata}
        SectioncardDataArray={Page8Section7cardDataArray}
        SHeading="Industry Readiness"
      />
      {/* <Page2Section8/> */}

      <Page2Section10
        section12data={section12data}
        Sheading="Student Projects"
        para={
          "Discover the innovative projects by ATLAS ISDI’s B.Des Interior Design Students."
        }
      />

      <Page2OurParnets
        heading={"Brands That Back Our Students"}
        secondpagelogo={PartnersImage}
        halfpagelogo={PartnersImagehalf}
      />
      <Page3Section12Card
        leftHeading="Scholarship & Financial Aid"
        leftP="The ATLAS Scholarship Program offers financial support to deserving students based on their academic achievements, merit, and potential. It aims to empower individuals by making high-quality education accessible, enabling them to pursue their career goals without financial barriers. The program emphasizes rewarding excellence across various disciplines, helping students unlock their full potential at ATLAS University."
        leftButton="Explore Scholarships Details"
        rightHeading="Who Should Apply"
        rightP="ATLAS ISDI’s B.Des Animation & VFX Program is perfect for creative individuals passionate about storytelling through animation and visual effects. If you’re an aspiring animator, VFX artist, or forward-thinker eager to bring imaginative ideas to life while gaining hands-on experience, this program is for you. Whether you dream of creating cinematic magic or pushing the boundaries of digital artistry, we invite you to apply. For more details, please check our Admissions Policy."
        rightButton="ADMISSIONS POLICY"
      />
      <Page2Section13
        SHeading="Frequently Asked Questions"
        palagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        FAQSection13={Page8LastFAQ}
      />
    </div>
  );
};

export default EighthPage;
