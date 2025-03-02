import React, { useEffect, useState } from "react";
import Section3Slider from "../slider/Section3Slider";
import RightIconButton from "../buttons/RightIconButton";
import Aos from "aos";
import SectionHeading from "../Heading/SectionHeading";

const Page6Section2 = () => {
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
        <div className="flex flex-col items-center gap-6  py-8">
          {/* Mobile Heading */}
          <div className="pr-16px-mvw max-w-[90%]">
            <SectionHeading title="INNOVATING WITH PURPOSE. DESIGNING FOR TOMORROW." />
          </div>

          {/* Mobile Slider */}
          <div className="w-full">
            <Section3Slider />
          </div>

          {/* Mobile Paragraph */}
          <p className="md:text-[5.25vw] text-[4.27vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-[7.47vw] md:leading-[1.5] md:text-center px-[4.27vw] md:px-0 ">
            Step into the exciting field of product design with ATLAS ISDI’s
            B.Des Product Design Program. Here, you'll learn to blend
            user-centered design and functional aesthetics to create products
            that make a difference. Through hands-on learning in prototyping,
            material exploration, and ergonomics, you'll master how to design
            solutions that are not only innovative but also sustainable and
            market-ready. Our curriculum combines design thinking, CAD modeling,
            and human-centered research, preparing you with the skills to create
            impactful products in today’s fast-evolving product design
            landscape.
          </p>

          {/* Mobile Button */}
          {/* <button className="text-[4vw] bg-[#E12A7B] text-white uppercase font-medium px-6 py-4 hover:bg-[#d0206e] flex items-center justify-center gap-2">
            SCHEDULE A VISIT
            <img
              src=" /icon/rightArrow.svg"
              alt="Arrow Icon"
              className="w-6 h-6"
            />
          </button> */}
          <RightIconButton title={"SCHEDULE A VISIT"} />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row   justify-between items-stretch mx-0 md:px-[7.29vw] my-0 md:my-[13.89vh] w-full gap-[7.1875vw]">
          {/* Left Section */}
          <div className="flex flex-col justify-between items-start  w-full md:w-[42.3480vw]">
            {/* Heading */}
            <div>
              <h1 className="md:text-[3.03vw] w-full text-[7.47vw] font-montserrat font-bold uppercase  text-[#1C1C1C]">
                Crafting bold futures, shaping innovators.
              </h1>
            </div>
            {/* slider */}
            {/* <div className='flex md:hidden'>
        <Section3Slider />
        </div> */}

            {/* Paragraph */}
            <div className="md:w-[43.1771vw] w-[90vw] py-40px-vw">
              <p className="text-[5.25vw] md:text-[1.15vw] opacity-60 font-montserrat font-medium text-[#1C1C1C] leading-[1.5]">
                Step into the exciting field of product design with ATLAS ISDI’s
                B.Des Product Design Program. Here, you'll learn to blend
                user-centered design and functional aesthetics to create
                products that make a difference. Through hands-on learning in
                prototyping, material exploration, and ergonomics, you'll master
                how to design solutions that are not only innovative but also
                sustainable and market-ready. Our curriculum combines design
                thinking, CAD modeling, and human-centered research, preparing
                you with the skills to create impactful products in today’s
                fast-evolving product design landscape.
              </p>
            </div>

            {/* Image */}
            <div className="hidden md:block relative w-[42.3438vw] h-[22.9688vw] group overflow-hidden">
              {/* Shadow Image */}
              <div
                className="absolute bottom-0 left-0 !w-full h-[10vh] z-10"
                style={{
                  background:
                    "transparent url('/images/home/section3/shadow.png') 0% 0% no-repeat padding-box",
                }}
              ></div>
              <img
                src="/images/home/section3/leftImg.png"
                alt="Left Section"
                className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-[2%] left-[2%] brightness-200 z-20 text-[#FFFFFF] text-[1.15vw] font-montserrat font-medium  px-[0.5vw] py-[0.3vh]">
                Lorem Ipsum Text Dummy Content
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:block  w-full md:w-[44.9479vw] ">
            {/* First Image */}
            <div className="relative w-[35.9375vw] h-full">
              {/* Shadow Image */}
              <div
                className="absolute bottom-0 left-0 w-full h-[10vh] z-10"
                style={{
                  background:
                    "transparent url('/images/home/section3/bgShadow.png') 0% 0% no-repeat padding-box",
                }}
              ></div>
              <div className="group overflow-hidden h-full">
                <img
                  src="/images/home/section3/rightImg1.png"
                  alt="Right Image 1"
                  className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[1.15vw] font-montserrat font-medium  px-[0.5vw] py-[0.3vh] z-20">
                Lorem Ipsum Text Dummy Content
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page6Section2;
