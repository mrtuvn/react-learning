import React from "react";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

const TwoColumnsLeft = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="2columns-left">
        <aside className="left">Sidebar</aside>
        <div className="right-content">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default TwoColumnsLeft;
