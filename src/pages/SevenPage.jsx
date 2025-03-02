import React, { useEffect } from "react";
import Page3Section12Card from "../components/page3/Page3Section12Card";
import Page2Section2 from "../components/page2/Page2Section2";
import Page2Section3 from "../components/page2/Page2Section3";
import {
  Page7LastFAQ,
  Page7Section7cardDataArray,
  Page7Section7Tagdata,
  PAGE7SECTIONFAQ,
  Page7Tagdata,
} from "../data/Page7Data";
import Page2Section4 from "../components/page2/Page2Section4";
import Page2Section4Mobile from "../components/page2/Page2Section4Mobile";
import Page2Section5 from "../components/page2/Page2Section5";
import { PAGE2FAQ5, PAGE2SECTIONFAQ, PartnersImage } from "../data/SecondPage";
import Page2Section6 from "../components/page2/Page2Section6";
import Page2Section7 from "../components/page2/Page2Section7";
import Page2Section8 from "../components/page2/Page2Section8";
import Page2Section10 from "../components/page2/Page2Section10";
import { dummyDataSection12, section12data } from "../data/home";
import Page2OurParnets from "../components/page2/Page2OurPartners";
import Page2Section13 from "../components/page2/Page2Section13";
import Page2Section1 from "../components/page2/Page2Section1";
import { Partnerslogoeight, partnerslogoeighthalf } from "../data/Page8Data";

export const SevenPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | B.Des Strategic Design Management"
        BHeading="B.Des Strategic Design Management"
      />
      <Page2Section2
        SHeading="Transforming design strategy, empowering business"
        buttonText="SCHEDULE A VISIT"
        paragraph="In ATLAS ISDI’s B.Des Strategic Design Management, students will learn to blend creativity with business strategy. They’ll learn human-centered design, brand strategy, and design-led innovation while gaining expertise in market research, UX insights, and sustainable business models. Through hands-on experience, they’ll craft innovative solutions that drive real-world impact. By the end of the program, students will be ready to lead design-driven industries, turning design thinking into strategic value and shaping the future of business and design."
        leftImgText="Lorem Ipsum Text Dummy Content"
        rightImgText="Lorem Ipsum Text Dummy Content"
        palagraphPadding="1.67vw"
      />
      <Page2Section3
        SHeading="Why Choose Atlas Isdi For Strategic Design Management"
        SECTIONFAQ={PAGE7SECTIONFAQ}
      />
      <div>
        <Page2Section4
          para={
            "Our B.Des in Strategic Design Management program is crafted to transform students into visionary leaders through immersive, real-world experiences and expert-led mentorship. Our rigorous curriculum blends advanced strategic thinking with technical expertise, equipping students with the knowledge to drive innovation. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. We prioritize a well-rounded development of soft skills, strategic insights, and design thinking, while offering the flexibility to explore ATLAS electives beyond strategic design. By diving into areas like entrepreneurship, marketing, and finance, students build the essential competencies to launch successful ventures or lead transformation within global organizations."
          }
        />
      </div>
      <div>
        <Page2Section4Mobile
          para={
            "Our B.Des in Strategic Design Management program is crafted to transform students into visionary leaders through immersive, real-world experiences and expert-led mentorship. Our rigorous curriculum blends advanced strategic thinking with technical expertise, equipping students with the knowledge to drive innovation. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. We prioritize a well-rounded development of soft skills, strategic insights, and design thinking, while offering the flexibility to explore ATLAS electives beyond strategic design. By diving into areas like entrepreneurship, marketing, and finance, students build the essential competencies to launch successful ventures or lead transformation within global organizations."
          }
        />
      </div>
      <Page2Section5
        SHeading="The Learning Journey at ATLAS ISDI"
        FAQ5={PAGE2FAQ5}
      />
      {/*  */}
      <Page2Section6
        SHeading={"Learning Outcomes Of Our Program!"}
        Tagdata={Page7Tagdata}
      />
      <Page2Section7
        Section7Tagdata={Page7Section7Tagdata}
        SectioncardDataArray={Page7Section7cardDataArray}
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
        secondpagelogo={Partnerslogoeight}
        halfpagelogo={partnerslogoeighthalf}
      />

      <Page3Section12Card
        leftHeading="Scholarship & Financial Aid"
        leftP="The ATLAS Scholarship Program offers financial support to deserving students based on their academic achievements, merit, and potential. It aims to empower individuals by making high-quality education accessible, enabling them to pursue their career goals without financial barriers. The program emphasizes rewarding excellence across various disciplines, helping students unlock their full potential at ATLAS University."
        leftButton="Explore Scholarships Details"
        rightHeading="Who Should Apply"
        rightP="ATLAS ISDI’s B.Des Strategic Design Management program is perfect for creative individuals passionate about blending design with strategic thinking. If you’re an aspiring designer, innovator, or future leader eager to transform ideas into impactful solutions while gaining practical experience in design management, this program is for you. Whether you aim to shape business strategies through design or lead the future of creative industries, we invite you to apply. For more details, please check our Admissions Policy."
        rightButton="ADMISSIONS POLICY"
      />
      <Page2Section13
        SHeading="Frequently Asked Questions"
        palagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        FAQSection13={Page7LastFAQ}
      />
    </div>
  );
};

export default SevenPage;
