import { createAction } from '@reduxjs/toolkit';

const right_answer = createAction('right_answer');
const wrong_answer = createAction('WRONG_ANSWER');
const new_round = createAction('new_round');
const set_answer = createAction('SET_ANSWER');
const set_round_number = createAction('SET_ROUND_NUMBER');
const set_active_bird = createAction('SET_ACTIVE_BIRD');
const remove_active_bird = createAction('remove_active_bird');
const set_round_data = createAction('SET_ROUND_DATA');

export { right_answer, wrong_answer, set_answer, set_round_number, set_active_bird, set_round_data, new_round, remove_active_bird };
