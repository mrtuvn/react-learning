import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-amber-300">
      <div className="container mx-auto">
        <div className=" flex justify-between py-3 px-2">
          <NavLink className="home link" to="/">
            LOGO
          </NavLink>
          <p className="text-md hover:underline ">LOGIN/REGISTER</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
