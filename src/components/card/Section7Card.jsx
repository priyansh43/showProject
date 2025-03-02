import { a } from "framer-motion/client";
import React from "react";

export const Section7Card = ({
  cardWidth,
  cardHeight,
  imageHeight,
  imageSrc,
  caption,
  title,
  designation,
  logo,
  isMobile,
  link,
  para,
}) => {
  return (
    <div
      className={`flex ml-[3.3vw] md:ml-16px-vw flex-col bg-white text-black 
        transition-all duration-100 `}
      style={{
        width: cardWidth,
        minHeight: cardHeight,
      }}
    >
      <div
        className="w-full relative"
        style={{
          height: imageHeight,
        }}
      >
        <img src={imageSrc} alt="Card" className="w-full h-full object-cover" />
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src="./icon/linkedIn.svg"
              alt="LinkedIn Icon"
              className="absolute md:top-22px-vw md:left-22px-vw top-[2.5vw] left-[2.5vw] w-[7vw] h-[7vw]  md:w-40px-vw md:h-40px-vw" // Adjust size and margin as needed
            />
          </a>
        )}
      </div>

      {/* Lower part - Caption, Title, and Designation para */}
      {caption && (
        <div className="flex flex-col  justify-evenly border-l border-r border-b border-solid border-opacity-100 border-[#1C1C1C66] pt-[1.15vw] w-full px-[4vw] md:px-[1vw] py-[3vw] md:py-[1.25vw] h-[52vw] md:h-[14vw]">
          {/* Caption */}
          <p className="md:text-[1.46vw] text-[5vw] tracking-wide font-montserrat font-bold">
            {caption}
          </p>

          {/* Designation */}
          {designation && (
            <p className="md:text-[0.94vw] text-[4.4vw]  flex-col flex-grow items-start md:mt-15px-vw mt-12px-mvw font-montserrat font-medium opacity-60">
              {designation}
            </p>
          )}
          <div className="flex flex-col items-start mt-auto">
            {title ? (
              <div className="md:w-[8.398vw] w-80px-mvw h-15px-mvw md:h-[1.5625vw]">
                <img
                  src="/images/home/section7/logo.png"
                  alt="Title Logo"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-9 max-w-[35vw] md:max-w-[70%] ">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-auto object-cover !object-top"
                />
              </div>
            )}
            {para && (
              <p className="md:text-[0.94vw] text-[4.4vw]  flex-col flex-grow items-start md:mt-18px-vw mt-12px-mvw font-montserrat font-medium opacity-60">
                {para}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section7Card;
