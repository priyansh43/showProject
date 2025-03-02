import React from "react";

const Section13Slider = ({ Section13Data }) => {
  return (
    <div className="slider-container flex items-center w-full">
      {Section13Data.map((item, index) => (
        <div
          key={index}
          className="flex w-[20vw] group overflow-hidden flex-col items-center justify-center"
        >
          {/* Image with Scaling Effect */}
          <div
            className="relative flex h-[62.83vh] md:h-[34.38vw] w-[65.07vw] md:w-[20vw] items-end justify-center overflow-hidden"
          >
            <div
              className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Caption (Not Scaling) */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#1C1C1C] to-transparent px-41px-vw pb-32px-vw">
              <p className="text-white font-montserrat font-semibold text-[1.46vw] text-center !z-30 brightness-[4]">
                {item.caption}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section13Slider;
