import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateLeaderBoard, ILeaderboards } from "../../../types/leaderboard";

const initialState: IStateLeaderBoard = {
  leaderboards: [],
};
const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    UPDATE_LEADER_BOARD(
      state: IStateLeaderBoard,
      action: PayloadAction<ILeaderboards>
    ) {
      return {
        ...state,
        leaderboards: [...state.leaderboards, action.payload],
      };
    },
  },
});

export const { UPDATE_LEADER_BOARD } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
