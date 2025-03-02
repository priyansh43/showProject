import React, { useEffect } from "react";
import PinkButton from "../buttons/PinkButton";
import Aos from "aos";

export const Section2 = () => {
  return (
    <div>
      {/* first sec */}
      <div
        className="hidden md:block"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="150"
      >
        <div
          className="relative w-[100vw] h-[100vh] md:mt-[-0.4vw] bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/home/section2/sectionbg.jpg")',
          }}
        >
          <div className="absolute  z-10 inset-0 flex items-center justify-center">
            <div className="bg-[#E12A7B] border-[0.3vw] border-[#ffff] !py-[2.08vw] md:w-[57.60vw] text-center  text-white z-30">
              <h2
                className="text-[2.5vw] font-montserrat font-bold px-[1.25vw] "
                style={{ lineHeight: "3.0208vw" }}
              >
                Redefining Design, Shaping The Future Design Innovators
              </h2>
              <p className="pt-[1.367vw]  md:text-[0.9375vw] font-montserrat font-medium opacity-70  px-[3.49vw] md:leading-1.77vw">
              ATLAS ISDI School of Design & Innovation is at the forefront of India’s creative revolution, offering immersive, future-focused, and technology-driven design education. Through partnerships with industry leaders, renowned brands, and global networks, students engage in real-world projects that promote experiential learning. The curriculum emphasizes sustainable design and emerging technologies, nurturing critical thinking and a global perspective. Based in Mumbai, ATLAS ISDI empowers graduates with the skills and mindset to lead and redefine the future of design on a global stage.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second sec */}
      <div>
      
        <div
          className="relative md:hidden mt-[-2vw] mb-[125vw] md:mb-[60vh] visible w-[100vw] h-[87.36vh] bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/home/section2/MobilebgImg.png")',
          }}
        >
          <div className="absolute mx-[4.44vw] z-10 inset-0 top-[93vh] md:top-[85.375vh] flex items-center justify-center">
            <div className="bg-[#E12A7B] border-[1.2vw] border-[#ffff] md:px-[3vw]  px-[6.4vw] pt-50px-mvw pb-34px-mvw  text-center flex flex-col justify-center items-center text-white z-30">
              <h2 className="px-[1vw] text-[6.4vw] md:text-[6.67vw]  font-montserrat font-bold md:leading-10">
              Redefining Design, Shaping The Future Design Innovators
              </h2>
              <p className="mt-4 text-[3.89vw] font-montserrat font-medium   leading-[6.93vw] md:leading- space-x-1 ">
              ATLAS ISDI School of Design & Innovation is at the forefront of India’s creative revolution, offering immersive, future-focused, and technology-driven design education. Through partnerships with industry leaders, renowned brands, and global networks, students engage in real-world projects that promote experiential learning. The curriculum emphasizes sustainable design and emerging technologies, nurturing critical thinking and a global perspective. Based in Mumbai, ATLAS ISDI empowers graduates with the skills and mindset to lead and redefine the future of design on a global stage.
              </p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Section2;
