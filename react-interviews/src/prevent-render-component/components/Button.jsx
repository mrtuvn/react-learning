import React, { memo } from "react";

// Before
// const Button = ({ onClick, children }) => {
//   console.log(`Rendering button - `, children);
//   return (
//     <button type="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// After improvement
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button - `, children);
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
