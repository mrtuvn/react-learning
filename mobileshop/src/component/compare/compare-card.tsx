import React from "react";
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
  removeCompare: (id: number) => void;
}

const CompareCard: React.FC<Props> = ({ product, removeCompare }) => {
  const { id, title, price, discountPercentage, thumbnail } = product;

  // Create slug from title
  const slug = product.title.toLowerCase().replace(/\s+/g, "-");
  const priceOld = Number(price / (1 - discountPercentage / 100)).toFixed(2);
  return (
    <div className="group flex items-center gap-2 border-b">
      <img src={thumbnail} alt={title} className="inline-block w-20" />
      <p className={`mb-0.5 w-full cursor-pointer font-medium`}>
        <Link
          key={id}
          to={`/product/${slug}-${id}`}
          className="group-hover:text-blue-500"
        >
          {title}
        </Link>
      </p>

      <div className="mb-5 w-1/4 text-lg text-gray-500">
        <div className="flex gap-x-2">
          <div className="text-black dark:text-white">{price}$</div>
          <div className="text-gray-400 line-through">{priceOld}$</div>
        </div>
      </div>

      <button
        onClick={() => removeCompare(id)}
        className="gap-2 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Remove
      </button>
    </div>
  );
};

export default CompareCard;
