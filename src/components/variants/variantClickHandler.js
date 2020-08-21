import store from '../../common/store/store';
import { right_answer, wrong_answer, set_active_bird } from './actions';
import { answerSelector, roundDataSelector } from '../../common/store/selectors';

function variantClickHandler (e) {
  if (!e.target.classList.contains('selected')) {
    const answer = answerSelector();
    if (e.target.dataset.id === answer.latinName) {
      e.target.classList.add('selected', 'green');
      store.dispatch(right_answer);
    } else {
      e.target.classList.add('selected', 'red');
      store.dispatch(wrong_answer);
    }
  }
  const roundData = roundDataSelector();
  const bird = roundData.find((el) => el.latinName === e.target.dataset.id);
  store.dispatch(set_active_bird(bird));
  console.log(bird);
  return;
}

export default variantClickHandler;
