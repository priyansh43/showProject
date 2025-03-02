import React from "react";

export const Section15Card = ({
  cardWidth,
  cardHeight,
  imageSrc,
  caption,
  iconSrc = "/icon/play.svg", // Default icon if not provided
}) => {
  return (
    <div
      className={`flex  flex-col cursor-pointer bg-white border-opacity-40 text-black border-[1px] border-[#1C1C1C66] 
        transition-all duration-100 hover:text-white`}
      style={{
        width: cardWidth,
        height: cardHeight, // Taking height from props
        position: "relative", // Relative positioning for absolute children
        overflow: "hidden", // Ensures the zoom effect stays within the card bounds
      }}
    >
      {/* Full Image */}
      <div
        style={{
          height: cardHeight, // Use cardHeight prop here as well
          position: "relative", // Relative positioning to control overlay
        }}
        className="group" // Group class for nested hover effects
      >
        <img
          src={imageSrc}
          alt="Card"
          className="w-[100%] h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />

        {/* Caption and Icon Overlay */}
        {caption && (
          <div
            className="flex justify-between items-center absolute bottom-0 w-full px-[4vw] md:px-[1vw] py-[2vh] gap-[4vw] md:gap-[3.8vw]"
            style={{
              zIndex: 10, // Ensures it's on top of the image
            }}
          >
            {/* Caption */}
            <p className="md:text-[1.46vw] flex flex-nowrap items-start justify-center text-[4.8vw] tracking-wide font-montserrat font-semibold text-center text-white">
              {caption}
            </p>

            {/* Play Icon */}
            <div className="flex justify-center items-center">
              <img
                src={iconSrc}
                alt="Play Icon"
                className="w-[10vw] md:w-[1.875vw] h-[10vw] md:h-[1.875vw] object-contain cursor-pointer"
              />
            </div>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="w-full absolute bottom-0 h-[20%] bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C00]"></div>
      </div>
    </div>
  );
};

export default Section15Card;
