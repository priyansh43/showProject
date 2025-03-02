import React, { useState } from "react";

const LearningBeyondCard = ({ img, title, description }) => {
  const [bgActive, setBgActive] = useState(true);

  const delayFunction = () => {
    setTimeout(() => {
      setBgActive(true);
    }, 1000);
  };

  return (
    <div
      className="relative group overflow-hidden bg-white border-b border-[#1C1C1C66] h-[28.44vw] w-[41.25vw]"
      onMouseEnter={() => setBgActive(false)}
      onMouseLeave={delayFunction}
    >
      {/* Image Section */}
      <div className="relative h-full md:h-[100%] group-hover:md:h-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover z-0 transform transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Shadow Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
      </div>

      {/* Text Section */}
      <div className="absolute  bottom-[-8.8vw] group-hover:bottom-0 left-0 w-[41.25vw] py-[1vw] text-black font-bold text-32px-vw z-10 transition-all duration-1000 ease-out">
        {/* Title */}
        <div
          className={`w-full font-montserrat font-semibold border-l border-r border-[#1C1C1C66] border-opacity-70 group-hover:border-opacity-0 ${
            bgActive
              ? "bg-white text-black translate-y-0 "
              : "bg-transparent text-white translate-y-[80%]"
          } px-25px-vw py-20px-vw group-hover:mb-50px-vw transform transition-all duration-1000 ease-out`}
        >
          {title}
        </div>

        {/* Description */}
        <p className="opacity-0  translate-y-6 md:min-h-[7.7vw]  group-hover:opacity-80 group-hover:translate-y-0 transition-all duration-1000 ease-out text-18px-vw px-25px-vw  pt-16px-vw group-hover:text-white font-montserrat font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LearningBeyondCard;
