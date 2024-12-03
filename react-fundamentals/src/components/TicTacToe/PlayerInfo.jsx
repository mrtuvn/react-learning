import React from "react";
import Player from "./Player";

const PlayerInfo = () => {
  return (
    <div>
      <ol className="list-none">
        <Player initialName="player 1" symbol="X" />
        <Player initialName="player 2" symbol="0" />
      </ol>
    </div>
  );
};

export default PlayerInfo;
