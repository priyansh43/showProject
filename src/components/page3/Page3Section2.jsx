import React, { useEffect, useState } from "react";
import Section3Slider from "../slider/Section3Slider";
import RightIconButton from "../buttons/RightIconButton";
import Aos from "aos";
import SectionHeading from "../Heading/SectionHeading";

const Page3Section2 = () => {
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
            <SectionHeading title="EMPOWERING DESIGNERS. TRANSFORMING TOMORROW’S INTERIORS." />
          </div>

          {/* Mobile Slider */}
          <div className="w-full">
            <Section3Slider />
          </div>

          {/* Mobile Paragraph */}
          <p className="md:text-[5.25vw] text-[4.27vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-[7.47vw] md:leading-[1.5] md:text-center px-[4.27vw] md:px-0 ">
            Step into the world of interior design with ATLAS ISDI’s B.Des
            Interior Design program—where visionary aesthetics meet cutting-edge
            technology. Here, you’ll learn to craft spaces that are a blend of
            functionality, beauty, and innovation, while embracing trends in
            sustainability, smart spaces, and cultural relevance. With a strong
            foundation in entrepreneurial thinking, our curriculum is crafted to
            prepare you as a leader ready to shape the future of interior
            design.
          </p>

        
          <RightIconButton title={  "SCHEDULE A VISIT"}/>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row   justify-between items-stretch mx-0 md:px-[7.29vw] my-0 md:my-[13.89vh] w-full gap-[7.1875vw]">
          {/* Left Section */}
          <div className="flex flex-col justify-between items-start  w-full md:w-[42.3480vw]">
            {/* Heading */}
            <div>
              <h1 className="md:text-[3.03vw] w-full text-[7.47vw] font-montserrat font-bold uppercase  text-[#1C1C1C]">
              Shaping designers, transforming spaces.
              </h1>
            </div>
            {/* slider */}
            {/* <div className='flex md:hidden'>
        <Section3Slider />
        </div> */}

            {/* Paragraph */}
            <div className="md:w-[43.1771vw] w-[90vw] ">
              <p className="text-[5.25vw] md:text-[1.15vw] opacity-60 font-montserrat font-medium text-[#1C1C1C] leading-[1.5]">
                Unlock the future of fashion with ATLAS ISDI’s B.Des Fashion
                Design program—where bold creativity meets tech-driven
                innovation. Our program will help you master fashion for
                business and expression, while embracing innovation in
                technology, circular fashion, and global impact. With a focus on
                entrepreneurship, this program prepares you to lead and shape
                the future of fashion.
              </p>
            </div>

            {/* Button */}
            {/* <div className='w-full md:w-auto flex md:block items-center justify-center '>
          <button className="md:text-[1.25vw] text-[4vw] bg-[#E12A7B] hover:bg-[#FFFFFF] text-white hover:text-[#1C1C1C] uppercase font-montserrat font-bold px-[3.4vw] md:px-[1.66667vw] py-[3.3vw] md:py-[1.96vh] flex items-center gap-[2vw] md:gap-[0.5vw] border-[1px] border-[#E12A7B]">
            SCHEDULE A VISIT
            <img src=" /icon/rightArrow.svg" alt="Arrow Icon" className="md:w-[2.08vw] w-[4vw] md:h-[2.08vw] h-[4vw] ml-[1.15vw]" />
          </button>
        </div> */}
            {/* <div className="md:mt-[1vw] md:mb-[0.5vw]">
              <RightIconButton
                title=" SCHEDULE A VISIT"
                iconSrc=" /icon/rightArrow.svg"
              />
            </div> */}

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
            <div className="relative w-[35.9375vw] h-[44.9479vw]">
              {/* Shadow Image */}
              <div
                className="absolute bottom-0 left-0 w-full h-[10vh] z-10"
                style={{
                  background:
                    "transparent url('/images/home/section3/bgShadow.png') 0% 0% no-repeat padding-box",
                }}
              ></div>
              <div className="group overflow-hidden">
                <img
                  src="/images/home/section3/rightImg1.png"
                  alt="Right Image 1"
                  className="w-full h-[44.9479vw] object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
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

export default Page3Section2;
