import React from "react";

export const PinkButtonTop = ({ title, onClick }) => {
  return (
    <button
      className="fixed top-[18vw] font-montserrat z-30 left-0 w-full h-40px-mvw px-[1vw] py-11px-mvw bg-[#E12A7B] font-semibold text-[#FFFFFF] text-14px-mvw uppercase hover:bg-[#D0206E] "
      onClick={onClick}
    >
      {title}
    </button>
  );
};
