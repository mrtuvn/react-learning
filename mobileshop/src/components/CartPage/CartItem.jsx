import React from "react";
import { Link } from "react-router";
import { useCart } from "./CartContext";
import "./style.css";

function CartItem({ item }) {
  const { dispatch } = useCart();

  // Handle removing the item from the cart
  const handleRemove = () => {
    dispatch({ type: "REMOVE_ITEM", id: item.id });
  };

  // Handle updating the quantity of the item
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch({ type: "UPDATE_ITEM", id: item.id, quantity: newQuantity });
  };

  return (
    <div className="cart-item bg-white">
      <Link to={`/product/${item.id}`} title={item.title}>
        <img src={item.thumbnail} alt={item.title} style={{ width: "150px" }} />
      </Link>

      <div className="product-info flex w-full">
        <div className="sku">
          {item.sku} <span className="stock">In Stock</span>
        </div>
        <div className="name">
          <Link to={`/product/${item.id}`} title={item.title}>
            {item.title}
          </Link>
        </div>
        <div className="price">${item.price}</div>
        <div className="bottom">
          <div className="qty">
            <input
              type="number"
              value={item.quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <button className="btn-remove" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
