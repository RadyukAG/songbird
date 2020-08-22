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
    this.image = questionBird;
    this.birdName = '******';
    this.state = answerSelector();
    store.subscribe(() => {
      if (!this.state || this.state.name !== answerSelector().name) {
        this.state = answerSelector();
      }
      if (store.getState().roundState.roundEnd) {
        this.image = this.state.image;
        this.birdName = this.state.name;
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

