import React from 'react';
import Header from '../header';
import namesOfRounds from '../../common/data/namesOfRounds';
import SecondRowBlock from '../secondRowBlock';
import QuestionBlock from '../questionBlock';
import './app.css';

const App = () => {
    return (
        <div>
            <Header names={namesOfRounds} />
            <QuestionBlock />
            <SecondRowBlock />
        </div>
    )
}

export default App;
