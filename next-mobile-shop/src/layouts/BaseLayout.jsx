import Breadcrumbs from "@/components/common/Breadcrumbs";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="bg-mainBackground xs:py-2 md:py-8 h-auto min-h-svh ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
