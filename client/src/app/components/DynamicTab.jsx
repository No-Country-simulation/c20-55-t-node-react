"use client";
import React, { useState } from 'react';
import "./DynamicTab.css";
import Requests from '../home/solicitudes/page';

export default function DynamicTab() {
  const [sections, setSections] = useState([
    { id: 1, name: 'Solicitudes', content: <Requests/> },
    { id: 2, name: 'Seguimiento', content: <Requests /> },
  ]);

  const addSection = () => {
    if (sections.length < 7) {
      const newSection = { id: sections.length + 1, name: 'New Section', content: <Requests /> };
      setSections([...sections, newSection]);
    }
  };

  const handleChange = (index) => (event) => {
    const updatedSections = [...sections];
    updatedSections[index].name = event.target.value;
    setSections(updatedSections);
  };

  return (
    <div className='flex flex-col w-full h-auto bg-green-800'>
      <div className="project-name">
        <h1>Project name </h1>
        <p className="project-subtitle">Subtitle</p>
      </div>
      <ul className="tabs" role="tablist">
        {sections.map((section, index) => (
          <li className="labels-li" key={section.id}>
            <input type="radio" name="tabs" id={`tab${section.id}`} defaultChecked={index === 0} />
            <label htmlFor={`tab${section.id}`} role="tab" aria-selected={index === 0} aria-controls={`panel${section.id}`} tabIndex={index}>
              <input
                className='input-section'
                type="text"
                value={section.name}
                onChange={handleChange(index)}
                placeholder="Enter section name"
              />
            </label>
            <div id={`tab-content${section.id}`} className="tab-content" role="tabpanel" aria-labelledby={`description${section.id}`} aria-hidden={index !== 0}>
              <p>{section.content}</p>
            </div>
          </li>
        ))}
        <button onClick={addSection}>Add Section</button>
      </ul>
    </div>
  );
};
