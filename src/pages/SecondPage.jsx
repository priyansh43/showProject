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
  Page2LastFAQ,
  PAGE2SECTIONFAQ,
  PartnersImage,
  Partnerslogosecond,
  Section7cardDataArray,
  Section7Tagdata,
  Tagdata,
} from "../data/SecondPage";
import { dummyDataSection12, section12data } from "../data/home";
import { Partnerslogofourth, Partnerslogofourthhalf } from "../data/Page4Data";

export const SecondPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | B.Des Fashion"
        BHeading="B.Des Fashion Design Program"
      />

      <Page2Section2
        SHeading="Redefining Fashion, Shaping The Future"
        paragraph="Unlock the future of fashion at ATLAS ISDI. In our B.Des Fashion Design Program, you will learn the art of blending creativity with cutting-edge technology, exploring areas like circular fashion and sustainable innovation. You’ll craft forward-thinking collections that reflect the dynamic needs of tomorrow’s fashion landscape. This program empowers you to not only design but lead, equipping you with the entrepreneurial skills to create your own fashion empire and shape the future of the industry."
        buttonText="SCHEDULE A VISIT"
        leftImgText="Lorem Ipsum"
        rightImgText="Lorem Ipsum"
        palagraphPadding="1.67vw"
      />

      {/* third */}
      <Page2Section3
        SHeading="Why Choose Atlas Isdi For Fashion Design"
        SECTIONFAQ={PAGE2SECTIONFAQ}
      />
      <div>
        <Page2Section4
          para={
            "Our Fashion Design program combines real-world exposure with hands-on experiences led by industry experts, keeping our students ahead of the curve. Our curriculum offers a strong foundation in technical skills while encouraging exploration through electives in areas like entrepreneurship, marketing, and finance. The program is structured around the ISDI Learning Journey, which progresses through Observers  hip, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. This approach helps students develop a well-rounded skill set, blending creative design with business strategy, empowering them to pursue unique career paths, including launching their own design studios. We focus on nurturing both the artistic and entrepreneurial sides of every student, preparing them to lead the future of fashion."
          }
        />
      </div>
      <div>
        <Page2Section4Mobile
          para={
            "Our Fashion Design program combines real-world exposure with hands-on experiences led by industry experts, keeping our students ahead of the curve. Our curriculum offers a strong foundation in technical skills while encouraging exploration through electives in areas like entrepreneurship, marketing, and finance. The program is structured around the ISDI Learning Journey, which progresses through Observers  hip, Apprenticeship, and Internship, culminating in a Capstone Project that integrates academic and industry insights. This approach helps students develop a well-rounded skill set, blending creative design with business strategy, empowering them to pursue unique career paths, including launching their own design studios. We focus on nurturing both the artistic and entrepreneurial sides of every student, preparing them to lead the future of fashion."
          }
        />
      </div>
      <Page2Section5
        SHeading="Empowering Through Industry-Ready Learning"
        FAQ5={PAGE2FAQ5}
      />

      <Page2Section6
        SHeading={"Learning Outcomes Of Our Program!"}
        Tagdata={Tagdata}
      />
      <Page2Section7
        Section7Tagdata={Section7Tagdata}
        SectioncardDataArray={Section7cardDataArray}
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
        secondpagelogo={Partnerslogofourth}
        halfpagelogo={Partnerslogofourthhalf}
      />
      <Page3Section12Card
        leftHeading="Scholarship & Financial Aid"
        leftP="The ATLAS Scholarship Program offers financial support to deserving students based on their academic achievements, merit, and potential. It aims to empower individuals by making high-quality education accessible, enabling them to pursue their career goals without financial barriers. The program emphasizes rewarding excellence across various disciplines, helping students unlock their full potential at ATLAS University."
        leftButton="Explore Scholarships Details"
        rightHeading="Who Should Apply"
        rightP="ATLAS ISDI’s B.Des Fashion Design Program is perfect for creative individuals who are passionate about fashion and excited to bring their ideas to life. If you’re a trendsetter, aspiring designer, or someone eager to develop your artistic vision and gain practical experience in fashion, this program is for you. Whether you’re looking to make your mark in the fashion industry or explore your creative potential, we invite you to apply. For more details, please check our Admissions Policy."
        rightButton="ADMISSIONS POLICY"
      />
      <Page2Section13
        SHeading="Frequently Asked Questions"
        palagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        FAQSection13={Page2LastFAQ}
      />
    </div>
  );
};

export default SecondPage;
