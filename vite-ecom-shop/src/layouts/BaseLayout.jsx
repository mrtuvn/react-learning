import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mainbody p-4 min-h-min">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
