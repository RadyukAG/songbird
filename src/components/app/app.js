import React from 'react';

import Header from '../header';
import namesOfRounds from '../../data/namesOfRounds';

const App = () => {
    return (
        <div>
            <Header names={namesOfRounds} />
        </div>
    )
}

export default App;
