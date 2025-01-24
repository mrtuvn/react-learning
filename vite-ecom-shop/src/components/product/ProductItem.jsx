import React from "react";
import { useCart } from "../../hooks/useCart";

const ProductItem = ({ product }) => {
  const { cart, dispatch } = useCart();
  console.log(cart);
  const [isAdding, setIsAdding] = React.useState(false); // State tracking add product
  const isAdded = cart?.items?.some((item) => item.id === product.id);
  const _handleAddToCart = (product) => {
    if (isAdding || isAdded) return; // prevent user multiple click

    setIsAdding(true);
    dispatch({ type: "ADD_TO_CART", payload: product });

    // add delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: product.color }}
      >
        <img alt={product.description} src={product.image} />
      </div>
      <div className="shopItem_name">{product.name}</div>
      <div className="shopItem_description">{product.description}</div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">${product.price}</div>
        <div
          className="shopItem_button uppercase"
          style={{
            opacity: isAdding || isAdded ? 0.6 : 1,
            cursor: isAdded || isAdding ? "not-allowed" : "pointer",
          }}
          disabled={isAdding || isAdded}
        >
          <p
            onClick={() => {
              _handleAddToCart(product);
            }}
          >
            {isAdded ? "Added" : isAdding ? "ADDING" : "ADD TO CART"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
