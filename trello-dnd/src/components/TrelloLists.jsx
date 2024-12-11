import React from "react";
import TrelloCard from "./TrelloCard/TrelloCard";

const TrelloLists = ({ key, lists }) => {
  console.log(lists);
  return (
    <div className={key}>
      <h2>{key}</h2>
      {lists?.map((item, index) => (
        <TrelloCard key={index} item={item} />
      ))}
    </div>
  );
};

export default TrelloLists;
