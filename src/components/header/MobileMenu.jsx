import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh]  bg-white z-50 flex flex-col px-[5vw] items-start justify-between pt-[15vw] pb-[36vw] transition-transform duration-300 ease-in-out">
          <button
            className="absolute top-20px-mvw right-16px-mvw text-[7vw] font-bold text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <nav className="flex flex-col text-18px-mvw items-start justify-between mt-24px-mvw  border-t border-[#1C1C1C66]  border-opacity-60  space-y-28px-mvw border-solid w-full">
            <a
              href="#"
              className=" text-[#212121] mt-24px-mvw  hover:text-gray-600 font-medium font-montserrat"
            >
              About Us
            </a>

            <a
              href="#"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Experiential Learning
            </a>
            <a
              href="#"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Academics
            </a>
            <a
              href="#"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Industry Connect
            </a>
            <a
              href="/student-life"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Student Life
            </a>
            <a
              href="#"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Placements
            </a>

            <a
              href="#"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Admission
            </a>
            <a
              href="#"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Careers
            </a>
            <a
              href="#"
              className=" text-[#212121] hover:text-gray-600 font-medium font-montserrat"
            >
              Contact Us
            </a>
          </nav>
          <button className=" w-full  mt-20px-mvw  px-[1vw] py-[4vw] bg-[#E12A7B] text-[#FFFFFF] text-[4vw] uppercase hover:bg-[#D0206E] font-medium">
            Apply For Admission
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
