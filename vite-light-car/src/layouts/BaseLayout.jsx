import React from "react";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="relative min-h-svh">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
