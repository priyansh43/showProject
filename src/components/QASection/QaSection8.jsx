import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Aos from "aos";

const QaSection8 = ({ FAQ, customCss, mobile, readMore }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded FAQ index
  const maxWords = 15; // Number of words to show initially

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleReadMore = (index) => {
    // Toggle expansion for the clicked item
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close it if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked item
    }
  };

  // Function to truncate text to a certain number of words
  const truncateText = (text) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "";
    }
    return text;
  };

  return (
    <div
      className={`${mobile ? "w-[100vw]" : "w-[44.375vw]"} ${customCss || ""}`}
    >
      {FAQ.map((item, index) => (
        <div
          key={index}
          className={`border-b    md:pb-0 md:pt-0 border-[#1C1C1C66] border-opacity-20 ${
            index === FAQ.length - 1 ? "border-b-0" : ""
          } ${
            activeIndex === index
              ? "bg-[#1C1C1C] text-white px-[3.1vw] md:px-[2.083vw]"
              : "bg-white text-[#1C1C1C] pr-[2.0893vw]"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex items-center justify-between text-left md:py-[1.3vw] py-24px-mvw focus:outline-none`}
          >
            <span
              className={`font-montserrat tracking-wide  w-[72.8vw] md:w-full font-semibold text-[5.33vw] md:text-[1.354vw] ${
                mobile ? "text-[6vw]" : ""
              }`}
            >
              {item.question}
            </span>

            <span className="flex items-center justify-center w-[9.6vw] md:w-[2.8vw] h-[9.6vw] md:h-[2.604vw]">
              {activeIndex === index ? (
                <img
                  src="/icon/minus.svg"
                  alt="upicon"
                  className="w-full border-none h-full"
                />
              ) : (
                <img
                  src="/icon/plus.svg"
                  className="w-full h-full"
                  alt="downicon"
                />
              )}
            </span>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden  relative"
              >
                <p className="font-montserrat font-medium pb-[14vw] md:w-[35.6vw]  text-[4.55vw] md:text-[0.9375vw] opacity-80 md:pb-[4vw]">
                  {expandedIndex === index
                    ? item.answer
                    : truncateText(item.answer)}
                </p>

                {/* Show Read More button only if the text is truncated */}
                {readMore && expandedIndex !== index && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="absolute bottom-[1vh]   underline opacity-90 uppercase left-0 md:left-[-1vw] text-[#ffff] font-medium text-[4vw] md:text-[1vw]  md:p-[1vw] bg-transparent border-none"
                  >
                    Read More
                  </button>
                )}

                {/* Show Read Less button only if the text is expanded */}
                {readMore && expandedIndex === index && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="absolute bottom-[1vh] uppercase opacity-90 left-[-1vw] text-[#fff] underline font-medium text-[5vw] md:text-[1vw] p-[1vw] bg-transparent border-none"
                  >
                    Read Less
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default QaSection8;
