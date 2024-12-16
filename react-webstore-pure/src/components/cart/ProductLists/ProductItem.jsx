import React from "react";
import { useCart } from "../contexts/CartContextProvider";

const ProductItem = ({ product }) => {
  const { dispatch, actions } = useCart();

  const addToCart = () => {
    dispatch({ type: actions.ADD_ITEM, payload: { ...product, quantity: 1 } });
  };

  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: "rgb(212, 215, 214)" }}
      >
        <img alt="product image" src={product.image} />
      </div>
      <div className="shopItem_name">{product.name}</div>
      <div className="shopItem_description">{product.description}</div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">${product.price}</div>
        <div className="shopItem_button">
          <p onClick={addToCart}>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
