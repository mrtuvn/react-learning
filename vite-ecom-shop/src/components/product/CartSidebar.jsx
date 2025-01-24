import React from "react";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import { useCart } from "../../hooks/useCart";

const CartSidebar = () => {
  const { cart, dispatch } = useCart();

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="card ">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: {cart.items.length}</div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">${cart.cost.toFixed(2)}</span>
      </div>

      <div className="cardBody">
        {cart.items &&
          cart.items.map((item) => <CartItem key={item.id} item={item} />)}
        {cart.items.length === 0 && <CartEmpty />}

        {cart.items.length > 0 && (
          <div>
            Clear All:
            <button
              className="button bg-[#f6c90e] p-2 rounded-full mx-2 cursor-pointer uppercase"
              onClick={() => handleClearCart}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
