import React, { useState } from "react";
import SectionHeading from "../Heading/SectionHeading";

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Track hover state for individual boxes
  const boxes = [
    "TAKE THE FIRST STEP.<br>APPLY NOW",
    "HAVE QUESTIONS?<br>TALK TO US",
    "EXPERIENCE OUR CAMPUS.<br>SCHEDULE A VISIT",
    "DOWNLOAD BROCHURE",
  ];

  const footerLinks = [
    [
      "ABC Scheme",
      "Systems Support",
      "Entrepreneurship",
      "Mandatory Disclosures",
      "UGC Learning Resource",
    ],
    [
      "Internal Complaints Committee",
      "Grievance Redressal Committee",
      "Student Grievance",
      "Anti Ragging Committee",
      "Women Development Cell / POSH",
    ],
    ["NEP Coordinator", "Ombudsperson", "NAAC", "IQAC", "Academic Calendars"],
    ["Curriculum", "Contact Us", "Brand Guideline"],
  ];

  return (
    <div className="w-full  text-white">
      {/* Top Section: Boxes */}
      <div className="px-[4.4vw] bg-[#1C1C1C] md:mt-[7.81vw] pb-[5vh] md:pb-0">
        <div className="pt-40px-mvw pb-24px-mvw md:pt-[4.17vw] md:pb-[2vw]">
          <SectionHeading
            title="Learn More About Atlas Isdi"
            style={"!text-white"}
          />
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-4 md:pb-[4.1vw] gap-[1.80vh] md:gap-[1vw]">
          {boxes.map((text, index) => (
            <div
              key={index}
              className={`border flex group flex-col cursor-pointer items-start border-solid border-white p-[5.33vw] md:p-[1.25vw] ${
                index === 0
                  ? "bg-[#E12A7B] border-none h-[20vh] md:h-auto  md:gap-6 "
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="text-white font-montserrat text-wrap font-bold text-[5.33vw] md:text-[1.25vw]"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
              <div className="flex items-end w-full h-full justify-end">
                <img
                  src={
                    index === 0 || hoveredIndex === index
                      ? "/icon/rightArrow.svg" // Show white arrow if it's the main box or hovered
                      : "/icon/blackIcon.svg" // Default arrow image for other cases
                  }
                  className="h-auto group-hover:bg-[#E12A7B] rounded-full w-[9.07vw] md:w-[2.08vw] object-cover"
                  alt="Arrow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="px-[7.083vw] pt-20px-mvw  relative bg-[#1C1C1C] mt-[16.67vw] md:mt-[4.1vw] md:pt-[3vw] md:pb-[1vw]">
        <div
          className="absolute right-[4.4vw] md:right-[1.56vw] top-[8vw] md:top-[1.56vw] md:w-[5.68vw] w-[16.67vw] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/images/home/footer/backtotop.png"
            className="w-full h-full object-cover"
            alt="backtotop"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-[2vw] text-white md:text-opacity-80 md:opacity-80 font-montserrat font-normal text-[3.7vw] md:text-[1.04vw] leading-[3]  md:leading-[1.5]">
          {footerLinks.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col items-center justify-start md:gap-22px-vw ${
                colIndex !== 0
                  ? "md:border-l   border-opacity-60 border-white pl-[1vw]"
                  : ""
              }`}
            >
              {column.map((link, index) => (
                <a key={index} href="#" className="">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Horizontal Separator */}

        <div className="flex md:hidden items-center justify-center py-[5vw] md:py-0 gap-[5vw] md:gap-[1.5vw]">
          <a href="#" className="opacity-100">
            <img
              src="/images/home/footer/linkedin.svg"
              alt="LinkedIn"
              className=""
            />
          </a>
          <a href="#" className="">
            <img
              src="/images/home/footer/insta.svg"
              alt="Instagram"
              className=""
            />
          </a>
          <a href="#" className="">
            <img
              src="/images/home/footer/facebook.svg"
              alt="Facebook"
              className=""
            />
          </a>
        </div>

        <div className="md:border-t-[0.5px] border-b-[0.5px] border-opacity-20 border-white my-[2vw]"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row font-montserrat justify-between items-center gap-[1vw] text-white  text-opacity-80 text-[3.89vw] leading-[2.5] md:text-[0.729vw]">
          <div className="w-full text-center md:text-left pb-[10vw] md:pb-0">
            ISO © All Rights Reserved - 2023 |
            <span className="block md:inline">
              Crafted by{" "}
              <a
                href="https://www.togglehead.in"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Togglehead
              </a>
            </span>
          </div>

          <div className="hidden md:flex items-end text-white brightness-200 justify-end  gap-[1.5vw] md:gap-[2vw]">
            <a href="#" className="opacity-100">
              <img
                src="/images/home/footer/linkedin.svg"
                alt="LinkedIn"
                className="md:w-[1.3vw]"
              />
            </a>
            <a href="#" className="">
              <img
                src="/images/home/footer/insta.svg"
                alt="Instagram"
                className="md:w-[1.3vw]"
              />
            </a>
            <a href="#" className="">
              <img
                src="/images/home/footer/facebook.svg"
                alt="Facebook"
                className="md:w-[0.9vw]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
