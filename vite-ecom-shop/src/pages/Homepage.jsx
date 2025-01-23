import React from "react";
import ProductCart from "../components/product/ProductCart";

const Homepage = () => {
  React.useEffect(() => {
    console.log("home page");
  }, []);

  return (
    <div>
      <ProductCart />
    </div>
  );
};

export default Homepage;
