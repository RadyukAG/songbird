import React from 'react';
import './nextLevelBtn.css';
import store from '../../common/store/store';
import nextLevelBtnHandler from './nextLevelBtnHandler';
import { roundEndSelector } from '../../common/store/selectors';

export default class NextLevelBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    };
    store.subscribe(() => {
      if (roundEndSelector()) {
        this.setState(() => {
          return {className: 'active'}
        });
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
