import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chooseVariantsReducer, setAnswerReducer,  setActiveBirdReducer, setRoundDataReducer, updateRoundNumberReducer } from '../../components/variants/reducers';
import totalScoreReducer from '../../components/scoreBlock/reducer';

const reducers = combineReducers({
  answer: setAnswerReducer,
  totalScore: totalScoreReducer,
  roundState: chooseVariantsReducer,
  roundNumber: updateRoundNumberReducer,
  activeBird: setActiveBirdReducer,
  roundData: setRoundDataReducer,
});

const store = configureStore({
  reducer: reducers
})

console.log(store.getState());
export default store;
