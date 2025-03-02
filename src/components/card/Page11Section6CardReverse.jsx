import React from 'react';
import Slider from "react-slick";
const Page11Section6CardReverse = ({ heading, paragraph, img1, img2, rightImg }) => {
  const CustomArrow = ({ direction, onClick }) => (
    <button
      className={`absolute z-10 md:w-[91px] w-36px-mvw h-36px-mvwmd:h-[91px] flex items-center justify-center bg-white rounded-full shadow-md focus:outline-none ${
        direction === "left" ? "md:left-[73.6vw] left-[3vw]" : "md:right-[5vw] right-[3vw]"
      } md:top-[-8vw] top-[40vw]`}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <img
        src={direction === "left" ? "/icon/prev.svg" : "/icon/next.svg"}
        alt={direction === "left" ? "Previous" : "Next"}
        className="w-full h-full"
      />
    </button>
  );

  const Imgdata  = [img1,img2,rightImg];
  const NewsliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };
  return (
    <div className='flex flex-row mb-40px-mvw md:mb-0 items-start md:justify-between justify-start  pt-40px-mvw md:pt-80px-vw gap-75px-vw' >
    {/* left */}
    <div className=" w-[32.03vw] h-full hidden md:flex items-stretch">
      <img src={rightImg} alt="Right Section Image" className="w-full h-[37.76vw] object-cover" />
    </div>
    <div className='md:w-[49.48vw] w-full flex flex-col items-start justify-start h-full'>
     <h1 className='md:text-40px-vw text-24px-mvw font-montserrat font-bold uppercase' >{heading}</h1>
     <p className='md:pt-28px-vw pt-20px-mvw  md:text-22px-vw text-16px-mvw opacity-60 font-medium font-montserrat h-[9.3vw]'>{paragraph}</p>
     <div className='pt-[6.04vw] hidden md:flex flex-row gap-60px justify-between w-full'>
     <img src={img2} alt=""  className='h-[19.32vw] w-[17.6vw] object-cover'/>
    <img src={img1} alt="" className='h-[19.32vw] w-[29.74vw] object-cover'/>
     
     </div>

{/* slider */}
<div className="w-full mt-[46vw] block md:hidden">
          <Slider {...NewsliderSettings}>
            {Imgdata.map((img, idx) => (
              <div key={idx} className="w-full">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="h-[90.93vw] w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
    </div>
    {/* right */}

    

   
  </div>
  );
};

export default Page11Section6CardReverse;
