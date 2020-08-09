import data from '../../common/data/data';
import randomizeArray from '../../features/randomizeArray';
import roundSelector from './selectors';
import store from '../../common/store';
import { setAnswerReducer, setRoundDataReducer } from './reducers';

function setRoundData() {
  const round = roundSelector();
  const roundData = randomizeArray(data[round]);
  const answer = randomizeArray(roundData)[0];
  store.dispatch(setAnswerReducer(answer));
  store.dispatch(setRoundDataReducer(roundData));
}

export default setRoundData;
