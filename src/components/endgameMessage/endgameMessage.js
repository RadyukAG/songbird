import React from 'react';
import './endgameMessage.css';
import store from '../../common/store/store';
import { perfectResult, result } from '../../common/data/finishGameText';
import { Button, Jumbotron } from 'react-bootstrap';
import { set_total_score_to_default } from '../scoreBlock';
import { start_game } from '../nextLevelBtn/actions';
import setRoundData from '../../features/setRoundData';
import { remove_active_bird, set_round_number, new_round } from '../variants';

export default class endgameMessage extends React.Component {
  constructor(props) {
    super(props);
    const score = store.getState().totalScore;
    if (score === 30) {
      this.state = {
        title: perfectResult.congrats,
        text: perfectResult.text,
      }
    } else {
      this.state = {
        title: result.congrats,
        text: result.text(score),
      }
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    store.dispatch(start_game());
    store.dispatch(set_total_score_to_default());
    store.dispatch(set_round_number());
    store.dispatch(remove_active_bird());
    store.dispatch(new_round());
    setRoundData();
  }

  render() {
    return (
      <Jumbotron className="endgameMessage">
        <h2>{this.state.title}</h2>
        <p>{this.state.text}</p>
        <Button onClick={this.clickHandler}>Играть ещё</Button>
      </Jumbotron>
    );
  }
}
