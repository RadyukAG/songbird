import React from 'react';
import './scoreBlock.css';
import store from '../../common/store/store';

export default class ScoreBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {score: store.getState().totalScore};
    store.subscribe(() => {
      const totalScore = store.getState().totalScore;
      if (this.state.score !== totalScore) {
        this.setState({score: totalScore});
      }
    })
  }

  render () {
    return <div className='score'>{`Score: ${this.state.score}`}</div>
  }
}
