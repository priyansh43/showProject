import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../Heading/SectionHeading";
import Page2Section4Mobile from "./Page2Section4Mobile";

const data = [
  {
    year: "First Year",
    Bgyear: "first year",
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
    // palagraph:
    //  "At the end of the first year, students participate in an observership between semesters 2 and 3. This program provides first-hand exposure to the design industry’s professional practices and culture, laying the groundwork for future learning.",
    //   YearHeading:"Observership: Initial Exposure"
  },
  {
    year: "Second Year",
    Bgyear: "second year",
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
    // palagraph:"Upon completing their second year, students enter an apprenticeship between semesters 4 and 5. This stage offers specialized training in their areas of interest, allowing them to apply theoretical knowledge in real-world contexts.",
    //  YearHeading:"Apprenticeship: Intermediate Training"
  },
  {
    year: "Third Year",
    Bgyear: "third year",
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
    // palagraph:"Students engage in a structured internship between semesters 6 and 7, following their third year. Developed collaboratively with advisors and industry partners, these internships provide comprehensive professional development and prepare students for their final placements.",
    //  YearHeading:"Internship: Structured Development"
  },
  {
    year: "Fourth Year",
    Bgyear: "fourth year",
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
];

const Page2Section4 = ({ para }) => {
  const [expanded, setExpanded] = useState("First Year");

  return (
    <>
      <div className=" hidden md:block pt-[7.81vw]   ">
        <div className="flex flex-row justify-between pr-[6vw] md:pr-0 mx-[7.29vw]">
          <SectionHeading title="Our Program Approach" />
          <div className="">
            <button className="md:text-[1.25vw] text-[4vw] bg-[#E12A7B] hover:bg-[#FFFFFF] text-white hover:text-[#1C1C1C] uppercase font-montserrat font-bold px-[3.4vw] md:px-[2.15vw] py-[3.3vw] md:py-[1.96vh] flex items-center justify-center border-[1px] border-[#E12A7B]">
              <div className="text-nowrap"> DOWNLOAD CURRICULUM</div>
              <img
                src="/icon/download.svg"
                alt="Arrow Icon"
                className="md:w-[2.08vw] w-[4vw] md:h-[2.08vw] h-[4vw] ml-[1.15vw]"
              />
            </button>
          </div>
        </div>
        {para ? (
          <div className="mx-[7.29vw] py-[2.08vw] font-montserrat text-[1.15vw] font-medium text-[#1c1c1c] opacity-60 w-[78.34vw]  ">
            {para}
          </div>
        ) : (
          <div className="mx-[7.29vw] py-[2.08vw] font-montserrat text-[1.15vw] font-medium text-[#1c1c1c] opacity-60 w-[78.34vw]  ">
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
          </div>
        )}

        {/*  */}

        <div className="flex gap-0 ml-[7.29vw]">
          {data.map((item) => (
            <motion.div
              key={item.year}
              initial={{ width: "11.56vw" }}
              animate={{
                width: expanded === item.year ? "54.67vw" : "11.56vw",
                height: "36.73vw",
              }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col ${
                expanded === item.year
                  ? "bg-[#1c1c1c] text-[#ffff]"
                  : "bg-[#fffff] text-[#1c1c1c]"
              } cursor-pointer`}
              onClick={() => setExpanded(item.year)}
            >
              {/* Year Label with Vertical Text */}
              {expanded !== item.year && (
                <div
                  className="flex justify-start pt-[8vw] items-center border-r-[1px] font-montserrat border-[#1C1C1C66] border-opacity-25 writing-mode-vertical-flipped font-bold text-[3vw] p-[4.27vw]"
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt="Plus Icon"
                    className="absolute top-[1.04vw] right-[50%]w-[3.54vw] h-[3.54vw]"
                  />
                  {item.year}
                </div>
              )}

              {/* Expanded View */}
              {expanded === item.year && (
                <div className="p-[3.125vw] w-[54.58vw]">
                  {item.palagraph ? (
                    <div className="flex flex-col ">
                      <div>
                        <h3 className="text-[1.67vw] uppercase font-semibold font-montserrat">
                          {item.YearHeading}
                        </h3>
                        <div className="text-[1.25vw] pt-[2vw] font-montserrat font-medium tracking-tight opacity-85 h-[17vw]">
                          {item.palagraph}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-[3.75vw]">
                      <div>
                        <h3 className="text-[1.67vw] uppercase font-semibold font-montserrat">
                          Semester 1
                        </h3>
                        <ul className="mt-[1.3vw] space-y-[0.9vw]">
                          {item.semesters.semester1.map((course, index) => (
                            <li
                              className="text-[1.25vw] font-montserrat font-medium tracking-tight opacity-85"
                              key={index}
                            >
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[1.67vw] uppercase font-semibold font-montserrat ">
                          Semester 2
                        </h3>
                        <ul className="mt-[1.3vw] space-y-[0.9vw]">
                          {item.semesters.semester2.map((course, index) => (
                            <li
                              className="text-[1.25vw] font-montserrat font-medium tracking-tight opacity-85"
                              key={index}
                            >
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  <p className="font-montserrat font-light mt-[4.17vw] text-[0.83vw] text-[#ffff] ">
                    *We ensure that our curriculum constantly evolves to provide
                    students relevant academic experiences. The curriculum is
                    subject to change based on industry standards and global
                    benchmarks.
                  </p>
                  {/* <img
                src="/icon/minus.png"
                alt="Minus Icon"
                className="absolute bottom-[1.04vw] right-56px-vw w-[3.54vw] h-[3.54vw] cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded("");
                }}
              /> */}
                  <div className="relative w-full ">
                    <div className="absolute bottom-[-13vw]  left-[-3vw]  overflow-hidden">
                      <h1 className=" text-[11.71875vw] text-nowrap text-white font-montserrat font-bold opacity-10  lowercase">
                        {item.year}
                      </h1>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="border-b-[2px] border-[#1C1C1C66] border-opacity-20 pt-[5vw] w-[86%] ml-[7.27vw]"></div>
      </div>
    </>
  );
};

export default Page2Section4;
