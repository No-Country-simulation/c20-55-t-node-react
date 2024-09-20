"use client";
import React, { useState } from "react";

export default function DynamicTab({ sections, defaultActiveSectionId = 1 }) {
  const [activeSectionId, setActiveSectionId] = useState(
    defaultActiveSectionId
  );

  const handleTabChange = (id) => {
    setActiveSectionId(id);
  };

  const activeSection = sections.find(
    (section) => section.id === activeSectionId
  );

  return (
    <div className='flex flex-col w-full h-auto'>
      <ul
        className='tabs flex justify-center list-none relative mt-5 ml-[10px] gap-[1rem] pb-6'
        role='tablist'
      >
        {sections.map((section, index) => (
          <li
            className='labels-li float-left block flex-nowrap'
            key={section.id}
          >
            <label
              key={section.id}
              className={`flex justify-center items-center w-40 h-14 rounded-lg cursor-pointer shadow-lg ${
                activeSectionId === section.id ? "bg-[#81DFE3]" : ""
              }`}
              htmlFor={`tab${section.id}`}
              role='tab'
              aria-selected={activeSectionId === section.id}
              aria-controls={`panel${section.id}`}
              tabIndex={index}
              onClick={() => handleTabChange(section.id)}
            >
              {section.name}
            </label>
            <div
              key={section.id}
              id={`tab-content${section.id}`}
              className={`tab-content z-10 ${
                activeSectionId === section.id ? "block" : "hidden"
              } overflow-hidden w-[150rem] max-w-full text-[17px] leading-[25px] p-[25px] absolute top-[5rem] left-0 bg-white`}
              role='tabpanel'
              aria-labelledby={`description${section.id}`}
              aria-hidden={activeSectionId !== section.id}
            >
              <p>{section.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
