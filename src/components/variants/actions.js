import { createAction } from '@reduxjs/toolkit';

const right_answer = () => createAction('RIGHT_ANSWER');
const wrong_answer = () => createAction('WRONG_ANSWER');

export default { right_answer, wrong_answer };
