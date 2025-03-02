import React, { useState, useEffect } from "react";
import Section15Card from "../card/Section15Card";
import { Section15cardData } from "../../data/home";
import Marquee from "react-marquee-slider";
import VideoModal from "../modal/VideoModal";

export const Section15Slider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [videoUrl, setVideoUrl] = useState(""); // State for video URL

  // Detect screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Adjust velocity based on window width
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        // Mobile breakpoint
        setVelocity(10); // Decrease speed for mobile
      } else {
        setVelocity(20); // Default speed for larger screens
      }
    };

    handleResize(); // Set initial velocity
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  const cardPropsForDisplay = isMobile
    ? {
        cardWidth: "70.4vw", // 264px in vw for mobile
        cardHeight: "83.2vw", // 312px in change from 50.8vh for mobile
        imageHeight: "46.8vh", // Adjust as needed
      }
    : {
        cardWidth: "20.73vw", // Updated to 398px in vw
        cardHeight: "27.98vw", // No change required
        imageHeight: "49.72vh", // Updated image height to 537px in vh
      };

  // Function to open modal with the video URL
  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="w-full">
      {isMobile ? (
        // Render Marquee for mobile screens
        <Marquee
          velocity={velocity}
          minScale={0.8}
          className="partner-marquee"
          pauseOnHover={isPaused}
        >
          {Section15cardData.map((data, index) => (
            <div
              key={index}
              style={{ 
                padding: "0 6px",
                margin: "0",
                boxSizing: "border-box",
              }}
              onClick={() => openModal(data.videoUrl)} // Open modal with video on click
            >
              <Section15Card
                cardWidth={cardPropsForDisplay.cardWidth}
                cardHeight={cardPropsForDisplay.cardHeight}
                imageHeight={cardPropsForDisplay.imageHeight}
                imageSrc={data.image}
                caption={data.caption}
              />
            </div>
          ))}
        </Marquee>
      ) : (
        // Render static slider for desktop screens
        <div className="flex justify-between">
          {Section15cardData.map((data, index) => (
            <div
              key={index}
              style={{
                margin: "0",
                boxSizing: "border-box",
              }}
              onClick={() => openModal(data.videoUrl)} // Open modal with video on click
            >
              <Section15Card
                cardWidth={cardPropsForDisplay.cardWidth}
                cardHeight={cardPropsForDisplay.cardHeight}
                imageHeight={cardPropsForDisplay.imageHeight}
                imageSrc={data.image}
                caption={data.caption}
              />
            </div>
          ))}
        </div>
      )}

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={videoUrl} />
    </div>
  );
};

export default Section15Slider;
