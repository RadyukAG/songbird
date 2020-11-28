import React from 'react';
import './questionTitle.css';

const QuestionTitle = ({ birdName }) => {
  return <h2 className="question-title">{birdName}</h2>
}

export default QuestionTitle;
