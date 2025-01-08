import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ElectronicStore from "./components/ElectricStore";

const Interview1 = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <aside className="relative shrink-0 bg-[#3d68ff] h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6 text-white text-center text-3xl font-semibold uppercase">
          React
        </div>
        <nav className="text-white text-base font-semibold pt-3 pl-6 list-none">
          <ul>
            <li className="flex items-center mt-6">
              <NavLink
                to="electronic-store"
                className="flex items-center active-nav-link text-whitenav-item pr-2"
              >
                Electronic Store
              </NavLink>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                H
              </span>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex h-[64px]">
          <div className="w-1/2"></div>
        </header>
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <ElectronicStore />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Interview1;
