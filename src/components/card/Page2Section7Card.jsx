import React from "react";

export const Page2Section7Card = ({ image, title, description }) => {
  return (
    <div
      className="bg-white  h-[144.8vw]  md:min-h-[34.02vw] md:max-h-[34.02vw] md:w-[27.92vw]  overflow-hidden   "
      style={{}}
    >
      {/* Image part */}
      <div className="md:h-[18.33vw] h-[65.87vw] w-full">
        <img
          src="/images/page2/section7Img.svg"
          alt="Section Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content part */}
      <div className="md:p-[1.16vw] md:min-h-[15.68vw] min-h-[75vw] p-[4vw] border-l  border-r border-bborder-[#1C1C1C66]">
        <h2 className="font-semibold text-[#1c1c1c] text-[6vw] md:text-[1.47vw] font-montserrat">
          {title} {/* Use the title */}
        </h2>
        <p className=" md:pt-[1.05vw] pt-[2.5vw] text-[3.8vw] md:text-[0.95vw] font-medium text-[#1c1c1c] font-montserrat opacity-60">
          {description} {/* Use the description */}
        </p>
      </div>
    </div>
  );
};

export default Page2Section7Card;
