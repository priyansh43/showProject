import React from "react";
import BreadCrum from "../BreadCrum/BreadCrum";
import BannerHeading from "../PageHeading/BannerHeading";
// import Breadcrumb from './Breadcrumb'; // Import your Breadcrumb component
// import Heading from './Heading'; // Import your Heading component

const Page3Section1 = () => {
  return (
    <div className="relative h-[187.73vw] md:h-[47.125vw] w-[100vw] md:mt-[8vw]">
      {/* Background Image */}
      <div
        className="absolute inset-1 bg-cover bg-center w-full md:block hidden"
        style={{ backgroundImage: "url('/images/page2/bannerImg.svg')" }}
      ></div>
      <div
        className="absolute md:flex items-center justify-center h-full w-full   hidden "
        style={{ backgroundImage: "url('/images/home/section1/img2.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute md:block hidden  left-[4.1667vw] top-[1.5625vw]">
        {/* Breadcrumb Component */}

        <BreadCrum title="Home | Academics | B.Des Interior Design" />

        {/* Heading Component */}
      </div>
      <div className="absolute left-[16.5625vw] top-[21.6667vw] md:block hidden ">
        {/* Breadcrumb Component */}
        <BannerHeading title="B.Des Interior Design Program" />

        {/* Heading Component */}
      </div>
    </div>
  );
};

export default Page3Section1;
