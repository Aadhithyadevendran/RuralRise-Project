import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "SQL for Data Science - Coursera",
      "Databases and SQL for Data Science - IBM",
      "Oracle Database SQL Certified Associate",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "W3Schools SQL Tutorial", link: "https://www.w3schools.com/sql/" },
      { name: "Mode SQL Tutorial", link: "https://mode.com/sql-tutorial/" },
      { name: "SQLZoo", link: "https://sqlzoo.net/" },
      { name: "LeetCode SQL Practice", link: "https://leetcode.com/problemset/database/" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "SQL Full Course - Programming with Mosh", link: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
      { name: "MySQL Crash Course", link: "https://www.youtube.com/watch?v=9ylj9NR0Lcg" },
      { name: "SQL for Data Analysis", link: "https://www.youtube.com/watch?v=RkBfu-W7tt0" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "Joins (INNER, LEFT, RIGHT, FULL)",
      "Subqueries & Nested Queries",
      "Normalization & Indexing",
      "Stored Procedures & Triggers",
      "Window Functions",
      "SQL vs NoSQL",
    ],
  },
];

const SQL = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-400 mb-10">
        🛢️ SQL Learning Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-teal-100 hover:scale-[1.02] transform"
          >
            <h2 className="text-xl font-bold text-teal-700 mb-4 border-b pb-2">{section.title}</h2>
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
                      className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
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

export default SQL;
