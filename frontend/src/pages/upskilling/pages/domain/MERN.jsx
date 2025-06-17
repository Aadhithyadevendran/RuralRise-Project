import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "MERN Full Stack Developer - Coursera",
      "MongoDB University Developer Certification",
      "Meta Front-End/Back-End Developer Certifications",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "Official MongoDB Docs", link: "https://www.mongodb.com/docs/" },
      { name: "React Documentation", link: "https://react.dev/" },
      { name: "Node.js Docs", link: "https://nodejs.org/en/docs" },
      { name: "Express Docs", link: "https://expressjs.com/" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "MERN Stack Full Course - freeCodeCamp", link: "https://www.youtube.com/watch?v=4Z9KEBexzcM" },
      { name: "MERN Project Tutorial", link: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
      { name: "React + Node Crash Course", link: "https://www.youtube.com/watch?v=8zKuNo4ay8E" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "REST APIs",
      "CRUD Operations",
      "Authentication & JWT",
      "React Hooks & Context API",
      "State Management",
      "Deployment using Render/Netlify/Vercel",
    ],
  },
];

const MernPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-400 mb-10">
        ⚛️ MERN Stack Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-violet-100 hover:scale-[1.02] transform"
          >
            <h2 className="text-xl font-bold text-violet-700 mb-4 border-b pb-2">{section.title}</h2>
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
                      className="text-violet-600 hover:text-violet-800 hover:underline transition-colors"
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

export default MernPage;
