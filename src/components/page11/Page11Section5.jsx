import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { studentClubData } from "../../data/Page11Data";
import SectionHeading from "../Heading/SectionHeading";
import { RxCross2 } from "react-icons/rx";
import Marquee from "react-fast-marquee";

export const Page11Section5 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState([]);
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  const marqueeRef = useRef(null);
  const [position, setPosition] = useState(0);

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

  const scrollNext = () => {
    if (marqueeRef.current) {
      const newPosition = position + 300; // Adjust scroll amount
      marqueeRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setPosition(newPosition);
    }
  };

  const scrollPrev = () => {
    if (marqueeRef.current) {
      const newPosition = Math.max(0, position - 300); // Prevent scrolling past start
      marqueeRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setPosition(newPosition);
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
    centerMode: true, // Center the slides
    centerPadding: "1vw", // Add padding to show portions of the left and right slides
    focusOnSelect: true, // Optional: allow clicking on slides to focus on them

    nextArrow: <NewCustomArrow direction="right" />, // Custom next arrow
    prevArrow: <NewCustomArrow direction="left" />, // Custom previous arrow
    afterChange: (index) => setCenterSlideIndex(index),
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // When the screen width is 768px or less (for mobile)
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
          centerPadding: "0", // Remove padding for mobile view
        },
      },
    ],
  };

  const NewsliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
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
      <div className="flex justify-between items-center mb-60px-vw md:pl-0 w-[100%] pl-16px-mvw pt-24px-mvw md:pt-40px-vw">
        <p className="md:text-22px-vw !w-full text-16px-mvw  md:w-[70.4vw]  font-montserrat font-medium opacity-60 md:leading-[1.770833vw]">
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
          clubs are your gateway to a holistic and enriching journey
        </p>
        <div className="hidden md:block relative md:w-[20vw]">
          <button
            className={`absolute z-10 md:w-91px-vw w-52px-mvw h-52px-mvw md:h-91px-vw flex items-center justify-center bg-white rounded-full focus:outline-none ${
              "left" === "left"
                ? "md:left-[0vw] left-[29vw]"
                : "md:right-[7.2916vw] right-[29vw]"
            } md:top-[1vw] top-[110vw]`}
            onClick={scrollPrev}
            aria-label={"left" === "left" ? "Previous slide" : "Next slide"}
          >
            <img
              src={"left" === "left" ? "/icon/prev.svg" : "/icon/next.svg"}
              alt={"left" === "left" ? "Previous" : "Next"}
              className="w-full h-full"
            />
          </button>
          <button
            className={`absolute z-10 md:w-91px-vw w-52px-mvw h-52px-mvw md:h-91px-vw flex items-center justify-center bg-white rounded-full focus:outline-none ${
              "left" === "left"
                ? "md:left-[12vw] left-[29vw]"
                : "md:right-[9vw] right-[29vw]"
            } md:top-[1vw] top-[110vw]`}
            onClick={scrollNext}
            aria-label={"right" === "left" ? "Previous slide" : "Next slide"}
          >
            <img
              src={"right" === "left" ? "/icon/prev.svg" : "/icon/next.svg"}
              alt={"right" === "left" ? "Previous" : "Next"}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>

      {/* Slider Section */}

      <div ref={marqueeRef} className=" hidden md:block">
        <Marquee velocity={60} minScale={0.8} className="" pauseOnHover={true}>
          {studentClubData.map((item, index) => (
            <div key={index} className="">
              <div className="md:ml-[3.3vw]  border-b border-[#1C1C1C66] overflow-hidden h-[32.86vw] !w-[42.34vw]">
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
                    <p className="text-18px-vw md:min-h-[3vw]  pb-22px-vw font-montserrat font-medium opacity-60">
                      {item.description}
                    </p>
                  </div>
                  <div className="py-22px-vw">
                    <button
                      className="h-[2.6041vw] w-[2.6041vw]"
                      onClick={() => openGalleryPopup(item.gallery)}
                    >
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
        </Marquee>
      </div>
      <div className="block pl-16px-mvw pt-20px-mvw md:hidden">
        <Slider {...NewsliderSettings}>
          {studentClubData.map((item, index) => (
            <div key={index} className="">
              <div className=" overflow-hidden h-[102.93vw] w-[91.47vw] mb-12px-mvw border-[#1C1C1C66] border-b">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[64.53vw] object-cover"
                />
                <div className="md:px-22px-vw px-16px-mvw flex justify-between border-b border-l border-r border-[#1C1C1C66]  ">
                  <div className="md:py-22px-vw py-20px-mvw ">
                    <h3 className="md:text-[1.770833vw] text-[5.33vw] font-montserrat font-semibold ">
                      {item.title}
                    </h3>
                    <p className="md:text-18px-vw text-16px-mvw  pb-22px-vw font-montserrat font-medium opacity-60 pt-12px-mvw md:pt-0">
                      {item.description}
                    </p>
                  </div>
                  <div className="md:py-22px-vw pt-20px-mvw">
                    <button
                      className="md:h-[2.6041vw] h-36px-mvw w-36px-mvw md:w-[2.6041vw]"
                      onClick={() => openGalleryPopup(item.gallery)}
                    >
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
        </Slider>
      </div>
      {/* Popup for Gallery */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center h-full w-full items-center z-50">
          <div className="bg-white  w-[100vw]  h-[100vh] md:h-[100vh] relative ">
            {/* Close Button */}
            <button
              className="absolute top-16px-mvw md:top-20px-vw md:right-20px-vw right-16px-mvw rounded-full md:w-48px-vw w-34px-mvw h-34px-mvw md:h-48px-vw bg-[#E12A7B] hover:text-black z-40"
              onClick={closeGalleryPopup}
            >
              <RxCross2 className="font-bold text-center w-full text-[6vw] md:text-[1.40vw] text-[#ffff] z-40" />
            </button>

            {/* Slider for gallery images */}
            <div className="md:mt-[11.04vw] mt-[50vw] md:px-0 px-16px-mvw">
              <Slider {...gallerySliderSettings}>
                {activeGallery.map((img, idx) => (
                  <div key={idx} className="md:!w-[55.92vw] w-[80%] mx-[1vw]">
                    <img
                      src={img.image}
                      alt={`Gallery ${idx + 1}`}
                      className="md:h-[30.17vw] h-[61.33vw] w-full object-cover"
                    />
                    {/* Only show title and description for the center slide */}
                    {/* {idx == centerSlideIndex && ( */}
                    <div className=" opacity-100 transition-opacity duration-300">
                      <h3 className="md:text-[1.770833vw] text-[8vw] font-montserrat font-semibold pt-20px-mvw md:pt-24px-vw">
                        {img.title}
                      </h3>
                      <p className="md:text-18px-vw text-16px-mvw  pt-16px-vw font-montserrat font-medium opacity-60">
                        {img.description}
                      </p>
                    </div>
                    {/* )} */}
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

export default Page11Section5;
