import React from "react";

const ProductItem = ({ product }) => {
  const handleFetchDetailsDebounce = () => {
    // fetch details but will debounce the last request
  };

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap text-[#0060FD] cursor-pointer"
        onClick={handleFetchDetailsDebounce}
      >
        {product.title}
      </th>
      <td className="px-6 py-4">{product.brand}</td>
      <td className="px-6 py-4">{product.stock}</td>
      <td className="px-6 py-4">{product.price}</td>
    </tr>
  );
};

export default ProductItem;
