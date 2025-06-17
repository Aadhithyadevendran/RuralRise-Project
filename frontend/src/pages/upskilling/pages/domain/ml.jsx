import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "Machine Learning - Stanford (Andrew Ng)",
      "Professional ML Engineer - Google",
      "Deep Learning Specialization - Coursera",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "Scikit-Learn Docs", link: "https://scikit-learn.org/stable/" },
      { name: "Kaggle Learn ML", link: "https://www.kaggle.com/learn/machine-learning" },
      { name: "Google Machine Learning Crash Course", link: "https://developers.google.com/machine-learning/crash-course" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "ML Full Course - freeCodeCamp", link: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
      { name: "ML with Python - Krish Naik", link: "https://www.youtube.com/watch?v=fwY9Qv96DJY" },
      { name: "ML Roadmap - Codebasics", link: "https://www.youtube.com/watch?v=Cr6VqTRO1v0" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "Supervised vs Unsupervised",
      "Regression & Classification",
      "Model Evaluation Metrics",
      "Overfitting/Underfitting",
      "Data Preprocessing",
      "Model Deployment (Flask, FastAPI, Streamlit)",
    ],
  },
];

const ML = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-10">
        🤖 Machine Learning Resources
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

export default ML;
