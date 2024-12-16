import React from "react";
import ProductItem from "./ProductItem";

const ProductLists = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductLists;
