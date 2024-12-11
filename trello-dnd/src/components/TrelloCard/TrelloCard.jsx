import React from "react";

const TrelloCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.label}</p>
      <p>{item.order}</p>
    </div>
  );
};

export default TrelloCard;
