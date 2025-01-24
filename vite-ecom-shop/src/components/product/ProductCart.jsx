import React from "react";
import "./product.css";

import CartSidebar from "./CartSidebar";
import ProductCartList from "./ProductCartList";
const ProductCart = () => {
  return (
    <div className="mainContent gap-4 flex flex-col">
      <div className="card">
        <div className="cardTop">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <div className="cardTitle">Our Products</div>

        <ProductCartList />
      </div>

      {/* cart */}
      <CartSidebar />
    </div>
  );
};

export default ProductCart;
