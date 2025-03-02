import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../Heading/SectionHeading";
// import RightComponent from "../section4/RightComponent";
import { Page2MobileFAQ } from "../../data/SecondPage";
import Page2QaRightComponent from "../section4/Page2QaRightComponent";

const data = [
  {
    year: "First Year",
    image: "/icon/plus.svg",
    semesters: {
      semester1: [
        "Elements of Design: 2D & 3D",
        "Drawing & Imaging - I",
        "Story of Art – I",
        "Visual Thinking & Making Studio – I",
        "Colour Theory",
        "Objects as History",
      ],
      semester2: [
        "Space & Materiality",
        "Drawing & Imaging – II",
        "Story of Art – II",
        "Visual Thinking & Making Studio – II",
        "Sustainable Systems",
        "Time",
      ],
    },
    palagraph:
      "At the end of the first year, students participate in an observership between semesters 2 and 3. This program provides first-hand exposure to the design industry’s professional practices and culture, laying the groundwork for future learning.",
    YearHeading: "Observership: Initial Exposure",
  },
  {
    year: "Second Year",
    image: "/icon/plus.svg",
    semesters: {
      semester1: [
        "Elements of Design: 2D & 3D",
        "Drawing & Imaging - I",
        "Story of Art – I",
        "Visual Thinking & Making Studio – I",
        "Colour Theory",
        "Objects as History",
      ],
      semester2: [
        "Space & Materiality",
        "Drawing & Imaging – II",
        "Story of Art – II",
        "Visual Thinking & Making Studio – II",
        "Sustainable Systems",
        "Time",
      ],
    },
    palagraph:
      "Upon completing their second year, students enter an apprenticeship between semesters 4 and 5. This stage offers specialized training in their areas of interest, allowing them to apply theoretical knowledge in real-world contexts.",
    YearHeading: "Apprenticeship: Intermediate Training",
  },
  {
    year: "Third Year",
    image: "/icon/plus.svg",
    semesters: {
      semester1: [
        "Elements of Design: 2D & 3D",
        "Drawing & Imaging - I",
        "Story of Art – I",
        "Visual Thinking & Making Studio – I",
        "Colour Theory",
        "Objects as History",
      ],
      semester2: [
        "Space & Materiality",
        "Drawing & Imaging – II",
        "Story of Art – II",
        "Visual Thinking & Making Studio – II",
        "Sustainable Systems",
        "Time",
      ],
    },
    palagraph:
      "Students engage in a structured internship between semesters 6 and 7, following their third year. Developed collaboratively with advisors and industry partners, these internships provide comprehensive professional development and prepare students for their final placements.",
    YearHeading: "Internship: Structured Development",
  },
  {
    year: "Fourth Year",
    image: "/icon/plus.svg",
    semesters: {
      semester1: [
        "Elements of Design: 2D & 3D",
        "Drawing & Imaging - I",
        "Story of Art – I",
        "Visual Thinking & Making Studio – I",
        "Colour Theory",
        "Objects as History",
      ],
      semester2: [
        "Space & Materiality",
        "Drawing & Imaging – II",
        "Story of Art – II",
        "Visual Thinking & Making Studio – II",
        "Sustainable Systems",
        "Time",
      ],
    },

    palagraph:
      "In their final year, students complete a Capstone Project that synthesizes their learning from previous tiers. This project acts as a bridge between academia and industry, demonstrating students' readiness for their professional careers. To support their academic progress, jury and reviews by industry experts provide balanced feedback from both academic and industry perspectives.",
    YearHeading: "Capstone: Professional Showcase",
  },
];

const Page2Section4Mobile = ({ para }) => {
  const [expanded, setExpanded] = useState("First Year");

  return (
    <div className="md:hidden mx-[5vw] pt-[8vw] pb-[6vw]">
      <div className="flex flex-col gap-[4vw]">
        <SectionHeading title="Our Program Approach" />
        {para ? (
          <p className="text-[4.27vw] font-montserrat font-medium  text-[#1c1c1c] opacity-60 leading-[7.47vw]">
            {para}
          </p>
        ) : (
          <p className="text-[4.27vw] font-montserrat font-medium  text-[#1c1c1c] opacity-60 leading-[7.47vw]">
            At ATLAS ISDI, our B.Des in Animation & VFX Program helps students
            bring their creative visions to life. With hands-on experiences led
            by industry experts, students gain practical skills and a deep
            understanding of the tools and techniques shaping the world of
            animation and visual effects. We’ve designed our program in a
            structured way, which progresses through Observership,
            Apprenticeship, and Internship, culminating in a Capstone Project
            that integrates academic and industry insights. Our comprehensive
            curriculum balances creative thinking, technical skills, and
            real-world insights, while offering the flexibility to explore ATLAS
            electives beyond Animation & VFX. By studying areas like
            entrepreneurship, marketing, and finance, students build the
            foundational knowledge to launch their own studios or excel in the
            dynamic world of visual storytelling.
          </p>
        )}
      </div>

      <div className="mt-40px-mvw flex-1 w-full">
        <Page2QaRightComponent />
      </div>

      <div>
        <div className=" md:w-auto flex pt-[12vw] border-opacity-60 pb-[12vw] border-b border-[#1C1C1C66] md:block items-center justify-center ">
          <button className="md:text-[1.25vw] text-[4vw] bg-[#E12A7B] hover:bg-[#FFFFFF] text-white hover:text-[#1C1C1C] uppercase font-montserrat font-bold px-[3.4vw] md:px-[1.66667vw] py-[3.3vw] md:py-[1.8vh] flex items-center gap-[2vw] md:gap-[0.5vw] ">
            DOWNLOAD Curriculum
            <img
              src="/icon/download.svg"
              alt="Arrow Icon"
              className="md:w-[2.08vw] w-[7vw] md:h-[2.08vw] h-[7vw] ml-[1.15vw]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2Section4Mobile;
