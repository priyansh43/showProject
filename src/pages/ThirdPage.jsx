import React, { useEffect } from "react";
import Page2Section6 from "../components/page2/Page2Section6";
import Page2Section7 from "../components/page2/Page2Section7";
import Page2Section8 from "../components/page2/Page2Section8";
import Page2OurParnets from "../components/page2/Page2OurPartners";
import Page2Section10 from "../components/page2/Page2Section10";
import Page2Section13 from "../components/page2/Page2Section13";
import Page3Section12Card from "../components/page3/Page3Section12Card";
import Page2Section2 from "../components/page2/Page2Section2";
import Page2Section3 from "../components/page2/Page2Section3";
import {
  PAGE3FAQ5,
  Page3LastFAQ,
  Page3Section7cardDataArray,
  Page3Section7Tagdata,
  Partnerslogothird,
  TagdataSECTION5,
  THIRDPAGESECTION2,
} from "../data/ThirdPage";
import Page4Section4 from "../components/page4/Page4Section4";
import Page2Section4 from "../components/page2/Page2Section4";
import Page2Section4Mobile from "../components/page2/Page2Section4Mobile";
import Page2Section5 from "../components/page2/Page2Section5";
import { PAGE2FAQ5, PAGE2SECTIONFAQ, PartnersImage } from "../data/SecondPage";
import { Page4Tagdata } from "../data/Page4Data";
import { dummyDataSection12, section12data } from "../data/home";
import Page2Section1 from "../components/page2/Page2Section1";
import { Partnerslogosixth, Partnerslogosixthhalf } from "../data/Page6Data";
import Section12 from "../components/home/section12";

export const ThirdPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | B.Des Interior Design"
        BHeading="B.Des Interior Design Program"
      />
      <Page2Section2
        SHeading="Shaping designers, transforming spaces"
        paragraph=" Step into the world of interior design with ATLAS ISDI’s B.Des Interior Design Program—where visionary aesthetics meet cutting-edge technology. Learn spatial planning, material innovation, sustainable practices, and smart technologies while exploring cultural and environmental relevance. Create spaces that blend functionality, beauty, and innovation—crafting interiors that reflect contemporary trends and timeless appeal. Graduate as a visionary leader equipped with entrepreneurial thinking, ready to shape the future of interior design."
        leftImgText="Lorem Ipsum Text Dummy Content"
        rightImgText="Lorem Ipsum Text Dummy Content"
        palagraphPadding="2.08vw"
        RimageHeight="45.89vw"
        buttonText="SCHEDULE A VISIT"
      />

      <Page2Section3
        SHeading="Why Choose Atlas Isdi For Interior Design"
        SECTIONFAQ={THIRDPAGESECTION2}
      />
      <div>
        <Page2Section4
          para={
            "Our Interior Design program emphasizes real-world learning through hands-on experiences guided by industry experts, while our comprehensive curriculum ensures a deep understanding of design principles and techniques. We adopt a transdisciplinary approach, allowing students to explore electives in entrepreneurship, technology, marketing, and more. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. This flexibility fosters a well-rounded skill set, blending technical expertise with practical insights, empowering students to pursue diverse career paths, including launching their own design studios."
          }
        />
      </div>
      <div>
        <Page2Section4Mobile
          para={
            "Our Interior Design program emphasizes real-world learning through hands-on experiences guided by industry experts, while our comprehensive curriculum ensures a deep understanding of design principles and techniques. We adopt a transdisciplinary approach, allowing students to explore electives in entrepreneurship, technology, marketing, and more. We’ve designed our program in a structured way, which progresses through Observership, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. This flexibility fosters a well-rounded skill set, blending technical expertise with practical insights, empowering students to pursue diverse career paths, including launching their own design studios."
          }
        />
      </div>
      <Page2Section5 SHeading="The Learning Journey at ISDI" FAQ5={PAGE3FAQ5} />

      {/*  */}
      <Page2Section6
        SHeading={"Learning Outcomes Of Our Program!"}
        Tagdata={TagdataSECTION5}
      />
      <Page2Section7
        Section7Tagdata={Page3Section7Tagdata}
        SectioncardDataArray={Page3Section7cardDataArray}
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
        secondpagelogo={Partnerslogosixth}
        halfpagelogo={Partnerslogosixthhalf}
      />
      <Page3Section12Card
        leftHeading="Scholarship & Financial Aid"
        leftP="The ATLAS Scholarship Program offers financial support to deserving students based on their academic achievements, merit, and potential. It aims to empower individuals by making high-quality education accessible, enabling them to pursue their career goals without financial barriers. The program emphasizes rewarding excellence across various disciplines, helping students unlock their full potential at ATLAS University."
        leftButton="Explore Scholarships Details"
        rightHeading="Who Should Apply"
        rightP="ATLAS ISDI’s B.Des Interior Design Program is perfect for creative individuals who are passionate about designing spaces that are both functional and beautiful. If you love transforming ideas into real-world environments and are excited about trends, materials, and sustainability, we’d love to have you join us. Whether you're an aspiring interior designer or someone eager to explore new possibilities in design, this program is for you. For more details, please check our Admissions Policy."
        rightButton="ADMISSIONS POLICY"
      />

      <Page2Section13
        SHeading="Frequently Asked Questions"
        palagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        FAQSection13={Page3LastFAQ}
      />
    </div>
  );
};

export default ThirdPage;
