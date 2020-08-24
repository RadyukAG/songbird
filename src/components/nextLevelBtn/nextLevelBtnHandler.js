import store from '../../common/store/store';
import { roundSelector } from '../../common/store/selectors';
import setRoundData from '../../features/setRoundData';
import finish_game from './actions';

function nextLevelBtnHandler() {
  if (roundSelector() !== 0) {
    setRoundData()
  } else {
    store.dispatch(finish_game());
  }
}

export default nextLevelBtnHandler;
