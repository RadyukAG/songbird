import React from 'react';
import Header from '../header';
import namesOfRounds from '../../common/data/namesOfRounds';
import Player from '../player/player';
import Variants from '../variants';

const App = () => {
    return (
        <div>
            <Header names={namesOfRounds} />
            <Player />
            <Variants />
        </div>
    )
}

export default App;
