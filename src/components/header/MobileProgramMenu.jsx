import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ourProgram } from "../../data/navlinks";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const MobileProgramMenu = ({ openProgramMenu, setOpenProgramMenu }) => {
  const [openSection, setOpenSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    if (openProgramMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openProgramMenu]);

  return (
    <div>
      {openProgramMenu && (
        <div className="fixed top-0 left-0 w-[100vw] h-full bg-white z-50  px-[5vw]   transition-transform duration-300 ease-in-out">
          <div className="flex items-center w-full justify-between  py-16px-mvw">
            <div
              className="flex items-center justify-center bg-no-repeat bg-contain w-[40.93vw] h-[10.33vw] lg:w-[10vw] lg:h-[5vh]"
              onClick={() => setOpenProgramMenu(false)}
            >
              <Link
                to="/"
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src="/images/header/Desklogo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
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

          <button
            className="absolute top-84px-mvw right-16px-mvw text-[7vw] font-bold text-gray-800 focus:outline-none"
            onClick={() => setOpenProgramMenu(false)}
          >
            ✕
          </button>
          <nav className="flex flex-col w-full mt-70px-mvw space-y-7 border-solid">
            {ourProgram.map((program) => (
              <div key={program.id} className="relative">
                <div
                  className={`flex items-center justify-between  ${
                    openSection !== program.name &&
                    "border-b border-[#1C1C1C66] pb-28px-mvw border-solid border-opacity-60"
                  } text-18px-mvw font-semibold font-montserrat text-[#1C1C1C] cursor-pointer`}
                  onClick={() => toggleSection(program.name)}
                >
                  {program.name}
                  <span className="text-20px-mvw">
                    {openSection === program.name ? (
                      <AiOutlineCaretUp />
                    ) : (
                      <AiOutlineCaretDown />
                    )}
                  </span>
                </div>
                {openSection === program.name && (
                  <div>
                    <ul className={`mt-30px-mvw space-y-28px-mvw pb-30px-mvw`}>
                      {program.sublink.map((sublink) => (
                        <li key={sublink.id}>
                          <NavLink
                            to={sublink.link}
                            className="text-16px-mvw font-medium font-montserrat text-[#1C1C1C] opacity-80 cursor-pointer"
                            onClick={() => setOpenProgramMenu(false)} // Close menu on link click
                          >
                            {sublink.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    {/* Border at the bottom of sublinks */}
                    <div className="border-b border-[#1C1C1C66] border-solid border-opacity-60"></div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default MobileProgramMenu;
