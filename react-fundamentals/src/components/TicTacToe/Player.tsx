import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditInfo = (e) => {
    setIsEditing((edit) => !edit);
  };

  const handleChangeName = (e) => {
    setPlayerName(e.target.value);
  };

  let name = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    name = <input name="name" onChange={handleChangeName} value={playerName} />;
  }

  return (
    <li>
      <span style={{ display: "inline-flex", gap: "8px" }}>
        Name: {name}
        <span className="player-symbol">Symbol: {symbol}</span>
      </span>
      <button onClick={handleEditInfo}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
