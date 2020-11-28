import React from 'react';
import SecondRowBlock from '../secondRowBlock';
import QuestionBlock from '../questionBlock';
import EndgameMessage from '../endgameMessage';
import { NextLevelBtn } from '../nextLevelBtn';

const Main = ({ isGameFinished }) => {
  if (!isGameFinished) {
    return (
      <div>
        <QuestionBlock />
        <SecondRowBlock />
        <NextLevelBtn />
      </div>
    )
  }
  return <EndgameMessage />;
}

export default Main;
