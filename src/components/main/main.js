import React from 'react';
import SecondRowBlock from '../secondRowBlock';
import QuestionBlock from '../questionBlock';
import EndgameMessage from '../endgameMessage';

const Main = ({ isGameFinished }) => {
  if (!isGameFinished) {
    return (
      <div>
        <QuestionBlock />
        <SecondRowBlock />
      </div>
    )
  }
  return <EndgameMessage />;
}

export default Main;
