import React from "react";

export const RightIconButton = ({
  title,
  onClick,
  iconSrc = "/images/home/section3/arrowIcon.svg",
  buttonClassName = "",
  iconClassName = "",
}) => {
  return (
<div className=' w-full md:w-auto flex pt-12px-mvw md:pt-0 items-center justify-center ' >
          <button className="font-montserrat md:text-[1.25vw] text-[4vw] bg-[#E12A7B] text-white hover:text-[#1c1c1c] uppercase font-bold px-[5.4vw] md:px-[1.6vw] py-[3.3vw] md:py-[0.9vw] flex items-center gap-[3vw] md:gap-[1.09375vw] hover:bg-[#ffff] border-[1px] border-[#E12A7B]" onClick={onClick}>
     {title}
           <div>
          
           <img src="/images/home/section3/arrowIcon.svg" alt="Arrow Icon" className="md:w-[2.08vw] w-[7vw] md:h-[2.08vw] h-[7vw] ml-[0.5vw] object-contain" />
           </div>
          </button>
   </div>
  );
};

export default RightIconButton;
