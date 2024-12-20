// src/TodoItem.tsx
import React from "react";
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import { useModal } from "../../contexts";
import ImageFill from "../ui/image";
import AddToCart from "../product/add-to-cart";
import CompareButton from "../compare/compare-button";
import WishlistButton from "../wishlist/wishlist-button";
import StarIcon from "../icons/star-icon";
import usePrice from "../product/use-price";
import CheckIcon from "../icons/check-icon";
import SearchIcon from "../icons/search-icon";
import { ROUTES } from "../../utils/routes";

interface Props {
  product: Product;
  className?: string;
  date?: string | number | Date | undefined;
}

const ProductFlashSellCard: React.FC<Props> = ({
  product,
  className,
  date,
}) => {
  const {
    id,
    title,
    category,
    price: productPrice,
    discountPercentage,
    thumbnail,
    rating,
    reviews,
  } = product;
  const { openModal } = useModal();

  // Create slug from title
  const slug = product.title.toLowerCase().replace(/\s+/g, "-");
  const productPriceOld = Number(
    Number(product?.price / (1 - discountPercentage / 100)).toFixed(2),
  );

  const { price, basePrice, discount } = usePrice({
    amount: productPrice ? productPrice : productPriceOld,
    baseAmount: productPriceOld,
    currencyCode: "USD",
  });

  const RenderAddToCart: React.FC<Props> = ({ product }) => {
    const { id, stock, availabilityStatus } = product;
    const isInStock = product.stock > 0;
    const outOfStock = !isInStock;

    if (Number(stock) < 1 || outOfStock) {
      return (
        <span className="block items-center justify-center rounded-full bg-red-400 px-4 py-2 text-sm font-medium leading-6 text-white">
          Out Of Stock
        </span>
      );
    }

    if (availabilityStatus === "Low Stock") {
      return (
        <Link
          className="block items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-sm font-medium leading-6 text-white focus:outline-none focus-visible:outline-none"
          aria-label="Count Button"
          to={`${ROUTES.CATEGORIES}/${category}/${slug}-${id}`}
        >
          Product Details
        </Link>
      );
    }

    return <AddToCart product={product} />;
  };

  const RenderLabelStock: React.FC<Props> = ({ product }) => {
    const { stock } = product;
    const isInStock = product.stock > 0;
    const outOfStock = !isInStock;
    if (Number(stock) < 1 || outOfStock) {
      return (
        <p className="text-skin-label_out out_stock flex items-center space-x-1 text-[12px] font-medium">
          <CheckIcon fill={"text-skin-label_in"} opacity="1" />
          <span> Out Of Stock </span>
        </p>
      );
    }
    return (
      <p className="text-skin-label_in in_stock flex items-center space-x-1 text-[12px] font-medium">
        <CheckIcon fill={"text-skin-label_in"} opacity="1" />
        <span> In Stock </span>
        <span className="text-brand-dark">
          <b>{stock}</b> products
        </span>
      </p>
    );
  };

  return (
    <div className="group gap-2 rounded border bg-white p-2">
      <div className="relative overflow-hidden">
        <Link
          key={id}
          to={`${ROUTES.CATEGORIES}/${category}/${slug}-${id}`}
          className="block bg-slate-100 transition-all duration-300 group-hover:-translate-y-6"
        >
          <ImageFill
            src={thumbnail || "Product Image"}
            height={230}
            alt={title || "Product Image"}
          />
        </Link>

        {discount && (
          <div className="absolute right-2 top-2 z-10">
            <span className="mx-0.5 inline-block rounded-sm bg-red-600 px-2.5 pb-[3px] pt-1 text-[10px] font-medium uppercase text-white sm:mx-1">
              {"On Sale"}
            </span>
          </div>
        )}
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transform rounded-full bg-white px-4 py-4 opacity-0 shadow-quickview transition group-hover:scale-100 group-hover:opacity-100"
          aria-label="Quick View Button"
          onClick={() => openModal("PRODUCT_VIEW", product)}
        >
          <SearchIcon />
        </button>
      </div>

      <div className="relative mx-1 py-3 transition-all duration-300 group-hover:-mt-4 group-hover:pb-4">
        <p className="mb-2 hidden capitalize text-gray-500">
          <Link
            key={category}
            to={`${ROUTES.CATEGORIES}/${category}`}
            className="transition-shadow"
          >
            {category}
          </Link>
        </p>
        <p className={`mb-2 w-full cursor-pointer font-medium`}>
          <Link
            key={id}
            to={`${ROUTES.CATEGORIES}/${category}/${slug}-${id}`}
            className="group-hover:text-blue-500"
          >
            {title}
          </Link>
        </p>
        <div className="mb-2 flex space-x-1 text-gray-500">
          <div className="flex items-center">
            {rating !== undefined &&
              [...Array(5)].map((_, idx) => (
                <StarIcon
                  key={idx}
                  color={idx < rating ? "#F3B81F" : "#DFE6ED"}
                  className="mx-0.5 h-3 w-3"
                />
              ))}
          </div>

          {reviews !== undefined && (
            <span className="text-[13px] leading-4">
              ({reviews.length} review)
            </span>
          )}
        </div>

        <div className="mb-2 text-lg text-gray-500">
          <div className="flex gap-x-2">
            <div className="text-black">{price}</div>
            {basePrice && (
              <div className="text-gray-400 line-through">{basePrice}</div>
            )}
          </div>
        </div>

        <div className="mb-5 text-gray-500">
          <RenderLabelStock product={product} />
        </div>

        <div className="opacity-1 absolute -bottom-12 left-0 right-0 w-full transition-all duration-300 group-hover:-bottom-1 group-hover:opacity-100">
          <div className="space-x-1">
            <RenderAddToCart product={product} />
            <CompareButton product={product} />
            <WishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFlashSellCard;
