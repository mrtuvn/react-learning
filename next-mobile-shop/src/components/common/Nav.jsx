import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="nav inline-flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/blogs"}>Blogs</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
