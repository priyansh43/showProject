import React from "react";
import BreadCrum from "../BreadCrum/BreadCrum";
import BannerHeading from "../PageHeading/BannerHeading";
// import Breadcrumb from './Breadcrumb'; // Import your Breadcrumb component
// import Heading from './Heading'; // Import your Heading component

const Page4Section1 = () => {
  return (
    <div className="relative h-[187.73vw] md:h-[47.125vw] w-[100vw] md:mt-[8vw]">
      {/* Background Image */}
      <div
        className="absolute inset-1 bg-cover bg-center w-full md:block hidden"
        style={{ backgroundImage: "url('/images/page2/bannerImg.svg')" }}
      ></div>
      <div
        className="absolute inset-1 bg-cover bg-center w-full md:hidden block"
        style={{ backgroundImage: "url('/images/home/section1/img2.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute md:block hidden  left-[4.1667vw] top-[1.5625vw]">
        {/* Breadcrumb Component */}

        <BreadCrum title="Home | Academics | Fashion Communication & Styling" />

        {/* Heading Component */}
      </div>
      <div className="absolute md:flex items-center justify-center h-full w-full   hidden  ">
        {/* Breadcrumb Component */}
        <BannerHeading title="B.Des Communication Design Program" />

        {/* Heading Component */}
      </div>
    </div>
  );
};

export default Page4Section1;
