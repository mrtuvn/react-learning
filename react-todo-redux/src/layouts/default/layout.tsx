import Header from "@/components/common/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="mt-10 min-h-[560px] pb-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
