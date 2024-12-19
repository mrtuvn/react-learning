import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import BackToTopButton from "../components/Common/BackToTop";

const DefaultLayout = ({ children }) => {
  return (
    <div className="m-0 flex min-h-svh flex-col bg-mainBackground p-0 text-[15px] text-[#000]">
      <Header />

      <div className="page-wrapper">
        <main className="main-wrapper min-h-[500px]">{children}</main>
      </div>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
