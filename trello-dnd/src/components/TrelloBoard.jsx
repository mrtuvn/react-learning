import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContextProvider";
import TrelloLists from "./TrelloLists";

const TrelloBoard = () => {
  const contexts = useContext(AppContext);
  const listBoards = contexts.boards;
  console.log(listBoards);
  return (
    <div>
      {Object.keys(listBoards).forEach((key) => {
        <TrelloLists key={key} lists={listBoards[key]} />;
      })}
    </div>
  );
};

export default TrelloBoard;
