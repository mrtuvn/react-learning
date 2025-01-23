import React from "react";

const Term = () => {
  React.useEffect(() => {
    console.log("term page");
  }, []);

  return <div>Term</div>;
};

export default Term;
