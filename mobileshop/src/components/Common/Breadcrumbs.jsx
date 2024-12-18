import React from "react";
import { Link } from "react-router";

const Breadcrumbs = ({ page = "MyAccount" }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link> {">"}
          </li>
          <li>{page}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
