import React, { useEffect, useRef, useState } from "react";
import Section3Slider from "../slider/Section3Slider";
import RightIconButton from "../buttons/RightIconButton";
import Aos from "aos";
import SectionHeading from "../Heading/SectionHeading";

const Section3 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const iframeRef = useRef(null);

  const handleMouseEnter = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.src) {
      const src = iframe.src;
      if (!src.includes("autoplay=1")) {
        iframe.src = `${src}&autoplay=1`;
      }
    }
  };

  const handleMouseLeave = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.src) {
      iframe.src = iframe.src.replace("&autoplay=1", "");
    }
  };

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
      className="mx-0  my-0 md:my-[7.29vw] w-full"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-offset="150"
    >
      {isMobile ? (
        <div className="flex flex-col items-center gap-6  md:py-8">
          {/* Mobile Heading */}
          <div className="px-16px-mvw md:px-0 ">
  <SectionHeading title=" Study Design In The Heart Of Mumbai" />
</div>

          {/* Mobile Slider */}
          <div className="w-full">
            <Section3Slider showContent />
          </div>

          {/* Mobile Paragraph */}
          <p className="md:text-[5.25vw] text-[4.27vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-[7.47vw] md:leading-[1.5] md:text-center px-[4.27vw] md:px-0 ">
          Located in the heart of Mumbai's bustling corporate hub, our cutting-edge academic and research facilities—including Rapid Prototyping Labs, Fashion Studios, Maker Spaces, and AR/VR Labs—offer an unparalleled environment for experiential learning and collaborative innovation. This dynamic urban setting provides invaluable real-world exposure and connects students with leading companies, equipping them to thrive in the ever-evolving global design industry.
          </p>

       
          <RightIconButton title={"SCHEDULE A VISIT"} />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:min-h-full mx-0 md:mx-[7.29vw] my-0 md:my-[7.29vw] w-full gap-[7.19vw]">
          {/* Left Section */}
          <div className="flex flex-col justify-between items-start w-full md:w-[47%]">
            {/* Heading */}
            <div>
              <h1 className="text-[6vw] md:text-[3.125vw] font-montserrat font-bold  text-[#1C1C1C]">
              Study Design In The Heart Of Mumbai
              </h1>
            </div>

            {/* Paragraph */}
            <div className="w-[90vw] md:w-[46.20vw] mt-4">
              <p className="text-[4.5vw] md:text-[1.15vw] opacity-80 font-montserrat font-medium text-[#1C1C1C] leading-relaxed">
              Located in the heart of Mumbai's bustling corporate hub, our cutting-edge academic and research facilities—including Rapid Prototyping Labs, Fashion Studios, Maker Spaces, and AR/VR Labs—offer an unparalleled environment for experiential learning and collaborative innovation. This dynamic urban setting provides invaluable real-world exposure and connects students with leading companies, equipping them to thrive in the ever-evolving global design industry.
              </p>
            </div>

            {/* Button */}
            <div className="mt-4 md:mt-60px-vw md:mb-20px-vw mb-0">
              <RightIconButton
                title=" SCHEDULE A VISIT"
                iconSrc="/images/home/section3/arrowIcon.svg"
              />
            </div>

            {/* Image */}
            <div
              className="hidden md:block relative w-full h-full  group overflow-hidden mt-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <iframe
                ref={iframeRef}
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/_N-7yjImm_M?mute=1&enablejsapi=1"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex flex-col justify-between gap-4 md:gap-[2.6vw] w-full md:w-[45%]">
            {/* First Image */}
            <div className="relative w-full  md:w-[32.08vw] group">
              {/* Image Section */}
              <div className="overflow-hidden w-full h-full relative">
                <img
                  src="/images/home/section3/Sabyasatchi.jpg"
                  alt="Right"
                  className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Shadow Section */}
                <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
              </div>

              {/* Text Section */}
              <div className="absolute bottom-[2%] left-[2%] brightness-200 text-[#FFFFFF] text-[3vw] md:text-[1.15vw] font-montserrat font-medium px-2 md:px-[0.5vw] py-1 md:py-[0.3vh] z-20 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                Lorem Ipsum Text Dummy Content
              </div>
            </div>

            {/* Second Image */}
            <div className="relative w-full md:w-[32.08vw]  group">
              {/* Image Section */}
              <div className="overflow-hidden w-full h-full relative">
                <img
                  src="/images/home/section3/rightImg.png"
                  alt="Right"
                  className="w-full h-full object-cover z-0 transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Shadow Section */}
                <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
              </div>

              {/* Text Section */}
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

export default Section3;
