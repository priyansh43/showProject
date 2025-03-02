import React, { useState } from "react";

const Section12CardMobile = ({
  title,
  description,
  imageSrc,
  hiddenTitle,
  hiddenDescription,
  hiddenSubTitle,
  hiddenSubDescription,
}) => {
  const [open, setOpen] = useState(false);

  const toggleCard = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[100vw] overflow-hidden">
      {/* Content Container */}
      <div className="w-full h-full relative flex flex-col">
        {/* Front side of the card */}
        <div className={`w-full h-[116.53vw] ${open ? "hidden" : "block"}`}>
          <div className="h-[88.27vw] w-full">
            <img src={imageSrc} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="border-b border-l border-r border-[#1C1C1C66]  flex flex-col items-start justify-between px-[4vw] md:px-[2vw] py-[3vh] md:py-[2vh] gap-[1vh] relative">
            <div>
              <h1 className="text-start text-[5.46vw] md:text-[5.46vw] font-montserrat font-semibold text-[#1c1c1c]">
                {title}
              </h1>
              <p className="text-start text-[3.9375vw] md:text-[2.9375vw] font-montserrat font-semibold md:font-medium opacity-55 md:opacity-70 text-[#1c1c1c]">
                {description}
              </p>
            </div>
            {/* Plus button */}
            <div
              onClick={toggleCard}
              className="cursor-pointer absolute bottom-[4vw] right-[4vw] md:bottom-[2vw] md:right-[2vw]"
            >
              <img
                src="/icon/plus.svg"
                alt="plus"
                className="w-[9.07vw] md:w-[5.875vw] md:h-[5.875vw] h-[9.07vw]"
              />
            </div>
          </div>
        </div>

        {/* Back side of the card */}
        <div
          className={`w-full h-[116.53vw] ${
            open ? "flex" : "hidden"
          } bg-[#1c1c1c] flex-col text-white px-[4vw] pb-[4vw] font-montserrat font-medium gap-[3vw] md:px-[2.04vh] md:pb-[2.04vh] md:gap-[1vw] relative`}
        >
          <h1 className="text-[7vw] md:text-[1.46vw] pt-[4vw] md:pt-[2.04vh]">
            {hiddenTitle}
          </h1>
          <p className="text-[4vw] md:text-[0.94vw] opacity-60">
            {hiddenDescription}
          </p>
          <div className="w-full border-b-[1px] border-[#928f8f] opacity-60"></div>
          <h1 className="text-[5vw] md:text-[1.15vw]">{hiddenSubTitle}</h1>
          <p className="text-[4vw] md:text-[0.94vw] opacity-80">
            {hiddenSubDescription}
          </p>
          {/* Minus button */}
          <div
            onClick={toggleCard}
            className="cursor-pointer absolute bottom-[7.5vw] right-[4vw] md:bottom-[2vw] md:right-[2vw]"
          >
            <img
              src="/icon/minus.svg"
              alt="minus"
              className="w-[9.07vw] md:w-[5.875vw] md:h-[5.875vw] h-[9.07vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section12CardMobile;
