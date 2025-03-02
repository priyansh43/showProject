import React, { useEffect } from "react";
import Page3Section12Card from "../components/page3/Page3Section12Card";
import Page2Section2 from "../components/page2/Page2Section2";
import Page2Section3 from "../components/page2/Page2Section3";
import {
  Page6LastFAQ,
  Page6Section7cardDataArray,
  Page6Section7Tagdata,
  PAGE6SECTIONFAQ,
  Page6Tagdata,
} from "../data/Page6Data";
import Page2Section4 from "../components/page2/Page2Section4";
import Page2Section4Mobile from "../components/page2/Page2Section4Mobile";
import Page2Section5 from "../components/page2/Page2Section5";
import { PAGE2FAQ5, PAGE2SECTIONFAQ, PartnersImage } from "../data/SecondPage";
import Page2Section6 from "../components/page2/Page2Section6";
import Page2Section7 from "../components/page2/Page2Section7";
import { Page3Section7Tagdata } from "../data/ThirdPage";
import Page2Section8 from "../components/page2/Page2Section8";
import { dummyDataSection12, section12data } from "../data/home";
import Page2Section10 from "../components/page2/Page2Section10";
import Page2OurParnets from "../components/page2/Page2OurPartners";
import Page2Section13 from "../components/page2/Page2Section13";
import Page2Section1 from "../components/page2/Page2Section1";
import {
  Partnerslogoseventh,
  Partnerslogoseventhhalf,
} from "../data/Page7Data";

export const SixPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | B.Des Product Design Program"
        BHeading="B.Des Product Design Program"
      />
      <Page2Section2
        SHeading="Crafting bold futures, shaping innovators."
        buttonText="SCHEDULE A VISIT"
        paragraph="Dive into the world of product design with ATLAS ISDI’s B.Des Product Design Program. Here, you’ll master user-centered design, functional aesthetics, and sustainable innovation. Learn hands-on techniques like prototyping, material exploration, and ergonomics, while sharpening your expertise in design thinking, CAD modeling, and human-centered research.Create products that are innovative, sustainable, and market-ready. From concept to execution, you’ll bring ideas to life, crafting designs that solve real-world challenges and resonate with users. You’ll be ready to shape the future of product design, equipped with the skills and vision to make a lasting impact in today’s dynamic industry at the end of the program.

"
        leftImgText="Lorem Ipsum Text Dummy Content"
        rightImgText="Lorem Ipsum Text Dummy Content"
        palagraphPadding="1.67vw"
      />

      <Page2Section3
        SHeading="Why Choose Atlas Isdi For Product Design"
        SECTIONFAQ={PAGE6SECTIONFAQ}
      />
      <div>
        <Page2Section4
          para={
            "At ATLAS ISDI, our B.Des in Product Design equips students to tackle real-world challenges through hands-on experiences and mentorship from industry leaders. Our rigorous curriculum blends deep technical expertise with creative problem-solving, ensuring students develop a well-rounded skill set. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. We focus on a holistic approach that nurtures soft skills, technical mastery, and practical insights, while offering the flexibility to explore ATLAS electives beyond product design. By engaging with courses in entrepreneurship, marketing, and finance, students build the core competencies needed to launch their own ventures or drive innovation within established companies."
          }
        />
      </div>
      <div>
        <Page2Section4Mobile
          para={
            "At ATLAS ISDI, our B.Des in Product Design equips students to tackle real-world challenges through hands-on experiences and mentorship from industry leaders. Our rigorous curriculum blends deep technical expertise with creative problem-solving, ensuring students develop a well-rounded skill set. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. We focus on a holistic approach that nurtures soft skills, technical mastery, and practical insights, while offering the flexibility to explore ATLAS electives beyond product design. By engaging with courses in entrepreneurship, marketing, and finance, students build the core competencies needed to launch their own ventures or drive innovation within established companies."
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
        Tagdata={Page6Tagdata}
      />
      <Page2Section7
        Section7Tagdata={Page6Section7Tagdata}
        SectioncardDataArray={Page6Section7cardDataArray}
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
        secondpagelogo={Partnerslogoseventh}
        halfpagelogo={Partnerslogoseventhhalf}
      />

      <Page3Section12Card
        leftHeading="Scholarship & Financial Aid"
        leftP="The ATLAS Scholarship Program offers financial support to deserving students based on their academic achievements, merit, and potential. It aims to empower individuals by making high-quality education accessible, enabling them to pursue their career goals without financial barriers. The program emphasizes rewarding excellence across various disciplines, helping students unlock their full potential at ATLAS University."
        leftButton="Explore Scholarships Details"
        rightHeading="Who Should Apply"
        rightP="ATLAS ISDI’s B.Des Product Design Program is perfect for creative thinkers who are passionate about designing functional, user-centered products that solve real-world problems. If you’re an aspiring designer eager to explore the full product development lifecycle—from ideation and prototyping to testing and iteration—this program is for you. Whether you’re driven by innovation, sustainability, or creating meaningful user experiences, we invite you to apply. For more details, check out our Admissions Policy."
        rightButton="ADMISSIONS POLICY"
      />
      <Page2Section13
        SHeading="Frequently Asked Questions"
        palagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        FAQSection13={Page6LastFAQ}
      />
    </div>
  );
};

export default SixPage;
