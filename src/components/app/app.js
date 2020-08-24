import React from 'react';
import Header from '../header';
import namesOfRounds from '../../common/data/namesOfRounds';
import SecondRowBlock from '../secondRowBlock';
import QuestionBlock from '../questionBlock';
import { NextLevelBtn } from '../nextLevelBtn';
import './app.css';

const App = () => {
    return (
        <div>
            <Header names={namesOfRounds} />
            <QuestionBlock />
            <SecondRowBlock />
            <NextLevelBtn />
        </div>
    )
}

export default App;
