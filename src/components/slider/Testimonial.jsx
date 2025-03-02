import React, { useState, useEffect } from "react";

export const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-container flex flex-col md:flex-row items-center md:items-start justify-center mt-60px-mvw md:mt-0 md:pt-0 md:justify-between w-full md:px-[7.07vw]">
      {/* Left Section */}
      <h2 className="text-[7.47vw] w-[91.47vw] text-start block md:hidden md:text-[3.125vw] font-montserrat  font-bold text-[#1C1C1C] pb-[6.2vw] opacity-100">
        Follow Us On
      </h2>
      <div className="md:pt-0 bg-gray-200 left-section w-[91.47vw] md:w-[36.67vw] h-[51.14vh] md:h-[38vw] flex items-center justify-center">
        {/* <img
          src={testimonials[currentIndex].image}
          alt="Testimonial"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Right Section */}
      <div className="right-section w-full md:w-[44.375vw] px-[4vw] md:px-[1vw] flex flex-col justify-center items-start">
        {/* Heading */}
        <h2 className="text-[4vw] hidden md:block md:text-[3.125vw] font-montserrat font-bold  text-[#1C1C1C]">
          Follow Us On
        </h2>

        {/* Social Media Link */}
        <div className="flex pt-28px-mvw md:pt-[2.5vw] items-center gap-4 md:text-[1.5vw] font-medium text-[#1C1C1C]">
          <img
            src={testimonials[currentIndex].socialmediaIcon}
            alt="Social Icon"
            className="w-[10.93vw] md:w-[3.125vw] h-[10.93vw] md:h-[3.125vw] object-contain"
          />
          <span className="text-[6.4vw] md:text-[2.29166667vw] font-raleway font-bold">
            {testimonials[currentIndex].socialmediaName}
          </span>
        </div>
        <div className="h-[1px] my-20px-mvw md:my-[2vw] w-full bg-[#1C1C1C] opacity-40"></div>

        {/* Small Heading */}
        <h4 className="text-[5.56vw] md:text-[1.35417vw] font-montserrat font-semibold text-[#1C1C1C]">
          {testimonials[currentIndex].subheading}
        </h4>

        {/* Paragraph */}
        <p className="text-[4.44vw] pt-20px-mvw md:pt-[1vw] md:text-[1.2vw] font-montserrat font-medium text-[#1C1C1C] opacity-80">
          {testimonials[currentIndex].content}
        </p>

        {/* Button */}
        <div className="w-full md:w-auto flex py-40px-mvw md:py-[3vw] items-start justify-center md:justify-start">
          <button className="font-montserrat md:text-[1.25vw] text-[4vw] bg-[#E12A7B] text-white hover:text-[#1c1c1c] uppercase font-bold px-[5.4vw] md:px-[1.6vw] py-[3.3vw] md:py-[0.9vw] flex items-center gap-[3vw] md:gap-[1.09375vw] hover:bg-[#ffff] border-[1px] border-[#E12A7B]">
            Follow Now
            <img
              src="/images/home/section3/arrowIcon.svg"
              alt="Arrow Icon"
              className="md:w-[2.08vw] w-[8vw] md:h-[2.08vw] h-[8vw]"
            />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="dots ml-[24.47vw] md:ml-0 flex md:justify-start justify-center gap-4 md:gap-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer w-[4.17vw] md:w-[0.8vw] h-[4.17vw] md:h-[0.8vw] rounded-full ${
                currentIndex === index ? "bg-[#1E1E1E]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
