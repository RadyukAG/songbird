import data from '../../common/data/data';
import namesOfRounds from '../../common/data/namesOfRounds';
import randomizeArray from '../../features/randomizeArray';
import { roundSelector } from './selectors';
import store from '../../common/store/store';
import { set_answer, set_round_data } from './actions';

function setRoundData() {
  const round = roundSelector();
  const roundData = data[namesOfRounds[round]];
  const answer = roundData[Math.floor(Math.random()*roundData.length)];
  store.dispatch(set_round_data(roundData));
  store.dispatch(set_answer(answer));
}

export default setRoundData;
