import React, { useState } from 'react';

interface FollowUpQuestionsProps {
  onQuestionClick: (question: string) => void;
}

export const FollowUpQuestions: React.FC<FollowUpQuestionsProps> = ({ onQuestionClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const followUpQuestions = [
    "Wireless headphones",
    "Summer fashion",
    "Gaming laptops",
    "Home decor"
  ];

  return (
    <div className="w-full px-3 mb-3">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Related searches</h3>
      <div className="grid grid-cols-2 gap-1">
        {followUpQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              onQuestionClick(question);
            }}
            className={`px-1.5 py-1 rounded text-xs font-medium transition-all duration-200 text-center ${
              activeTab === index
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};