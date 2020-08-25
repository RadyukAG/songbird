import { createAction } from '@reduxjs/toolkit';

const finish_game = createAction('finish_game');
const next_round = createAction('next_round');

export { finish_game, next_round };
