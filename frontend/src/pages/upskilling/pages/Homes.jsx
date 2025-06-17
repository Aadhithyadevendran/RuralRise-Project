import React from "react";
import blockchainImg from "../images/Blockchain1.jpg";
import dsaImg from "../images/image1.png";
import mernImg from "../images/mern.avif";
import sqlImg from "../images/sql.jpg";
import cloudImg from "../images/cloud.webp";
import cyberImg from "../images/Cyber-Security_Banner.jpg";
import javaImg from "../images/image.png";
import mlImg from "../images/ML.png";
import pythonImg from "../images/python-programming-language.webp";

import { useNavigate } from "react-router-dom";

const domains = [
  { name: "Blockchain", image: blockchainImg },
  { name: "DSA", image: dsaImg },
  { name: "MERN", image: mernImg },
  { name: "SQL", image: sqlImg },
  { name: "Cloud", image: cloudImg },
  { name: "Cyber Security", image: cyberImg },
  { name: "Java Fullstack", image: javaImg },
  { name: "ML", image: mlImg },
  { name: "Python", image: pythonImg },
];

const Homes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Choose any of the domains
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="w-72 bg-white rounded-xl shadow-2xl drop-shadow-xl hover:drop-shadow-2xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transform hover:scale-105 transition-all duration-300 cursor-pointer"            onClick={() =>
              navigate(
                `/domain/${domain.name.toLowerCase().replace(/\s+/g, "-")}`
              )
            }
          >
            <img
              src={domain.image}
              alt={domain.name}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-gray-700">{domain.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homes;
