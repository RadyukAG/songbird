import React from 'react';
import './endgameMessage.css';
import store from '../../common/store/store';
import { perfectResult, result } from '../../common/data/finishGameText';
import { Button, Jumbotron } from 'react-bootstrap';

export default class endgameMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: store.getState().totalScore,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.createMessage();
  }

  clickHandler() {

  }

  createMessage() {
    if (this.state.score === 30) {
      this.setState((state) => {
        return {
          ...state,
          title: perfectResult.congrats,
          text: perfectResult.text,
        }
      });
    } else {
      this.setState((state) => {
        return {
          ...state,
          title: result.congrats,
          text: result.text(state.score),
        }
      })
    }
  }

  render() {
    return (
      <Jumbotron>
        <h2>{this.state.title}</h2>
        <p>{this.state.text}</p>
        <Button onClick={this.clickHandler}>Играть ещё</Button>
      </Jumbotron>
    );
  }
}
