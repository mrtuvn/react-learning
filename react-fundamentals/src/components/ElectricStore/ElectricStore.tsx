import React from "react";
import ProductDetail from "./ProductDetail";
import ProductLists from "./ProductLists";
import ProductSearch from "./ProductSearch";

const ElectricStore = () => {
  return (
    <div>
      <ProductSearch />
      <ProductLists />
      <ProductDetail id={2} />
    </div>
  );
};

export default ElectricStore;
