import store from '../../common/store/store';
import { roundSelector, roundEndSelector } from '../../common/store/selectors';
import setRoundData from '../../features/setRoundData';
import { finish_game } from './actions';
import { new_round, remove_active_bird } from '../variants';

function nextLevelBtnHandler() {
  if (!roundEndSelector()) {
    return
  }
  if (roundSelector() !== 0) {
    store.dispatch(new_round());
    store.dispatch(remove_active_bird());
    setRoundData();
  } else {
    store.dispatch(finish_game());
  }
}

export default nextLevelBtnHandler;
