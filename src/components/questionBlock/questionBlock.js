import React from 'react';
import Player from '../player';
import QuestionTitle from '../question-title';
import BirdImage from '../bird-image';
import { answerSelector, roundEndSelector } from '../../common/store/selectors';
import questionBird from '../../img/question-bird.jpg';
import store from '../../common/store/store';
import './questionBlock.css';

export default class QuestionBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...answerSelector(),
      shownName: '******',
      shownImage: questionBird,
    }
    store.subscribe(() => {
      if (!this.state || this.state.name !== answerSelector().name) {
        this.setState(() => {
          return {
            ...answerSelector(),
            shownName: '******',
            shownImage: questionBird,
          }
        });
      }
      if (roundEndSelector()) {
        this.setState(() => {
          return {
            ...this.state,
            shownImage: this.state.image,
            shownName: this.state.name,
          }
        })
      }
    })
  }

  render() {
    return (
      <div className="question-block">
        <BirdImage birdImageSrc={this.state.shownImage} />
        <ul className="flex-container">
          <li>
            <QuestionTitle birdName={this.state.shownName} />
          </li>
          <li>
            <Player
            audio={this.state.audio}
            autoPlay={true}
            autoPlayAfterSrcChange={true}
             />
          </li>
        </ul>
      </div>
    );
  }
}

