import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "Certified Ethical Hacker (CEH)",
      "CompTIA Security+",
      "Cisco CyberOps Associate",
      "Google Cybersecurity Certificate",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "OWASP Top 10", link: "https://owasp.org/www-project-top-ten/" },
      { name: "NIST Cybersecurity Framework", link: "https://www.nist.gov/cyberframework" },
      { name: "Cybrary Security Courses", link: "https://www.cybrary.it/catalog/" },
      { name: "Kali Linux Docs", link: "https://www.kali.org/docs/" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "What is Cybersecurity?", link: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
      { name: "Ethical Hacking Full Course", link: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
      { name: "Cybersecurity Career Roadmap", link: "https://www.youtube.com/watch?v=1K1_DtJ4Axw" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "Phishing, Malware, Ransomware",
      "Firewalls & Intrusion Detection Systems",
      "Penetration Testing",
      "Network Security & Encryption",
      "Zero Trust Architecture",
      "CIA Triad (Confidentiality, Integrity, Availability)",
    ],
  },
];

const CyberSecurity = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-400 mb-10">
        🛡️ Cybersecurity Resources
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
            <h2 className="text-xl font-bold text-rose-700 mb-4 border-b pb-2">{section.title}</h2>
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
                      className="text-rose-600 hover:text-rose-800 hover:underline transition-colors"
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

export default CyberSecurity;
