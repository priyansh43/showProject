import React from "react";

const Section12Card = ({
  title,
  description,
  imageSrc,
  hiddenTitle,
  hiddenDescription,
  hiddenSubTitle,
  hiddenSubDescription,
  open,
  toggleOpen,
}) => {
  return (
    <div className="flex flex-col  md:mb-6px-vw items-center justify-center h-full w-[20.73vw] relative">
      {/* Content Container */}
      <div className="w-full h-full ">
        {/* Front side of the card */}
        <div className={`w-full h-full ${open ? "hidden" : "block"}`}>
          <div className=" w-full group overflow-hidden">
            <img
              src={imageSrc}
              alt=""
              className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col px-[1vw] py-[1vw] gap-[0.5vw] md:gap-y-[0.68125vw] border-r border-l border-b border-[#1C1C1C66] ">
            <h1 className="text-start text-[1.46vw] font-montserrat font-semibold text-[#1c1c1c]">
              {title}
            </h1>
            <p className="text-start text-[0.9375vw] font-montserrat font-medium opacity-70 text-[#1c1c1c]">
              {description}
            </p>
          </div>
          {/* Plus Icon */}
          <div
            onClick={toggleOpen}
            className="absolute bottom-[1vw] right-[1.14vw] cursor-pointer"
          >
            <img
              src="/icon/plus.svg"
              alt="plus"
              className="w-[1.875vw] h-[1.875vw]"
            />
          </div>
        </div>

        {/* Back side of the card */}
        <div
          className={`w-full h-full md:max-h-[99%] ${
            open ? "flex" : "hidden"
          } bg-[#1c1c1c] flex-col text-white p-22px-vw font-montserrat font-medium gap-[1vw] relative`}
        >
          <h1 className="text-[1.46vw] ">{hiddenTitle}</h1>
          <p className="text-[0.94vw] opacity-60">{hiddenDescription}</p>
          <div className="w-full border-b-[1px] border-[#EEEEEE] opacity-60"></div>
          {/* <h1 className="text-[1.15vw]">{hiddenSubTitle}</h1> */}
          <p className="text-[0.94vw] opacity-100 brightness-200">
            {hiddenSubDescription}
          </p>
          {/* Minus Icon */}
          <div
            className="absolute bottom-[0.75vw] right-[1.14vw] cursor-pointer"
            onClick={toggleOpen}
          >
            <img
              src="/icon/minus.svg"
              alt="minus"
              className="w-[1.875vw] h-[1.875vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section12Card;
