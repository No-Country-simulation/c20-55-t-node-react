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
      <div className='flex justify-self-start text-start font-normal text-[40px]  text-black'>
        <h1 className='justify-self-start'>
          {activeSection ? activeSection.title : "Section Name"}
        </h1>
      </div>
      <ul
        className='tabs flex justify-center list-none relative mt-5 ml-[10px] gap-[1px]'
        role='tablist'
      >
        {sections.map((section, index) => (
          <li
            className='labels-li float-left block flex-nowrap'
            key={section.id}
          >
            {/* <input
              type='radio'
              name='tabs'
              id={`tab${section.id}`}
              checked={activeSectionId === section.id}
              onChange={() => handleTabChange(section.id)}
              /> */}
            <label
              key={section.id}
              className={`block p-[14px_21px] rounded-t-[2px] text-[20px] ${
                activeSectionId === section.id ? "bg-[#71c7d3]" : "bg-[#54b9e0]"
              } cursor-pointer relative top-[4px] transition-all duration-200 ease-in-out text-white hover:bg-[#54b9e0] hover:text-white`}
              htmlFor={`tab${section.id}`}
              role='tab'
              aria-selected={activeSectionId === section.id}
              aria-controls={`panel${section.id}`}
              tabIndex={index}
            >
              {section.name}
            </label>
            <div
              key={section.id}
              id={`tab-content${section.id}`}
              className={`tab-content z-10 ${
                activeSectionId === section.id ? "block" : "hidden"
              } overflow-hidden w-[150rem] max-w-full text-[17px] leading-[25px] p-[25px] absolute top-[53px] left-0 bg-white`}
              role='tabpanel'
              aria-labelledby={`description${section.id}`}
              aria-hidden={activeSectionId !== section.id}
            >
              <p>{section.content}</p>
            </div>
          </li>

          // <p>nada</p>
        ))}
      </ul>
    </div>
  );
}
