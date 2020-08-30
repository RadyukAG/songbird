import { createReducer } from '@reduxjs/toolkit';
import { finish_game, start_game } from './actions';

const isGameFinishedReducer = createReducer(false, {
  [finish_game]: () => true,
  [start_game]: () => false,
});

export default isGameFinishedReducer;
