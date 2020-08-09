import Variants from './variants';
import { setAnswerReducer, chooseVariantsReducer, updateRoundNumberReducer, setActiveBirdReducer } from './reducers';
import { right_answer, wrong_answer, set_answer, set_round_number, set_active_bird } from './actions';

export { chooseVariantsReducer, setAnswerReducer, updateRoundNumberReducer, setActiveBirdReducer };
export { right_answer, wrong_answer, set_answer, set_round_number, set_active_bird };

export default Variants;
