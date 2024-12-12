import React from "react";

const Baselayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex">{children}</div>;
};

export default Baselayout;
