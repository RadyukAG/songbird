import { right_answer, wrong_answer, set_answer, set_round_number, set_active_bird, set_round_data } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const defaultState = {
  score: 5,
  roundEnd: false,
}

const chooseVariantsReducer = createReducer(defaultState, {
  [wrong_answer]: (state) => {
    return {
      ...state,
      score: state.score - 1,
      }
    },
  [right_answer]: (state) => {
    return {
      ...state,
      roundEnd: true,
      }
    },
  });

const setAnswerReducer = createReducer('', {
  [set_answer]: (state, action) => action.payload,
});

const updateRoundNumberReducer = createReducer(0, {
  [set_round_number]: (state) => state < 5 ? state + 1 : 0,
});

const setActiveBirdReducer = createReducer('', {
  [set_active_bird]: (state, action) => action.payload,
});

const setRoundDataReducer = createReducer('', {
  [set_round_data]: (state, action) => action.payload,
})

export { chooseVariantsReducer, setAnswerReducer, updateRoundNumberReducer, setActiveBirdReducer, setRoundDataReducer };
