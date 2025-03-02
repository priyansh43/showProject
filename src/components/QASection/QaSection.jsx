import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const QaSection = ({ FAQ, customCss, mobile, readMore }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`${mobile ? "" : "w-[44.375vw]"} ${customCss || ""}`}>
      {FAQ.map((item, index) => (
        <div
          key={index}
          className={`border-b border-[#1C1C1C66]  border-opacity-20 ${
            index === FAQ.length - 1 ? "border-b-0" : ""
          }
          ${
            activeIndex === index
              ? "bg-[#1C1C1C] text-white pl-[5.33vw]  pr-[2.0893vw]   md:px-40px-vw"
              : "bg-white text-[#1C1C1C] pr-[2.0893vw]"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex items-center justify-between text-left  md:py-31px-vw py-[5vw] focus:outline-none`}
          >
            <span className="font-montserrat tracking-wide w-[72vw]  md:w-full   font-semibold text-[5.33vw]  md:text-[1.3542vw]">
              {item.question}
            </span>

            {/* Wrapping icon in a fixed container */}
            <span className="flex items-center z-20 justify-center w-[9.6vw] md:w-[2.804vw] h-auto md:h-[2.604vw] ">
              {activeIndex === index ? (
                <img
                  src="/icon/minus.svg"
                  alt="upicon"
                  className="w-full h-full"
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
                className="overflow-hidden"
              >
                <p className="font-montserrat font-medium opacity-60 max-w-[90%] text-[4.27vw] pb-[5vw] leading-[7.47vw] md:leading-normal  md:text-[0.9375vw] md:opacity-80 md:pb-[2vw]">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default QaSection;
