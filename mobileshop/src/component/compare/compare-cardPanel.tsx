import React from "react";
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import Image from "../ui/image";
import CloseIcon from "../icons/close-icon";

interface Props {
  product: Product;
  removeCompare: (id: number) => void;
}

const CompareCardPanel: React.FC<Props> = ({ product, removeCompare }) => {
  const { id, title, price, discountPercentage, thumbnail } = product;

  // Create slug from title
  const slug = product.title.toLowerCase().replace(/\s+/g, "-");
  const priceOld = Number(price / (1 - discountPercentage / 100)).toFixed(2);
  return (
    <div className="group relative flex items-center gap-4 rounded-lg bg-white p-4">
      <div
        onClick={() => removeCompare(id)}
        className="absolute right-0 top-0 z-10 cursor-pointer rounded p-3"
      >
        <CloseIcon className="h-4 w-4" />
      </div>
      <div className="c-product-item__img">
        <Image
          src={thumbnail || "Product Image"}
          width={64}
          height={64}
          alt={title || "Product Image"}
        />
      </div>
      <div className="c-product-item w-full pr-5">
        <p className={`mb-1 w-full`}>
          <Link key={id} to={`/product/${slug}-${id}`} className="">
            {title}
          </Link>
        </p>

        <div className="w-1/4 text-base text-gray-500">
          <div className="flex gap-x-2">
            <div className="text-black dark:text-white">{price}$</div>
            <div className="text-gray-400 line-through">{priceOld}$</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareCardPanel;
