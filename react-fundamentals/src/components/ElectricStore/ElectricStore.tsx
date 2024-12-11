import React from "react";
import ProductDetail from "./ProductDetail";
import ProductLists from "./ProductLists";
import ProductSearch from "./ProductSearch";

const ElectricStore = () => {
  return (
    <div>
      <ProductSearch />
      <ProductLists />
      <ProductDetail />
    </div>
  );
};

export default ElectricStore;
