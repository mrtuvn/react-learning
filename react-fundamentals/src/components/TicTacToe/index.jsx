import React from "react";
import PlayerInfo from "./PlayerInfo";
import BoardGame from "./BoardGame";

const TicTacToe = () => {
  return (
    <>
      <p>TIC TAC TOE</p>
      <div>
        <PlayerInfo />
        <BoardGame />
      </div>
    </>
  );
};

export default TicTacToe;
