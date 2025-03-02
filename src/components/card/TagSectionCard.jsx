// Section Component
import React from 'react'

export const TagSectionCard = ({ heading, tags, bgColor, textColor,cardWidth,cardHeight,border,Cardborder }) => {
  const backgroundClass = bgColor ? `bg-[${bgColor}]` : 'bg-[#F2F2F2]';
    return (
      <div
        className={`md:px-[1.4vw] ${backgroundClass} border border-[${Cardborder}] px-20px-mvw py-24px-mvw md:py-[2.08vw]  !h-[${cardHeight}] w-[full] md:max-w-[27.92vw]   `}
      >
        <h2 className={`md:text-28px-vw text-[5.33vw] text-[${textColor}] font-montserrat font-semibold mb-16px-mvw md:mb-[1.67vw]`}>{heading}</h2>
        <ul className="flex flex-row items-start flex-wrap gap-10px-mvw md:gap-[0.625vw] ">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`md:p-[0.625vw] p-10px-mvw text-16px-mvw md:text-[1.04vw] text-[${textColor}] border border-[${border}] font-montserrat font-semibold `}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
 

export default TagSectionCard

