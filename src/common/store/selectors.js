import store from './store';

const roundSelector = () => store.getState().roundNumber;
const answerSelector = () => store.getState().answer;
const roundDataSelector = () => store.getState().roundData;
const roundEndSelector = () => store.getState().roundState.roundEnd;

export { roundSelector, answerSelector, roundDataSelector, roundEndSelector };
