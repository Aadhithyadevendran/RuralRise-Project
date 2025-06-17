import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "Certified Blockchain Expert - Blockchain Council",
      "Blockchain Basics - Coursera",
      "Blockchain Specialization - University at Buffalo (Coursera)",
      "IBM Blockchain Foundation Developer",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "Ethereum Whitepaper", link: "https://ethereum.org/en/whitepaper/" },
      { name: "Solidity Documentation", link: "https://docs.soliditylang.org/en/latest/" },
      { name: "Bitcoin Whitepaper", link: "https://bitcoin.org/bitcoin.pdf" },
      { name: "IBM Blockchain Guide", link: "https://www.ibm.com/topics/what-is-blockchain" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "What is Blockchain?", link: "https://www.youtube.com/watch?v=SSo_EIwHSd4" },
      { name: "Build Blockchain in JavaScript", link: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
      { name: "Blockchain Expert Explains One Concept in 5 Levels", link: "https://www.youtube.com/watch?v=M576WGiDBdQ" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "Smart Contracts",
      "Decentralization",
      "Consensus Mechanisms (PoW, PoS, DPoS)",
      "Hash Functions",
      "Blockchain Forks",
      "Gas Fees",
      "Layer 1 vs Layer 2 Solutions",
    ],
  },
];

const Blockchain = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 mb-10">
        🚀 Blockchain Learning Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-blue-100 hover:scale-[1.02] transform"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2">{section.title}</h2>
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
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
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

export default Blockchain;
