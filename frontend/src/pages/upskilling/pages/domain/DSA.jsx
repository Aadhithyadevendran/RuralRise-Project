import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "Data Structures & Algorithms Specialization - Coursera",
      "DSA Certification - GeeksforGeeks",
      "Problem Solving Certificate - HackerRank",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "GeeksforGeeks DSA", link: "https://www.geeksforgeeks.org/data-structures/" },
      { name: "LeetCode Patterns", link: "https://leetcode.com/explore/learn/card/algorithm/" },
      { name: "MIT OpenCourseWare DSA", link: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "DSA Course by Love Babbar", link: "https://www.youtube.com/watch?v=RBSGKlAvoiM" },
      { name: "DSA in Python - FreeCodeCamp", link: "https://www.youtube.com/watch?v=pkYVOmU3MgA" },
      { name: "Neetcode DSA Playlist", link: "https://www.youtube.com/c/NeetCode" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "Recursion & Backtracking",
      "Dynamic Programming",
      "Graph Algorithms",
      "Sorting & Searching",
      "Greedy Algorithms",
      "Stacks, Queues, Linked Lists",
    ],
  },
];

const DSA = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400 mb-10">
        🔢 DSA Learning Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-green-100 hover:scale-[1.02] transform"
          >
            <h2 className="text-xl font-bold text-green-700 mb-4 border-b pb-2">{section.title}</h2>
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
                      className="text-green-600 hover:text-green-800 hover:underline transition-colors"
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

export default DSA;
