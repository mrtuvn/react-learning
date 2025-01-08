import React, { memo } from "react";

const Title = memo(() => {
  console.log("Rendering title");
  return <h2>React optimize performance</h2>;
});

export default Title;
