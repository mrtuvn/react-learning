import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
//import useCart from "../../hooks/useCart";
//import BackToTopButton from "../../component/ui/back-to-top";

const DefaultLayout = () => {
  //useCart();
  return (
    <>
      <Header />
      <main className="mt-10 min-h-[560px] pb-10">
        <Outlet />
      </main>
      <Footer className="bg-gray-800 text-white text-center p-6 " />
    </>
  );
};

export default DefaultLayout;
