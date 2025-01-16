import React from "react";
import mainLogo from "/assets/react.svg";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex gap-2">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" target="_blank">
          <img src={mainLogo} className="logo" width={50} alt="Vite logo" />
        </a>
        <div className="inline-flex items-center gap-4">
          <p>
            <input
              placeholder="Search"
              className="rounded-full p-2 text-white"
            />
          </p>
          <p>Đăng nhập | Đăng ký</p>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
