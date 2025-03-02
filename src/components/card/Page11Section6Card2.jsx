import React from 'react'
import Slider from "react-slick";
const Page11Section6Card2 = ({ heading, paragraph, img1, img2, rightImg,padding }) => {
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
    <div className='flex md:flex-row flex-col items-center justify-between md:pt-80px-vw gap-75px-vw' >
      {/* left */}
      <div className='md:w-[49.48vw] w-full'>
       <h1 className='md:text-40px-vw text-24px-mvw font-montserrat font-bold uppercase' >{heading}</h1>
       <p className='md:pt-28px-vw pt-20px-mvw  md:text-22px-vw text-16px-mvw md:leading-[1.77vw] font-medium font-montserrat md:h-[9.3vw] opacity-60'>{paragraph}</p>
       <div className='pt-[5.89vw] hidden md:flex flex-row gap-60px justify-between'>
        <img src={img1} alt="" className='h-[19.32vw] w-[29.74vw] object-cover'/>
        <img src={img2} alt=""  className='h-[19.32vw] w-[17.6vw] object-cover'/>
       </div>
      </div>
      {/* right */}

      <div className="w-[32.03vw] h-full hidden md:flex items-stretch">
        <img src={rightImg} alt="Right Section Image" className="w-full h-[37.76vw] object-cover" />
      </div>

    {/* slider */}
<div className="w-full mt-20px-mvw block md:hidden">
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
  )
}

export default Page11Section6Card2  

