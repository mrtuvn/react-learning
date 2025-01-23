import React from "react";
import { data } from "./data";
import { useCart } from "../../hooks/useCart";

const ProductCartList = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="cardBody">
      {data.map((prod, index) => (
        <div key={index} className="shopItem">
          <div
            className="shopItem_image"
            style={{ backgroundColor: "rgb(212, 215, 214)" }}
          >
            <img alt="" src={prod.image} />
          </div>
          <div className="shopItem_name">{prod.name}</div>
          <div className="shopItem_description">{prod.description}</div>
          <div className="shopItem_bottom">
            <div className="shopItem_price">${prod.price}</div>
            <div className="shopItem_button">
              <p
                onClick={() => {
                  handleAddToCart(prod);
                }}
              >
                ADD TO CART
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCartList;
