import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { studentClubData } from "../../data/Page11Data";
import SectionHeading from "../Heading/SectionHeading";
import { RxCross2 } from "react-icons/rx";
import Marquee from "react-fast-marquee";

export const Page11Section55 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState([]);
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const marqueeContainerRef = useRef(null);
  const [centerSlideText, setCenterSlideText] = useState("");
  useEffect(() => {
    // Disable or enable body scrolling based on modal state
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when component unmounts
    };
  }, [isPopupOpen]);

  useEffect(() => {
    // Enable continuous scrolling unless hovering
    const marqueeScroll = () => {
      if (marqueeContainerRef.current && !isHovering) {
        marqueeContainerRef.current.scrollLeft += 1;
        if (
          marqueeContainerRef.current.scrollLeft >=
          marqueeContainerRef.current.scrollWidth -
            marqueeContainerRef.current.clientWidth
        ) {
          marqueeContainerRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(marqueeScroll, 10); // Adjust speed as necessary

    return () => clearInterval(interval); // Cleanup interval
  }, [isHovering]);

  const scrollNext = () => {
    if (marqueeContainerRef.current) {
      marqueeContainerRef.current.scrollLeft += 300; // Adjust scroll amount
    }
  };

  const scrollPrev = () => {
    if (marqueeContainerRef.current) {
      marqueeContainerRef.current.scrollLeft -= 300; // Adjust scroll amount
    }
  };

  const CustomArrow = ({ direction, onClick }) => (
    <button
      className={`absolute z-10 md:w-91px-vw w-52px-mvw h-52px-mvw md:h-91px-vw flex items-center justify-center bg-white rounded-full focus:outline-none ${
        direction === "left"
          ? "md:left-[73.6146vw] left-[29vw]"
          : "md:right-[7.2916vw] right-[29vw]"
      } md:top-[-8vw] top-[110vw]`}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <img
        src={direction === "left" ? "/icon/prev.svg" : "/icon/next.svg"}
        alt={direction === "left" ? "Previous" : "Next"}
        className="w-full h-full"
      />
    </button>
  );

  const NewCustomArrow = ({ direction, onClick }) => (
    <button
      className={`absolute z-10 md:w-91px-vw w-47px-mvw h-47px-mvw md:h-91px-vw flex items-center justify-center bg-white rounded-full focus:outline-none ${
        direction === "left"
          ? "md:left-[9.72vw] left-[30.5vw]"
          : "md:right-[9.72vw] right-[30.5vw]"
      } md:top-[40%] bottom-[-30vw]  transform -translate-y-1/2`}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <img
        src={direction === "left" ? "/icon/prev.svg" : "/icon/next.svg"}
        alt={direction === "left" ? "Previous" : "Next"}
        className="w-full h-full"
      />
    </button>
  );

  const gallerySliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1.67, // Show one and a half slides
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "1vw",
    focusOnSelect: true,
    nextArrow: <NewCustomArrow direction="right" />,
    prevArrow: <NewCustomArrow direction="left" />,
    afterChange: (index) => {
      setCenterSlideIndex(index);
      // Set text for the centered slide
      const currentSlide = activeGallery[index];
      setCenterSlideText(currentSlide?.description || ""); // Use the description or fallback text
    },
    pauseOnHover: false,
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

  const openGalleryPopup = (gallery) => {
    setActiveGallery(gallery);
    setIsPopupOpen(true);
  };

  const closeGalleryPopup = () => {
    setIsPopupOpen(false);
    setActiveGallery([]);
  };

  return (
    <div className="pt-60px-mvw md:pt-[7.81vw] px-16px-mvw pl-0 md:pl-[7.29vw]   md:px-0">
      <div className="px-16px-mvw md:px-0">
        <SectionHeading title="Student Club" />
      </div>
      <div className="flex justify-between items-center mb-60px-vw md:px-0 px-16px-mvw pt-24px-mvw md:pt-40px-vw">
        <p className="md:text-22px-vw w-full text-16px-mvw md:w-[67.4vw] font-montserrat font-medium opacity-60 md:leading-[1.770833vw]">
          At the heart of our vibrant campus life lies a dynamic network of
          student-led clubs, where creativity thrives, passions are ignited, and
          lasting friendships take root. These clubs serve as hubs for
          exploration, offering countless opportunities to engage in meaningful
          activities, sharpen skills, and forge connections that extend beyond
          the classroom. From hosting immersive events to collaborative projects
          and thought-provoking discussions, our Student Clubs provide a
          platform for growth, community-building, and the pursuit of shared
          interests. Whether you're looking to fuel a passion, develop
          leadership qualities, or simply connect with like-minded peers, these
          clubs are your gateway to a holistic and enriching journey.
        </p>
        <div className="relative w-[20%]">
          <button
            className="absolute z-10 md:w-91px-vw w-52px-mvw h-52px-mvw md:h-91px-vw flex items-center justify-center bg-white rounded-full focus:outline-none left-[29vw] md:left-[0.3vw] md:top-[1vw] top-[110vw]"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <img
              src="/icon/prev.svg"
              alt="Previous"
              className="w-full h-full"
            />
          </button>
          <button
            className="absolute z-10 md:w-91px-vw w-52px-mvw h-52px-mvw md:h-91px-vw flex items-center justify-center bg-white rounded-full focus:outline-none right-[29vw] md:right-[7vw] md:top-[1vw] top-[110vw]"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <img src="/icon/next.svg" alt="Next" className="w-full h-full" />
          </button>
        </div>
      </div>

      <div
        ref={marqueeContainerRef}
        className="hidden md:block overflow-x-auto whitespace-nowrap belowsliderhidden !scrollbar-none "
        onMouseEnter={() => setIsHovering(false)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="inline-flex">
          {studentClubData.map((item, index) => (
            <div key={index} className="">
              <div
                className="md:ml-[3.3vw]  border-b border-[#1C1C1C66] overflow-hidden h-[32.86vw] !w-[42.34vw] cursor-pointer"
                onClick={() => openGalleryPopup(item.gallery)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[25vw] object-cover"
                />
                <div className="px-22px-vw flex justify-between  border-l border-rborder-[#1C1C1C66]">
                  <div className="py-22px-vw">
                    <h3 className="text-[1.770833vw] font-montserrat font-semibold ">
                      {item.title}
                    </h3>
                    <p className="text-18px-vw md:min-h-[3vw] md:!max-w-[40vw]  text-wrap pb-22px-vw font-montserrat font-medium opacity-60">
                      {item.description}
                    </p>
                  </div>
                  <div className="py-22px-vw">
                    <button className="h-[2.6041vw] w-[2.6041vw]">
                      <img
                        src="/icon/gellary.svg"
                        alt=""
                        className="h-full w-full"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white w-full h-full md:w-[100vw] md:h-[100vh] max-w-[100vw] max-h-[100vh] relative rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <button
              className="absolute top-4 right-4 md:top-[0.8vw] md:right-[0.8vw] rounded-full w-10 h-10 md:w-[3vw] md:h-[3vw] bg-[#E12A7B] hover:bg-pink-600 text-white flex items-center justify-center z-40"
              onClick={closeGalleryPopup}
            >
              <RxCross2 className="text-xl md:text-[1.675vw]" />
            </button>

            <div className="flex flex-col justify-center items-center w-full h-full ">
              <Slider
                {...gallerySliderSettings}
                className="w-[100%] md:w-[100%] flex flex-col items-center"
              >
                {activeGallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-full"
                  >
                    <div className=" flex justify-center md:!w-[55.92vw] w-[80%] mx-[1vw]">
                      <img
                        src={img.image}
                        alt={`Gallery ${idx + 1}`}
                        className="md:h-[30.17vw] h-[61.33vw] w-full object-cover"
                      />
                    </div>

                    {/* {
  (idx === centerSlideIndex + 1 || (idx===0 && centerSlideIndex === 5)) && (
    <div className="text-center md:mt-24px-vw md:px-[1vw]">
      <h3 className="text-lg md:text-[1.875vw] font-semibold font-montserrat text-start">
        {img.title}
      </h3>
      <p
        className={`text-18px-vw font-medium font-montserrat mt-16px-vw text-[#1c1c1c] text-start ${
          idx === centerSlideIndex ? "opacity-100" : "opacity-60"
        }`}
      >
        {img.description}
      </p>
    </div>
  )
} */}
                    <div className="text-center md:mt-24px-vw md:px-[1vw]">
                      <h3 className="text-lg md:text-[1.875vw] font-semibold font-montserrat text-start">
                        {img.title}
                      </h3>
                      <p
                        className={`text-18px-vw font-medium font-montserrat mt-16px-vw text-[#1c1c1c] text-start ${
                          idx === centerSlideIndex
                            ? "opacity-100"
                            : "opacity-60"
                        }`}
                      >
                        {img.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page11Section55;
