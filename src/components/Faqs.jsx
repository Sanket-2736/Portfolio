import React, { useState } from 'react';
import { questions } from '../constants/assets';

function Faqs() {
  // Define state for active question
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Function to toggle the active question
  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="mt-10 w-full max-w-4xl">
      <h2 className="text-3xl font-semibold text-blue-400 mb-5">Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-4">
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full flex justify-between items-center text-left text-lg font-medium text-white focus:outline-none"
          >
            {item.question}
            {activeQuestion === index ? (
              <i className="fas fa-chevron-up text-blue-400 transition-transform duration-300"></i>
            ) : (
              <i className="fas fa-chevron-down text-blue-400 transition-transform duration-300"></i>
            )}
          </button>
          <div
            className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
              activeQuestion === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-300">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faqs;
