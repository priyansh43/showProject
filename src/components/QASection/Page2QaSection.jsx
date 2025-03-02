import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Page2QaSection = ({ data = [], customCss, mobile }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  // Safeguard if data is not an array
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={`${mobile ? "" : "w-[44.375vw]"} ${customCss || ""}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`border-b border-[#1C1C1C66] border-opacity-20 ${
            index === data.length - 1 ? "border-b-0" : ""
          } ${
            activeIndex === index
              ? "bg-[#1C1C1C] text-white pl-[5.33vw] md:pl-0 pr-[2.0893vw] md:pr-0 md:px-[2.083vw]"
              : "bg-white text-[#1C1C1C] pr-[2.0893vw]"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between text-left md:py-[31px] py-20px-mvw focus:outline-none border-t-[0.5px] border-solid border-opacity-60  border-[#1C1C1C66] "
          >
            {/* Conditionally render year or icon */}
            {activeIndex !== index ? (
              <span className="font-montserrat   md:w-full font-semibold text-[5.33vw] md:text-[1.3542vw]  ">
                {item.year}
              </span>
            ) : (
              // If active, display "Semester 1" without the minus icon
              <span className="font-montserrat uppercase w-[72vw] md:w-full font-semibold text-[5.33vw] md:text-[1.3542vw]">
                {item.palagraph ? item.YearHeading : "Semester 1"}
              </span>
            )}
            <span className="flex items-center z-20 justify-center w-[9.6vw] md:w-[2.804vw] h-[9.6vw] md:h-[2.604vw]">
              {activeIndex === index ? (
                <div></div>
              ) : (
                <img src={item.image} alt="Expand" className="w-full h-full" />
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
                <div className="relative font-montserrat font-medium max-w-[100%] text-[5.40vw] pb-[5vw]  opacity-90 md:pb-[2vw]">
                  {/* Render Semester 1 */}
                  {!item.palagraph && (
                    <div>
                      <ul className="space-y-20px-mvw">
                        {item.semesters?.semester1?.map((course, i) => (
                          <li className="font-montserrat font-medium" key={i}>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Render Semester 2 */}
                  {!item.palagraph && (
                    <div className="mt-50px-mvw">
                      <strong className="font-montserrat uppercase  w-[72vw] md:w-full font-semibold text-[5.33vw] md:text-[1.3542vw]">
                        Semester 2
                      </strong>
                      <ul className="space-y-30px-mvw mt-20px-mvw">
                        {item.semesters?.semester2?.map((course, i) => (
                          <li className="font-montserrat font-medium" key={i}>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.palagraph && (
                    <div className="font-montserrat  max-h-[70vw] overflow-y-auto  w-[85vw] pr-[8vw] md:w-full font-medium text-[4.33vw] md:text-[1.3542vw]">
                      {item.palagraph}
                    </div>
                  )}

                  {/* palagraph */}
                  <div className="text-14px-mvw text-[#FFFFFF]  pb-70px-mvw leading-[6.93vw] md:leading-normal font-montserrat font-light pt-40px-mvw">
                    *We ensure that our curriculum constantly evolves to provide
                    our students relevant academic experiences. In view of the
                    same, the curriculum is subject to change based on industry
                    standards and global benchmarks.
                  </div>
                </div>
              </motion.div>
            )}
            <div className="relative w-full ">
              <div className="absolute bottom-[-9vw]  left-[-6vw]  overflow-hidden">
                <h1 className=" !overflow-hidden text-[19.71875vw] text-nowrap text-white font-montserrat font-bold opacity-10  lowercase">
                  {item.year}
                </h1>
              </div>
            </div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Page2QaSection;
