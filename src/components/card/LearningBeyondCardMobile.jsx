import React from 'react'

export const LearningBeyondCardMobile = ({img,title,description}) => {
  return (
    <div className=''>
      <div className='w-[91.47vw] h-[90.93vw] '>
        <img src={img} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='text-[5.33vw] font-montserrat font-bold pt-20px-mvw'>{title}</div>
      <div className='text-16px-mvw font-montserrat font-medium opacity-60 pt-10px-mvw leading-[7.47vw] pr-[3vw]'>{description}</div>
    </div>
  )
}

export default LearningBeyondCardMobile
