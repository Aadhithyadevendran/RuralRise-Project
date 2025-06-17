import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const mcqQuestions = [
  {
    id: 101,
    type: 'Daily',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    answer: 'O(log n)',
    points: 10,
  },
  {
    id: 102,
    type: 'Weekly',
    question: 'Which data structure uses FIFO?',
    options: ['Stack', 'Queue', 'Tree', 'Graph'],
    answer: 'Queue',
    points: 15,
  },
];

const ChallengeMCQPage = () => {
  const { type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const challenge = location.state?.challenge;

  const question = mcqQuestions.find(q => q.type === type);

  const [hasAnswered, setHasAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (option) => {
    if (hasAnswered) return;
    setHasAnswered(true);

    if (option === question.answer) {
      setFeedback('✅ Correct! Points awarded.');
    } else {
      setFeedback('❌ Incorrect! No points awarded.');
    }

    setTimeout(() => {
      navigate('/daily'); // Go back or show summary
    }, 2000);
  };

  if (!question || !challenge) {
    return <p className="p-6 text-red-600">Challenge or question not found.</p>;
  }

  return (
    <div className="p-6 min-h-screen bg-white">
      <h2 className="text-xl font-bold mb-4">Challenge: {challenge.question}</h2>
      <h3 className="mb-2 font-medium">{question.question}</h3>
      <div className="space-y-2">
        {question.options.map((opt, index) => (
          <button
            key={index}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              hasAnswered
                ? opt === question.answer
                  ? 'bg-green-100'
                  : 'bg-red-100'
                : 'bg-blue-100 hover:bg-blue-200'
            }`}
            disabled={hasAnswered}
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-gray-700 font-medium">{feedback}</p>}
    </div>
  );
};

export default ChallengeMCQPage;
