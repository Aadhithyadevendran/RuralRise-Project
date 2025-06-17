import React, { useState } from 'react';
import { useTemplate } from './context/TemplateContext';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import { generatePDF } from './utils/generatePDF';

const ResumeForm = () => {
  const { selectedTemplate } = useTemplate();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    linkedin: '',
    objective: '',
    education: [{ institution: '', duration: '', details: '' }],
    experience: [{ role: '', company: '', duration: '', details: [''] }],
    projects: [{ title: '', description: '', link: '' }],
    skills: {
      technical: '',
      soft: '',
      extracurricular: '',
    },
    additionalExperience: [{ title: '', duration: '', details: [''] }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePDFDownload = () => {
    generatePDF('resume-preview');
  };

  const TemplateComponent = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <Template1 data={formData} />;
      case 'template2':
        return <Template2 data={formData} />;
        case 'template3':
        return <Template3 data={formData} />;
      case 'template4':
        return <Template4 data={formData} />;
      default:
        return <p className="text-center text-gray-500">No template selected.</p>;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-700">Build Your Resume</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {['name', 'location', 'email', 'phone', 'linkedin'].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-300"
              onChange={handleChange}
            />
          ))}
        </div>

        <textarea
          name="objective"
          placeholder="Objective"
          className="w-full border border-gray-300 p-3 rounded-lg shadow-sm mb-8 focus:ring-2 focus:ring-indigo-300"
          rows="4"
          onChange={handleChange}
        />

        {/* Education */}
        <Section title="Education">
          {formData.education.map((edu, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {['institution', 'duration', 'details'].map((field) => (
                <input
                  key={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="border border-gray-300 p-2 rounded-md shadow-sm"
                  value={edu[field]}
                  onChange={(e) => {
                    const newEducation = [...formData.education];
                    newEducation[index][field] = e.target.value;
                    setFormData({ ...formData, education: newEducation });
                  }}
                />
              ))}
            </div>
          ))}
          <AddButton onClick={() =>
            setFormData({
              ...formData,
              education: [...formData.education, { institution: '', duration: '', details: '' }],
            })
          } label="Add Education" />
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {formData.experience.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <input placeholder="Role" className="input" value={exp.role} onChange={(e) => {
                const updated = [...formData.experience];
                updated[i].role = e.target.value;
                setFormData({ ...formData, experience: updated });
              }} />
              <input placeholder="Company" className="input" value={exp.company} onChange={(e) => {
                const updated = [...formData.experience];
                updated[i].company = e.target.value;
                setFormData({ ...formData, experience: updated });
              }} />
              <input placeholder="Duration" className="input" value={exp.duration} onChange={(e) => {
                const updated = [...formData.experience];
                updated[i].duration = e.target.value;
                setFormData({ ...formData, experience: updated });
              }} />
              <textarea placeholder="Details (comma separated)" className="input" value={exp.details.join(', ')} onChange={(e) => {
                const updated = [...formData.experience];
                updated[i].details = e.target.value.split(',');
                setFormData({ ...formData, experience: updated });
              }} />
            </div>
          ))}
          <AddButton onClick={() =>
            setFormData({
              ...formData,
              experience: [...formData.experience, { role: '', company: '', duration: '', details: [''] }],
            })
          } label="Add Experience" />
        </Section>

        {/* Skills */}
        <Section title="Skills">
          {['technical', 'soft', 'extracurricular'].map((skillType) => (
            <input
              key={skillType}
              placeholder={`${skillType.charAt(0).toUpperCase() + skillType.slice(1)} (comma separated)`}
              className="input mb-3"
              value={formData.skills[skillType]}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  skills: {
                    ...formData.skills,
                    [skillType]: e.target.value,
                  },
                });
              }}
            />
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {formData.projects.map((proj, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input placeholder="Title" className="input" value={proj.title} onChange={(e) => {
                const updated = [...formData.projects];
                updated[i].title = e.target.value;
                setFormData({ ...formData, projects: updated });
              }} />
              <textarea placeholder="Description" className="input" value={proj.description} onChange={(e) => {
                const updated = [...formData.projects];
                updated[i].description = e.target.value;
                setFormData({ ...formData, projects: updated });
              }} />
              <input placeholder="Link" className="input" value={proj.link} onChange={(e) => {
                const updated = [...formData.projects];
                updated[i].link = e.target.value;
                setFormData({ ...formData, projects: updated });
              }} />
            </div>
          ))}
          <AddButton onClick={() =>
            setFormData({
              ...formData,
              projects: [...formData.projects, { title: '', description: '', link: '' }],
            })
          } label="Add Project" />
        </Section>

        {/* Additional Experience */}
        <Section title="Additional Experience">
          {formData.additionalExperience.map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input placeholder="Title" className="input" value={item.title} onChange={(e) => {
                const updated = [...formData.additionalExperience];
                updated[i].title = e.target.value;
                setFormData({ ...formData, additionalExperience: updated });
              }} />
              <input placeholder="Duration" className="input" value={item.duration} onChange={(e) => {
                const updated = [...formData.additionalExperience];
                updated[i].duration = e.target.value;
                setFormData({ ...formData, additionalExperience: updated });
              }} />
              <textarea placeholder="Details (comma separated)" className="input" value={item.details.join(', ')} onChange={(e) => {
                const updated = [...formData.additionalExperience];
                updated[i].details = e.target.value.split(',');
                setFormData({ ...formData, additionalExperience: updated });
              }} />
            </div>
          ))}
          <AddButton onClick={() =>
            setFormData({
              ...formData,
              additionalExperience: [...formData.additionalExperience, { title: '', duration: '', details: [''] }],
            })
          } label="Add Additional Experience" />
        </Section>

        <div className="mt-10 ">
          <h3 className="text-2xl font-semibold mb-4 text-center">Resume Preview</h3>
          <div id="resume-preview" className="border rounded-lg bg-white p-6 shadow">
            <TemplateComponent />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handlePDFDownload}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{title}</h3>
    {children}
  </div>
);

const AddButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm shadow"
  >
    {label}
  </button>
);

export default ResumeForm;