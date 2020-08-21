import store from './store';

const roundSelector = () => store.getState().roundNumber;
const answerSelector = () => store.getState().answer;
const roundDataSelector = () => store.getState().roundData;

export { roundSelector, answerSelector, roundDataSelector };
