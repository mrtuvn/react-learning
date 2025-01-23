import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="container text-center mx-auto">
      <p>Page NotFound. Sorry for this inconvenince ! </p>
      <Link to="/">Back Home Page</Link>
    </div>
  );
};

export default NotFound;
