// Section Component
import React from 'react'

export const TagSection7Card = ({ heading, tags, bgColor, textColor,cardWidth,cardHeight,border }) => {
    return (
      <div
        className={`p-22px-vw bg-[${bgColor}] border border-[#EEEEEE]   w-[39.89vw]  `}
      >
        <h2 className={`text-[1.47vw] text-[${textColor}] font-montserrat font-semibold mb-[1.6667vw]`}>{heading}</h2>
        <ul className="flex flex-row items-start flex-wrap gap-[1.05vw] ">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`p-[0.625vw] text-[${textColor}] border border-[${border}] font-montserrat font-semibold `}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
 

export default TagSection7Card

