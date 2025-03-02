import React from "react";
import QaSection8 from "../QASection/QaSection8";

const RightComponent8 = ({ FAQ, mobile }) => {
  return (
    <div className="flex flex-col items-center justify-center   px-16px-mvw md:px-0  w-full md:gap-y-100px-vw">
      {/* FAQ Section */}
      <div className="w-full flex items-start justity-between">
        <QaSection8 FAQ={FAQ()} mobile={mobile} readMore={true} />
      </div>

      {/* Image Section */}
      <div className="w-full h-[30vh] hidden md:flex flex-col items-end justify-end relative group overflow-hidden">
        <img
          src="/images/home/section8/rightImg.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          style={{ objectFit: "cover" }}
        />
        <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
        <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[3vw] md:text-[1.15vw] font-montserrat font-medium px-2 md:px-[0.5vw] py-1 md:py-[0.3vh] z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
          Lorem Ipsum Text Dummy Content
        </div>
      </div>
    </div>
  );
};

export default RightComponent8;
