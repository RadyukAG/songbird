import store from '../../common/store/store';
import { right_answer, wrong_answer, set_active_bird } from './actions';
import { answerSelector, roundDataSelector, roundEndSelector } from '../../common/store/selectors';
import { increase_total_score } from '../scoreBlock';
import answerSoundEffect from './answerSoundEffect';

function variantClickHandler (e) {
  if (!e.target.classList.contains('selected') && !roundEndSelector()) {
    const answer = answerSelector();
    if (e.target.dataset.id === answer.latinName) {
      answerSoundEffect(true);
      const score = store.getState().roundState.score;
      e.target.classList.add('selected', 'green');
      store.dispatch(right_answer());
      store.dispatch(increase_total_score(score));
    } else {
      answerSoundEffect(false);
      e.target.classList.add('selected', 'red');
      store.dispatch(wrong_answer());
    }
  }
  const roundData = roundDataSelector();
  const bird = roundData.find((el) => el.latinName === e.target.dataset.id);
  store.dispatch(set_active_bird(bird));
  return;
}

export default variantClickHandler;
