import { Link } from "react-router-dom";
import { useDrawer } from "../../contexts";
import Heading from "../ui/heading";
import usePrice from "../product/use-price";
import cn from "classnames";
import EmptyCart from "./empty-cart";
import Scrollbar from "../ui/scrollbar";
import CloseIcon from "../icons/close-icon";
import CartSideBarItems from "./cart-sidebar-items";
import { useAppSelector } from "../../hooks";

const CartSideBar = () => {
  const { closeDrawer } = useDrawer();
  const { items, total, isEmpty } = useAppSelector((state) => state.cart);
  const { price: cartTotal } = usePrice({
    amount: total,
    currencyCode: "USD",
  });
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="border-gray-base relative flex w-full items-center justify-between border-b px-5 py-5 md:px-7">
        <Heading variant="titleMedium">Shopping Cart</Heading>

        <div className="flex items-center">
          <button
            className="flex flex-shrink items-center"
            aria-label={"Close"}
            onClick={closeDrawer}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {!isEmpty ? (
        <Scrollbar className="cart-scrollbar w-full flex-grow">
          <div className="h-[calc(100vh-350px)] w-full space-y-5 px-5">
            {items?.map((item) => (
              <CartSideBarItems item={item} key={item.id} />
            ))}
          </div>
        </Scrollbar>
      ) : (
        <EmptyCart />
      )}

      {!isEmpty && (
        <div className="border-border-base border-t px-5 pb-5 pt-5 md:px-7 md:pb-6 md:pt-6">
          <div className="flex pb-5 md:pb-7">
            <div className="pr-3">
              <Heading className="md:text-lg">Subtotal:</Heading>
            </div>
            <div className="ml-auto min-w-[80px] shrink-0 text-right text-base font-semibold md:text-lg">
              {cartTotal}
            </div>
          </div>
          <div className="flex flex-col gap-5" onClick={closeDrawer}>
            <Link
              to={"/cart"}
              className={cn(
                "bg-heading sm:text-15px flex w-full items-center justify-center rounded bg-gray-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-opacity-90 focus:outline-none",
                {
                  "cursor-not-allowed !bg-[#EEEEEE] !text-black !text-opacity-25 hover:!bg-[#EEEEEE]":
                    isEmpty,
                },
              )}
            >
              <span className="py-0.5">View or edit your cart</span>
            </Link>

            <Link
              to={"/checkout"}
              className={cn(
                "bg-heading sm:text-15px flex w-full items-center justify-center rounded bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-opacity-90 focus:outline-none",
                {
                  "cursor-not-allowed !bg-[#EEEEEE] !text-black !text-opacity-25 hover:!bg-[#EEEEEE]":
                    isEmpty,
                },
              )}
            >
              <span className="py-0.5">Proceed To Checkout</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSideBar;
