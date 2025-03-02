import React, { useEffect, useState } from "react";
import Section3Slider from "../slider/Section3Slider";
import RightIconButton from "../buttons/RightIconButton";
import Aos from "aos";
import SectionHeading from "../Heading/SectionHeading";
import Page2Section3Slider from "../slider/Page2Section3Slider";

const Page2Section2 = ({
  SHeading,
  paragraph,
  buttonText,
  leftImgText,
  rightImgText,
  palagraphPadding,
}) => {
  // State to detect mobile view; can also use a library like `react-responsive` if preferred
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  console.log(isMobile, "state");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      easing: "ease-in",
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div
      className="mx-0  my-0 md:my-[13.8889vh] "
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-offset="150"
    >
      {isMobile ? (
        <div className="flex flex-col items-center gap-6   py-[16vw]">
          {/* Mobile Heading */}
          <div className="pr-16px-mvw   max-w-[90%]">
            <SectionHeading title={SHeading} />
          </div>

          {/* Mobile Slider */}
          <div className="w-full">
            <Page2Section3Slider showContent />
          </div>

          {/* Mobile Paragraph */}
          <p className="md:text-[5.25vw] text-[4.27vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-[7.47vw] md:leading-[1.5] md:text-center px-[4.27vw] md:px-0 ">
            {paragraph}
          </p>

         
          <RightIconButton title={buttonText}/>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row   justify-between items-stretch mx-0 md:px-[7.29vw] my-0 md:my-[13.89vh] w-full gap-[7.1875vw]">
          {/* Left Section */}
          <div className="flex flex-col justify-between items-start  w-full md:w-[42.3480vw]">
            {/* Heading */}
            <div>
              <h1 className="md:w-[45.89vw] md:text-[3.125vw]  text-[7.47vw] font-montserrat font-bold  text-[#1C1C1C]">
                {SHeading}
              </h1>
            </div>
            {/* slider */}
            {/* <div className='flex md:hidden'>
        <Section3Slider />
        </div> */}

            {/* Paragraph */}
            <div className="md:w-[43.1771vw] w-[90vw] ">
              <p
                className={`text-[5.25vw] md:text-[1.15vw] opacity-60 font-montserrat font-medium text-[#1C1C1C] md:pb-40px-vw leading-[1.5] md:pt-32px-vw`}
              >
                {paragraph}
              </p>
            </div>

            {/* Image */}
            <div className="hidden md:block relative w-[42.3438vw] h-[22.9688vw] group overflow-hidden">
              {/* Shadow Image */}
              {/* <div
    className="absolute bottom-0 left-0 !w-full h-[10vh] z-10"
    style={{
      background:
        "transparent url('/images/home/section3/shadow.png') 0% 0% no-repeat padding-box",
    }}
  ></div> */}

              {/* Image Section */}
              <img
                src="/images/page2/Section1LeftImg.svg"
                alt="Left Section"
                className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Shadow Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>

              {/* Text Section */}
              <div className="absolute bottom-[2%] left-[2%] brightness-200 z-20 text-[#FFFFFF] text-[1.15vw] font-montserrat font-medium px-[0.5vw] py-[0.3vh] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                {leftImgText}
              </div>
            </div>
          </div>

          {/* Right Section */}
          {/* Right Section */}
          <div className="hidden md:flex flex-col justify-between w-full md:w-[44.9479vw]">
            <div className="relative flex-1 group">
              {/* Shadow Image */}
              {/* <div
      className="absolute bottom-0 left-0 w-full h-[10vh] z-10"
      style={{
        background:
          "transparent url('/images/home/section3/bgShadow.png') 0% 0% no-repeat padding-box",
      }}
    ></div> */}

              {/* Main Image */}
              <div className="overflow-hidden h-full">
                <img
                  src="/images/page2/Section1RightImg.svg"
                  alt="Right Image 1"
                  className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Shadow Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>

              {/* Text Section */}
              <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[1.15vw] font-montserrat font-medium px-[0.5vw] py-[0.3vh] z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                {rightImgText}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2Section2;
