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
  },
  // Add other years here
];

const Page7Section4Mobile = () => {
  const [expanded, setExpanded] = useState("First Year");

  return (
    <div className="md:hidden mx-[5vw] pt-[8vw] pb-[6vw]">
      <div className="flex flex-col gap-[4vw]">
        <SectionHeading title="Our Program Approach" />
        <p className="text-[4.27vw] font-montserrat font-medium leading-[6vw] text-[#1c1c1c] opacity-60">
          Our program emphasizes real-world learning with hands-on experiences
          led by industry experts, while our rigorous curriculum ensures
          students gain in-depth technical knowledge. We prioritize a balanced
          development of soft skills, technical skills, and practical insights,
          providing students the flexibility to explore ATLAS electives outside
          of fashion design. By selecting from courses in areas like
          entrepreneurship, marketing, and finance, students can build the
          foundational skills needed to pursue specific career goals, such as
          running their own design studios.
        </p>
      </div>

      <div className="mt-40px-mvw flex-1 w-full">
        <Page2QaRightComponent />
      </div>

      <div>
        <div className=" md:w-auto flex mt-[2vw] md:block items-center justify-center ">
          <button className="md:text-[1.25vw] text-[4vw] bg-[#E12A7B] hover:bg-[#FFFFFF] text-white hover:text-[#1C1C1C] uppercase font-montserrat font-bold px-[3.4vw] md:px-[1.66667vw] py-[3.3vw] md:py-[1.8vh] flex items-center gap-[2vw] md:gap-[0.5vw] ">
            DOWNLOAD Curriculum
            <img
              src="/icon/download.png"
              alt="Arrow Icon"
              className="md:w-[2.08vw] w-[7vw] md:h-[2.08vw] h-[7vw] ml-[1.15vw]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page7Section4Mobile;
