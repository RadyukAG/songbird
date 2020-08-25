import data from '../common/data/data';
import namesOfRounds from '../common/data/namesOfRounds';
import { roundSelector } from '../common/store/selectors';
import store from '../common/store/store';
import { set_answer, set_round_data, set_round_number } from '../components/variants/actions';

function setRoundData() {
  const round = roundSelector();
  const roundData = data[namesOfRounds[round]];
  const answer = roundData[Math.floor(Math.random()*roundData.length)];
  store.dispatch(set_round_number());
  store.dispatch(set_round_data(roundData));
  store.dispatch(set_answer(answer));
}

export default setRoundData;
