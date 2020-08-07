import { createReducer } from '@reduxjs/toolkit';
import increase_total_score from './actions';

const totalScoreReducer = createReducer(0, {
  [increase_total_score]: (state, action) => state + action.payload,
});

export default totalScoreReducer;
