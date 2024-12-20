import { Link } from "react-router-dom";

type Props = {
  cartTotal: string;
};
const CartSummary: React.FC<Props> = ({ cartTotal }) => {
  return (
    <div className="wi-cart-checkout-wrapper border-grayp-200 top-20 rounded border bg-white p-5 shadow-md lg:sticky">
      <div className="wi-cart-checkout-top border-grayp-200 mb-5 flex items-center justify-between border-b pb-3">
        <span className="text-xl font-bold">Subtotal</span>
        <span className="text-xl font-bold">{cartTotal}</span>
      </div>
      <div className="wi-cart-checkout-shipping border-grayp-200 mb-5 border-b pb-5">
        <h4 className="text-15px mb-3 font-medium">Shipping</h4>
        <div className="space-y-2 text-sm text-gray-500">
          <p>- Flat rate: $20.00</p>
          <p>- Local pickup: $25.00</p>
          <p>- Free shipping</p>
        </div>
      </div>
      <div className="wi-cart-checkout-total flex items-center justify-between text-lg font-medium">
        <span className="text-xl font-bold">Total</span>
        <span className="text-xl font-bold">{cartTotal}</span>
      </div>
      <div className="wi-cart-checkout-proceed mt-8">
        <Link
          to={"/checkout"}
          className={
            "bg-heading sm:text-15px flex w-full items-center justify-center rounded bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-opacity-90 focus:outline-none"
          }
        >
          <span className="py-0.5">Proceed To Checkout</span>
        </Link>
      </div>
    </div>
  );
};
export default CartSummary;
