import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "Python for Everybody - Coursera",
      "Google IT Automation with Python",
      "Microsoft Python Certification",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "Official Python Docs", link: "https://docs.python.org/3/" },
      { name: "W3Schools Python", link: "https://www.w3schools.com/python/" },
      { name: "Real Python", link: "https://realpython.com/" },
      { name: "Python Crash Course Book", link: "https://nostarch.com/pythoncrashcourse2e" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "Python Full Course - freeCodeCamp", link: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
      { name: "Python Projects - BroCode", link: "https://www.youtube.com/@BroCodez" },
      { name: "Python Basics - Telusko", link: "https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "OOP in Python",
      "File Handling",
      "Web Scraping",
      "Exception Handling",
      "Lambda & Map/Reduce",
      "Pandas, NumPy, Matplotlib",
    ],
  },
];

const Python = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-400 mb-10">
        🐍 Python Learning Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-pink-100 hover:scale-[1.02] transform"
          >
            <h2 className="text-xl font-bold text-pink-700 mb-4 border-b pb-2">{section.title}</h2>
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
                      className="text-pink-600 hover:text-pink-800 hover:underline transition-colors"
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

export default Python;
