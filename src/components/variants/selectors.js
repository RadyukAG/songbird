import store from '../../common/store/store';

const roundSelector = () => store.getState().roundNumber;
const answerSelector = () => store.getState().answer;

export { roundSelector, answerSelector };
