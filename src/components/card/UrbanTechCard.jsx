import React from "react";

const UrbanTechCard = ({ img, title }) => {
  return (
    <div className="md:h-[22.40vw] h-[67.47vw] w-[84.27vw] md:w-[27.92vw] mb-[4vw] md:mb-[1vw]">
      {/* Image Section */}
      <div className="md:h-[18.33vw] h-[55.2vw] w-full">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Title Section */}
      <div className="text-start w-full md:py-22px-vw py-13px-mvw md:pl-22px-vw pl-12px-mvw text-16px-mvw md:text-28px-vw font-montserrat font-semibold text-[#1C1C1C] border-b border-l border-rborder-[#1C1C1C66]">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default UrbanTechCard;
