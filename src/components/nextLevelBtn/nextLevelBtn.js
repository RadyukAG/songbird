import React from 'react';
import './nextLevelBtn.css';
import store from '../../common/store/store';
import nextLevelBtnHandler from './nextLevelBtnHandler';
import { next_round } from '../variants';

export default class NextLevelBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    };
    store.subscribe(() => {
      if (store.getState().roundState.roundEnd) {
        this.setState(() => {
          return {className: 'active'}
        });
        store.dispatch(next_round());
      } else {
        this.setState(() => {
          return {className: ''}
        });
      }
    })
  }

  render() {
    return (
      <button
        className={`btn next-level-btn ${this.state.className}`}
        onClick={nextLevelBtnHandler}
        >Next level
      </button>

    )
  }
}
