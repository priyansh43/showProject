import { BiCaretDown } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";

import React, { useState } from "react";
import { ourProgram } from "../../data/navlinks";
import { Link, useLocation } from "react-router-dom";
import StickyButton from "../buttons/StickyButton";
import PinkButton from "../buttons/PinkButton";
import MobileMenu from "./MobileMenu";
import { menu } from "framer-motion/client";

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverredOurProgram, setHoveredOurProgram] = useState(null); // Track the program that is hovered
  const [hoveredSublinks, setHoveredSublinks] = useState({}); // Track hovered sublinks for each program
  const [leaveTimeout, setLeaveTimeout] = useState(null); // To store the timeout ID

  const handleMouseEnter = (programName) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout); // Clear any pending timeout
      setLeaveTimeout(null);
    }
    setHoveredOurProgram(programName); // Set to hovered program
  };

  const handleMouseLeave = () => {
    // Add a delay before resetting hover state
    const timeout = setTimeout(() => {
      setHoveredOurProgram(null);
    }, 400); // 300ms delay
    setLeaveTimeout(timeout); // Store the timeout ID
  };

  const handleSublinkEnter = (programId, sublinkId) => {
    setHoveredSublinks((prevState) => ({
      ...prevState,
      [programId]: sublinkId, // Update the hovered sublink for a specific program
    }));
  };

  const handleSublinkLeave = (programId) => {
    setHoveredSublinks((prevState) => {
      const updated = { ...prevState };
      delete updated[programId]; // Reset the hovered sublink for a specific program
      return updated;
    });
  };

  return (
    <>
      <header className="w-[100vw] fixed top-0 left-0 z-30 py-16px-mvw md:py-0 font-montserrat h-[18.13vw] md:h-[9.11vw] bg-white md:drop-shadow-[0_0.3vh_0.75vh_rgba(0,0,0,0.1)]">
        {/* Top Part */}
        <div className="hidden py-10px-vw md:flex items-center justify-end  md:border-b-[1px] border-[#BCBCBC]">
          <ul className="flex items-center gap-[1.62vw]  mr-[4.04vw]">
            <li className="flex items-center gap-[1.62vw] font-medium opacity-100">
              <span className="md:text-[0.81vw] text-[#212121]  cursor-pointer">
                Admissions
              </span>
              <span className="!w-[1px] h-[1.40625vw]  bg-[#BCBCBC]"></span>
            </li>
            <li className="flex items-center gap-[1.62vw] font-medium">
              <span className="md:text-[0.81vw] text-[#212121]  cursor-pointer">
                Career
              </span>

              <span className="!w-[1px] h-[1.40625vw] bg-[#BCBCBC]"></span>
              <span className="md:text-[0.81vw] text-[#212121]  cursor-pointer">
                Contact Us
              </span>
            </li>
            <li
              className="relative flex items-center gap-[1.62vw] font-medium"
              onMouseEnter={() => handleMouseEnter("Our Programs")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-[0.5vw]  px-[1.15vw] py-[0.68vw] bg-[#E12A7B] text-[#FFFFFF] md:text-[0.81vw] uppercase hover:bg-[#D0206E] font-medium">
                Our Programs
                <span className="text-[1vw]">
                  <BiCaretDown className="text-[1vw]" />
                </span>
              </button>

              {/* Dropdown Menu */}
              {hoverredOurProgram && (
                <div
                  className="absolute top-full border-t-[1px] md:mt-[0.3vw]  border-[#BCBCBC] z-[9999] right-[-4vw] bg-white shadow-lg text-[#2B2A29] font-poppins font-medium"
                  style={{
                    width: "65.15vw",
                    padding: "1.66vw 3.90vw",
                  }}
                >
                  <div className="grid w-full grid-cols-2 gap-x-[2vw]">
                    {/* Loop through ourProgram array */}
                    {ourProgram.map((program, index) => (
                      <div
                        key={program.id}
                        className={`${
                          index === 0
                            ? "border-r-[1px] border-solid border-[#BCBCBC] pr-[2vw]"
                            : ""
                        }`}
                      >
                        {/* Section Heading */}
                        <h3 className="text-[1.35vw] text-[#1C1C1C] font-semibold font-montserrat border-b-[1px] border-[#BCBCBC] pb-12px-vw mb-20px-vw">
                          {program.name}
                        </h3>

                        {/* Sublinks */}
                        <ul>
                          {program.sublink.map((sublink) => (
                            <li
                              key={sublink.id}
                              className="mb-[1.25vw] flex items-center max-w-full text-[#1C1C1C] opacity-80 font-montserrat font-medium hover:opacity-100 text-[1.14vw] cursor-pointer"
                              onMouseEnter={() =>
                                handleSublinkEnter(program.id, sublink.id)
                              }
                              onMouseLeave={() =>
                                handleSublinkLeave(program.id)
                              }
                            >
                              <Link
                                to={sublink.link}
                                className="flex items-center space-x-22px-vw whitespace-nowrap"
                              >
                                {/* Name and Icon in a single flex container */}
                                <span className="whitespace-nowrap">
                                  {sublink.name}
                                </span>
                                {hoveredSublinks[program.id] === sublink.id && (
                                  <HiOutlineArrowRight className="text-[#E12A7B] text-[1.5vw]" />
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Rest of your header content */}
        <div className="md:h-[5.51vw] flex items-center justify-between w-auto px-16px-mvw">
          {/* Logo */}

          <div className="flex items-center justify-center bg-no-repeat bg-contain w-[40.93vw] h-[10.33vw] md:w-[16vw] md:h-[3.38vw]">
            <Link
              to="/"
              className="flex items-center justify-center w-auto h-full"
            >
              <img
                src="/images/header/Desklogo.png"
                alt="Logo"
                className="w-auto h-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex gap-[4vw]  lg:gap-52px-vw">
            <a
              href="#"
              className="text-[3.5vw] md:text-[1.8vw] lg:text-[1vw] text-[#212121] hover:text-gray-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-[3.5vw] md:text-[1.8vw] lg:text-[1vw] text-[#212121] hover:text-gray-600"
            >
              Experiential Learning
            </a>
            <a
              href="#"
              className="text-[3.5vw] md:text-[1.8vw] lg:text-[1vw] text-[#212121] hover:text-gray-600"
            >
              Academics
            </a>
            <a
              href="#"
              className="text-[3.5vw] md:text-[1.8vw] lg:text-[1vw] text-[#212121] hover:text-gray-600"
            >
              Industry Connect
            </a>
            <a
              href="/student-life"
              className="text-[3.5vw] md:text-[1.8vw] lg:text-[1vw] text-[#212121] hover:text-gray-600"
            >
              Student Life
            </a>
            <a
              href="#"
              className="text-[3.5vw] md:text-[1.8vw] lg:text-[1vw] text-[#212121] hover:text-gray-600"
            >
              Placements
            </a>
          </nav> */}
          <nav className="hidden md:flex gap-[4vw] md:gap-52px-vw">
            <Link
              to="/about-us"
              className={`text-[3.5vw]  md:text-[1vw] font-montserrat font-medium ${
                isActive("/about-us")
                  ? "border-b-[0.1542vw] border-[#E12A7B] text-[#212121]"
                  : "text-[#212121]"
              } hover:text-gray-600 pb-[0.42vw ]`}
            >
              About Us
            </Link>
            <Link
              to="/experiential-learning"
              className={`text-[3.5vw]  font-montserrat font-medium md:text-[1vw] ${
                isActive("/experiential-learning")
                  ? "border-b-[0.1542vw] border-[#E12A7B] text-[#212121]"
                  : "text-[#212121]"
              } hover:text-gray-600 pb-[0.42vw ]`}
            >
              Experiential Learning
            </Link>
            <Link
              to="/academics"
              className={`text-[3.5vw] md:text-[1vw] font-montserrat font-medium ${
                isActive("/academics")
                  ? "border-b-[0.1542vw] border-[#E12A7B] text-[#212121]"
                  : "text-[#212121]"
              } hover:text-gray-600 pb-[0.42vw ]`}
            >
              Academics
            </Link>
            <Link
              to="/industry-connect"
              className={`text-[3.5vw]  md:text-[1vw] font-montserrat font-medium ${
                isActive("/industry-connect")
                  ? "border-b-[0.1542vw] border-[#E12A7B] text-[#212121]"
                  : "text-[#212121]"
              } hover:text-gray-600 pb-[0.42vw ]`}
            >
              Industry Connect
            </Link>
            <Link
              to="/student-life"
              className={`text-[3.5vw]  md:text-[1vw] font-montserrat font-medium ${
                isActive("/student-life")
                  ? "border-b-[0.1542vw] border-[#E12A7B] text-[#212121]"
                  : "text-[#212121]"
              } hover:text-gray-600 pb-[0.42vw ]`}
            >
              Student Life
            </Link>
            <Link
              to="/placements"
              className={`text-[3.5vw] md:text-[1vw] font-montserrat font-medium ${
                isActive("/placements")
                  ? "border-b-[0.1542vw] border-[#E12A7B] text-[#212121]"
                  : "text-[#212121]"
              } hover:text-gray-600 pb-[0.42vw ]`}
            >
              Placements
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src="/images/header/hamburger.svg"
              alt="Menu"
              className="w-[8.15vw] h-[2.92vh]"
            />
          </button>
        </div>
      </header>
      <StickyButton menuOpen={menuOpen} />
      <div className="visible md:hidden">
        <PinkButton title={"apply for Admissions"} />
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
