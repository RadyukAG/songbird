import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chooseVariantsReducer, setAnswerReducer,  setActiveBirdReducer, setRoundDataReducer, updateRoundNumberReducer } from '../../components/variants/reducers';
import totalScoreReducer from '../../components/scoreBlock/reducer';
import { isGameFinishedReducer } from '../../components/nextLevelBtn';

const reducers = combineReducers({
  answer: setAnswerReducer,
  totalScore: totalScoreReducer,
  roundState: chooseVariantsReducer,
  roundNumber: updateRoundNumberReducer,
  activeBird: setActiveBirdReducer,
  roundData: setRoundDataReducer,
  isGameFinished: isGameFinishedReducer,
});

const store = configureStore({
  reducer: reducers
})
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
