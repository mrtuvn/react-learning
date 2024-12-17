import React, { useState } from "react";
import CartEmpty from "./CartEmpty";
import { useCart } from "../contexts/CartContextProvider";
import CartItem from "./CartItem";

const CartSidebar = () => {
  const { cart, calculateTotal } = useCart();

  return (
    <div className="card">
      {cart.items.length === 0 && <CartEmpty />}
      {cart.items.length > 0 && (
        <>
          <div className="cardTop">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
            />
            <div>Total: {cart.length}</div>
          </div>

          <div className="cardTitle">
            <span>Your cart</span>
            <span className="card_amount">${calculateTotal()}</span>
          </div>

          <div className="cardBody">
            {cart?.items?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
