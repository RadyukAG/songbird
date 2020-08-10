import React from 'react';
import Header from '../header';
import namesOfRounds from '../../common/data/namesOfRounds';
import Player from '../player/player';
import SecondRowBlock from '../secondRowBlock';

const App = () => {
    return (
        <div>
            <Header names={namesOfRounds} />
            <Player />
            <SecondRowBlock />
        </div>
    )
}

export default App;
