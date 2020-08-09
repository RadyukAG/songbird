import setActiveBirdReducer from './reducers';
import answerSelector from './selectors';

function variantClickHandler (e) {

  const answer = answerSelector();
  console.log(e.target.dataset.id);
}

export default variantClickHandler;
