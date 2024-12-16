import React from "react";

const ProductItem = ({ item }) => {
  const handleAddToCart = () => {
    console.log("add to cart");
  };

  return (
    <>
      <div className="shopItem">
        <div
          className="shopItem_image"
          style={{ backgroundColor: "rgb(212, 215, 214)" }}
        >
          <img alt="" src={item.image} />
        </div>
        <div className="shopItem_name">{item.name}</div>
        <div className="shopItem_description">{item.description}</div>
        <div className="shopItem_bottom">
          <div className="shopItem_price">${item.price}</div>
          <div className="shopItem_button">
            <p onClick={handleAddToCart}>ADD TO CART</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
