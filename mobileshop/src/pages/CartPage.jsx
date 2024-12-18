import React from "react";
import { Link } from "react-router";
import { useCart } from "../components/CartPage/CartContext";
import CartItem from "../components/CartPage/CartItem";
import "../components/CartPage/style.css";
import Breadcrumbs from "../components/Common/Breadcrumbs";

function CartPage() {
  const { state, dispatch } = useCart(); // Access the state and dispatch function from context

  // Calculate the total price of items in the cart
  const totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Handle clearing the cart
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <React.Fragment>
      <Breadcrumbs page={"My Cart"} />

      <div className="cart-page container">
        <div className="heading">
          My Cart
          {state.items.length > 0 && (
            <>
              (<span>{state.items.length}</span>)
            </>
          )}
        </div>

        <div className="cart-wrap">
          <div className="cart-items">
            {state.items.length === 0 ? (
              <div className="empty bg-white">
                <div>There are no items in your basket</div>
                <Link to="/category" className="btn-red">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div>
                <div className="total">
                  <button className="clear-all" onClick={handleClearCart}>
                    Delete All
                  </button>
                </div>
                {state.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
          <div className="cart-summary bg-white">
            <ul>
              <li className="grand-total">
                Grand Total <span>${totalAmount.toFixed(2)}</span>
              </li>
              <li className="subtotal">
                Subtotal (VAT Included) <span>${totalAmount.toFixed(2)}</span>
              </li>
              <li className="shipping">
                Shipping <span>$0</span>
              </li>
            </ul>
            <button
              className={`btn btn-red ${state.items.length === 0 ? "disabled" : ""}`}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartPage;
