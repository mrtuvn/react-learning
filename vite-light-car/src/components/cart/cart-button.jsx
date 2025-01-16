import { useDrawer } from "../../contexts";
import CartIcon from "../../components/icons/cart-icon";
import cn from "classnames";
import { useAppSelector } from "../../hooks";

const CartButton = ({ className, iconClassName = "", hideLabel }) => {
  const { totalItems } = useAppSelector((state) => state.cart);
  const { openDrawer, setDrawerView } = useDrawer();
  const handleCartOpen = () => {
    setDrawerView("CART_SIDEBAR");
    return openDrawer();
  };
  return (
    <div
      onClick={handleCartOpen}
      className={cn(
        "h-auto shrink-0 transform cursor-pointer items-center justify-center focus:outline-none lg:flex",
        className,
      )}
      aria-label="cart-button"
    >
      <div className="relative flex items-center">
        <div className="cart-button relative flex items-center">
          <CartIcon />
          {totalItems > 0 && (
            <span className="cart-counter-badge bg-primary absolute -top-1 left-3 flex h-[18px] min-w-[18px] items-center justify-center rounded-full text-[11px] text-white">
              {totalItems}
            </span>
          )}
        </div>
        <span className="ms-2 text-sm font-normal">My Cart</span>
      </div>
    </div>
  );
};
export default CartButton;
