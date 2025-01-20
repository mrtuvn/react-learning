import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <nav className="py-4">
        <ul className="nav inline-flex gap-4 text-white">
          <Link className="level0 hover:underline" href={"/categories"}>
            Categories Brands
            <div className="level1 sub-content hidden">
              <ul>
                <li>Apple</li>
                <li>Samsung</li>
              </ul>
            </div>
          </Link>
          <Link className="level0 hover:underline" href={"/blogs"}>
            Blogs
          </Link>
          <Link className="level0 hover:underline" href={"/learning"}>
            Learning ReactJS
          </Link>
          <Link className="level0 hover:underline" href={"/contact"}>
            Liên hệ
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
