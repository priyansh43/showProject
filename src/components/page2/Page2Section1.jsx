import React from 'react';
import BreadCrum from '../BreadCrum/BreadCrum';
import BannerHeading from '../PageHeading/BannerHeading';
// import Breadcrumb from './Breadcrumb'; // Import your Breadcrumb component
// import Heading from './Heading'; // Import your Heading component

const Page2Section1 = ({Bredcrum,BHeading}) => {
  return (
    <div className="relative h-[187.73vw] md:h-[47.125vw] w-[100vw] mt-[18vw] md:mt-[7vw]">
      {/* Background Image */}
      <div
        className="absolute inset-1 bg-cover bg-center w-full md:block hidden"
        style={{ backgroundImage: "url('/images/page2/bannerImg.svg')" }}
      ></div>
       <div
        className="absolute inset-0 bg-cover bg-center w-full md:hidden block"
        style={{ backgroundImage: "url('/images/home/section1/img2.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute md:block hidden  left-[4.1667vw] top-[2.5625vw]">
        {/* Breadcrumb Component */}

          <BreadCrum title={Bredcrum} />


        {/* Heading Component */}
    
          </div>
          <div className="absolute md:flex items-center justify-center h-full w-full   hidden  ">
        {/* Breadcrumb Component */}
        <BannerHeading title={BHeading}/>
    

        {/* Heading Component */}
    
          </div>
          
    </div>
  );
};

export default Page2Section1;
