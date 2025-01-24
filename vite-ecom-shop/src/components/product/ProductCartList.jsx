import React from "react";
import { data } from "./data";
import ProductItem from "./ProductItem";

const ProductCartList = () => {
  return (
    <div className="cardBody">
      {data.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductCartList;
