import React from 'react';
import Header from '../header';
import namesOfRounds from '../../common/data/namesOfRounds';
import SecondRowBlock from '../secondRowBlock';
import QuestionBlock from '../questionBlock';
import { NextLevelBtn } from '../nextLevelBtn';
import './app.css';
import store from '../../common/store/store';
import endgameMessage from '../endgameMessage';

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

  createContent(value) {
    if (!value) {
      return (
        <div>
          <QuestionBlock />
          <SecondRowBlock />
        </div>
      )
    }
    return endgameMessage;
  }

  render() {
    return (
      <div className="container">
          <Header names={namesOfRounds} />
          {this.createContent(this.state.isGameFinished)}
          <NextLevelBtn />
      </div>
  )
  }
}
