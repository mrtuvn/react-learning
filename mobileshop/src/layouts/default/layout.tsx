import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import useCart from "../../hooks/useCart";
import BackToTopButton from "../../component/ui/back-to-top";

const DefaultLayout: React.FC = () => {
  useCart();
  return (
    <>
      <Header />
      <main className="mt-10 min-h-[560px] pb-10">
        <Outlet />
      </main>
      <div className="bg-gray-800 p-6 text-center text-white">
        Footer Content
      </div>
      <BackToTopButton />
    </>
  );
};

export default DefaultLayout;
