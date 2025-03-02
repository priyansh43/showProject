import React from "react";

const NewSectionHeading = ({ title, style }) => {
  return (
    <div className="w-full">
      <h1
        className={`text-left   md:px-0  md:text-left md:text-[2.5vw] text-[7.47vw] font-montserrat font-bold uppercase text-[#1C1C1C] ${style}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default NewSectionHeading;
