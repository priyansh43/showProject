import React, { useEffect } from "react";
import Page3Section12Card from "../components/page3/Page3Section12Card";
import Page2Section2 from "../components/page2/Page2Section2";
import {
  Page5LastFAQ,
  Page5Section7cardDataArray,
  Page5Section7Tagdata,
  PAGE5SECTIONFAQ,
  Page5Tagdata,
  Partnerslogofifth,
  partnerslogofifthhalf,
} from "../data/Page5Data";
import Page2Section3 from "../components/page2/Page2Section3";
import Page2Section4 from "../components/page2/Page2Section4";
import Page2Section4Mobile from "../components/page2/Page2Section4Mobile";
import Page2Section5 from "../components/page2/Page2Section5";
import { PAGE2FAQ5, PAGE2SECTIONFAQ, PartnersImage } from "../data/SecondPage";
import { Page4Tagdata } from "../data/Page4Data";
import Page2Section6 from "../components/page2/Page2Section6";
import Page2Section7 from "../components/page2/Page2Section7";
import Page2Section8 from "../components/page2/Page2Section8";
import Page2Section10 from "../components/page2/Page2Section10";
import { dummyDataSection12, section12data } from "../data/home";
import Page2OurParnets from "../components/page2/Page2OurPartners";
import Page2Section13 from "../components/page2/Page2Section13";
import Page2Section1 from "../components/page2/Page2Section1";

export const FifthPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | B.Des Fashion Communication & Styling"
        BHeading="B.Des Fashion Communication & Styling"
      />
      <Page2Section2
        SHeading="Unleashing Fashion Innovation, Shaping Trends"
        buttonText="SCHEDULE A VISIT"
        paragraph=" Step into the vibrant world of fashion communication with ATLAS ISDI’s B.Des Fashion Communication & Styling program. Dive into the art of styling, digital media mastery, and crafting brand identities while learning to merge creativity with strategy. Learn how to harness design thinking and stay ahead of industry trends, equipping yourself with the tools to communicate fashion in fresh, impactful ways. As you progress, you’ll create stunning visual narratives that captivate audiences across platforms. From innovative campaigns to compelling brand stories, you’ll translate ideas into powerful expressions of style and culture, making your mark in the fashion ecosystem while working on real-world projects. "
        leftImgText="Lorem Ipsum Text Dummy Content"
        rightImgText="Lorem Ipsum Text Dummy Content"
        palagraphPadding="1.67vw"
        RimageHeight="52.66vw"
      />

      <Page2Section3
        SHeading="Why Choose Atlas Isdi For Fashion Communication & Styling"
        SECTIONFAQ={PAGE5SECTIONFAQ}
      />
      <div>
        <Page2Section4
          para={
            "Our B.Des Fashion Communication & Styling program delivers transformative learning through immersive, hands-on projects led by seasoned industry experts. Our thoughtfully designed curriculum combines comprehensive technical expertise with well-rounded skill development, enabling students to excel in visual storytelling and brand communication. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. With the freedom to explore interdisciplinary ATLAS electives, such as entrepreneurship, marketing, and finance, students can tailor their learning journey to align with their ambitions—whether it's launching a design studio or crafting impactful fashion campaigns. This approach ensures that our students are future-ready, with the agility and insights to thrive in the ever-evolving fashion landscape."
          }
        />
      </div>
      <div>
        <Page2Section4Mobile
          para={
            "Our B.Des Fashion Communication & Styling program delivers transformative learning through immersive, hands-on projects led by seasoned industry experts. Our thoughtfully designed curriculum combines comprehensive technical expertise with well-rounded skill development, enabling students to excel in visual storytelling and brand communication. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. With the freedom to explore interdisciplinary ATLAS electives, such as entrepreneurship, marketing, and finance, students can tailor their learning journey to align with their ambitions—whether it's launching a design studio or crafting impactful fashion campaigns. This approach ensures that our students are future-ready, with the agility and insights to thrive in the ever-evolving fashion landscape."
          }
        />
      </div>
      <Page2Section5 SHeading="The Learning Journey at ISDI" FAQ5={PAGE2FAQ5} />
      {/*  */}
      <Page2Section6
        SHeading={"Learning Outcomes Of Our Program!"}
        Tagdata={Page5Tagdata}
      />
      <Page2Section7
        Section7Tagdata={Page5Section7Tagdata}
        SectioncardDataArray={Page5Section7cardDataArray}
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
        secondpagelogo={Partnerslogofifth}
        halfpagelogo={partnerslogofifthhalf}
      />

      <Page3Section12Card
        leftHeading="Scholarship & Financial Aid"
        leftP="The ATLAS Scholarship Program offers financial support to deserving students based on their academic achievements, merit, and potential. It aims to empower individuals by making high-quality education accessible, enabling them to pursue their career goals without financial barriers. The program emphasizes rewarding excellence across various disciplines, helping students unlock their full potential at ATLAS University."
        leftButton="Explore Scholarships Details"
        rightHeading="Who Should Apply"
        rightP="ATLAS ISDI’s B.Des Fashion Communication & Styling Design program is perfect for creative minds passionate about storytelling through fashion and visual aesthetics. If you’re an aspiring stylist, trendsetter, or forward-thinker eager to bring innovative ideas to life while developing your artistic vision and gaining real-world experience, this program is for you. Whether you dream of shaping fashion narratives or mastering the art of styling, we invite you to apply. For more details, please check our Admissions Policy."
        rightButton="ADMISSIONS POLICY"
      />
      <Page2Section13
        SHeading="Frequently Asked Questions"
        palagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        FAQSection13={Page5LastFAQ}
      />
    </div>
  );
};

export default FifthPage;
