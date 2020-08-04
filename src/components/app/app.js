import React from 'react';
import Header from '../header';
import namesOfRounds from '../../data/namesOfRounds';
import Player from '../player/player';

const App = () => {
    return (
        <div>
            <Header names={namesOfRounds} />
            <Player />
        </div>
    )
}

export default App;
