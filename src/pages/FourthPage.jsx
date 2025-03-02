import React, { useEffect } from "react";
import Page3Section12Card from "../components/page3/Page3Section12Card";
import Page2Section2 from "../components/page2/Page2Section2";
import Page2Section3 from "../components/page2/Page2Section3";
import {
  Page4LastFAQ,
  Page4Section7cardDataArray,
  Page4Section7Tagdata,
  PAGE4SECTIONFAQ,
  Page4Tagdata,
} from "../data/Page4Data";
import Page2Section4 from "../components/page2/Page2Section4";
import Page2Section4Mobile from "../components/page2/Page2Section4Mobile";
import Page2Section5 from "../components/page2/Page2Section5";
import { PAGE2FAQ5, PAGE2SECTIONFAQ, PartnersImage } from "../data/SecondPage";
import Page2Section6 from "../components/page2/Page2Section6";
import Page2Section7 from "../components/page2/Page2Section7";
import {
  Page3Section7cardDataArray,
  Partnerslogothird,
  partnerslogothirdhalf,
} from "../data/ThirdPage";
import Page2Section8 from "../components/page2/Page2Section8";
import Page2Section10 from "../components/page2/Page2Section10";
import { dummyDataSection12, section12data } from "../data/home";
import Page2OurParnets from "../components/page2/Page2OurPartners";
import Page2Section13 from "../components/page2/Page2Section13";
import Page2Section1 from "../components/page2/Page2Section1";

export const FourthPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | B.Des Communication Design"
        BHeading="B.Des Communication Design Program"
      />
      <Page2Section2
        SHeading="Igniting Creativity, Leading Design Innovation"
        paragraph="Dive into the world of communication design with ATLAS ISDI’s B.Des Communication Design Program. Here, you’ll learn how to transform ideas into powerful visual stories using design thinking, digital media, branding, and user experience principles. You’ll explore the latest trends and develop a deep understanding of design strategy and innovation. Through hands-on projects, you will create impactful designs that captivate audiences and communicate messages clearly. By the end of the program, you’ll be equipped with the skills to lead in the fast-evolving communication design industry, making your mark as a creative visionary."
        leftImgText="Lorem Ipsum Text Dummy Content"
        rightImgText="Lorem Ipsum Text Dummy Content"
        palagraphPadding="2.08vw"
        buttonText="SCHEDULE A VISIT"
      />

      <Page2Section3
        SHeading="Why Choose Atlas Isdi For Communication Design"
        SECTIONFAQ={PAGE4SECTIONFAQ}
      />
      <div>
        <Page2Section4
          para={
            "Our Communication Design program blends real-world learning with hands-on guidance from industry experts. Students gain in-depth knowledge of design principles while developing critical soft and technical skills. With our transdisciplinary approach, they can explore ATLAS electives from a niche like entrepreneurship, marketing, or technology, going beyond the boundaries of traditional design. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. This holistic approach provides flexibility for students to craft a personalized learning journey, preparing them to thrive in creative careers or embark on their entrepreneurial journeys."
          }
        />
      </div>
      <div>
        <Page2Section4Mobile
          para={
            "Our Communication Design program blends real-world learning with hands-on guidance from industry experts. Students gain in-depth knowledge of design principles while developing critical soft and technical skills. With our transdisciplinary approach, they can explore ATLAS electives from a niche like entrepreneurship, marketing, or technology, going beyond the boundaries of traditional design. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. This holistic approach provides flexibility for students to craft a personalized learning journey, preparing them to thrive in creative careers or embark on their entrepreneurial journeys."
          }
        />
      </div>
      <Page2Section5 SHeading="The Learning Journey at ISDI" FAQ5={PAGE2FAQ5} />
      {/*  */}
      <Page2Section6
        SHeading={"Learning Outcomes Of Our Program!"}
        Tagdata={Page4Tagdata}
      />
      <Page2Section7
        Section7Tagdata={Page4Section7Tagdata}
        SectioncardDataArray={Page4Section7cardDataArray}
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
        secondpagelogo={Partnerslogothird}
        halfpagelogo={partnerslogothirdhalf}
      />

      <Page3Section12Card
        leftHeading="Scholarship & Financial Aid"
        leftP="The ATLAS Scholarship Program offers financial support to deserving students based on their academic achievements, merit, and potential. It aims to empower individuals by making high-quality education accessible, enabling them to pursue their career goals without financial barriers. The program emphasizes rewarding excellence across various disciplines, helping students unlock their full potential at ATLAS University."
        leftButton="Explore Scholarships Details"
        rightHeading="Who Should Apply"
        rightP="ATLAS ISDI’s B.Des Communication Design Program is perfect for creative minds passionate about visual storytelling and bringing ideas to life. If you’re someone who loves exploring design, technology, and user experiences, or dreams of creating impactful brand identities and innovative visuals, this is the program for you. Whether you’re an aspiring designer, a problem-solver, or just excited to dive into the world of communication design, we’d love to have you on board. For more details, check out our Admissions Policy."
        rightButton="ADMISSIONS POLICY"
      />
      <Page2Section13
        SHeading="Frequently Asked Questions"
        palagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        FAQSection13={Page4LastFAQ}
      />
    </div>
  );
};

export default FourthPage;
