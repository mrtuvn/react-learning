import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rootBaseLayout">
      <Header />
      <div
        className="mainContent"
        style={{ textAlign: "center", minHeight: "100svh" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
