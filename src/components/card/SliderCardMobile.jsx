export const Section5CardMobile = ({
  cardWidth = "91.47vw",
  cardHeight = "45vh",
  imageHeight = "36.29vh",
  imageSrc,
  caption,
  iconSrc,
}) => {
  return (
    <div
      className={`flex flex-col w-[${cardWidth}] h-[${cardHeight}] bg-white text-black 
        transition-all duration-300 hover:bg-black hover:text-white border-[1px] border-[#1C1C1C66]`}
    >
      {/* Upper part - Image */}
      <div className={`w-full h-[${imageHeight}]`}>
        <img src={imageSrc} alt="Card" className="w-full h-full object-cover" />
      </div>

      {/* Lower part - Caption and Icon */}
      <div className="flex items-start justify-between w-full px-16px-mvw py-20px-mvw  pb-[3vw]">
        <p className="text-[5.33vw] md:text-[1.25vw] max-w-[58.13vw] font-montserrat font-bold">
          {caption}
        </p>
        <img
          src={iconSrc}
          alt="Icon"
          className="w-[9.6vw] md:w-[2vw] h-[9.6vw] md:h-[2vw]" // Adjust icon size
        />
      </div>
    </div>
  );
};

export default Section5CardMobile;
