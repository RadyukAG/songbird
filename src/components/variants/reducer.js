import { right_answer, wrong_answer } from './types';
import { createReducer } from '@reduxjs/toolkit';

const defaultState = {
  currentScore: 5,
  roundEnd: false,
}

const chooseVariantsHandler = createReducer(defaultState, {
  [wrong_answer]: (state) => {
    return Object.assign({}, state, {
      currentScore: state.currentScore - 1,
    })},
  [right_answer]: (state) => {
    return Object.assign({}, state, {
      roundEnd: true,
    })},
  });

export default chooseVariantsHandler;
