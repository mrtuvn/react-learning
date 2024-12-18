import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-mainBackground m-0 flex min-h-svh flex-col p-0 text-[15px] text-[#000]">
      <Header />

      <div className="page-wrapper">
        <main className="main-wrapper min-h-[500px]">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
