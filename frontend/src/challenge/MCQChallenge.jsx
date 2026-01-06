import React from "react";
import { useState } from "react";
export function MCQChallenge({ challenge, showExplanation = false }) {
  const [selcetedOption, setSelectedOption] = useState(null);
  const [shouldShowExplanation, setShouldShowExplanation] =
    useState(showExplanation);

  const options =
    typeof challenge.options === "string"
      ? JSON.parse(challenge.options)
      : challenge.options;

  const handleOptionsSelect = (index) => {
    if (selcetedOption !== null) return;
    setSelectedOption(index);
    setShouldShowExplanation(true);
  };

  const getOptionClass = (index) => {
    if (selcetedOption === null) return "option";
    if (index === challenge.correct_answer_id) {
      return "option correct";
    }
    if (selcetedOption === index && index !== challenge.correct_answer_id) {
      return "option incorrect";
    }
    return "option";
  };

  return (
    <div className="challenge-display">
      <p>
        <strong>Diffculty</strong>: {challenge.difficulty}
      </p>
      <p className="challenge-title">{challenge.title}</p>
      <div className="options>">
        {options.map((option, index) => (
          <div
            className={getOptionClass(index)}
            key={index}
            onClick={() => handleOptionsSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
      {shouldShowExplanation && selcetedOption !== null && (
        <div className="explanation">
          <h4>Explanation</h4>
          <p>{challenge.explanation}</p>
        </div>
      )}
    </div>
  );
}
