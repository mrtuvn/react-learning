// src/TodoItem.tsx
import React from "react";
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import usePrice from "../product/use-price";

interface SearchItemProps {
  product: Product;
}

const SearchItem: React.FC<SearchItemProps> = ({ product }) => {
  const {
    id,
    title,
    price: productPrice,
    discountPercentage,
    thumbnail,
  } = product;
  // Create slug from title
  const slug = product.title.toLowerCase().replace(/\s+/g, "-");
  const productPriceOld = Number(
    Number(product?.price / (1 - discountPercentage / 100)).toFixed(2),
  );
  const { price, basePrice } = usePrice({
    amount: productPrice ? productPrice : productPriceOld,
    baseAmount: productPriceOld,
    currencyCode: "USD",
  });

  return (
    <Link
      key={id}
      to={`/product/${slug}-${id}`}
      className="scroll-snap-align-start block border-b border-black/5 py-2.5 pe-10 ps-5 transition-colors duration-200 hover:bg-gray-100/80"
    >
      <div className="group flex h-auto w-full items-center justify-start">
        <div className="relative me-4 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-md">
          <img
            src={thumbnail}
            width={90}
            className="object-cover"
            alt={title || "Product Image"}
          />
        </div>
        <div className="flex w-full flex-col overflow-hidden">
          <h3 className="text-15px mb-1.5 font-medium group-hover:text-blue-500">
            {title}
          </h3>
          <div className="flex gap-x-2">
            <div className="text-black">{price}</div>
            {basePrice && (
              <div className="text-gray-400 line-through">{basePrice}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
