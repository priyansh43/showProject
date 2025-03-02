import React from "react";
// commit 
export const PinkButton = ({ title, onClick }) => {
  return (
    <button
      className=" fixed z-20 w-full bottom-0  font-montserrat left-0 h-40px-mvw px-[1vw] py-11px-mvw bg-[#E12A7B] text-[#FFFFFF] text-14px-mvw uppercase hover:bg-[#D0206E] font-semibold"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default PinkButton;
