import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
