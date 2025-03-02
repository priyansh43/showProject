import React from "react";

const SectionHeading = ({ title, style }) => {
  return (
    <div className="w-full">
      <h1
        className={`text-left   md:px-0  md:text-left md:text-[3.03vw] text-[7.47vw] font-montserrat font-bold  text-[#1C1C1C] ${style}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
