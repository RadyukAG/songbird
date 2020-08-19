import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../node_modules/bootswatch/dist/darkly/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './common/store/store';

ReactDOM.render(
    <App />,
  document.getElementById('root'));

