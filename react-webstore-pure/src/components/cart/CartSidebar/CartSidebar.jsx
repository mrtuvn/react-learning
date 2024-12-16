import React from "react";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import { useCart } from "../contexts/CartContextProvider";

const CartSidebar = () => {
  const { cart, dispatch, actions, calculateTotal } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: actions.REMOVE_ITEM, payload: id });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: actions.UPDATE_QUANTITY, payload: { id, quantity } });
  };

  return (
    <div className="card">
      {cart.length === 0 && <CartEmpty />}
      {cart.length > 0 && (
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
            {cart.map((item) => (
              <CartItem
                key={item.id}
                ItemProps={{ item, handleRemove, handleQuantityChange }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
