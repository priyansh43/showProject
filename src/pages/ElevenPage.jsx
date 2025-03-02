import React, { useEffect } from "react";
import Page2Section1 from "../components/page2/Page2Section1";
import Page11Section2 from "../components/page11/Page11Section1";
import Page11Section3 from "../components/page11/Page11Section3";
import Page11Section4 from "../components/page11/Page11Section4";
import Page11Section5 from "../components/page11/Page11Section5";
import Page11Section6 from "../components/page11/Page11Section6";
import Section15 from "../components/home/section15";
import { Section15cardData } from "../data/home";
import Page11Section55 from "../components/page11/Test";

export const ElevenPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Page2Section1
        Bredcrum="Home | Academics | Student Life Banner"
        BHeading="Student Life Banner"
      />
      <Page11Section2 />
      <Page11Section3 />
      <Page11Section4 />
      <div className="block md:hidden ">
        <Page11Section5 />
      </div>

      <div className="hidden md:block">
        <Page11Section55 />
      </div>

      <Page11Section6 />
      <Section15
        Sheading={"Students Speak About Atlas Campus"}
        paragraph={
          "Hear firsthand from our students about how ATLAS ISDI’s vibrant campus, world-class facilities, and diverse experiences shape their journey toward becoming innovators and leaders."
        }
        Section15cardData={Section15cardData}
      />
    </div>
  );
};

export default ElevenPage;
