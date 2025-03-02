import React, { useEffect, useState } from "react";
import HomePageSlider1 from "../components/slider/HomePageSlider1";
import Section1 from "../components/home/section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/section4";
import Section5 from "../components/home/section5";
import Section6 from "../components/home/section6";
// import Section7 from "../components/home/section7 homepage";
import Section8 from "../components/home/section8";
import Section9 from "../components/home/section9";
import Section11 from "../components/home/section11";
import Section12 from "../components/home/section12";
import Section10 from "../components/home/section10";
import Section13 from "../components/home/section13";
import Section14 from "../components/home/section14";
import Section15 from "../components/home/section15";
import Aos from "aos";
import Section7 from "../components/home/section7";
import StickyButton from "../components/buttons/StickyButton";
import { section12data, Section15cardData } from "../data/home";
import Globallearning from "../components/home/Globallearning";
export const HomePage = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-in",
      duration: 1500,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* section1 */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section3 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section4 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section5 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section6 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section7 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        {/* <Section8 />  */} 
        <Globallearning/>
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="150"
      >
        <Section9 />
      </section>
      <section>
        <Section10 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="150"
      >
        <Section11 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section12 section12data={section12data} />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section13 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section14 />
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="150"
      >
        <Section15 Sheading={"Student Experience At Atlas Isdi"} paragraph={"Discover how ATLAS ISDI's dynamic campus, world-class facilities, and transformative experiences empower our students and alumni to become trailblazers and leaders in their fields."} Section15cardData={Section15cardData}/>
      </section>
    </div>
  );
};

export default HomePage;
