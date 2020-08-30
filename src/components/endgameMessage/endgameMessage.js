import React from 'react';
import './endgameMessage.css';
import store from '../../common/store/store';
import { perfectResult, result } from '../../common/data/finishGameText';
import { Button, Jumbotron } from 'react-bootstrap';

export default class endgameMessage extends React.Component {
  constructor(props) {
    super(props);
    const score = store.getState().totalScore;
    if (score) {
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
