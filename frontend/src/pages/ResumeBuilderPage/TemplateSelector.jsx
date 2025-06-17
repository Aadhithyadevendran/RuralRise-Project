import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTemplate } from './context/TemplateContext';

import template1 from './utils/image1.png';
import template2 from './utils/image.png';
import template3 from './utils/image2.png';
import template4 from './utils/image3.png';

const templates = [
  { id: 'template1', name: 'Modern Gray', img: template1 },
  { id: 'template2', name: 'Classic Blue', img: template2 },
  { id: 'template3', name: 'Clean White', img: template3 },
  { id: 'template4', name: 'Bold Header', img: template4 },
];

const TemplateSelector = () => {
  const navigate = useNavigate();
  const { setSelectedTemplate } = useTemplate();

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
    navigate('/resume-form');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10 relative">
      <div className="max-w-6xl w-full z-10">
        <h1 className="text-5xl font-extrabold text-center text-[#1A2A44] mb-12 drop-shadow-sm">
          Select Your Resume Template
        </h1>

        <div className="grid grid-cols-2 gap-8 justify-center">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-[#1A2A44] rounded-2xl shadow-md border border-gray-700 overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={template.img}
                alt={template.name}
                className="w-full h-74 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-white mb-4">{template.name}</h2>
                <button
                  onClick={() => handleSelect(template.id)}
                  className="bg-[#34D399] hover:bg-[#2BBF88] text-[#1A2A44] px-6 py-2 rounded-full font-medium shadow-md transition"
                >
                  Use This Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Background Dots Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle,#34D399_2px,transparent_2px)] bg-[length:20px_20px] opacity-30 z-0" />
    </div>
  );
};

export default TemplateSelector;