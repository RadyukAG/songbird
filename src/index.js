import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../node_modules/bootswatch/dist/darkly/bootstrap.min.css';
import setRoundData from './features/setRoundData';

setRoundData();
ReactDOM.render(
    <App />,
  document.getElementById('root'));
