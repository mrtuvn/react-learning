import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { UserRound, Search as SearchIcon, UserRoundPlus } from "lucide-react";
//import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-red-400">
      <div className="container mx-auto">
        <div className="py-2 flex items-center justify-between w-auto">
          <Link className="uppercase hover:underline" href="/">
            TUNA91MOBILE
          </Link>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                className="hover:border-dashed w-full text-black p-1 rounded-full pr-[35px]"
                placeholder="Search"
              />
              <SearchIcon
                width={20}
                height={20}
                className="absolute right-[8px] top-[6px] cursor-pointer"
              />
            </div>
            <ul className="nav inline-flex gap-4">
              <Link
                className="p-1 rounded-full border-gray-600 hover:outline-dashed bg-green-500 flex gap-1"
                href={"/login"}
              >
                <UserRound /> Đăng Nhập
              </Link>
              <Link
                className="p-1 rounded-full border-gray-600 hover:outline-dashed bg-blue-500 flex gap-1"
                href={"/register"}
              >
                {" "}
                <UserRoundPlus />
                Đăng Ký
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-wrap bg-black">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
