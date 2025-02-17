import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateQuestion } from "@/types/question";

const initialState: IStateQuestion = {
  category: "",
  type: "",
  difficulty: "",
  amount: 0,
  score: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    SET_PARAMS_QUESTION(
      state: IStateQuestion,
      action: PayloadAction<IStateQuestion>
    ) {
      return {
        ...state,
        category: action.payload.category,
        type: action.payload.type,
        difficulty: action.payload.difficulty,
        amount: action.payload.amount,
      };
    },
    RESET_SCORE(state) {
      return {
        ...state,
        score: 0,
      };
    },
    UPDATE_SCORE(state) {
      return {
        ...state,
        score: state.score + 1,
      };
    },
  },
});

export const { SET_PARAMS_QUESTION, RESET_SCORE, UPDATE_SCORE } =
  questionSlice.actions;
export default questionSlice.reducer;
