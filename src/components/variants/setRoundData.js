import data from '../../common/data/data';
import randomizeArray from '../../features/randomizeArray';
import roundSelector from './selectors';
import { setAnswerReducer, setRoundDataReducer } from './reducers';

function setRoundData() {
  const round = roundSelector();
  const roundData = randomizeArray(data[round]);
  const answer = randomizeArray(roundData)[0];
  setAnswerReducer(answer);
  setRoundDataReducer(roundData);
}

export default setRoundData;
