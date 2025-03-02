import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UrbanTechCard from "../card/UrbanTechCard";
import { UrbanCardData } from "../../data/Page11Data";

export const Page11Section2 = () => {
  // Custom Arrow Buttons for the slider
  //   const NextArrow = ({ onClick }) => (
  //     <div
  //       onClick={onClick}
  //       className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
  //     >
  //       <img
  //         src="/icon/next.svg"
  //         alt="Next"
  //         className="w-10 h-10 object-contain"
  //       />
  //     </div>
  //   );

  //   const PrevArrow = ({ onClick }) => (
  //     <div
  //       onClick={onClick}
  //       className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
  //     >
  //       <img
  //         src="/icon/prev.svg"
  //         alt="Previous"
  //         className="w-10 h-10 object-contain"
  //       />
  //     </div>
  //   );

  // Slider settings
  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "20px",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div>
      {/* Section Heading */}
      <div className="md:px-[7.29vw] pt-60px-mvw md:pt-[7.81vw]">
        <SectionHeading title={"Urban Tech-Enabled Campus"} />
      </div>

      {/* Slider Section */}
      <div className="md:pt-60px-vw pt-24px-mvw md:pl-[7.29vw]">
        <Slider {...sliderSettings}>
          {UrbanCardData.map((data) => (
            <UrbanTechCard key={data.id} img={data.img} title={data.title} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Page11Section2;
