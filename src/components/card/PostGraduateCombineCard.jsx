import React from "react";

export const CombinePostGraduateCard = ({
  imageSrc,
  caption,
  iconSrc,
  btn,
}) => {
  return (
    <div
      className={`flex flex-col w-[27.92vw] h-[47.8vh] bg-white text-black relative
        transition-all duration-300 hover:bg-black hover:text-white `}
    >
      {/* Upper part - Image */}
      <div className={`w-full h-[47.8vh]`}>
        <img src={imageSrc} alt="Card" className="w-full h-full object-cover" />
      </div>
      <div className="absolute z-20 top-[40%] left-[8.5%]">
        <div className="w-full md:w-auto flex md:block items-center justify-center ">
          <button className="md:text-[1.25vw] text-[4vw] bg-[#E12A7B] hover:bg-[#FFFFFF] text-white hover:text-[#1C1C1C] uppercase font-montserrat font-bold px-[3.4vw] md:px-[1.66667vw] py-[3.3vw] md:py-[1.96vh] flex items-center gap-[2vw] md:gap-[0.5vw] border-[1px] border-[#E12A7B]">
            DOWNLOAD BROCHURE
            <img
              src="/icon/download.svg"
              alt="Arrow Icon"
              className="md:w-[2.08vw] w-[4vw] md:h-[2.08vw] h-[4vw] ml-[1.15vw]"
            />
          </button>
        </div>
      </div>
      {/* Lower part - Caption and Icon */}
      {caption && iconSrc && (
        <div className="flex border-[1px] border-[#1C1C1C66] items-start justify-between w-full px-[2vw] py-[1vh] h-[6.0625vw] pb-[3vw]">
          <p className="md:text-[1.25vw] md:w-[18.7vw] text-[3vw] font-montserrat font-bold">
            {caption}
          </p>
          <div className="flex flex-col h-full items-center justify-center">
            <img
              src={iconSrc}
              alt="Icon"
              className="md:w-[2vw] w-[4vw] md:h-[2vw]" // Adjust icon size
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinePostGraduateCard;
