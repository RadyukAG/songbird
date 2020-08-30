import { createAction } from '@reduxjs/toolkit';

const increase_total_score = createAction('INCREASE_TOTAL_SCORE');
const set_total_score_to_default = createAction('set_total_score_to_default');

export { increase_total_score, set_total_score_to_default };
