import { Link } from "react-router";
import usePrice from "../product/use-price";
import { IoIosCloseCircle } from "react-icons/io";
import { REMOVE_ITEM } from "../../slices/cart/cartSlice";
import { useAppDispatch } from "../../hooks";

const CartSideBarItems = ({ item }) => {
  const dispatch = useAppDispatch();
  const { id, title, category, quantity, thumbnail } = item ?? {};

  const { price: totalPrice } = usePrice({
    amount: item?.price,
    currencyCode: "USD",
  });

  // Create slug from title
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const handleClearItemFromCart = (e) => {
    e.preventDefault();
    dispatch(REMOVE_ITEM(id));
  };
  return (
    <div
      className={`group relative flex h-auto w-full justify-start last:border-b-0`}
      title={title}
    >
      <div className="border-border-base relative flex h-[90px] w-[90px] shrink-0 cursor-pointer overflow-hidden rounded border">
        <img src={thumbnail} alt={title} height={90} className="object-cover" />

        <div
          className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 transition duration-200 ease-in-out md:bg-opacity-0 md:group-hover:bg-opacity-30 ltr:left-0 rtl:right-0"
          onClick={handleClearItemFromCart}
          role="button"
        >
          <IoIosCloseCircle className="relative transform text-2xl text-white transition duration-300 ease-in-out md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex w-full items-start justify-between overflow-hidden">
        <div className="pl-3 md:pl-4">
          <Link
            to={`/product/${slug}-${id}`}
            className="lg:text-15px block font-medium leading-5 transition-all group-hover:text-blue-500"
          >
            {title}
          </Link>
          <div className="mt-3 block text-sm capitalize text-gray-400">
            {category} X {quantity}
          </div>
        </div>

        <div className="text-brand-dark flex min-w-[65px] shrink-0 justify-end text-sm font-semibold leading-5 md:text-base">
          {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default CartSideBarItems;
