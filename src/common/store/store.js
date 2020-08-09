import { configureStore } from '@reduxjs/toolkit';
import { chooseVariantsReducer, setAnswerReducer, updateRoundNumberReducer, setActiveBirdReducer } from './components/variants';
import { totalScoreReducer } from './components/scoreBlock';
import { set_answer } from './components/variants';

const store = configureStore({
  reducer: {
    answer: setAnswerReducer,
    totalScore: totalScoreReducer,
    currentScore: chooseVariantsReducer,
    roundNumber: updateRoundNumberReducer,
    activeBird: setActiveBirdReducer,
  }
})

store.dispatch(updateRoundNumberReducer());
console.log(store.getState());

export default store;
