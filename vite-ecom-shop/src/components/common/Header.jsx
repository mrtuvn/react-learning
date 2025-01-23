import React from "react";

const Header = () => {
  return (
    <header className="bg-amber-300">
      <div className="container mx-auto">
        <div className=" flex justify-between py-3 px-2">
          LOGO
          <p className="text-md hover:underline ">LOGIN/REGISTER</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
