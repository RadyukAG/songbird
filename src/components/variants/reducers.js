import { right_answer, wrong_answer, set_answer, set_round_number, set_active_bird, set_round_data, new_round, remove_active_bird } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import defaultBird from '../../img/question-bird.jpg';

const defaultRoundState = {
  score: 5,
  roundEnd: false,
}

const defaultActiveBirdData = {
  image: defaultBird,
  description: "Прослушайте запись и угадайте птицу по пению",
}

const chooseVariantsReducer = createReducer(defaultRoundState, {
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
  [new_round]: (state) => {
    return {
      score: 5,
      roundEnd: false,
    }
  }
  });

const setAnswerReducer = createReducer('', {
  [set_answer]: (state, action) => action.payload,
});

const updateRoundNumberReducer = createReducer(0, {
  [set_round_number]: (state) => state < 5 ? state + 1 : 0,
});

const setActiveBirdReducer = createReducer(defaultActiveBirdData, {
  [set_active_bird]: (state, action) => action.payload,
  [remove_active_bird]: () => defaultActiveBirdData,
});

const setRoundDataReducer = createReducer('', {
  [set_round_data]: (state, action) => action.payload,
})

export { chooseVariantsReducer, setAnswerReducer, updateRoundNumberReducer, setActiveBirdReducer, setRoundDataReducer };
