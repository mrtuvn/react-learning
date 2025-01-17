import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <nav className="py-4">
        <ul className="nav inline-flex gap-4 text-white">
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/learning"}>Learning</Link>
          <Link href={"/contact"}>Liên hệ</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
