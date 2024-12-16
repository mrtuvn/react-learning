import React from "react";
import "./cart-demo.css";
import CartContextProvider from "./contexts/CartContextProvider";
import CartSidebar from "./CartSidebar/CartSidebar";
import ProductLists from "./ProductLists/ProductLists";
import { data } from "./data";

const Demo = () => {
  return (
    <CartContextProvider>
      <div className="mainContent">
        <div className="card">
          <div className="cardTop">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
            />
          </div>

          <div className="cardTitle">Our Products</div>

          <div className="cardBody">
            <ProductLists products={data} />
          </div>
        </div>

        {/* cart */}
        <CartSidebar />
      </div>
    </CartContextProvider>
  );
};

export default Demo;
