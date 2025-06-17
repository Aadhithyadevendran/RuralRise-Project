import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import mcqQuestions from '../data/mcqQuestions'; // ✅ import the pool

const ChallengesPage = () => {
  const navigate = useNavigate();
  const [score] = useState(0);

  const [dailyChallenges] = useState([
    { id: 1, question: "Solve 1 coding problem" },
    { id: 2, question: "Read 1 tech article" },
  ]);

  const [weeklyChallenges] = useState([
    { id: 3, question: "Build a mini project" },
    { id: 4, question: "Complete a course module" },
  ]);

  const getRandomMCQ = (type) => {
    const filtered = mcqQuestions.filter((q) => q.type === type);
    return filtered[Math.floor(Math.random() * filtered.length)];
  };

  const handleStartChallengeMCQ = (challenge, type) => {
    const selectedQuestion = getRandomMCQ(type);
    if (!selectedQuestion) {
      alert("No MCQ found for this type.");
      return;
    }

    // Attach MCQ to the challenge state
    const challengeWithQuestion = {
      ...challenge,
      mcq: selectedQuestion,
    };

    navigate(`/challenge-mcq/${type}/${challenge.id}`, {
      state: { challenge: challengeWithQuestion },
    });
  };

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h2 className="mb-6 text-2xl font-bold text-center">Not Completed Yet</h2>

      <h2 className="mb-6 text-2xl font-bold text-center">
        Total Points: {score}
      </h2>

      {/* Daily Challenges */}
      <div className="mb-8 bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Daily Challenges</h3>
        <ul className="space-y-2">
          {dailyChallenges.map((ch) => (
            <li
              key={ch.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
            >
              {ch.question}
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                onClick={() => handleStartChallengeMCQ(ch, "Daily")}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Weekly Challenges */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Weekly Challenges</h3>
        <ul className="space-y-2">
          {weeklyChallenges.map((ch) => (
            <li
              key={ch.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
            >
              {ch.question}
              <button
                className="bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600"
                onClick={() => handleStartChallengeMCQ(ch, "Weekly")}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChallengesPage;
