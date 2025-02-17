import { IAction } from "../../../types";
import { IStateQuestion } from "../../../types/question";

const initializeState: IStateQuestion = {
  category: "",
  type: "",
  difficulty: "",
  amount: 0,
  score: 0,
};
const questionReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {
    case "SET_PARAMS_QUESTION": {
      return {
        ...state,
        category: action.payload.category,
        type: action.payload.type,
        difficulty: action.payload.difficulty,
        amount: action.payload.amount,
      };
    }

    case "UPDATE_SCORE": {
      return {
        ...state,
        score: state.score + 1,
      };
    }

    case "RESET_SCORE": {
      return {
        ...state,
        score: 0,
      };
    }
    default:
      return {
        state,
      };
  }
};

export default questionReducer;
