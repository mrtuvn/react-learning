import React, { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../CartPage/CartContext"; // Import the useCart hook
import "./ProductList.css";

function ProductList({ modes, products }) {
  const { dispatch } = useCart();
  const [isCartPopup, setCartPopup] = useState(false);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    const item = {
      ...product,
      quantity: 1, // Default quantity is 1 when adding to the cart
    };
    dispatch({ type: "ADD_TO_CART", item }); // Dispatch the ADD_TO_CART action

    setCartPopup(true);
  };

  return (
    <React.Fragment>
      <div className={`product-list ${modes}`}>
        {modes === "grid" ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div className="sku">{product.sku}</div>
                <div className="name">
                  <Link to={`/product/${product.id}`} title={product.title}>
                    {product.title}
                  </Link>
                </div>
                <div className="product-rating flex">
                  <div className="rating-summary">
                    <div
                      className="rating-result"
                      aria-hidden="true"
                      style={{ width: `${(product.rating / 5) * 100}%` }}
                    ></div>
                  </div>
                  {product.rating} ({product.reviews.length})
                </div>

                <Link to={`/product/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                </Link>

                <div className="price">
                  {product.discountPercentage && (
                    <span>Save {product.discountPercentage}%</span>
                  )}
                  <div
                    className={`${product.availabilityStatus == "Out of Stock" ? "gray" : ""}`}
                  >
                    ${product.price}
                  </div>

                  {product.availabilityStatus == "Out of Stock" && (
                    <div className="outofstock">Out of stock</div>
                  )}
                </div>

                <div className="cta-wrap">
                  <Link
                    className="btn btn-default"
                    to={`/product/${product.id}`}
                  >
                    Learn More
                  </Link>

                  {product.availabilityStatus == "Out of Stock" ? (
                    <Link
                      className="btn btn-default"
                      to={`/product/${product.id}`}
                    >
                      Get stock alert
                    </Link>
                  ) : (
                    <button
                      className="btn btn-red"
                      onClick={() => handleAddToCart(product)}
                    >
                      Buy now
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                </Link>

                <div className="info">
                  <div className="sku">{product.sku}</div>
                  <div className="name">
                    <Link to={`/product/${product.id}`} title={product.title}>
                      {product.title}
                    </Link>
                  </div>
                  <div className="price">
                    ${product.price}
                    {product.discountPercentage && (
                      <span>Save {product.discountPercentage}%</span>
                    )}
                  </div>
                </div>

                <div className="cta-wrap">
                  <Link
                    className="btn btn-default"
                    to={`/product/${product.id}`}
                  >
                    Learn More
                  </Link>

                  {product.availabilityStatus == "Out of Stock" ? (
                    <Link
                      className="btn btn-default"
                      to={`/product/${product.id}`}
                    >
                      Get stock alert
                    </Link>
                  ) : (
                    <button
                      className="btn btn-red"
                      onClick={() => handleAddToCart(product)}
                    >
                      Buy now
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Popup for "Item added to cart" */}
      {isCartPopup && (
        <div className="popAddToCart flex">
          <div className="popAddToCart-container">
            <button className="btn-close" onClick={() => setCartPopup(false)}>
              Close
            </button>
            <div className="content">Successfully added to your basket</div>
            <div className="button">
              <button
                className="btn btn-default"
                onClick={() => setCartPopup(false)}
              >
                Continue Shopping
              </button>
              <Link className="btn btn-red" to="/cart">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductList;
