import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../Heading/SectionHeading";
// import Page2Section4Mobile from "./Page2Section4Mobile";

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
  },
];

const Page7Section4 = () => {
  const [expanded, setExpanded] = useState("First Year");

  return (
    <>
      <div className="mx-[7.29vw] hidden md:block pt-[7.81vw] border-b-[1px] border-gray-600 pb-[5vw]">
        <div className="flex flex-row justify-between pr-[6vw] md:pr-0">
          <SectionHeading title="Our Program Approach" />
          <div className="">
            <button className="md:text-[1.25vw] text-[4vw] bg-[#E12A7B] hover:bg-[#FFFFFF] text-white hover:text-[#1C1C1C] uppercase font-montserrat font-bold px-[3.4vw] md:px-[2.15vw] py-[3.3vw] md:py-[1.96vh] flex items-center justify-center border-[1px] border-[#E12A7B]">
              <div className="text-nowrap"> DOWNLOAD CURRICULUM</div>
              <img
                src="/icon/download.png"
                alt="Arrow Icon"
                className="md:w-[2.08vw] w-[4vw] md:h-[2.08vw] h-[4vw] ml-[1.15vw]"
              />
            </button>
          </div>
        </div>
        <div className="py-[2.08vw] font-montserrat text-[1.15vw] font-medium text-[#1c1c1c] opacity-60 w-[78.34vw] ">
          Our program emphasizes real-world learning with hands-on experiences
          led by industry experts, while our rigorous curriculum ensures
          students gain in-depth technical knowledge. We prioritize a balanced
          development of soft skills, technical skills, and practical insights,
          providing students the flexibility to explore ATLAS electives outside
          of fashion design. By selecting from courses in areas like
          entrepreneurship, marketing, and finance, students can build the
          foundational skills needed to pursue specific career goals, such as
          running their own design studios.
        </div>

        {/*  */}

        <div className="flex gap-0">
          {data.map((item) => (
            <motion.div
              key={item.year}
              initial={{ width: "11.56vw" }}
              animate={{
                width: expanded === item.year ? "54.67vw" : "11.56vw",
                height: "36.73vw",
              }}
              transition={{ duration: 0.5 }}
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
                  className="flex justify-center items-center border-r-[1px] border-gray-600 writing-mode-vertical-flipped font-bold text-[3vw] p-[4.27vw]"
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
                <div className="p-[3.125vw]">
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
                  <p className="mt-[4.17vw] text-[0.83vw] text-gray-400">
                    *We ensure that our curriculum constantly evolves to provide
                    students relevant academic experiences. The curriculum is
                    subject to change based on industry standards and global
                    benchmarks.
                  </p>
                  <img
                    src="/icon/minus.svg"
                    alt="Minus Icon"
                    className="absolute bottom-[1.04vw] right-4 w-[3.54vw] h-[3.54vw] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded("");
                    }}
                  />
                  <div className="relative w-full ">
                    <div className="absolute bottom-[-4.5vw] left-[2vw]  right-[-8vw] z-40  scale-125">
                      <img
                        src="/images/page2/accordianBg.svg"
                        alt=""
                        className="w-[54.58vw] "
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page7Section4;
