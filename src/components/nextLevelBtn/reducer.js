import { createReducer } from '@reduxjs/toolkit';
import finish_game from './actions';

const isGameFinishedReducer = createReducer(false, {
  finish_game: () => true,
});

export default isGameFinishedReducer;
