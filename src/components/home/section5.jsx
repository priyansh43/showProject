import React, { useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import SmallButton from "../buttons/SmallButton";
import GridComponent from "../grid/GridComponent";
import GridComponentSecond from "../grid/GridComponentSecond";

export const Section5 = () => {
  // State to track the selected program
  const [selectedProgram, setSelectedProgram] = useState("UNDERGRADUATE");

  // Function to handle button click and update the selected program
  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  // Determine the background color based on the selected program
  const backgroundColor =
    selectedProgram === "UNDERGRADUATE" ? "#E12A7B" : "#FFFFFF";

  return (
    <div className="w-full">
      <div className="flex flex-col pt-40px-mvw md:pt-[7.81vw] md:mx-[7.29vw] md:flex-row items-start md:items-center justify-between gap-[3vh] md:gap-0">
        <div className="px-16px-mvw md:px-0">
          <SectionHeading title="Choose Your Programs" />
        </div>

        <div className="flex flex-row items-center mx-16px-mvw md:mx-0">
          <SmallButton
            title="UNDERGRADUATE"
            isActive={selectedProgram === "UNDERGRADUATE"} // Pass active state
            onClick={() => handleProgramClick("UNDERGRADUATE")}
          />
          <SmallButton
            title="POSTGRADUATE"
            isActive={selectedProgram === "POSTGRADUATE"} // Pass active state
            onClick={() => handleProgramClick("POSTGRADUATE")}
          />
        </div>
      </div>
      <div className="pt-[5.555vh] px-16px-mvw  md:px-0 md:mx-[7.29vw]">
        {selectedProgram === "UNDERGRADUATE" ? (
          <GridComponent />
        ) : (
          <GridComponentSecond />
        )}
      </div>
    </div>
  );
};

export default Section5;
