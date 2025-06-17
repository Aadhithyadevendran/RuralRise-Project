// ResumeBuilderPage/templates/Template2.jsx
import React from 'react';

const Template2 = ({ data }) => {
  return (
    <div id="resume-preview" className="bg-white max-w-3xl mx-auto p-8 font-sans text-gray-800">
      {/* Header */}
      <div className="border-l-8 border-blue-600 pl-4 mb-6">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-sm">
          {data.email} | {data.phone} | {data.location}
        </p>
        <p className="text-sm">{data.linkedin}</p>
      </div>

      {/* Objective */}
      {data.objective && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-1">Objective</h2>
          <p>{data.objective}</p>
        </section>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-1">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{edu.institution}</p>
              <p className="text-sm italic">{edu.duration}</p>
              <p>{edu.details}</p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-1">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{exp.role}, {exp.company}</p>
              <p className="text-sm italic">{exp.duration}</p>
              <ul className="list-disc list-inside ml-4 text-sm">
                {exp.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-1">Projects</h2>
          {data.projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{proj.title}</p>
              <p>{proj.description}</p>
              {proj.link && <a href={proj.link} className="text-blue-500 text-sm underline">{proj.link}</a>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
    {data.skills && (
  <section className="mb-4">
    <h2 className="text-xl font-semibold text-blue-600 mb-1">Skills</h2>
    <p><strong>Technical:</strong> {Array.isArray(data.skills.technical) ? data.skills.technical.join(', ') : data.skills.technical}</p>
    <p><strong>Soft:</strong> {Array.isArray(data.skills.soft) ? data.skills.soft.join(', ') : data.skills.soft}</p>
    <p><strong>Extracurricular:</strong> {Array.isArray(data.skills.extracurricular) ? data.skills.extracurricular.join(', ') : data.skills.extracurricular}</p>
  </section>
)}

      {/* Additional Experience */}
      {data.additionalExperience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 mb-1">Additional Experience</h2>
          {data.additionalExperience.map((item, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm italic">{item.duration}</p>
              <ul className="list-disc list-inside ml-4 text-sm">
                {item.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Template2;
