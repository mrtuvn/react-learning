import React from "react";
import ProductItem from "../ProductItem";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/fetchProducts";

const ProductList = () => {
  //fetch data by API from useQuery
  const { data = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  return (
    <div className="relative overflow-x-auto mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 cursor-pointer">
              <div className="flex justify-between">title</div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-pointer">
              <div className="flex justify-between">brand</div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-pointer">
              <div className="flex justify-between">stock</div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-pointer">
              <div className="flex justify-between">price</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
