import React from "react";
import { Outlet, Link } from "react-router-dom";

const Interview2Layout = () => {
  return (
    <div>
      <main>
        <nav>
          <Link to="/interview1">Interview1</Link>
          <Link to="/interview2">Interview2</Link>
        </nav>
        <Outlet />
      </main>
    </div>
  );
};

export default Interview2Layout;
