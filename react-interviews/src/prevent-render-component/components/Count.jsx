import React, { memo } from "react";

const Count = memo(({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
});

export default Count;
