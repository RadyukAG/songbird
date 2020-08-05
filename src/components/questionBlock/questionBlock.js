import React from 'react';
import Player from '../player';
import QuestionTitle from '../question-title';
import BirdImage from '../bird-image';

export default class QuestionBlock extends React.Component {
  render() {
    return (<div>
      <BirdImage />
      <QuestionTitle birdName={this.state.birdName} />
      <Player />
    </div>);
  }
}

