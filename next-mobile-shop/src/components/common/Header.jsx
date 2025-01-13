import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-400">
      <div className="container mx-auto">
        <div>
          <ul className="nav inline-flex gap-4">
            <Link href={"/login"}>Đăng Nhập</Link>
            <Link href={"/register"}>Đăng Ký</Link>
          </ul>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
