import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="flex gap-2">
      <NavLink className="home link" to="/">
        Home
      </NavLink>{" "}
      |
      <NavLink className=" link" to="/contact">
        Contact
      </NavLink>{" "}
      |
      <NavLink className=" link" to="/about">
        About
      </NavLink>
      |
      <NavLink className=" link" to="/term">
        Term
      </NavLink>
    </nav>
  );
};

export default Nav;
