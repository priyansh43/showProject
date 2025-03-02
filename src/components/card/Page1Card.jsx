import React from "react";

export const Section5Card = ({
  cardWidth = "27.916vw",
  cardHeight = "45vh",
  imageHeight = "32.593vh",
  imageSrc,
  caption,
  iconSrc,
  btn,
}) => {
  const cardHeightValue = btn ? "40.5vh" : cardHeight;
  return (
    <div
      className={`flex flex-col w-full h-full bg-white text-black 
        transition-all duration-300 hover:bg-black hover:text-white`}
    >
      {/* Upper part - Image */}
      <div className={`w-full h-[${imageHeight}] group overflow-hidden`}>
        <img
          src={imageSrc}
          alt="Card"
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Lower part - Caption and Icon */}
      {caption && iconSrc && (
        <div className="flex border-l border-r border-b  border-[#1C1C1C66]  items-start justify-between w-full md:px-22px-vw  px-0 py-0 md:pt-30px-vw  h-[7.0625vw] ">
          <p className="md:text-[1.25vw] md:w-[18.7vw] text-[3vw] font-montserrat font-bold">
            {caption}
          </p>
          <div className="flex flex-col h-full items-start justify-start">
            <img
              src={iconSrc}
              alt="Icon"
              className="md:w-[2vw] w-[4vw] md:h-[2vw]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Section5Card;
