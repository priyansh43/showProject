import React, { useEffect, useState } from "react";
import Section3Slider from "../slider/Section3Slider";
import Section4Slider from "../slider/Section4Slider";

const Section6 = () => {
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
  //  new changes
  return (
    <div className="mx-0 my-[6vw] md:my-[7.29vw] w-full">
      {isMobile ? (
        <div className="flex flex-col items-center gap-6 !mt-64px-mvw mb-44px-mvw">
          <div className="relative w-full px-[5vw] mt-[10vw] h-[62.22vw]">
            <img
              src="/images/home/section5/bgmobile.png"
              alt="Card"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Button Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <button className="text-nowrap text-[4.44vw] bg-[#E12A7B] hover:bg-white text-white hover:text-black uppercase font-montserrat font-bold px-[6vw] md:px-[1.6vw] py-[4vw]  flex items-center gap-x-[2vw] gap-[2vw] border-[2px] border-solid border-white transition-all duration-300">
                DOWNLOAD BROCHURE
                <img
                  src="/icon/download.svg"
                  alt="Download Icon"
                  className="w-[7vw] h-auto md:w-[1.5vw] mr-[6vw] md:h-auto"
                />
              </button>
            </div>
          </div>

          <h1 className="text-start md:text-center pt-40px-mvw  pl-[5.27vw] text-[7.47vw] font-montserrat font-bold uppercase text-[#1C1C1C]">
            OUR CURRICULAR COLLABORATION <br /> WITH PARSONS
          </h1>

          <div className="w-full">
            <Section4Slider showContent={false} />
          </div>

          <p className="md:text-[5.25vw] text-[4.27vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-[7.47vw] md:leading-[1.5] md:text-center px-[4.27vw] md:px-0">
            Our curriculum is developed in collaboration with Parsons School of
            Design, one of the top ranking design colleges in the USA. This
            partnership ensures to create multidisciplinary future-focused
            programs along with a global standard curriculum. This curriculum
            enables students to get equipped with the latest trends and globally
            demanded skills.
          </p>

          <button className="text-[4vw] hidden  bg-[#E12A7B] text-white uppercase font-medium px-6 py-4 hover:bg-[#d0206e] md:flex items-center justify-center gap-2">
            SCHEDULE A VISIT
            <img
              src="/images/home/section3/arrowIcon.svg"
              alt="Arrow Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-stretch mx-0 md:mx-[7.29vw] my-0 md:my-[7.29vw] w-full gap-[7.19vw]">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start gap-y-[2.08vw] w-full md:w-[47%]">
            {/* Heading */}
            <h1 className="md:text-[3.03vw] text-[7.47vw] font-montserrat font-bold  text-[#1C1C1C]">
            Curricular Collaboration With Parsons New York
            </h1>

            {/* Paragraph for Left Section */}
            <div className="flex flex-col items-center justify-center gap-[1.67vw]">
              <p className="text-[5.25vw] md:text-[1.15vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-[1.5]">
              Our curriculum is developed in collaboration with Parsons School of Design, a globally acclaimed institution and consistently ranked among the top design colleges in the USA. This esteemed partnership has enabled us to craft multidisciplinary, future-focused programs that integrate innovation, creativity, and practicality. By aligning our curriculum with global standards, we ensure our students are exposed to the latest trends and methodologies shaping the design industry worldwide.
              </p>

              <p className="text-[5.25vw] md:text-[1.15vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-[1.5]">
              This collaboration not only enhances the academic rigor of our programs but also equips students with a comprehensive skill set that meets the demands of an ever-evolving global market. With a focus on fostering critical thinking, adaptability, and innovation, our curriculum prepares students to excel in diverse professional environments and make a significant impact in their chosen fields.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between gap-[2.6vw] w-full md:w-[45%]">
            {/* Image */}
            <div className="relative w-[31.98vw] h-[16.67vw] group overflow-hidden">
              <div className="relative w-[31.98vw] h-[16.67vw] group overflow-hidden">
                <img
                  src="/images/home/section6/img3.png"
                  alt="Right"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[3vw] md:text-[1.15vw] font-montserrat font-medium px-2 md:px-[0.5vw] py-1 md:py-[0.3vh] z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                  Lorem Ipsum Text Dummy Content
                </div>
              </div>
            </div>

            <div className="relative w-[31.98vw] h-[16.67vw] group overflow-hidden">
              <img
                src="/images/home/section6/img1.png"
                alt="Right"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
              <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[3vw] md:text-[1.15vw] font-montserrat font-medium px-2 md:px-[0.5vw] py-1 md:py-[0.3vh] z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                Lorem Ipsum Text Dummy Content
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section6;
