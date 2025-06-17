import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "AWS Certified Solutions Architect – Associate",
      "Microsoft Certified: Azure Fundamentals",
      "Google Associate Cloud Engineer",
      "IBM Cloud Essentials",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "AWS Cloud Practitioner Guide", link: "https://aws.amazon.com/training/path-cloudpractitioner/" },
      { name: "Azure Fundamentals", link: "https://learn.microsoft.com/en-us/training/azure/" },
      { name: "Google Cloud Training", link: "https://cloud.google.com/training" },
      { name: "IBM Cloud Docs", link: "https://cloud.ibm.com/docs" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "AWS for Beginners", link: "https://www.youtube.com/watch?v=ulprqHHWlng" },
      { name: "Google Cloud in 5 Minutes", link: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
      { name: "Azure Overview", link: "https://www.youtube.com/watch?v=2FreeZzBfK4" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "Virtual Machines & Containers",
      "Cloud Storage & Databases",
      "DevOps & CI/CD Pipelines",
      "Serverless Computing",
      "Load Balancing & Auto Scaling",
      "Cloud Security & Compliance",
    ],
  },
];

const Cloud = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-400 mb-10">
        ☁️ Cloud Computing Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-indigo-100 hover:scale-[1.02] transform"
          >
            <h2 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2">{section.title}</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-800">
              {section.items.map((item, i) =>
                typeof item === "string" ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cloud;
