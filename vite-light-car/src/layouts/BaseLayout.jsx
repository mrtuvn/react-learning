import React from "react";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-svh">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
