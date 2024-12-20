import { useAppSelector } from "../../hooks";

import usePrice from "../product/use-price";
import Button from "../ui/button";
import { CheckoutCardFooter } from "./checkout-card-footer";
import { CheckoutItem } from "./checkout-card-item";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const CheckoutSideBar: React.FC = () => {
  const navigate = useNavigate();
  const { items, total, isEmpty } = useAppSelector((state) => state.cart);
  const { price: subtotal } = usePrice({
    amount: total,
    currencyCode: "USD",
  });

  const orderHeader = () => {
    !isEmpty && navigate("/complete-order");
  };
  const checkoutFooter = [
    {
      id: 1,
      name: "Subtotal",
      price: subtotal,
    },
    {
      id: 2,
      name: "Shipping",
      price: "$0",
    },
    {
      id: 3,
      name: "Total",
      price: subtotal,
    },
  ];

  return (
    <>
      <div className="border-border-base text-brand-light rounded-md border bg-white px-4 pt-4 xl:px-5 xl:py-6">
        <div className="text-heading flex rounded-md pb-2 text-sm font-semibold">
          <span className="text-15px text-brand-dark font-medium">Product</span>
          <span className="text-15px text-brand-dark ml-auto shrink-0 font-medium">
            Subtotal
          </span>
        </div>
        <div className="mb-5">
          {!isEmpty ? (
            items.map((item) => <CheckoutItem item={item} key={item.id} />)
          ) : (
            <p className="text-brand-danger py-4 text-opacity-70">
              Your cart is empty.
            </p>
          )}
        </div>

        {checkoutFooter.map((item: any) => (
          <CheckoutCardFooter item={item} key={item.id} />
        ))}

        <Button
          variant="formButton"
          className={cn(
            "mb-5 mt-8 w-full rounded px-4 py-3 font-semibold transition-all",
            isEmpty
              ? "cursor-not-allowed opacity-40"
              : "!bg-brand !text-brand-light",
          )}
          onClick={orderHeader}
        >
          Order Now
        </Button>
      </div>
    </>
  );
};
export default CheckoutSideBar;
