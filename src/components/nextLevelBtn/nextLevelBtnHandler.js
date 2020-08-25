import store from '../../common/store/store';
import { roundSelector } from '../../common/store/selectors';
import setRoundData from '../../features/setRoundData';
import { finish_game } from './actions';
import { new_round } from '../variants';

function nextLevelBtnHandler() {
  if (roundSelector() !== 0) {
    store.dispatch(new_round());
    setRoundData();
  } else {
    store.dispatch(finish_game());
  }
}

export default nextLevelBtnHandler;
