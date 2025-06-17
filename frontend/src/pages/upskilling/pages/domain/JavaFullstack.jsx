import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "📜 Certifications",
    items: [
      "Java Full Stack Developer - Simplilearn",
      "Full Stack Java Developer - Coursera (Meta)",
      "Oracle Certified Professional: Java SE",
    ],
  },
  {
    title: "📚 Learning Contents",
    items: [
      { name: "Java Official Docs", link: "https://docs.oracle.com/en/java/" },
      { name: "Spring Boot Docs", link: "https://spring.io/projects/spring-boot" },
      { name: "Thymeleaf Docs", link: "https://www.thymeleaf.org/documentation.html" },
      { name: "Hibernate ORM Docs", link: "https://hibernate.org/orm/documentation/" },
    ],
  },
  {
    title: "📺 YouTube Tutorials",
    items: [
      { name: "Java Full Stack Course - Telusko", link: "https://www.youtube.com/watch?v=R13BD8qKeTg" },
      { name: "Java Spring Boot + React", link: "https://www.youtube.com/watch?v=Gx4iBLKLVHk" },
      { name: "Java Backend with Spring Boot", link: "https://www.youtube.com/watch?v=vtPkZShrvXQ" },
    ],
  },
  {
    title: "🧠 Other Important Concepts",
    items: [
      "Spring Boot & MVC",
      "REST API with Java",
      "JPA & Hibernate",
      "Authentication with JWT",
      "Maven/Gradle Build Tools",
      "Frontend Integration (React/Thymeleaf)",
    ],
  },
];

const JavaFullStack = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500 mb-10">
        ☕ Java Full Stack Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-yellow-100 hover:scale-[1.02] transform"
          >
            <h2 className="text-xl font-bold text-yellow-700 mb-4 border-b pb-2">{section.title}</h2>
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
                      className="text-yellow-600 hover:text-yellow-800 hover:underline transition-colors"
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

export default JavaFullStack;
