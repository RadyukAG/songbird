import React from 'react';
import Header from '../header';
import namesOfRounds from '../../common/data/namesOfRounds';
import { NextLevelBtn } from '../nextLevelBtn';
import './app.css';
import store from '../../common/store/store';
import Main from '../main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameFinished: store.getState().isGameFinished,
    }
    store.subscribe(() => {
      if (store.getState().isGameFinished) {
        this.setState(() => {
          return {
            isGameFinished: true,
          }
        })
      }
    })
  }

  render() {
    return (
      <div className="container">
        <Header names={namesOfRounds} />
        <Main isGameFinished={this.state.isGameFinished} />
        <NextLevelBtn />
      </div>
  )
  }
}
