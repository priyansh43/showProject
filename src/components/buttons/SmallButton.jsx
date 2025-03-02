import React from "react";

const SmallButton = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-montserrat text-[3.25vw] md:text-[1.25vw] font-bold h-[11.68vw] md:h-[3.696vw] w-[40vw] md:w-[15.47vw] ${
        isActive ? "" : "border-[1px] border-solid border-[#1C1C1C66]"
      }`}
      style={{
        backgroundColor: isActive ? "#E12A7B" : "#FFFFFF",
        color: isActive ? "#FFFFFF" : "#212121",
      }}
    >
      {title}
    </button>
  );
};

export default SmallButton;
