import React from 'react';
import Player from '../player';
import QuestionTitle from '../question-title';
import BirdImage from '../bird-image';
import { answerSelector } from '../../common/store/selectors';
import questionBird from '../../img/question-bird.jpg';
import store from '../../common/store/store';
import './questionBlock.css';

export default class QuestionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = answerSelector();
    console.log(this.state);
    this.image = questionBird;
    this.birdName = '******';
    store.subscribe(() => {
      console.log(store.getState().currentScore);
      if (store.getState().currentScore.roundEnd) {
        this.image = this.state.image;
        this.birdName = this.state.birdName;
      }
    })
  }

  render() {
    return (
      <div className="question-block">
        <BirdImage birdImageSrc={this.image} />
        <ul className="flex-container">
          <li>
            <QuestionTitle birdName={this.birdName} />
          </li>
          <li>
            <Player audio={this.state.audio} />
          </li>
        </ul>
      </div>
    );
  }
}

