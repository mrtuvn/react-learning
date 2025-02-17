import { combineReducers } from "@reduxjs/toolkit";

import questionSlice from "@/redux/slices/question/questionSlice";
import leaderboardSlice from "@/redux/slices/leaderboard/leaderboardSlice";

const rootReducer = combineReducers({
  question: questionSlice,
  leaderboard: leaderboardSlice,
});

export default rootReducer;
