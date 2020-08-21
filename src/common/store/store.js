import { configureStore } from '@reduxjs/toolkit';
import { chooseVariantsReducer, setAnswerReducer,  setActiveBirdReducer, setRoundDataReducer, updateRoundNumberReducer } from '../../components/variants/reducers';
import { set_round_number } from '../../components/variants/actions';
import { totalScoreReducer } from '../../components/scoreBlock';

const store = configureStore({
  reducer: {
    answer: setAnswerReducer,
    totalScore: totalScoreReducer,
    currentScore: chooseVariantsReducer,
    roundNumber: updateRoundNumberReducer,
    activeBird: setActiveBirdReducer,
    roundData: setRoundDataReducer,
  }
})

store.dispatch(set_round_number());
console.log(store.getState());
export default store;
