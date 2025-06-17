// ResumeBuilderPage/templates/Template1.jsx
import React from 'react';

const Template1 = ({ data }) => {
  return (
    <div id="resume-preview" className="max-w-3xl mx-auto p-8 bg-white text-gray-900 font-sans leading-relaxed">
      {/* Header */}
      <div className="border-b pb-4 mb-4 text-center">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p>{data.location} | {data.email} | {data.phone}</p>
        <p>{data.linkedin}</p>
      </div>

      {/* Objective */}
      {data.objective && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-1">Objective</h2>
          <p>{data.objective}</p>
        </section>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-1">Education</h2>
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
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-1">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{exp.role}, {exp.company}</p>
              <p className="text-sm italic">{exp.duration}</p>
              <ul className="list-disc list-inside text-sm">
                {exp.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {data.projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-1">Projects</h2>
          {data.projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{proj.title}</p>
              <p>{proj.description}</p>
              {proj.link && <a href={proj.link} className="text-blue-600 underline text-sm">{proj.link}</a>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills && (
  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b mb-1">Skills</h2>
    <p><strong>Technical:</strong> {Array.isArray(data.skills.technical) ? data.skills.technical.join(', ') : data.skills.technical}</p>
    <p><strong>Soft:</strong> {Array.isArray(data.skills.soft) ? data.skills.soft.join(', ') : data.skills.soft}</p>
    <p><strong>Extracurricular:</strong> {Array.isArray(data.skills.extracurricular) ? data.skills.extracurricular.join(', ') : data.skills.extracurricular}</p>
  </section>
)}

      {/* Additional Experience */}
      {data.additionalExperience?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b mb-1">Additional Experience</h2>
          {data.additionalExperience.map((item, i) => (
            <div key={i}>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm italic">{item.duration}</p>
              <ul className="list-disc list-inside text-sm">
                {item.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Template1;
