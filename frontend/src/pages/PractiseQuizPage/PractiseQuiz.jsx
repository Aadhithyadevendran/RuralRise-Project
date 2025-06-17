import React, { useState } from 'react';
import axios from 'axios';

const MockInterviewPage = () => {
  const [params, setParams] = useState({
    domain: '',
    language: '',
    interview_type: '',
    difficulty: '',
    num: '',
  });

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [evaluations, setEvaluations] = useState([]);
  const [step, setStep] = useState(0);

  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const generateQuestions = async () => {
    const res = await axios.post('http://localhost:5002/generate-questions', params);
    setQuestions(res.data.questions);
    setStep(2);
  };

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const submitAnswers = async () => {
    const evals = [];
    for (let i = 0; i < questions.length; i++) {
      const res = await axios.post('http://localhost:5002/evaluate-answer', {
        question: questions[i],
        answer: answers[i],
        language: params.language,
      });
      evals.push(res.data.evaluation);
    }
    setEvaluations(evals);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A2A44] to-[#2C3E50] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">🧠 AI Mock Interview</h2>

        {/* Step 0: Instructions */}
        {step === 0 && (
          <div className="space-y-4 text-gray-800">
            <h3 className="text-xl font-semibold text-center mb-2">📋 Instructions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fill out the domain, language, interview type, and difficulty to get tailored questions.</li>
              <li>Answer each question thoughtfully in the text box provided.</li>
              <li>Your responses will be evaluated instantly using AI.</li>
              <li>Ensure you're in a quiet place to simulate a real interview environment.</li>
            </ul>
            <div className="text-center mt-6">
              <button
                onClick={() => setStep(1)}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Start Interview Setup
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Input Form */}
        {step === 1 && (
          <div className="grid gap-4">
            {['domain', 'language', 'interview_type', 'difficulty'].map((field) => (
              <input
                key={field}
                name={field}
                placeholder={field.replace('_', ' ').toUpperCase()}
                onChange={handleChange}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
            <button
              onClick={generateQuestions}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-semibold transition"
            >
              Generate Questions
            </button>
          </div>
        )}

        {/* Step 2: Answering */}
        {step === 2 && (
          <div className="space-y-6">
            {questions.map((q, i) => (
              <div key={i}>
                <p className="font-semibold text-gray-800">{`Q${i + 1}: ${q}`}</p>
                <textarea
                  value={answers[i] || ''}
                  onChange={(e) => handleAnswerChange(i, e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
            ))}
            <button
              onClick={submitAnswers}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold transition"
            >
              Submit Answers
            </button>
          </div>
        )}

        {/* Step 3: Evaluation */}
        {step === 3 && (
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-green-700 text-center">✅ Evaluation Results</h3>
            {evaluations.map((evalText, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-md shadow-sm border border-gray-200">
                <p className="font-semibold text-blue-800 mb-1">{`Q${i + 1}:`}</p>
                <p className="text-gray-700 whitespace-pre-line">{evalText}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MockInterviewPage;
