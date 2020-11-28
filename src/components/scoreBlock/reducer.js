import { createReducer } from '@reduxjs/toolkit';
import { increase_total_score, set_total_score_to_default } from './actions';

const totalScoreReducer = createReducer(0, {
  [increase_total_score]: (state, action) => state + action.payload,
  [set_total_score_to_default]: () => 0,
});

export default totalScoreReducer;
